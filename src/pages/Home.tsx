import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Camera, Shield, Zap, ArrowRight, Award, ChartBar, Brain } from 'lucide-react';
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
        <div className="container mx-auto px-4 py-32 w-full">
          <div className="w-full text-center">
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
              className="mt-6 text-xl md:text-2xl text-secondary-600 mx-auto leading-relaxed"
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
              <h3 className="text-2xl font-semibold mb-4 text-primary-700">Enhanced Security</h3>
              <p className="text-secondary-600 leading-relaxed">Robust performance across various surveillance scenarios.</p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="p-8 bg-white rounded-xl shadow-soft hover:shadow-hover transition-all duration-300"
            >
              <div className="bg-primary-50 p-4 rounded-lg inline-block mb-6">
                <Zap className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-primary-700">Fast Processing</h3>
              <p className="text-secondary-600 leading-relaxed">Quick analysis and response for critical security situations.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full bg-primary-50 py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-primary-600 mb-16">Performance Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 bg-white rounded-xl shadow-soft text-center"
            >
              <ChartBar className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-4xl font-bold text-primary-700 mb-2">95.7%</h3>
              <p className="text-secondary-600">Accuracy on UCSD Ped2</p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 bg-white rounded-xl shadow-soft text-center"
            >
              <Award className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-4xl font-bold text-primary-700 mb-2">85.3%</h3>
              <p className="text-secondary-600">Accuracy on CUHK Avenue</p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 bg-white rounded-xl shadow-soft text-center"
            >
              <Brain className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-4xl font-bold text-primary-700 mb-2">73.4%</h3>
              <p className="text-secondary-600">Accuracy on Shanghai Tech</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-white py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-primary-600 mb-8">Ready to Experience VisionGuard?</h2>
          <p className="text-xl text-secondary-600 mb-12 mx-auto">
            Try our demo and see how VisionGuard can enhance your security surveillance system.
          </p>
          <Link 
            to={ROUTES.DEMO}
            className="inline-flex items-center px-8 py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-all duration-300 transform hover:scale-105 shadow-soft hover:shadow-hover"
          >
            Get Started <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;