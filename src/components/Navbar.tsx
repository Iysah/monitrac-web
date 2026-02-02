import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/20 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <img src="/monitrac-logo.png" alt="Monitrac" className="h-8 w-auto" />
              <span className="text-xl font-bold tracking-tight text-white">Monitrac</span>
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors px-3 py-2 rounded-md text-sm font-medium">Features</a>
              <a href="#screens" className="text-gray-300 hover:text-white transition-colors px-3 py-2 rounded-md text-sm font-medium">Screens</a>
              <a href="#download" className="text-gray-300 hover:text-white transition-colors px-3 py-2 rounded-md text-sm font-medium">Download</a>
              <a href="#faq" className="text-gray-300 hover:text-white transition-colors px-3 py-2 rounded-md text-sm font-medium">FAQ</a>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/download"
              className="bg-[var(--color-primary)] hover:bg-blue-700 text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-[0_0_15px_rgba(0,82,255,0.4)] hover:shadow-[0_0_25px_rgba(0,82,255,0.6)]"
            >
              Get the App
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0a0a0c] border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#features" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Features</a>
            <a href="#screens" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Screens</a>
            <a href="#download" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Download</a>
            <a href="#faq" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">FAQ</a>
            <Link to="/download" className="bg-[var(--color-primary)] text-white block px-3 py-2 rounded-md text-base font-medium mt-4 text-center">
              Get the App
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
