import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-left">
      <h1 className="text-3xl font-bold mb-2">Privacy Policy for Monitrac</h1>
      <p className="text-sm text-gray-400 mb-6">Last Updated: February 2, 2026</p>
      
      <p className="mb-6">
        At Monitrac, we believe your financial data is your business, and yours alone. Our "Privacy-by-Design" architecture ensures that your sensitive information never leaves your device.
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">1. The Core Principle: Local Processing</h2>
        <p className="mb-2">Unlike traditional expense trackers, Monitrac uses on-device Large Language Models (LLMs).</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-white">No Cloud Storage:</strong> Your chat history, transaction details, and financial summaries are stored locally on your device.
          </li>
          <li>
            <strong className="text-white">No Cloud Processing:</strong> When you speak or type to Monitrac, the "thinking" happens on your phone’s hardware. We do not transmit your natural language queries to our servers for processing.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">2. Data We Collect (and Why)</h2>
        <p className="mb-2">Because we operate a mobile-first app and a website, we distinguish between Financial Data and Usage Metadata:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-white">Financial Data:</strong> (Transaction amounts, categories, merchant names). We never see this. It resides in your encrypted local storage.
          </li>
          <li>
            <strong className="text-white">Usage Metadata:</strong> We may collect anonymous technical data (e.g., device type, OS version, app crashes) to improve performance. This data is de-identified and cannot be linked back to your personal finances.
          </li>
          <li>
            <strong className="text-white">Website Data:</strong> If you visit our website, we may use basic, privacy-friendly cookies to understand traffic patterns. We do not track you across the web.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">3. How the AI Works</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>The LLM powering Monitrac is downloaded to your device upon installation.</li>
          <li>It does not learn from your data to improve a global model.</li>
          <li>Any "learning" or personalization stays within your local environment.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">4. Third-Party Access</h2>
        <p>
          We do not sell, rent, or trade your data. Because we don't have your financial data in the first place, we cannot provide it to advertisers, data brokers, or government agencies, even if requested.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">5. Security</h2>
        <p>
          While we secure the app's local environment, the security of your data also depends on your device security (e.g., FaceID, Passcode). We recommend keeping your device OS updated to ensure the latest encryption standards are applied to your local storage.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">6. Your Rights</h2>
        <p className="mb-2">Depending on your location (such as the EU or California), you have the right to access, delete, or port your data. Since Monitrac stores data locally, you can exercise these rights at any time by:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Exporting your data via the app settings.</li>
          <li>Deleting the app (which wipes all locally stored financial data).</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">7. Changes to This Policy</h2>
        <p>
          We may update this policy as we add new features. However, our commitment to on-device processing is a fundamental pillar of Monitrac and will not change.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
        <p>
          If you have questions about our privacy-first approach, please contact us at: <a href="mailto:support@monitrac.com" className="text-primary hover:underline">support@monitrac.com</a>
        </p>
      </section>
    </div>
  );
};

export default Privacy;
