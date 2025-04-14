import { motion } from "framer-motion";
import { BookOpen, Code2, Database, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Project Overview */}
        <section className="mb-16">
          <h1 className="text-4xl font-bold text-[#2B6B5A] mb-6">About VisionGuard</h1>
          <p className="text-lg text-gray-600 mb-8">
            VisionGuard is a cutting-edge project focused on anomaly detection in security surveillance
            using advanced deep learning techniques. Our system provides precise detection with
            timestamp localization and robust performance across various conditions.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Code2 className="w-8 h-8 text-[#2B6B5A] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Technical Overview</h3>
              <p className="text-gray-600">
                Built using state-of-the-art deep learning architectures including ResNet-101 & ResNet-120
                for feature extraction and C3D for spatiotemporal analysis.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Database className="w-8 h-8 text-[#2B6B5A] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Dataset</h3>
              <p className="text-gray-600">
                Trained on the UCF-Crime dataset with 1,900 real-world surveillance videos and
                validated on the Shanghai-Tech Campus dataset.
              </p>
            </div>
          </div>
        </section>

        {/* Research Background */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#2B6B5A] mb-6">Research Background</h2>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <BookOpen className="w-8 h-8 text-[#2B6B5A] mb-4" />
                <h3 className="text-xl font-semibold mb-4">Recent Works</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Emerging trends in deep learning-based VAD</li>
                  <li>Explainable anomaly detection methods</li>
                  <li>Challenges in single-scene VAD</li>
                  <li>Advancements in VAD techniques</li>
                </ul>
              </div>
              
              <div>
                <Lightbulb className="w-8 h-8 text-[#2B6B5A] mb-4" />
                <h3 className="text-xl font-semibold mb-4">Key Innovations</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Deep learning-based spatial and temporal feature extraction</li>
                  <li>Real-time processing with robust performance</li>
                  <li>Precise timestamp localization</li>
                  <li>Advanced anomaly notification system</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section>
          <h2 className="text-3xl font-bold text-[#2B6B5A] mb-6">Project Team</h2>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Supervisor</h3>
              <p className="text-gray-600">Dr. Shafin Rahman [SFR1]</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Group #1</h3>
              <p className="text-gray-600">
                CSE499A - Anomaly Detection for Security Surveillance
              </p>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default About;