import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/lib/constants';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to={ROUTES.HOME} className="flex items-center space-x-2">
            <Eye className="w-8 h-8 text-[#2B6B5A]" />
            <span className="text-xl font-bold text-[#2B6B5A]">VisionGuard</span>
          </Link>
          
          <div className="flex space-x-8">
            <Link 
              to={ROUTES.HOME}
              className="text-gray-600 hover:text-[#2B6B5A] transition-colors"
            >
              Home
            </Link>
            <Link 
              to={ROUTES.DEMO}
              className="text-gray-600 hover:text-[#2B6B5A] transition-colors"
            >
              Demo
            </Link>
            <Link 
              to={ROUTES.ABOUT}
              className="text-gray-600 hover:text-[#2B6B5A] transition-colors"
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;