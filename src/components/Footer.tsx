import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#121216] text-white py-16 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <img src="/monitrac-logo.png" alt="Monitrac" className="h-8 w-auto" />
              <span className="text-xl font-bold tracking-tight">Monitrac</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Take control of your finances with smart envelope budgeting. Track expenses, set goals, and build better money habits.
            </p>
            <div className="flex gap-3">
              <button className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg px-3 py-1.5 transition-colors flex items-center gap-2">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M3.609 1.814L13.792 12 3.61 22.186a2.95 2.95 0 01-.001-20.372zM15.208 13.414L7.326 21.295a4.343 4.343 0 003.553 1.144c1.134-.144 2.19-.696 2.977-1.57l1.352-1.35-6.046-6.105zM16.617 10.59l4.98-4.98a4.34 4.34 0 00-.928-2.616c-.84-.962-2.022-1.467-3.23-1.467-.424 0-.85.06-1.265.183l-5.6 5.6 6.043 3.28zM5.912 10.59L12.016 4.485a2.96 2.96 0 011.084-1.58L5.912 10.59z"/></svg>
                <div className="text-left">
                  <div className="text-[8px] uppercase leading-none text-gray-400">Get it on</div>
                  <div className="text-xs font-bold">Google Play</div>
                </div>
              </button>
              <button className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg px-3 py-1.5 transition-colors flex items-center gap-2">
                <svg className="h-5 w-5" viewBox="0 0 384 512" fill="currentColor"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5c0 82.6 54.4 240.4 126.9 240.4 26.4 0 36.9-19.5 68.8-19.5 31.2 0 40.5 19.5 68.1 19.5 30.1 0 54.1-39.7 75.8-74.5 21.6-35.1 27.6-62.1 27.6-63.5-56.5-22.3-56.5-86.8-52.5-107.2zm-67.4-159c16.3-20.3 26.6-48.7 23.7-74.5-24.1 1.2-52.9 16.2-70 36.2-15.1 17.5-27.4 46.2-24.2 73.9 26.7 2 54.8-16.1 70.5-35.6z"/></svg>
                <div className="text-left">
                  <div className="text-[8px] uppercase leading-none text-gray-400">Download on the</div>
                  <div className="text-xs font-bold">App Store</div>
                </div>
              </button>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-gray-400 text-xs font-bold tracking-wider uppercase mb-6">Product</h3>
            <ul className="space-y-4">
              <li><a href="#features" className="text-gray-300 hover:text-white text-sm transition-colors">Features</a></li>
              <li><a href="#screens" className="text-gray-300 hover:text-white text-sm transition-colors">Screens</a></li>
              <li><Link to="/download" className="text-gray-300 hover:text-white text-sm transition-colors">Download</Link></li>
              <li><a href="#faq" className="text-gray-300 hover:text-white text-sm transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-gray-400 text-xs font-bold tracking-wider uppercase mb-6">Legal</h3>
            <ul className="space-y-4">
              <li><Link to="/privacy" className="text-gray-300 hover:text-white text-sm transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-300 hover:text-white text-sm transition-colors">Terms of Service</Link></li>
              <li><Link to="/delete-account" className="text-gray-300 hover:text-white text-sm transition-colors">Account Deletion</Link></li>
              <li><Link to="/cookies" className="text-gray-300 hover:text-white text-sm transition-colors">Cookie Settings</Link></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/5 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Monitrac. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
