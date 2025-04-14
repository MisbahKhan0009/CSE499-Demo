import { Eye, Github, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-[#2B6B5A] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[#1A4539]/20 backdrop-blur-sm"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2">
              <Eye className="w-6 h-6" />
              <span className="text-lg font-bold">VisionGuard</span>
            </div>
            <p className="mt-4 text-sm text-gray-300">
              Advanced anomaly detection for security surveillance using deep learning.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider">Resources</h3>
            <ul className="mt-4 space-y-2">
              {[
                { label: "Documentation", href: "#" },
                { label: "API Reference", href: "#" },
                { label: "Research Papers", href: "#" }
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-white transition-colors relative group"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider">Contact</h3>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-gray-300" />
                <a href="mailto:info@visionguard.com" className="text-gray-300 hover:text-white transition-colors">
                  info@visionguard.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-gray-300" />
                <div>
                  <p className="text-gray-300">CSE Department</p>
                  <p className="text-gray-300">SUST, Sylhet</p>
                </div>
              </li>
              <li className="flex items-center space-x-2">
                <Github className="w-4 h-4 text-gray-300" />
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  GitHub Repository
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 border-t border-gray-700 pt-8"
        >
          <p className="text-center text-sm text-gray-300">
            © {new Date().getFullYear()} VisionGuard. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;