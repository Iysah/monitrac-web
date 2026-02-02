import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="relative overflow-hidden rounded-[3rem] bg-[#121216] border border-white/5 p-12 md:p-20 text-center">
        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-2xl pointer-events-none">
          <div className="absolute top-[-50%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[var(--color-primary)] opacity-10 blur-[120px] rounded-full mix-blend-screen"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center max-w-3xl mx-auto">
          {/* Icon */}
          <div className="mb-8 p-4 rounded-2xl bg-white/5 border border-white/10 shadow-[0_0_30px_rgba(0,82,255,0.15)]">
            <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
            Start your financial journey <span className="text-[var(--color-primary)]">today</span>
          </h2>
          
          <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-2xl">
            Download Monitrac free and take the first step toward financial freedom. No credit card required. No complicated setup. Just smart, simple budgeting.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl px-6 py-3 transition-colors flex items-center gap-3">
              <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor"><path d="M3.609 1.814L13.792 12 3.61 22.186a2.95 2.95 0 01-.001-20.372zM15.208 13.414L7.326 21.295a4.343 4.343 0 003.553 1.144c1.134-.144 2.19-.696 2.977-1.57l1.352-1.35-6.046-6.105zM16.617 10.59l4.98-4.98a4.34 4.34 0 00-.928-2.616c-.84-.962-2.022-1.467-3.23-1.467-.424 0-.85.06-1.265.183l-5.6 5.6 6.043 3.28zM5.912 10.59L12.016 4.485a2.96 2.96 0 011.084-1.58L5.912 10.59z"/></svg>
              <div className="text-left">
                <div className="text-[10px] uppercase leading-none text-gray-400">Get it on</div>
                <div className="text-base font-bold text-white">Google Play</div>
              </div>
            </button>
            <button className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl px-6 py-3 transition-colors flex items-center gap-3">
              <svg className="h-8 w-8" viewBox="0 0 384 512" fill="currentColor"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5c0 82.6 54.4 240.4 126.9 240.4 26.4 0 36.9-19.5 68.8-19.5 31.2 0 40.5 19.5 68.1 19.5 30.1 0 54.1-39.7 75.8-74.5 21.6-35.1 27.6-62.1 27.6-63.5-56.5-22.3-56.5-86.8-52.5-107.2zm-67.4-159c16.3-20.3 26.6-48.7 23.7-74.5-24.1 1.2-52.9 16.2-70 36.2-15.1 17.5-27.4 46.2-24.2 73.9 26.7 2 54.8-16.1 70.5-35.6z"/></svg>
              <div className="text-left">
                <div className="text-[10px] uppercase leading-none text-gray-400">Download on the</div>
                <div className="text-base font-bold text-white">App Store</div>
              </div>
            </button>
          </div>

          <div className="flex gap-8 text-sm font-medium text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Free to download
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Privacy first
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Works offline
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
