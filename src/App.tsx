import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Eye, Menu, X } from 'lucide-react';
import { useState } from 'react';
import Home from './components/Home';
import RecentWorks from './components/RecentWorks';
import ExperimentalSetup from './components/ExperimentalSetup';
import Applications from './components/Applications';
import Demo from './components/Demo';
import Footer from './components/Footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <nav className="bg-emerald-800/95 backdrop-blur-sm text-white p-4 sticky top-0 z-50 shadow-lg">
          <div className="container mx-auto flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2 group">
              <Eye className="h-6 w-6 group-hover:animate-pulse" />
              <span className="text-xl font-bold">Vision Guard</span>
            </Link>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6">
              <Link to="/" className="hover:text-emerald-200 transition-colors duration-200">Home</Link>
              <Link to="/recent-works" className="hover:text-emerald-200 transition-colors duration-200">Recent Works</Link>
              <Link to="/setup" className="hover:text-emerald-200 transition-colors duration-200">Setup</Link>
              <Link to="/applications" className="hover:text-emerald-200 transition-colors duration-200">Applications</Link>
              <Link to="/demo" className="hover:text-emerald-200 transition-colors duration-200">Demo</Link>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className={`md:hidden absolute top-full left-0 right-0 bg-emerald-800/95 backdrop-blur-sm transition-all duration-300 ${
            isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
          }`}>
            <div className="flex flex-col space-y-4 p-4">
              <Link to="/" className="hover:text-emerald-200 transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/recent-works" className="hover:text-emerald-200 transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>Recent Works</Link>
              <Link to="/setup" className="hover:text-emerald-200 transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>Setup</Link>
              <Link to="/applications" className="hover:text-emerald-200 transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>Applications</Link>
              <Link to="/demo" className="hover:text-emerald-200 transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>Demo</Link>
            </div>
          </div>
        </nav>

        <main className="container mx-auto px-4 py-8 flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recent-works" element={<RecentWorks />} />
            <Route path="/setup" element={<ExperimentalSetup />} />
            <Route path="/applications" element={<Applications />} />
            <Route path="/demo" element={<Demo />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;