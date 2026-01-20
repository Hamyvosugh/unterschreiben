"use client";

import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { Globe, Home, Info, Mail, Menu, Send, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const currentScrollY = latest;

    // Set scrolled state
    setIsScrolled(currentScrollY > 20);

    // Hide/show header based on scroll direction
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      // Scrolling down
      setIsVisible(false);
      setIsMobileMenuOpen(false);
    } else {
      // Scrolling up
      setIsVisible(true);
    }

    setLastScrollY(currentScrollY);
  });

  const menuItems = [
    { id: "home", label: "صفحه اصلی", labelEn: "Home", icon: Home, href: "/" },
    {
      id: "countries",
      label: "انتخاب کشور",
      labelEn: "Countries",
      icon: Globe,
      href: "/mail",
    },
    {
      id: "why",
      label: "چرا مهم است",
      labelEn: "Why It Matters",
      icon: Info,
      href: "/iranvoice",
    },
    {
      id: "contact",
      label: "تماس با ما",
      labelEn: "Contact",
      icon: Mail,
      href: "/contact",
    },
  ];

  const handleNavigation = (href: string) => {
    router.push(href);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: 0 }}
        animate={{
          y: isVisible ? 0 : -100,
        }}
        transition={{
          duration: 0.3,
          ease: [0.25, 0.46, 0.45, 0.94], // easeInOut
        }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 overflow-hidden ${
          isScrolled
            ? "bg-slate-100 backdrop-blur-lg shadow-2xl border-b border-white/10"
            : "bg-white backdrop-blur-sm"
        }`}
      >
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.03)_1px,transparent_1px)] bg-size-[32px_32px] pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavigation("/")}
              className="flex items-center gap-3 cursor-pointer"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-linear-to-r from-green-500 to-emerald-600 rounded-xl blur-xl opacity-60" />
                <div className="relative w-12 h-12 bg-linear-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Send className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="hidden sm:block">
                <h1
                  className="text-xl font-bold text-black"
                  style={{ fontFamily: "Vazirmatn, sans-serif" }}
                >
                  صدای ایران
                </h1>
                <p className="text-xs text-gray-900">Voice of Iran</p>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {menuItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <motion.button
                    key={item.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleNavigation(item.href)}
                    className={`
                      relative px-4 py-2 rounded-lg transition-all duration-300 group
                      ${
                        isActive
                          ? "text-green-400 font-semibold bg-white/10"
                          : "text-gray-900 hover:text-green-300 hover:bg-white/5"
                      }
                    `}
                  >
                    <div className="flex items-center gap-2">
                      <item.icon className="w-4 h-4" />
                      <span style={{ fontFamily: "Vazirmatn, sans-serif" }}>
                        {item.label}
                      </span>
                    </div>

                    {isActive && (
                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-green-400 to-emerald-400"
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      />
                    )}

                    {!isActive && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-green-400 to-emerald-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                    )}
                  </motion.button>
                );
              })}
            </nav>

            {/* CTA Button */}
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 40px rgba(34, 197, 94, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavigation("/germany")}
              className="hidden md:flex items-center gap-2 px-6 py-3 bg-linear-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-full shadow-lg hover:shadow-green-500/50 transition-all duration-300"
            >
              <Send className="w-4 h-4" />
              <span style={{ fontFamily: "Vazirmatn, sans-serif" }}>
                ارسال نامه
              </span>
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-black" />
              ) : (
                <Menu className="w-6 h-6 text-black" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="lg:hidden bg-slate-800/95 backdrop-blur-lg border-t border-white/10 overflow-hidden"
            >
              <div className="container mx-auto px-4 py-4">
                <nav className="flex flex-col gap-2">
                  {menuItems.map((item, index) => {
                    const isActive = pathname === item.href;
                    return (
                      <motion.button
                        key={item.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: index * 0.1,
                          ease: [0.25, 0.46, 0.45, 0.94],
                        }}
                        onClick={() => handleNavigation(item.href)}
                        className={`
                          flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 text-right
                          ${
                            isActive
                              ? "bg-linear-to-r from-green-500/20 to-emerald-500/20 text-green-300 font-semibold border border-green-500/30"
                              : "hover:bg-white/5 text-gray-200 hover:text-green-300"
                          }
                        `}
                      >
                        <item.icon className="w-5 h-5" />
                        <div className="flex-1">
                          <p style={{ fontFamily: "Vazirmatn, sans-serif" }}>
                            {item.label}
                          </p>
                          <p className="text-xs text-gray-400">
                            {item.labelEn}
                          </p>
                        </div>
                        {isActive && (
                          <div className="w-2 h-2 bg-green-400 rounded-full" />
                        )}
                      </motion.button>
                    );
                  })}

                  {/* Mobile CTA */}
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                    onClick={() => handleNavigation("/send")}
                    className="mt-4 flex items-center justify-center gap-2 px-6 py-4 bg-linear-to-r from-green-500 to-emerald-600 text-black font-semibold rounded-full shadow-lg"
                  >
                    <Send className="w-5 h-5" />
                    <span style={{ fontFamily: "Vazirmatn, sans-serif" }}>
                      ارسال نامه
                    </span>
                  </motion.button>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Spacer to prevent content from going under fixed header */}
      <div className="h-20" />
    </>
  );
}


