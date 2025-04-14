import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Camera, Shield, Zap, ArrowRight } from 'lucide-react';
import { ROUTES } from '@/lib/constants';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full"
    >
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-b from-[#E5F2EF] to-white">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold text-[#2B6B5A]"
            >
              VisionGuard
            </motion.h1>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-4 text-xl text-gray-600"
            >
              Advanced anomaly detection for security surveillance using cutting-edge deep learning technology.
            </motion.p>
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-8"
            >
              <Link 
                to={ROUTES.DEMO}
                className="inline-flex items-center px-6 py-3 bg-[#2B6B5A] text-white rounded-lg hover:bg-[#1A4539] transition-colors"
              >
                Try Demo <ArrowRight className="ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full bg-white">
        <div className="container mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold text-center text-[#2B6B5A] mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div 
              whileHover={{ y: -10 }}
              className="p-6 bg-white rounded-lg shadow-lg"
            >
              <Camera className="w-12 h-12 text-[#2B6B5A] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Real-time Detection</h3>
              <p className="text-gray-600">Precise anomaly detection with exact timestamp localization.</p>
            </motion.div>
            <motion.div 
              whileHover={{ y: -10 }}
              className="p-6 bg-white rounded-lg shadow-lg"
            >
              <Shield className="w-12 h-12 text-[#2B6B5A] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Robust Performance</h3>
              <p className="text-gray-600">Effective across diverse lighting and motion conditions.</p>
            </motion.div>
            <motion.div 
              whileHover={{ y: -10 }}
              className="p-6 bg-white rounded-lg shadow-lg"
            >
              <Zap className="w-12 h-12 text-[#2B6B5A] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Instant Alerts</h3>
              <p className="text-gray-600">Real-time anomaly notification system.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;