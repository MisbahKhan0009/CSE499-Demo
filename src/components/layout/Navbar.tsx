import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/lib/constants';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#2B6B5A]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to={ROUTES.HOME} className="flex items-center space-x-2 group">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <Eye className="w-8 h-8 text-[#2B6B5A]" />
            </motion.div>
            <span className="text-xl font-bold text-[#2B6B5A] group-hover:text-[#1A4539] transition-colors">
              VisionGuard
            </span>
          </Link>
          
          <div className="flex space-x-8">
            {[
              { to: ROUTES.HOME, label: "Home" },
              { to: ROUTES.DEMO, label: "Demo" },
              { to: ROUTES.ABOUT, label: "About" }
            ].map((link) => (
              <Link 
                key={link.to}
                to={link.to}
                className="relative text-gray-600 hover:text-[#2B6B5A] transition-colors group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#2B6B5A] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;