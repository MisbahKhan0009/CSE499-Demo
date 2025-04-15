import { motion } from "framer-motion";
import { Camera, Building2, Car, Store } from "lucide-react";

const Applications = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-primary-600 mb-12">Applications & Impact</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-primary-600 text-white rounded-xl p-8">
            <Camera className="w-12 h-12 mb-6" />
            <h3 className="text-2xl font-semibold mb-4">SECURITY AND SURVEILLANCE</h3>
            <p className="leading-relaxed">
              Analyzing surveillance footage to detect and locate abnormal activities, such as trespassing, 
              theft, or unusual behavior. This can help security personnel respond more quickly and effectively.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 border border-primary-100">
            <Car className="w-12 h-12 mb-6 text-primary-600" />
            <h3 className="text-2xl font-semibold mb-4 text-primary-600">TRANSPORTATION SYSTEMS</h3>
            <p className="leading-relaxed text-secondary-600">
              Monitoring public transportation systems like subways, buses, and airports to identify incidents 
              such as accidents, unattended baggage, or suspicious behavior, enhancing overall safety and efficiency.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 border border-primary-100">
            <Building2 className="w-12 h-12 mb-6 text-primary-600" />
            <h3 className="text-2xl font-semibold mb-4 text-primary-600">HEALTHCARE MONITORING</h3>
            <p className="leading-relaxed text-secondary-600">
              Monitoring patients in hospitals or elderly care facilities to detect falls or other medical 
              emergencies, ensuring timely intervention and improving patient safety.
            </p>
          </div>

          <div className="bg-primary-600 text-white rounded-xl p-8">
            <Store className="w-12 h-12 mb-6" />
            <h3 className="text-2xl font-semibold mb-4">RETAIL AND COMMERCIAL SPACES</h3>
            <p className="leading-relaxed">
              Using anomaly detection to monitor customer behavior in retail stores, identifying potential 
              theft or other unusual activities, and improving store security and operations.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Applications;