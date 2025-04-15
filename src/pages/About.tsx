import { motion } from "framer-motion";
import { BookOpen, Code2, Database, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Project Overview */}
        <section className="mb-20">
          <h1 className="text-5xl font-bold text-primary-600 mb-8">About VisionGuard</h1>
          <p className="text-xl text-secondary-600 mb-12 max-w-4xl leading-relaxed">
            VisionGuard is a cutting-edge project focused on anomaly detection in security surveillance
            using advanced deep learning techniques. Our system provides precise detection with
            timestamp localization and robust performance across various conditions.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-xl shadow-soft hover:shadow-hover transition-all duration-300"
            >
              <Code2 className="w-10 h-10 text-primary-600 mb-6" />
              <h3 className="text-2xl font-semibold mb-4 text-primary-700">Technical Overview</h3>
              <p className="text-secondary-600 leading-relaxed">
                Built using state-of-the-art deep learning architectures including ResNet-101 & ResNet-120
                for feature extraction and C3D for spatiotemporal analysis.
              </p>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-xl shadow-soft hover:shadow-hover transition-all duration-300"
            >
              <Database className="w-10 h-10 text-primary-600 mb-6" />
              <h3 className="text-2xl font-semibold mb-4 text-primary-700">Dataset</h3>
              <p className="text-secondary-600 leading-relaxed">
                Trained on the UCF-Crime dataset with 1,900 real-world surveillance videos and
                validated on the Shanghai-Tech Campus dataset.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Research Background */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-primary-600 mb-12">Research Background</h2>
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white p-10 rounded-xl shadow-soft hover:shadow-hover transition-all duration-300"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <BookOpen className="w-10 h-10 text-primary-600 mb-6" />
                <h3 className="text-2xl font-semibold mb-6 text-primary-700">Recent Works</h3>
                <ul className="space-y-4 text-secondary-600">
                  <li className="flex items-start">
                    <span className="w-2 h-2 mt-2 mr-2 bg-primary-400 rounded-full"></span>
                    <span>Emerging trends in deep learning-based VAD</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 mt-2 mr-2 bg-primary-400 rounded-full"></span>
                    <span>Explainable anomaly detection methods</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 mt-2 mr-2 bg-primary-400 rounded-full"></span>
                    <span>Challenges in single-scene VAD</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 mt-2 mr-2 bg-primary-400 rounded-full"></span>
                    <span>Advancements in VAD techniques</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <Lightbulb className="w-10 h-10 text-primary-600 mb-6" />
                <h3 className="text-2xl font-semibold mb-6 text-primary-700">Key Innovations</h3>
                <ul className="space-y-4 text-secondary-600">
                  <li className="flex items-start">
                    <span className="w-2 h-2 mt-2 mr-2 bg-primary-400 rounded-full"></span>
                    <span>Deep learning-based spatial and temporal feature extraction</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 mt-2 mr-2 bg-primary-400 rounded-full"></span>
                    <span>Real-time processing with robust performance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 mt-2 mr-2 bg-primary-400 rounded-full"></span>
                    <span>Precise timestamp localization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 mt-2 mr-2 bg-primary-400 rounded-full"></span>
                    <span>Advanced anomaly notification system</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Team */}
        <section>
          <h2 className="text-4xl font-bold text-primary-600 mb-12">Project Team</h2>
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white p-10 rounded-xl shadow-soft hover:shadow-hover transition-all duration-300"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-primary-700">Supervisor</h3>
              <p className="text-xl text-secondary-600">Dr. Shafin Rahman [SFR1]</p>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-primary-700">Group #1</h3>
              <p className="text-xl text-secondary-600">
                CSE499A - Anomaly Detection for Security Surveillance
              </p>
            </div>
          </motion.div>
        </section>
      </div>
    </motion.div>
  );
};

export default About;