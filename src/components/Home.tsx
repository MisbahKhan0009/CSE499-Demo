import { Eye, Shield, Brain, Zap, BarChart3, Lock, Clock, Cloud } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Detection",
      description: "Advanced deep learning algorithms for real-time anomaly detection"
    },
    {
      icon: Zap,
      title: "Real-Time Processing",
      description: "Instant analysis and alerts for immediate response"
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Comprehensive insights and performance metrics"
    },
    {
      icon: Lock,
      title: "Enterprise Security",
      description: "Bank-grade encryption and data protection"
    },
    {
      icon: Clock,
      title: "24/7 Monitoring",
      description: "Continuous surveillance and instant notifications"
    },
    {
      icon: Cloud,
      title: "Cloud Integration",
      description: "Seamless deployment across your infrastructure"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="flex justify-center mb-6 relative">
          <div className="absolute inset-0 bg-emerald-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
          <Eye className="h-20 w-20 text-emerald-600 relative animate-bounce" />
        </div>
        <h1 className="text-5xl font-bold text-emerald-800 mb-6">
          Vision Guard AI
        </h1>
        <h2 className="text-2xl text-emerald-600 mb-4">
          Intelligent Video Surveillance Platform
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          Harness the power of artificial intelligence to transform your security infrastructure. 
          Detect anomalies in real-time and protect what matters most.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
            Start Free Trial
          </button>
          <button className="border-2 border-emerald-600 text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transform hover:scale-105 transition-all duration-300">
            Watch Demo
          </button>
        </div>
      </div>

      <div className="relative mb-20">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-3xl blur-3xl"></div>
        <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-emerald-100 p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`bg-white rounded-xl p-6 shadow-lg border border-emerald-50 transform hover:scale-105 transition-all duration-300 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-emerald-100 p-3 rounded-lg">
                    <feature.icon className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-emerald-800">{feature.title}</h3>
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={`bg-emerald-800 rounded-3xl p-12 text-center transform transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Security?</h2>
        <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">
          Join leading organizations worldwide who trust Vision Guard AI for their security needs. 
          Start your journey towards smarter, more efficient surveillance today.
        </p>
        <button className="bg-white text-emerald-800 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transform hover:scale-105 transition-all duration-300 shadow-lg">
          Get Started Now
        </button>
      </div>
    </div>
  );
}