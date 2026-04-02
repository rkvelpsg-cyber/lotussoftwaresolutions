import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-purple-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Logo & Company Name */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8 flex flex-col items-center gap-6"
          >
            {/* Logo */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            >
              <img
                src="/lotussoftware_logo.jpeg"
                alt="Lotus Software Solutions"
                className="w-[400px] h-auto max-w-full"
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-400 via-cyan-400 to-teal-400 rounded-3xl blur-xl opacity-30"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-400 via-pink-400 to-purple-500 rounded-3xl blur-2xl opacity-20"
                animate={{
                  scale: [1.1, 1.3, 1.1],
                  opacity: [0.15, 0.25, 0.15],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />
            </motion.div>
          </motion.div>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mb-8"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="text-purple-500" size={24} />
              <p
                className="text-lg text-purple-600"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Innovative Technology Solutions
              </p>
              <Sparkles className="text-purple-500" size={24} />
            </div>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-purple-600 via-cyan-500 to-teal-500 bg-clip-text text-transparent"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Transforming Ideas into Digital Excellence
            </h1>
            <p
              className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Creating cutting-edge websites and mobile applications for hotels,
              educational institutions, enterprises, shops, hospitals, and more.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#contact"
              className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-500 text-white rounded-full hover:shadow-xl transition-all duration-300 flex items-center gap-2"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Get Started
              <ArrowRight
                className="group-hover:translate-x-1 transition-transform"
                size={20}
              />
            </a>
            <a
              href="#services"
              className="px-8 py-4 bg-white text-purple-600 border-2 border-purple-600 rounded-full hover:bg-purple-50 transition-all duration-300"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Our Services
            </a>
          </motion.div>

          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-16 pt-8 border-t border-purple-200"
          >
            <p
              className="text-gray-600 mb-2"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Founded & Led by
            </p>
            <p
              className="text-xl bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Dr. Sivaranjani Selladurai, Ph.D
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
