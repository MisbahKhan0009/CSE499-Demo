export default function ExperimentalSetup() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-emerald-800 mb-8 text-center">Experimental Setup</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold text-emerald-800 mb-4">Dataset</h2>
          <ul className="space-y-4">
            <li>
              <h3 className="font-semibold text-emerald-700">UCF-Crime:</h3>
              <p className="text-gray-700">1,900 real-world surveillance videos totaling 128 hours, covering 13 anomaly categories.</p>
            </li>
            <li>
              <h3 className="font-semibold text-emerald-700">Shanghai-Tech Campus:</h3>
              <p className="text-gray-700">13 scenes with varying lighting conditions and camera angles. Contains 130 abnormal events across over 270,000 training frames.</p>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold text-emerald-800 mb-4">Evaluation Metrics</h2>
          <ul className="space-y-4">
            <li>
              <h3 className="font-semibold text-emerald-700">Area Under the ROC Curve (AUC):</h3>
              <p className="text-gray-700">Measures the model's ability to distinguish between normal and anomalous events.</p>
            </li>
            <li>
              <h3 className="font-semibold text-emerald-700">Equal Error Rate (EER):</h3>
              <p className="text-gray-700">The point where false acceptance rate equals false rejection rate, indicating the model's accuracy.</p>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold text-emerald-800 mb-4">Model</h2>
          <ul className="space-y-4">
            <li>
              <h3 className="font-semibold text-emerald-700">ResNet-101 & ResNet-120:</h3>
              <p className="text-gray-700">Deep architectures with skip connections for effective feature extraction.</p>
            </li>
            <li>
              <h3 className="font-semibold text-emerald-700">C3D:</h3>
              <p className="text-gray-700">Captures spatiotemporal features for detecting motion-based anomalies.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}