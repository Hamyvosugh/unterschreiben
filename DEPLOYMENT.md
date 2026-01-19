# راهنمای استقرار امن (Secure Deployment Guide)

## پیش از استقرار (Pre-Deployment)

### 1. بررسی امنیتی

```bash
# بررسی آسیب‌پذیری‌ها
npm audit

# اجرای بررسی امنیتی سفارشی
npm run security

# رفع مشکلات امنیتی
npm audit fix
```

### 2. تنظیمات Environment Variables

در پنل Vercel یا سرور خود:

```
OPENAI_API_KEY=sk-your-actual-key-here
NODE_ENV=production
```

⚠️ **هرگز** API keys را در کد commit نکنید!

## استقرار روی Vercel (توصیه می‌شود)

### مرحله 1: نصب Vercel CLI

```bash
npm i -g vercel
```

### مرحله 2: لاگین

```bash
vercel login
```

### مرحله 3: پیکربندی پروژه

```bash
vercel
```

### مرحله 4: تنظیم Environment Variables

```bash
vercel env add OPENAI_API_KEY production
```

### مرحله 5: Deploy

```bash
vercel --prod
```

## پیکربندی Cloudflare (توصیه قوی)

### چرا Cloudflare؟

- محافظت در برابر DDoS
- WAF (Web Application Firewall)
- Rate limiting اضافی
- Cache و بهینه‌سازی
- SSL/TLS رایگان

### تنظیمات Cloudflare

#### 1. SSL/TLS

- Mode: Full (Strict)
- Always Use HTTPS: On
- Automatic HTTPS Rewrites: On
- Minimum TLS Version: 1.2

#### 2. Firewall Rules

```
اگر country نیست ایران -> بلاک (اختیاری)
اگر threat score > 10 -> Challenge
اگر URI شامل (.env, .git, wp-admin) -> بلاک
```

#### 3. Rate Limiting

```
Path: /api/*
Requests: 10 per minute per IP
Action: Block
```

#### 4. Security Level

```
Security Level: High
Bot Fight Mode: On
Challenge Passage: 30 minutes
```

#### 5. DDoS Protection

```
HTTP DDoS attack protection: On
Advanced DDoS protection: On (اگر در دسترس است)
```

#### 6. Page Rules

```
Rule 1: *.yourdomain.com/api/*
  - Security Level: High
  - Cache Level: Bypass

Rule 2: *.yourdomain.com/*
  - Security Level: High
  - SSL: Full (Strict)
```

## استقرار روی VPS (Alternative)

### 1. نیازمندی‌ها

```bash
# Ubuntu/Debian
sudo apt update
sudo apt install nginx nodejs npm certbot python3-certbot-nginx

# نصب PM2 برای مدیریت process
npm install -g pm2
```

### 2. کلون پروژه

```bash
git clone your-repo
cd unterschreiben
npm install
npm run build
```

### 3. پیکربندی Nginx

```nginx
# /etc/nginx/sites-available/unterschreiben
server {
    listen 443 ssl http2;
    server_name yourdomain.com;

    ssl_certificate /etc/letsencrypt/live/yourdomain.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/yourdomain.com/privkey.pem;

    # SSL Security
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;
    ssl_prefer_server_ciphers on;

    # Security Headers (backup در صورت مشکل middleware)
    add_header Strict-Transport-Security "max-age=63072000; includeSubDomains; preload" always;
    add_header X-Frame-Options "DENY" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "no-referrer" always;

    # Rate Limiting
    limit_req_zone $binary_remote_addr zone=api:10m rate=10r/m;
    limit_req_zone $binary_remote_addr zone=general:10m rate=100r/m;

    location /api/ {
        limit_req zone=api burst=5 nodelay;
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_cache_bypass $http_upgrade;
    }

    location / {
        limit_req zone=general burst=20 nodelay;
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_cache_bypass $http_upgrade;
    }
}

# Redirect HTTP to HTTPS
server {
    listen 80;
    server_name yourdomain.com;
    return 301 https://$server_name$request_uri;
}
```

