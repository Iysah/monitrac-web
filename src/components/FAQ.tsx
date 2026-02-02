import { useState } from 'react';

const faqData = [
  {
    category: "General",
    items: [
      {
        question: "What makes Monitrac different from other expense trackers?",
        answer: "Traditional apps often require you to manually fill out forms or link your bank account to a third-party server that \"scrapes\" your data. Monitrac is conversational—you just tell it what you spent. More importantly, the \"brain\" (the AI) lives entirely on your phone. Your financial secrets never leave your device."
      },
      {
        question: "Do I need an internet connection to use the AI?",
        answer: "No! Since the Large Language Model (LLM) is stored directly on your device, you can record expenses, categorize spending, and ask for insights while offline. Monitrac is perfect for tracking travel expenses in areas with no roaming data."
      }
    ]
  },
  {
    category: "Privacy & Security",
    items: [
      {
        question: "Does my data ever leave my phone?",
        answer: "Never. Monitrac is built with a \"Zero-Cloud\" architecture. Your transaction history, chat logs, and financial summaries are stored in an encrypted database on your device hardware, not on our servers."
      },
      {
        question: "Is the AI \"learning\" from my personal data?",
        answer: "The AI model on your phone learns your habits to give you better local insights, but it does **not** send that learning back to a central server. Unlike cloud-based AIs, your data is never used to train a global model or sold to advertisers."
      }
    ]
  },
  {
    category: "Technical & Data",
    items: [
      {
        question: "Does running an AI locally drain my battery?",
        answer: "We use highly optimized, mobile-specific LLMs designed to run efficiently on modern smartphone processors (like Apple’s Neural Engine or Android’s AI accelerators). While it uses slightly more power than a simple calculator, it is optimized to process your requests in seconds and then \"sleep\" to preserve battery."
      },
      {
        question: "What happens if I lose my phone?",
        answer: "Because we don't store your data in the cloud, we cannot \"restore\" it for you. We recommend using the **Encrypted Backup** feature to save a copy of your data to your personal iCloud or Google Drive—where you, and only you, hold the decryption key."
      },
      {
        question: "How do I get my data out of Monitrac?",
        answer: "You own your data. You can export your entire transaction history as a **CSV or JSON file** at any time through the Settings menu."
      }
    ]
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  // Flatten the FAQ data for a single list view while preserving categories in the question text if needed, 
  // or just merging them. Based on the UI, it's a single clean list.
  // We'll combine all items into one array for the UI loop.
  const allFaqs = faqData.flatMap(category => category.items);

  const toggleFAQ = (index: number) => {
    const key = `${index}`;
    setOpenIndex(openIndex === key ? null : key);
  };

  return (
    <div id="faq" className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="text-center mb-20">
        <span className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-[var(--color-primary)] text-xs font-bold tracking-wider uppercase mb-6">
          FAQ
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
          Common questions
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto text-lg leading-relaxed">
          Everything you need to know about Monitrac and how it can help you budget better.
        </p>
      </div>

      <div className="space-y-4">
        {allFaqs.map((item, index) => {
          const isOpen = openIndex === `${index}`;
          return (
            <div 
              key={index}
              className="bg-[#0a0a0c] border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 hover:border-white/10"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left group"
              >
                <span className="text-white font-medium text-lg pr-8">{item.question}</span>
                <span className={`flex-shrink-0 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center transition-all duration-300 group-hover:bg-white/10 ${isOpen ? 'rotate-180 bg-white/10' : ''}`}>
                  <svg className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-gray-400 leading-relaxed text-base">
                  {/* Render answer with markdown-like bold support */}
                  {item.answer.split('**').map((part, i) => 
                    i % 2 === 1 ? <strong key={i} className="text-white font-semibold">{part}</strong> : part
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="text-center mt-16">
        <p className="text-gray-500">
          Have more questions? <a href="mailto:support@monitrac.app" className="text-[var(--color-primary)] hover:text-blue-400 font-medium transition-colors">Get in touch</a>
        </p>
      </div>
    </div>
  );
};

export default FAQ;
