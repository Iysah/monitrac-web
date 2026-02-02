import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="relative overflow-hidden min-h-[calc(100vh-80px)] flex items-center">
      {/* Background Gradient Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-blue-600 opacity-10 blur-[120px] rounded-full mix-blend-screen"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600 opacity-10 blur-[100px] rounded-full mix-blend-screen"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Text Content */}
          <div className="text-center lg:text-left space-y-8">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              Take control of your money with <span className="text-blue-500">privacy-first AI</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Monitrac is a mobile-first, privacy-centric expense tracker that utilizes on-device Large Language Models (LLMs). It allows users to manage their finances entirely through a conversational interface.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link 
                to="#features" 
                className="bg-[var(--color-primary)] hover:bg-blue-700 text-white px-8 py-3.5 rounded-2xl font-semibold text-lg transition-all shadow-[0_0_20px_rgba(0,82,255,0.3)] hover:shadow-[0_0_30px_rgba(0,82,255,0.5)] hover:-translate-y-0.5"
              >
                See Features
              </Link>
              
              <div className="flex items-center gap-3">
                <button className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl px-4 py-2 transition-colors flex items-center gap-2">
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor"><path d="M3.609 1.814L13.792 12 3.61 22.186a2.95 2.95 0 01-.001-20.372zM15.208 13.414L7.326 21.295a4.343 4.343 0 003.553 1.144c1.134-.144 2.19-.696 2.977-1.57l1.352-1.35-6.046-6.105zM16.617 10.59l4.98-4.98a4.34 4.34 0 00-.928-2.616c-.84-.962-2.022-1.467-3.23-1.467-.424 0-.85.06-1.265.183l-5.6 5.6 6.043 3.28zM5.912 10.59L12.016 4.485a2.96 2.96 0 011.084-1.58L5.912 10.59z"/></svg>
                  <div className="text-left">
                    <div className="text-[10px] uppercase leading-none text-gray-400">Get it on</div>
                    <div className="text-sm font-bold">Google Play</div>
                  </div>
                </button>
                
                <button className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl px-4 py-2 transition-colors flex items-center gap-2">
                  <svg className="h-6 w-6" viewBox="0 0 384 512" fill="currentColor"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5c0 82.6 54.4 240.4 126.9 240.4 26.4 0 36.9-19.5 68.8-19.5 31.2 0 40.5 19.5 68.1 19.5 30.1 0 54.1-39.7 75.8-74.5 21.6-35.1 27.6-62.1 27.6-63.5-56.5-22.3-56.5-86.8-52.5-107.2zm-67.4-159c16.3-20.3 26.6-48.7 23.7-74.5-24.1 1.2-52.9 16.2-70 36.2-15.1 17.5-27.4 46.2-24.2 73.9 26.7 2 54.8-16.1 70.5-35.6z"/></svg>
                  <div className="text-left">
                    <div className="text-[10px] uppercase leading-none text-gray-400">Download on the</div>
                    <div className="text-sm font-bold">App Store</div>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Image & Floating Elements */}
          <div className="relative mt-12 lg:mt-0 flex justify-center">
            {/* Phone Mockup Container */}
            <div className="relative w-[280px] sm:w-[320px] z-10 rotate-[-5deg] hover:rotate-0 transition-transform duration-500 ease-out">
              <div className="absolute inset-0 bg-black rounded-[40px] shadow-2xl"></div>
              <div className="relative overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] h-[600px]">
                <img src="/mobile-preview.png" alt="App Preview" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Floating Elements */}
            {/* Envelope Budget */}
            <div className="absolute top-20 left-0 lg:-left-12 bg-blue-200 text-gray-900 px-4 py-3 rounded-2xl shadow-xl font-bold text-sm transform -rotate-12 animate-pulse z-20 hidden sm:block">
              Envelope Budget
            </div>
            
            {/* Works Offline */}
            <div className="absolute bottom-40 -left-4 lg:-left-20 bg-[#1f1f22] border border-white/10 text-white px-5 py-4 rounded-2xl shadow-2xl text-center transform rotate-6 z-20 hidden sm:block">
              <div className="text-xs text-gray-400 mb-1">Status</div>
              <div className="font-bold">Works Offline</div>
            </div>

            {/* Savings Goals */}
            <div className="absolute bottom-20 right-0 lg:-right-8 bg-[#6EE7B7] text-gray-900 px-4 py-3 rounded-2xl shadow-xl font-bold text-sm transform -rotate-6 z-20 hidden sm:block">
              Savings Goals
            </div>

            {/* 50/30/20 Rule */}
            <div className="absolute top-10 right-4 lg:-right-4 bg-transparent border-2 border-[var(--color-primary)] text-white px-4 py-2 rounded-xl backdrop-blur-sm font-bold text-sm transform rotate-12 z-0 hidden sm:block">
              50/30/20 Rule
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
