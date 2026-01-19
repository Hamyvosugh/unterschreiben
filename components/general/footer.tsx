'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Send, Heart, Github, Twitter, Mail, Globe } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Mail, href: '#', label: 'Email' },
  ];

  const quickLinks = [
    { label: 'صفحه اصلی', href: '/' },
    { label: 'انتخاب کشور', href: '/mail' },
    { label: 'چرا مهم است', href: '/iranvoice' },
    { label: 'تماس با ما', href: '/contact' },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-size-[64px_64px]" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl blur-lg opacity-60" />
                <div className="relative w-12 h-12 bg-linear-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Send className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h3 
                  className="text-xl font-bold text-white"
                  style={{ fontFamily: 'Vazirmatn, sans-serif' }}
                >
                  صدای ایران
                </h3>
                <p className="text-sm text-gray-300">Voice of Iran</p>
              </div>
            </div>
            <p 
              className="text-gray-300 text-sm leading-relaxed max-w-xs"
              style={{ fontFamily: 'Vazirmatn, sans-serif', lineHeight: '1.8' }}
            >
              همراه با شما برای آزادی و حقوق بشر
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h4 
              className="text-lg font-semibold text-white mb-4"
              style={{ fontFamily: 'Vazirmatn, sans-serif' }}
            >
              دسترسی سریع
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-sm flex items-center gap-2"
                    style={{ fontFamily: 'Vazirmatn, sans-serif' }}
                  >
                    <span className="w-1 h-1 bg-green-400 rounded-full" />
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 
              className="text-lg font-semibold text-white mb-4"
              style={{ fontFamily: 'Vazirmatn, sans-serif' }}
            >
              ارتباط با ما
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center transition-all duration-300 border border-white/10 hover:border-green-400/50"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-gray-300 group-hover:text-green-400" />
                </motion.a>
              ))}
            </div>
            <p className="text-gray-400 text-xs mt-4">
              support@voiceofiran.org
            </p>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10" />

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm"
        >
          <p 
            className="text-gray-400 flex items-center gap-2"
            style={{ fontFamily: 'Vazirmatn, sans-serif' }}
          >
            © {currentYear} صدای ایران. تمامی حقوق محفوظ است.
          </p>
          
          <p className="text-gray-400 flex items-center gap-1">
            ساخته شده با
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            </motion.span>
            برای آزادی
          </p>

          <div className="flex items-center gap-4 text-gray-400">
            <a href="/privacy" className="hover:text-green-400 transition-colors">
              حریم خصوصی
            </a>
            <span>•</span>
            <a href="/terms" className="hover:text-green-400 transition-colors">
              شرایط استفاده
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}