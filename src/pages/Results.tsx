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

        {/* EVAL Performance Results */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-primary-600 mb-12">EVAL Performance Results on StreetScene Dataset</h2>
          <div className="overflow-x-auto bg-white rounded-xl shadow-soft p-6">
            <table className="min-w-full">
              <thead>
                <tr className="border-b">
                  <th className="px-4 py-3 text-left">Metric</th>
                  <th className="px-4 py-3 text-left">Value</th>
                  <th className="px-4 py-3 text-left">Description</th>
                </tr>
              </thead>
              <tbody className="text-secondary-600">
                <tr className="border-b">
                  <td className="px-4 py-3">TPR</td>
                  <td className="px-4 py-3">[0.930, 0.780, 0.634]</td>
                  <td className="px-4 py-3">True Positive Rates at different thresholds</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-3">FPR</td>
                  <td className="px-4 py-3">[1.000, 0.444, 0.000]</td>
                  <td className="px-4 py-3">False Positive Rates at corresponding thresholds</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-3">AUC</td>
                  <td className="px-4 py-3">0.793</td>
                  <td className="px-4 py-3">Area Under ROC Curve (range: 0 to 1)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Ano-Pred Model Comparison */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-primary-600 mb-12">Ano-Pred Model Comparison of Anomaly Detection</h2>
          <div className="overflow-x-auto bg-white rounded-xl shadow-soft p-6">
            <table className="min-w-full">
              <thead>
                <tr className="border-b">
                  <th className="px-4 py-3 text-left">Results</th>
                  <th className="px-4 py-3 text-left">CUHK Avenue</th>
                  <th className="px-4 py-3 text-left">UCSD Ped1</th>
                  <th className="px-4 py-3 text-left">UCSD Ped2</th>
                  <th className="px-4 py-3 text-left">Shanghai Tech</th>
                </tr>
              </thead>
              <tbody className="text-secondary-600">
                <tr className="border-b">
                  <td className="px-4 py-3">Publisher's method</td>
                  <td className="px-4 py-3">84.9%</td>
                  <td className="px-4 py-3">83.1%</td>
                  <td className="px-4 py-3">95.4%</td>
                  <td className="px-4 py-3">72.8%</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-3">Ours</td>
                  <td className="px-4 py-3">85.3%</td>
                  <td className="px-4 py-3">83.6%</td>
                  <td className="px-4 py-3">95.7%</td>
                  <td className="px-4 py-3">73.4%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* R2-TUNING Performance */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-primary-600 mb-12">R2-TUNING Model Performance</h2>
          <div className="overflow-x-auto bg-white rounded-xl shadow-soft p-6">
            <table className="min-w-full">
              <thead>
                <tr className="border-b">
                  <th className="px-4 py-3 text-left">Dataset</th>
                  <th className="px-4 py-3 text-left">Config</th>
                  <th className="px-4 py-3 text-left">R1@0.3</th>
                  <th className="px-4 py-3 text-left">R1@0.5</th>
                  <th className="px-4 py-3 text-left">R1@0.7</th>
                  <th className="px-4 py-3 text-left">MR mAP</th>
                  <th className="px-4 py-3 text-left">HD mAP</th>
                </tr>
              </thead>
              <tbody className="text-secondary-600">
                <tr className="border-b">
                  <td className="px-4 py-3">QVHighlights</td>
                  <td className="px-4 py-3 text-left">Default</td>
                  <td className="px-4 py-3">78.71</td>
                  <td className="px-4 py-3">64.26</td>
                  <td className="px-4 py-3">43.86</td>
                  <td className="px-4 py-3">47.86</td>
                  <td className="px-4 py-3">49.45</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-3">QVHighlights</td>
                  <td className="px-4 py-3">Ours</td>
                  <td className="px-4 py-3">79.12</td>
                  <td className="px-4 py-3">68.20</td>
                  <td className="px-4 py-3">52.34</td>
                  <td className="px-4 py-3">48.33</td>
                  <td className="px-4 py-3">39.91</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-3">Charades-STA</td>
                  <td className="px-4 py-3">Default</td>
                  <td className="px-4 py-3">70.51</td>
                  <td className="px-4 py-3">60.48</td>
                  <td className="px-4 py-3">38.66</td>
                  <td className="px-4 py-3">-</td>
                  <td className="px-4 py-3">-</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-3">Charades-STA</td>
                  <td className="px-4 py-3">Ours</td>
                  <td className="px-4 py-3">71.40</td>
                  <td className="px-4 py-3">61.02</td>
                  <td className="px-4 py-3">39.12</td>
                  <td className="px-4 py-3">-</td>
                  <td className="px-4 py-3">-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* CG-DETR Model Comparison */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-primary-600 mb-12">CG-DETR Model Comparison</h2>
          <div className="overflow-x-auto bg-white rounded-xl shadow-soft p-6">
            <table className="min-w-full">
              <thead>
                <tr className="border-b">
                  <th className="px-4 py-3 text-left">Method</th>
                  <th className="px-4 py-3 text-left">R1@0.5</th>
                  <th className="px-4 py-3 text-left">R1@0.7</th>
                  <th className="px-4 py-3 text-left">mAP@0.5</th>
                  <th className="px-4 py-3 text-left">mAP@0.75</th>
                  <th className="px-4 py-3 text-left">Avg. mAP</th>
                  <th className="px-4 py-3 text-left">HIT@1</th>
                  <th className="px-4 py-3 text-left">Very Good</th>
                </tr>
              </thead>
              <tbody className="text-secondary-600">
                <tr className="border-b">
                  <td className="px-4 py-3">Publishers</td>
                  <td className="px-4 py-3">67.4</td>
                  <td className="px-4 py-3">52.1</td>
                  <td className="px-4 py-3">65.6</td>
                  <td className="px-4 py-3">45.7</td>
                  <td className="px-4 py-3">44.9</td>
                  <td className="px-4 py-3">40.8</td>
                  <td className="px-4 py-3">66.2</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-3">Ours</td>
                  <td className="px-4 py-3">68.8</td>
                  <td className="px-4 py-3">53.2</td>
                  <td className="px-4 py-3">66.9</td>
                  <td className="px-4 py-3">46.2</td>
                  <td className="px-4 py-3">45.7</td>
                  <td className="px-4 py-3">41.2</td>
                  <td className="px-4 py-3">67.7</td>
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

        {/* Moment-DETR Performance Comparison */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-primary-600 mb-12">Performance comparison between Moment-DETR</h2>
          <div className="overflow-x-auto bg-white rounded-xl shadow-soft p-6">
            <table className="min-w-full">
              <thead>
                <tr className="border-b">
                  <th className="px-4 py-3 text-left">Method</th>
                  <th className="px-4 py-3 text-left">R1@0.5</th>
                  <th className="px-4 py-3 text-left">R1@0.7</th>
                  <th className="px-4 py-3 text-left">mAP@0.5</th>
                  <th className="px-4 py-3 text-left">mAP@0.75</th>
                  <th className="px-4 py-3 text-left">Avg. mAP</th>
                  <th className="px-4 py-3 text-left">HIT@1</th>
                  <th className="px-4 py-3 text-left">&gt; Very Good</th>
                </tr>
              </thead>
              <tbody className="text-secondary-600">
                <tr className="border-b">
                  <td className="px-4 py-3">Moment-DETR</td>
                  <td className="px-4 py-3">52.89</td>
                  <td className="px-4 py-3">33.02</td>
                  <td className="px-4 py-3">54.82</td>
                  <td className="px-4 py-3">29.80</td>
                  <td className="px-4 py-3">30.73</td>
                  <td className="px-4 py-3">35.09</td>
                  <td className="px-4 py-3">55.60</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-3">Ours</td>
                  <td className="px-4 py-3">54.41</td>
                  <td className="px-4 py-3">33.55</td>
                  <td className="px-4 py-3">55.30</td>
                  <td className="px-4 py-3">29.87</td>
                  <td className="px-4 py-3">31.20</td>
                  <td className="px-4 py-3">36.15</td>
                  <td className="px-4 py-3">56.10</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Loss and ROC AUC Curves 
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-primary-600 mb-12">Comparison of Loss and ROC AUC curves for C3D, ResNet-101, ResNet-152</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-soft p-6">
              <h3 className="text-2xl font-semibold mb-4">Loss Curves</h3>
              <div className="aspect-w-16 aspect-h-9">
                <img 
                  src="/images/loss-curves.png" 
                  alt="Loss Curves for C3D, ResNet-101, and ResNet-152"
                  className="object-contain w-full h-full"
                />
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-soft p-6">
              <h3 className="text-2xl font-semibold mb-4">ROC AUC Curves</h3>
              <div className="aspect-w-16 aspect-h-9">
                <img 
                  src="/images/roc-auc-curves.png" 
                  alt="ROC AUC Curves for C3D, ResNet-101, and ResNet-152"
                  className="object-contain w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>*/}
      </div>
    </motion.div>
  );
};

export default Results;