import { motion } from "framer-motion";
import { Check } from "lucide-react";

const RecentWorks = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-primary-600 mb-12">Recent Works</h1>
        
        <div className="space-y-12">
          <div className="bg-white rounded-xl shadow-soft p-8">
            <div className="flex items-start gap-4">
              <Check className="w-6 h-6 text-primary-600 mt-1" />
              <div>
                <h3 className="text-2xl font-semibold text-primary-600 mb-4">EMERGING TRENDS AND CHALLENGES</h3>
                <p className="text-secondary-600 leading-relaxed">
                  Abdalla et al. (2024) explore deep learning-based VAD, including weakly supervised, self-supervised, and 
                  unsupervised approaches, and investigate challenges such as large-scale datasets, feature extraction, 
                  learning methods, loss functions, regularization, and anomaly score prediction. [1]
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-soft p-8">
            <div className="flex items-start gap-4">
              <Check className="w-6 h-6 text-primary-600 mt-1" />
              <div>
                <h3 className="text-2xl font-semibold text-primary-600 mb-4">EXPLAINABLE ANOMALY DETECTION</h3>
                <p className="text-secondary-600 leading-relaxed">
                  Wang et al. (2023) survey explainable methods in visual anomaly detection for images and videos, 
                  addressing the scarcity of interpretations in black-box models and discussing various approaches to 
                  enhance model explainability. [2]
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-soft p-8">
            <div className="flex items-start gap-4">
              <Check className="w-6 h-6 text-primary-600 mt-1" />
              <div>
                <h3 className="text-2xl font-semibold text-primary-600 mb-4">COMPREHENSIVE SURVEY ON DL TECHNIQUES</h3>
                <p className="text-secondary-600 leading-relaxed">
                  Suarez and Naval (2020) provide an extensive overview of deep learning approaches for video anomaly detection, 
                  categorizing methods based on their objectives and discussing commonly used datasets and evaluation metrics. [3]
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-soft p-8">
            <div className="flex items-start gap-4">
              <Check className="w-6 h-6 text-primary-600 mt-1" />
              <div>
                <h3 className="text-2xl font-semibold text-primary-600 mb-4">CHALLENGES IN SINGLE-SCENE VAD</h3>
                <p className="text-secondary-600 leading-relaxed">
                  Ramachandra et al. (2020) focus on anomaly detection within single-scene video feeds, summarizing research trends, 
                  public datasets, evaluation criteria, and proposing a taxonomy for existing methods. [4]
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-soft p-8">
            <div className="flex items-start gap-4">
              <Check className="w-6 h-6 text-primary-600 mt-1" />
              <div>
                <h3 className="text-2xl font-semibold text-primary-600 mb-4">ADVANCEMENTS IN VAD TECHNIQUES</h3>
                <p className="text-secondary-600 leading-relaxed">
                  Wu et al. (2024) review deep learning-based VAD methods across various supervision levels, including semi-supervised, 
                  weakly supervised, fully supervised, unsupervised, and open-set supervised approaches, and discuss the integration 
                  of pre-trained large models. [5]
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default RecentWorks;