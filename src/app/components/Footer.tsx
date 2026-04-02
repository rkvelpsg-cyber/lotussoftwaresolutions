import { motion } from "motion/react";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <img
                src="/lotussoftware_logo.jpeg"
                alt="Lotus Software Solutions"
                className="h-20 w-auto"
              />
            </div>
            <p className="text-gray-400 mb-4">
              Transforming ideas into digital excellence through innovative
              software solutions.
            </p>
            <p className="text-gray-400">
              Founded & Led by
              <br />
              <span className="text-cyan-400">
                Dr. Sivaranjani Selladurai, Ph.D
              </span>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone size={18} className="text-cyan-400 mt-1 flex-shrink-0" />
                <a
                  href="tel:+916369143910"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  +91-6369143910
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={18} className="text-cyan-400 mt-1 flex-shrink-0" />
                <a
                  href="mailto:lotussoftwaresolutionsorg@gmail.com"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  lotussoftwaresolutionsorg@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin
                  size={18}
                  className="text-cyan-400 mt-1 flex-shrink-0"
                />
                <div className="text-gray-400">
                  <div className="mb-3">
                    <span className="text-cyan-400 font-semibold">
                      Bangalore Office:
                    </span>
                    <br />
                    3rd Floor, Dr. Lal Path Lab,
                    <br />
                    Madhuranagar, Muthsandra Main Road,
                    <br />
                    Varthur, Bangalore, Karnataka-560087
                  </div>
                  <div>
                    <span className="text-cyan-400 font-semibold">
                      Chennai Office:
                    </span>
                    <br />
                    Flat No 2, Guru Villa,
                    <br />
                    Kelambakkam, OMR Road,
                    <br />
                    Chengalpattu District, Tamilnadu-603103
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Lotus Software Solutions. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
