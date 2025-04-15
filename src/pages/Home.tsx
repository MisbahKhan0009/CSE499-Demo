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
      <section className="w-full bg-gradient-to-b from-primary-50 to-white">
        <div className="container mx-auto px-4 py-32">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold text-primary-600 leading-tight"
            >
              VisionGuard
            </motion.h1>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-6 text-xl md:text-2xl text-secondary-600 max-w-2xl mx-auto leading-relaxed"
            >
              Advanced anomaly detection for security surveillance using cutting-edge deep learning technology.
            </motion.p>
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-12"
            >
              <Link 
                to={ROUTES.DEMO}
                className="inline-flex items-center px-8 py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-all duration-300 transform hover:scale-105 shadow-soft hover:shadow-hover"
              >
                Try Demo <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full bg-white py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-primary-600 mb-16">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <motion.div 
              whileHover={{ y: -10 }}
              className="p-8 bg-white rounded-xl shadow-soft hover:shadow-hover transition-all duration-300"
            >
              <div className="bg-primary-50 p-4 rounded-lg inline-block mb-6">
                <Camera className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-primary-700">Real-time Detection</h3>
              <p className="text-secondary-600 leading-relaxed">Precise anomaly detection with exact timestamp localization.</p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="p-8 bg-white rounded-xl shadow-soft hover:shadow-hover transition-all duration-300"
            >
              <div className="bg-primary-50 p-4 rounded-lg inline-block mb-6">
                <Shield className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-primary-700">Robust Performance</h3>
              <p className="text-secondary-600 leading-relaxed">Effective across diverse lighting and motion conditions.</p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="p-8 bg-white rounded-xl shadow-soft hover:shadow-hover transition-all duration-300"
            >
              <div className="bg-primary-50 p-4 rounded-lg inline-block mb-6">
                <Zap className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-primary-700">Instant Alerts</h3>
              <p className="text-secondary-600 leading-relaxed">Real-time anomaly notification system.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;