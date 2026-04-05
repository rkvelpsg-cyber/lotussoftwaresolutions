"use client";

import { motion } from "motion/react";
import { Menu, X, LogIn } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

interface HeaderProps {
  onEmployeeLoginClick?: () => void;
}

export function Header({ onEmployeeLoginClick }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  const menuItems = [
    { name: "Home", href: isHome ? "#home" : "/" },
    { name: "About", href: isHome ? "#about" : "/#about" },
    { name: "Services", href: isHome ? "#services" : "/#services" },
    { name: "Contact", href: isHome ? "#contact" : "/#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-white/90 via-purple-50/80 to-white/90 backdrop-blur-lg border-b border-purple-200"
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3"
          >
            <div className="h-20 w-[220px] overflow-hidden">
              <img
                src="/lotussoftware_logo.jpeg"
                alt="Lotus Software Solutions"
                className="h-full w-full object-contain mix-blend-multiply"
              />
            </div>
          </motion.div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="text-gray-700 hover:text-purple-600 transition-colors font-semibold tracking-wide"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                {item.name}
              </motion.a>
            ))}
            <motion.button
              onClick={onEmployeeLoginClick}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex cursor-pointer items-center gap-2 px-6 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-full font-semibold hover:shadow-lg transition-shadow"
            >
              <LogIn size={18} />
              Employee Login
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="md:hidden mt-4 pb-4"
          >
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 text-gray-700 hover:text-purple-600 transition-colors font-semibold tracking-wide"
                style={{ fontFamily: "'Poppins', sans-serif" }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <button
              onClick={() => {
                onEmployeeLoginClick?.();
                setIsMenuOpen(false);
              }}
              className="w-full mt-4 flex cursor-pointer items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-lg font-semibold hover:shadow-lg transition-shadow"
            >
              <LogIn size={18} />
              Employee Login
            </button>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
}
