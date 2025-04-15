import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="py-4">
      <div className="flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-primary-600">
          VisionGuard
        </Link>
        <div className="flex gap-6">
          <Link to="/" className="text-gray-600 hover:text-primary-600 transition-colors">
            Home
          </Link>
          <Link to="/recent-works" className="text-gray-600 hover:text-primary-600 transition-colors">
            Recent Works
          </Link>
          <Link to="/experimental-setup" className="text-gray-600 hover:text-primary-600 transition-colors">
            Experimental Setup
          </Link>
          <Link to="/applications" className="text-gray-600 hover:text-primary-600 transition-colors">
            Applications
          </Link>
          <Link to="/demo" className="text-gray-600 hover:text-primary-600 transition-colors">
            Demo
          </Link>
          <Link to="/about" className="text-gray-600 hover:text-primary-600 transition-colors">
            About
          </Link>
          <Link to="/results" className="text-gray-600 hover:text-primary-600 transition-colors">
            Results
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;