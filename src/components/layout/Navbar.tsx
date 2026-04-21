import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaDumbbell } from 'react-icons/fa';

const navItems = [
  { label: 'Inicio', path: '/' },
  { label: 'Planes', path: '/planes' },
  { label: 'Clases', path: '/clases' },
  { label: 'Instalaciones', path: '/instalaciones' },
  { label: 'Contacto', path: '/contacto' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50 
        transition-all duration-300
        ${scrolled ? 'bg-dark/95 backdrop-blur-sm py-4' : 'bg-transparent py-6'}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <FaDumbbell className="text-primary text-2xl" />
            <span className="text-2xl font-bold tracking-wider">
              FORCE<span className="text-primary">GYM</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`
                  text-sm uppercase tracking-wider font-medium 
                  transition-colors duration-300
                  ${location.pathname === item.path 
                    ? 'text-primary' 
                    : 'text-white hover:text-primary'}
                `}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-dark border-t border-gray-800"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`
                    block text-base uppercase tracking-wider font-medium 
                    transition-colors duration-300 py-2
                    ${location.pathname === item.path 
                      ? 'text-primary' 
                      : 'text-white hover:text-primary'}
                  `}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
