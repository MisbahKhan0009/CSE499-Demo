import { motion } from "framer-motion";

const Results = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* UTM Models Comparison */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-primary-600 mb-12">Performance comparison of UTM-B and UTM-S models</h2>
          <div className="overflow-x-auto bg-white rounded-xl shadow-soft p-6">
            <table className="min-w-full">
              <thead>
                <tr className="border-b">
                  <th className="px-4 py-3 text-left">Dataset</th>
                  <th className="px-4 py-3 text-left">Model</th>
                  <th className="px-4 py-3 text-left">Type</th>
                  <th className="px-4 py-3 text-left">MR mAP (R1@0.5, R1@0.7)</th>
                  <th className="px-4 py-3 text-left">HD mAP (R5@0.5, R5@0.7)</th>
                </tr>
              </thead>
              <tbody className="text-secondary-600">
                <tr className="border-b">
                  <td className="px-4 py-3">Charades-STA</td>
                  <td className="px-4 py-3">UTM-B</td>
                  <td className="px-4 py-3">V + A</td>
                  <td className="px-4 py-3">(0.4828, 0.2625)</td>
                  <td className="px-4 py-3">(0.8879, -)</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-3">Charades-STA</td>
                  <td className="px-4 py-3">UTM-B</td>
                  <td className="px-4 py-3">V + O</td>
                  <td className="px-4 py-3">(0.5003, 0.2648)</td>
                  <td className="px-4 py-3">(0.8928, -)</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-3">QVHighlights</td>
                  <td className="px-4 py-3">UTM-B</td>
                  <td className="px-4 py-3">Eng</td>
                  <td className="px-4 py-3">(0.526, 44.26)</td>
                  <td className="px-4 py-3">(98.58, -)</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-3">QVHighlights</td>
                  <td className="px-4 py-3">UTM-B</td>
                  <td className="px-4 py-3">w/ PT</td>
                  <td className="px-4 py-3">(0.528, 46.90)</td>
                  <td className="px-4 py-3">(99.26, -)</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-3">YouTube</td>
                  <td className="px-4 py-3">UTM-S</td>
                  <td className="px-4 py-3">Surfing</td>
                  <td className="px-4 py-3">(-,-)</td>
                  <td className="px-4 py-3">(0.82712, -)</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-3">YouTube</td>
                  <td className="px-4 py-3">UTM-S</td>
                  <td className="px-4 py-3">Dog</td>
                  <td className="px-4 py-3">(-,-)</td>
                  <td className="px-4 py-3">(0.81601, -)</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-3">YouTube</td>
                  <td className="px-4 py-3">UTM-S</td>
                  <td className="px-4 py-3">Parkour</td>
                  <td className="px-4 py-3">(-,-)</td>
                  <td className="px-4 py-3">(0.81642, -)</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-3">YouTube</td>
                  <td className="px-4 py-3">UTM-S</td>
                  <td className="px-4 py-3">Boxing</td>
                  <td className="px-4 py-3">(-,-)</td>
                  <td className="px-4 py-3">(0.89702, -)</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-3">YouTube</td>
                  <td className="px-4 py-3">UTM-S</td>
                  <td className="px-4 py-3">Gym</td>
                  <td className="px-4 py-3">(-,-)</td>
                  <td className="px-4 py-3">(0.79502, -)</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-3">YouTube</td>
                  <td className="px-4 py-3">UTM-S</td>
                  <td className="px-4 py-3">Skiing</td>
                  <td className="px-4 py-3">(-,-)</td>
                  <td className="px-4 py-3">(0.78273, -)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* MH-DETR Performance */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-primary-600 mb-12">Performance metrics of the MH-DETR model</h2>
          <div className="overflow-x-auto bg-white rounded-xl shadow-soft p-6">
            <table className="min-w-full">
              <thead>
                <tr className="border-b">
                  <th className="px-4 py-3 text-left">Metric</th>
                  <th className="px-4 py-3 text-left">MR R1@0.5</th>
                  <th className="px-4 py-3 text-left">MR R1@0.7</th>
                  <th className="px-4 py-3 text-left">MR mAP Avg.</th>
                  <th className="px-4 py-3 text-left">HD (&lt; VG) HIT@1</th>
                  <th className="px-4 py-3 text-left">Params</th>
                  <th className="px-4 py-3 text-left">GFLOPS</th>
                </tr>
              </thead>
              <tbody className="text-secondary-600">
                <tr className="border-b">
                  <td className="px-4 py-3">Ours</td>
                  <td className="px-4 py-3">55.01</td>
                  <td className="px-4 py-3">42.30</td>
                  <td className="px-4 py-3">40.36</td>
                  <td className="px-4 py-3">40.01</td>
                  <td className="px-4 py-3">8.2M</td>
                  <td className="px-4 py-3">0.34</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Publisher's</td>
                  <td className="px-4 py-3">60.84</td>
                  <td className="px-4 py-3">44.90</td>
                  <td className="px-4 py-3">39.28</td>
                  <td className="px-4 py-3">38.77</td>
                  <td className="px-4 py-3">8.2M</td>
                  <td className="px-4 py-3">0.34</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* STEAD Model Performance */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-primary-600 mb-12">Comparison of STEAD Model Performance on UCF-Crime Benchmark</h2>
          <div className="overflow-x-auto bg-white rounded-xl shadow-soft p-6">
            <table className="min-w-full">
              <thead>
                <tr className="border-b">
                  <th className="px-4 py-3 text-left"></th>
                  <th className="px-4 py-3 text-left">AUC (%)</th>
                  <th className="px-4 py-3 text-left">Outperforms SOTA</th>
                  <th className="px-4 py-3 text-left">Parameter Reduction (%)</th>
                </tr>
              </thead>
              <tbody className="text-secondary-600">
                <tr className="border-b">
                  <td className="px-4 py-3">Publishers'</td>
                  <td className="px-4 py-3">91.24</td>
                  <td className="px-4 py-3">Yes</td>
                  <td className="px-4 py-3">99.70</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Ours</td>
                  <td className="px-4 py-3">89.51</td>
                  <td className="px-4 py-3">Yes</td>
                  <td className="px-4 py-3">97.88</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default Results;