import { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ScrollToTop } from './ScrollToTop';
import logoImage from '../../assets/images/logo.png';

export function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/membership', label: 'Membership' },
    { path: '/services', label: 'Services', hasDropdown: true },
    { path: '/news', label: 'News & Updates' },
    { path: '/contact', label: 'Contact' },
  ];

  const serviceItems = [
    { label: 'Policy Engagement', path: '/services' },
    { label: 'Regulatory Compliance', path: '/services' },
    { label: 'Government & Institutional Liaison', path: '/services' },
    { label: 'Legislative Advocacy', path: '/services' },
    { label: 'County Government Collaboration', path: '/services' },
    { label: 'Transport Network Company Relations', path: '/services' },
    { label: 'Stakeholder Partnerships', path: '/services' },
  ];

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: 'var(--off-white)' }}>
      <ScrollToTop />
      {/* Header */}
      <header className="sticky top-0 z-50 shadow-md" style={{ backgroundColor: 'var(--navy-blue)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img 
                src={logoImage} 
                alt="Ehailers Logo" 
                className="h-12 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <div key={link.path} className="relative">
                  {link.hasDropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      <Link
                        to={link.path}
                        className={`text-white hover:opacity-80 transition-opacity flex items-center gap-1 ${
                          location.pathname === link.path ? 'border-b-2' : ''
                        }`}
                        style={{ borderColor: location.pathname === link.path ? 'var(--gold-highlight)' : 'transparent' }}
                      >
                        {link.label}
                        <ChevronDown className="w-4 h-4" />
                      </Link>
                      
                      {/* Services Dropdown */}
                      <AnimatePresence>
                        {isServicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="absolute top-full left-0 mt-2 w-72 bg-white rounded-lg shadow-xl py-2"
                          >
                            {serviceItems.map((item, index) => (
                              <Link
                                key={index}
                                to={item.path}
                                className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                                style={{ color: 'var(--graphite-black)' }}
                                onClick={() => setIsServicesOpen(false)}
                              >
                                {item.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={link.path}
                      className={`text-white hover:opacity-80 transition-opacity ${
                        location.pathname === link.path ? 'border-b-2' : ''
                      }`}
                      style={{ borderColor: location.pathname === link.path ? 'var(--gold-highlight)' : 'transparent' }}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                to="/membership"
                className="px-6 py-2 rounded-full text-white transition-all hover:scale-105 shadow-lg"
                style={{ background: 'linear-gradient(135deg, var(--red-cta), #B91234)' }}
              >
                Join Us
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white p-2"
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden"
              style={{ backgroundColor: 'var(--navy-blue)' }}
            >
              <div className="px-4 py-4 space-y-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block text-white hover:opacity-80 transition-opacity py-2 ${
                      location.pathname === link.path ? 'border-l-4 pl-3' : 'pl-4'
                    }`}
                    style={{ borderColor: location.pathname === link.path ? 'var(--gold-highlight)' : 'transparent' }}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  to="/membership"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-6 py-2 rounded-full text-white text-center mt-4"
                  style={{ background: 'linear-gradient(135deg, var(--red-cta), #B91234)' }}
                >
                  Join Us
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="mt-auto" style={{ backgroundColor: 'var(--navy-blue)', color: 'white' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About Section */}
            <div>
              <div className="text-white mb-4">
                <span className="text-3xl font-bold" style={{ color: 'var(--gold-highlight)' }}>eHailers</span>
              </div>
              <p className="text-sm text-gray-300">
                The Amalgamation of Digital Transport Organisations – Kenya. Championing fair labour practices and strengthening Kenya's digital mobility ecosystem.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="mb-4" style={{ color: 'var(--gold-highlight)' }}>Quick Links</h3>
              <ul className="space-y-2 text-sm">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="text-gray-300 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="mb-4" style={{ color: 'var(--gold-highlight)' }}>Contact Us</h3>
              <div className="text-sm text-gray-300 space-y-2">
                <p>No. 8, Milimani Business Park</p>
                <p>Jakaya Kikwete Road, Nairobi</p>
                <p>0721 217 577 | 0727 583 858</p>
                <p>info@ehailersfoundation.org</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2026 Ehailers Transport Operators Umbrella Association. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}