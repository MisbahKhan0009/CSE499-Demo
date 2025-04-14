import { Camera, Train, Building2, Store } from 'lucide-react';

export default function Applications() {
  const applications = [
    {
      icon: Camera,
      title: "Security and Surveillance",
      description: "Analyzing surveillance footage to detect and locate abnormal activities, such as trespassing, theft, or unusual behavior. This can help security personnel respond more quickly and effectively."
    },
    {
      icon: Train,
      title: "Transportation Systems",
      description: "Monitoring public transportation systems like subways, buses, and airports to identify incidents such as accidents, unattended baggage, or suspicious behavior, enhancing overall safety and efficiency."
    },
    {
      icon: Building2,
      title: "Healthcare Monitoring",
      description: "Monitoring patients in hospitals or elderly care facilities to detect falls or other medical emergencies, ensuring timely intervention and improving patient safety."
    },
    {
      icon: Store,
      title: "Retail and Commercial Spaces",
      description: "Using anomaly detection to monitor customer behavior in retail stores, identifying potential theft or other unusual activities, and improving store security and operations."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-emerald-800 mb-8 text-center">Applications & Impact</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {applications.map((app, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center space-x-4 mb-4">
              <app.icon className="h-8 w-8 text-emerald-600" />
              <h2 className="text-xl font-semibold text-emerald-800">{app.title}</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">{app.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}