### 4. فعال‌سازی

```bash
sudo ln -s /etc/nginx/sites-available/unterschreiben /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### 5. SSL با Certbot

```bash
sudo certbot --nginx -d yourdomain.com
```

### 6. اجرا با PM2

```bash
# ایجاد فایل .env
cp .env.example .env
nano .env  # و API key را وارد کنید

# بیلد و اجرا
npm run build
pm2 start npm --name "unterschreiben" -- start
pm2 save
pm2 startup
```

## Firewall Configuration (UFW)

```bash
# فعال‌سازی UFW
sudo ufw enable

# باز کردن پورت‌های ضروری
sudo ufw allow 22/tcp   # SSH
sudo ufw allow 80/tcp   # HTTP
sudo ufw allow 443/tcp  # HTTPS

# بستن سایر پورت‌ها
sudo ufw default deny incoming
sudo ufw default allow outgoing

# نمایش وضعیت
sudo ufw status verbose
```

## نظارت و Monitoring

### 1. نصب Fail2ban

```bash
sudo apt install fail2ban

# پیکربندی
sudo nano /etc/fail2ban/jail.local
```

```ini
[nginx-req-limit]
enabled = true
filter = nginx-req-limit
action = iptables-multiport[name=ReqLimit, port="http,https"]
logpath = /var/log/nginx/error.log
findtime = 600
bantime = 7200
maxretry = 10
```

### 2. مانیتورینگ با PM2

```bash
# نمایش وضعیت
pm2 status

# نمایش لاگ‌ها
pm2 logs unterschreiben

# مانیتورینگ لحظه‌ای
pm2 monit
```

### 3. لاگ‌ها

```bash
# لاگ‌های Nginx
tail -f /var/log/nginx/access.log
tail -f /var/log/nginx/error.log

# لاگ‌های PM2
pm2 logs --lines 100
```

## بررسی امنیت پس از استقرار

### 1. تست هدرهای امنیتی

```bash
curl -I https://yourdomain.com

# یا استفاده از ابزار آنلاین:
# https://securityheaders.com
# https://observatory.mozilla.org
```

### 2. تست SSL

```bash
# https://www.ssllabs.com/ssltest/
```

### 3. Penetration Testing

```bash
# نصب OWASP ZAP یا Burp Suite برای تست امنیتی
```

## Checklist پس از استقرار

- [ ] HTTPS فعال است و certifcate معتبر است
- [ ] تمام هدرهای امنیتی به درستی تنظیم شده‌اند
- [ ] Rate limiting کار می‌کند
- [ ] API keys در environment variables هستند
- [ ] فایل .env در git نیست
- [ ] Monitoring فعال است
- [ ] Backup تنظیم شده است
- [ ] Firewall فعال است
- [ ] DDoS protection فعال است (Cloudflare)
- [ ] لاگ‌ها بررسی می‌شوند

## آپدیت و نگهداری

```bash
# هر هفته:
npm audit
npm update

# هر ماه:
تغییر API keys
بررسی لاگ‌های امنیتی
به‌روزرسانی سیستم عامل

# در صورت حمله:
فعال‌سازی Under Attack Mode در Cloudflare
بررسی لاگ‌ها برای IP های مخرب
بلاک IP ranges مشکوک
افزایش rate limiting
```

## پشتیبانی و بازیابی

### Backup خودکار

```bash
# Cron job برای backup روزانه
0 2 * * * /path/to/backup-script.sh
```

### بازیابی در صورت مشکل

```bash
pm2 restart unterschreiben
# یا
pm2 reload unterschreiben --update-env
```

---

**توجه:** این راهنما برای استقرار امن طراحی شده است. در صورت حمله یا مشکل امنیتی، فوراً با متخصص امنیتی مشورت کنید.
