import { CheckCircle } from 'lucide-react';

export default function RecentWorks() {
  const works = [
    {
      title: "EMERGING TRENDS AND CHALLENGES",
      description: "Abdalla et al. (2024) explore deep learning-based VAD, including weakly supervised, self-supervised, and unsupervised approaches, and investigate challenges such as large-scale datasets, feature extraction, learning methods, loss functions, regularization, and anomaly score prediction. [1]"
    },
    {
      title: "EXPLAINABLE ANOMALY DETECTION",
      description: "Wang et al. (2023) survey explainable methods in visual anomaly detection for images and videos, addressing the scarcity of interpretations in black-box models and discussing various approaches to enhance model explainability. [2]"
    },
    {
      title: "COMPREHENSIVE SURVEY ON DL TECHNIQUES",
      description: "Suarez and Naval (2020) provide an extensive overview of deep learning approaches for video anomaly detection, categorizing methods based on their objectives and discussing commonly used datasets and evaluation metrics. [3]"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-emerald-800 mb-8 text-center">Recent Works</h1>
      
      <div className="space-y-6">
        {works.map((work, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-semibold text-emerald-800 mb-2">{work.title}</h2>
                <p className="text-gray-700 leading-relaxed">{work.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}