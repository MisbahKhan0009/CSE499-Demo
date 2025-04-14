import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Home from '@/pages/Home';
import Demo from '@/pages/Demo';
import About from '@/pages/About';
import RecentWorks from '@/pages/RecentWorks';
import ExperimentalSetup from '@/pages/ExperimentalSetup';
import Applications from '@/pages/Applications'; // Add this import
import { ROUTES } from '@/lib/constants';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col w-screen">
        <header className="bg-white shadow-sm">
          <div className="container mx-auto px-4">
            <Navbar />
          </div>
        </header>

        <main className="flex-1">
          <div className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/recent-works" element={<RecentWorks />} />
              <Route path="/experimental-setup" element={<ExperimentalSetup />} />
              <Route path="/applications" element={<Applications />} />
              <Route path="/demo" element={<Demo />} />
            </Routes>
          </div>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;