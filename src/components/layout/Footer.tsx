import { Eye } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#2B6B5A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2">
              <Eye className="w-6 h-6" />
              <span className="text-lg font-bold">VisionGuard</span>
            </div>
            <p className="mt-4 text-sm text-gray-300">
              Advanced anomaly detection for security surveillance using deep learning.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Resources</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Documentation</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">API Reference</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Research Papers</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Contact</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="mailto:info@visionguard.com" className="text-gray-300 hover:text-white transition-colors">
                  info@visionguard.com
                </a>
              </li>
              <li>
                <p className="text-gray-300">ECE Department</p>
                <p className="text-gray-300">NSU, Dhaka</p>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-white-700 pt-8">
          <p className="text-center text-sm text-gray-300">
            © {new Date().getFullYear()} VisionGuard. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;