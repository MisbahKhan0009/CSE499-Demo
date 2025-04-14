import { Eye, Github, Twitter, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-emerald-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2 group">
              <Eye className="h-6 w-6 group-hover:animate-pulse" />
              <span className="text-xl font-bold">Vision Guard</span>
            </Link>
            <p className="text-emerald-200">
              Transforming video surveillance with advanced AI technology.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com" className="hover:text-emerald-300 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" className="hover:text-emerald-300 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" className="hover:text-emerald-300 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-emerald-200 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/recent-works" className="text-emerald-200 hover:text-white transition-colors">Recent Works</Link>
              </li>
              <li>
                <Link to="/setup" className="text-emerald-200 hover:text-white transition-colors">Setup</Link>
              </li>
              <li>
                <Link to="/applications" className="text-emerald-200 hover:text-white transition-colors">Applications</Link>
              </li>
              <li>
                <Link to="/demo" className="text-emerald-200 hover:text-white transition-colors">Demo</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-emerald-200 hover:text-white transition-colors">Documentation</a>
              </li>
              <li>
                <a href="#" className="text-emerald-200 hover:text-white transition-colors">API Reference</a>
              </li>
              <li>
                <a href="#" className="text-emerald-200 hover:text-white transition-colors">Blog</a>
              </li>
              <li>
                <a href="#" className="text-emerald-200 hover:text-white transition-colors">Case Studies</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-emerald-200">
                Email: contact@visionguard.ai
              </li>
              <li className="text-emerald-200">
                Phone: +1 (555) 123-4567
              </li>
              <li className="text-emerald-200">
                Address: 123 AI Street<br />
                Tech Valley, CA 94025
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-emerald-800 mt-8 pt-8 text-center text-emerald-200">
          <p>&copy; {new Date().getFullYear()} Vision Guard AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}