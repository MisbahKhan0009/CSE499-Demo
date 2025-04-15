import { motion } from "framer-motion";
import { Database, LineChart, Cpu } from "lucide-react";

const ExperimentalSetup = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-primary-600 mb-12">Experimental Setup</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-8 shadow-soft">
            <Database className="w-12 h-12 mb-6 text-primary-600" />
            <h3 className="text-2xl font-semibold mb-6 text-primary-600">DATASET</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2">UCF-Crime:</h4>
                <p className="text-secondary-600">1,900 real-world surveillance videos totaling 128 hours, covering 13 anomaly categories.[6]</p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Shanghai-Tech Campus:</h4>
                <p className="text-secondary-600">13 scenes with varying lighting conditions and camera angles. Contains 130 abnormal events across over 270,000 training frames.[8]</p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">LVU Dataset:</h4>
                <p className="text-secondary-600">A comprehensive dataset for video understanding task.[7]</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-soft">
            <LineChart className="w-12 h-12 mb-6 text-primary-600" />
            <h3 className="text-2xl font-semibold mb-6 text-primary-600">EVALUATION METRICS</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2">Area Under the ROC Curve (AUC):</h4>
                <p className="text-secondary-600">Measures the model's ability to distinguish between normal and anomalous events.</p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Equal Error Rate (EER):</h4>
                <p className="text-secondary-600">The point where false acceptance rate equals false rejection rate, indicating the model's accuracy.</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-soft">
            <Cpu className="w-12 h-12 mb-6 text-primary-600" />
            <h3 className="text-2xl font-semibold mb-6 text-primary-600">MODEL</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2">ResNet-101 & ResNet-120:</h4>
                <p className="text-secondary-600">Deep architectures with skip connections for effective feature extraction and capturing subtle anomalies.</p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">C3D:</h4>
                <p className="text-secondary-600">Captures spatiotemporal features for detecting motion-based anomalies in video sequences.</p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">AVA:</h4>
                <p className="text-secondary-600">Provides detailed action annotations for understanding context-specific anomalies.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ExperimentalSetup;