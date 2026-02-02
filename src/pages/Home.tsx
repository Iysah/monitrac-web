import { Link } from 'react-router-dom';
import CallToAction from '../components/CallToAction';
import FAQ from '../components/FAQ';

function Home() {
  return (
    <>
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
              
              <div className="flex flex-col items-center lg:items-start gap-6">
                <Link 
                  to="#features" 
                  className="bg-[var(--color-primary)] hover:bg-blue-700 text-white px-8 py-3.5 rounded-2xl font-semibold text-lg transition-all shadow-[0_0_20px_rgba(0,82,255,0.3)] hover:shadow-[0_0_30px_rgba(0,82,255,0.5)] hover:-translate-y-0.5"
                >
                  See Features
                </Link>
                
                <div className="flex items-center gap-3">
                  <button className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 flex items-center gap-2">
                    <svg className="h-6 w-6" viewBox="-3 0 262 262" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
                      <path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#4285F4" />
                      <path d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" fill="#34A853" />
                      <path d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" fill="#FBBC05" />
                      <path d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" fill="#EB4335" />
                    </svg>
                    <div className="text-left">
                      <div className="text-[10px] uppercase leading-none text-gray-400">Get it on</div>
                      <div className="text-sm font-bold">Google Play</div>
                    </div>
                  </button>
                  
                  <button className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 flex items-center gap-2">
                    <svg className="h-6 w-6" viewBox="-52.01 0 560.035 560.035" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                      <path d="M380.844 297.529c.787 84.752 74.349 112.955 75.164 113.314-.622 1.988-11.754 40.191-38.756 79.652-23.343 34.117-47.568 68.107-85.731 68.811-37.499.691-49.557-22.236-92.429-22.236-42.859 0-56.256 21.533-91.753 22.928-36.837 1.395-64.889-36.891-88.424-70.883-48.093-69.53-84.846-196.475-35.496-282.165 24.516-42.554 68.328-69.501 115.882-70.192 36.173-.69 70.315 24.336 92.429 24.336 22.1 0 63.59-30.096 107.208-25.676 18.26.76 69.517 7.376 102.429 55.552-2.652 1.644-61.159 35.704-60.523 106.559M310.369 89.418C329.926 65.745 343.089 32.79 339.498 0 311.308 1.133 277.22 18.785 257 42.445c-18.121 20.952-33.991 54.487-29.709 86.628 31.421 2.431 63.52-15.967 83.078-39.655" />
                    </svg>
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
      
      <FAQ />
      <CallToAction />
    </>
  );
}

export default Home;
