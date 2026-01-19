#!/bin/bash

# Security Monitoring Script
# اسکریپت نظارت امنیتی

LOG_FILE="/var/log/nginx/access.log"
ALERT_EMAIL="your-email@example.com"
TEMP_DIR="/tmp/security-check"

echo "🔍 شروع بررسی امنیتی..."
echo "زمان: $(date)"
echo "========================================"

mkdir -p "$TEMP_DIR"

# 1. Check for suspicious patterns in logs
echo "بررسی الگوهای مشکوک در لاگ‌ها..."

SUSPICIOUS_PATTERNS=(
    "\.env"
    "\.git"
    "wp-admin"
    "phpMyAdmin"
    "\.php"
    "\/etc\/passwd"
    "<script"
    "javascript:"
    "onerror="
    "onclick="
    "eval\("
    "base64_decode"
    "union.*select"
    "'; DROP"
)

SUSPICIOUS_FOUND=0

for pattern in "${SUSPICIOUS_PATTERNS[@]}"; do
    count=$(grep -i "$pattern" "$LOG_FILE" 2>/dev/null | wc -l)
    if [ "$count" -gt 0 ]; then
        echo "⚠️  الگوی مشکوک '$pattern' یافت شد: $count بار"
        SUSPICIOUS_FOUND=1
        
        # ذخیره IP های مشکوک
        grep -i "$pattern" "$LOG_FILE" | awk '{print $1}' | sort | uniq >> "$TEMP_DIR/suspicious_ips.txt"
    fi
done

# 2. Check for excessive requests from single IP
echo ""
echo "بررسی درخواست‌های زیاد از یک IP..."

# پیدا کردن IP هایی با بیش از 1000 درخواست در ساعت گذشته
awk '{print $1}' "$LOG_FILE" | sort | uniq -c | sort -rn | head -20 | while read count ip; do
    if [ "$count" -gt 1000 ]; then
        echo "⚠️  IP مشکوک: $ip با $count درخواست"
        echo "$ip" >> "$TEMP_DIR/high_traffic_ips.txt"
    fi
done

# 3. Check for failed authentication attempts
echo ""
echo "بررسی تلاش‌های ناموفق احراز هویت..."

failed_count=$(grep -i "401\|403" "$LOG_FILE" | wc -l)
if [ "$failed_count" -gt 100 ]; then
    echo "⚠️  تعداد زیاد خطای 401/403: $failed_count"
fi

# 4. Check for unusual HTTP methods
echo ""
echo "بررسی متدهای HTTP غیرمعمول..."

unusual_methods=$(grep -E "TRACE|CONNECT|PATCH|DELETE|PUT" "$LOG_FILE" | wc -l)
if [ "$unusual_methods" -gt 0 ]; then
    echo "⚠️  متدهای HTTP غیرمعمول: $unusual_methods"
fi

# 5. Check for country-based attacks (if GeoIP is configured)
echo ""
echo "بررسی حملات بر اساس کشور..."
# این بخش نیاز به GeoIP module دارد

# 6. Generate IP block list
if [ "$SUSPICIOUS_FOUND" -eq 1 ]; then
    echo ""
    echo "تولید لیست IP های مشکوک برای بلاک..."
    
    if [ -f "$TEMP_DIR/suspicious_ips.txt" ]; then
        sort "$TEMP_DIR/suspicious_ips.txt" | uniq > "$TEMP_DIR/ips_to_block.txt"
        
        echo ""
        echo "IP های پیشنهادی برای بلاک:"
        head -10 "$TEMP_DIR/ips_to_block.txt"
        
        # UFW rules برای بلاک کردن
        echo ""
        echo "دستورات UFW برای بلاک:"
        echo "======================================"
        head -10 "$TEMP_DIR/ips_to_block.txt" | while read ip; do
            echo "sudo ufw deny from $ip"
        done
    fi
fi

# 7. Check disk space
echo ""
echo "بررسی فضای دیسک..."
disk_usage=$(df -h / | tail -1 | awk '{print $5}' | sed 's/%//')
if [ "$disk_usage" -gt 80 ]; then
    echo "⚠️  فضای دیسک تمام شده است: $disk_usage%"
fi

# 8. Check memory usage
echo ""
echo "بررسی استفاده از حافظه..."
memory_usage=$(free | grep Mem | awk '{print ($3/$2) * 100}' | cut -d. -f1)
if [ "$memory_usage" -gt 90 ]; then
    echo "⚠️  استفاده بالای حافظه: $memory_usage%"
fi

# 9. Check for updated packages
echo ""
echo "بررسی آپدیت‌های امنیتی..."
if command -v apt &> /dev/null; then
    updates=$(apt list --upgradable 2>/dev/null | grep security | wc -l)
    if [ "$updates" -gt 0 ]; then
        echo "⚠️  $updates آپدیت امنیتی در دسترس است"
    fi
fi

# 10. Check SSL certificate expiry
echo ""
echo "بررسی اعتبار گواهی SSL..."
if [ -f "/etc/letsencrypt/live/yourdomain.com/cert.pem" ]; then
    expiry_date=$(openssl x509 -enddate -noout -in /etc/letsencrypt/live/yourdomain.com/cert.pem | cut -d= -f2)
    expiry_timestamp=$(date -d "$expiry_date" +%s)
    current_timestamp=$(date +%s)
    days_left=$(( ($expiry_timestamp - $current_timestamp) / 86400 ))
    
    if [ "$days_left" -lt 30 ]; then
        echo "⚠️  گواهی SSL در $days_left روز منقضی می‌شود"
    else
        echo "✅ گواهی SSL معتبر است ($days_left روز باقی مانده)"
    fi
fi

echo ""
echo "========================================"
echo "بررسی امنیتی به پایان رسید"
echo "زمان: $(date)"

# اگر مشکلی پیدا شد، ایمیل بفرست
if [ "$SUSPICIOUS_FOUND" -eq 1 ] || [ "$failed_count" -gt 100 ]; then
    echo "ارسال هشدار ایمیل..."
    # mail -s "Security Alert" "$ALERT_EMAIL" < "$TEMP_DIR/report.txt"
fi

# Clean up
# rm -rf "$TEMP_DIR"
