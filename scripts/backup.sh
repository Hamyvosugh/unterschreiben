#!/bin/bash

# Backup Script
# اسکریپت پشتیبان‌گیری

BACKUP_DIR="/backups/unterschreiben"
PROJECT_DIR="/path/to/unterschreiben"
DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_NAME="backup_$DATE.tar.gz"
RETENTION_DAYS=30

echo "📦 شروع پشتیبان‌گیری..."
echo "زمان: $(date)"

# ایجاد دایرکتوری backup
mkdir -p "$BACKUP_DIR"

# Backup فایل‌ها (بدون node_modules)
echo "درحال فشرده‌سازی فایل‌ها..."
cd "$PROJECT_DIR" || exit
tar -czf "$BACKUP_DIR/$BACKUP_NAME" \
    --exclude='node_modules' \
    --exclude='.next' \
    --exclude='.git' \
    --exclude='*.log' \
    .

if [ $? -eq 0 ]; then
    echo "✅ Backup با موفقیت ایجاد شد: $BACKUP_NAME"
    
    # حجم فایل backup
    size=$(du -h "$BACKUP_DIR/$BACKUP_NAME" | cut -f1)
    echo "حجم: $size"
else
    echo "❌ خطا در ایجاد backup"
    exit 1
fi

# Backup محیط متغیرها (به صورت رمزنگاری شده)
if [ -f "$PROJECT_DIR/.env" ]; then
    echo "Backup فایل .env..."
    # رمزنگاری با OpenSSL
    openssl enc -aes-256-cbc -salt -in "$PROJECT_DIR/.env" \
        -out "$BACKUP_DIR/env_$DATE.enc" -k "your-encryption-password"
    
    if [ $? -eq 0 ]; then
        echo "✅ .env با رمزنگاری backup شد"
    fi
fi

# حذف backup های قدیمی
echo "حذف backup های قدیمی‌تر از $RETENTION_DAYS روز..."
find "$BACKUP_DIR" -name "backup_*.tar.gz" -mtime +$RETENTION_DAYS -delete
find "$BACKUP_DIR" -name "env_*.enc" -mtime +$RETENTION_DAYS -delete

# نمایش لیست backup ها
echo ""
echo "لیست backup های موجود:"
ls -lh "$BACKUP_DIR" | grep backup_

# فضای دیسک
echo ""
echo "فضای استفاده شده در دایرکتوری backup:"
du -sh "$BACKUP_DIR"

echo ""
echo "✅ پشتیبان‌گیری تکمیل شد"
