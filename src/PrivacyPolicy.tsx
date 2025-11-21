import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors">
            <ArrowLeft className="mr-2" size={20} />
            Back to Home
          </Link>
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        <p className="text-gray-600 mb-8">Last Updated: 21 November 2025</p>

        <div className="prose prose-lg max-w-none text-gray-600">
          <p className="mb-6">
            WaitWhiz Technologies (“WaitWhiz”, “we”, “our”, or “us”) is committed to protecting your privacy. This Privacy Policy describes how we collect, use, store, disclose, and protect your information when you use our services, including our website, queue management platform, WhatsApp-based notifications, and any related applications (collectively, the “Services”).
          </p>
          <p className="mb-8">
            By accessing or using our Services, you agree to this Privacy Policy. If you do not agree, please do not use our Services.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 mb-3">1.1 Personal Information</h3>
          <p className="mb-4">We may collect the following personal information when you interact with our Services:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Name</li>
            <li>Phone number</li>
            <li>Email address</li>
            <li>Device information</li>
            <li>WhatsApp number</li>
            <li>Table/queue details and visit history</li>
            <li>Any other information you provide voluntarily</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">1.2 Usage Data</h3>
          <p className="mb-4">We may collect data on how the Services are accessed and used, including:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Browser type</li>
            <li>IP address</li>
            <li>Pages visited</li>
            <li>Time spent on pages</li>
            <li>Interaction logs</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">1.3 Cookies & Tracking</h3>
          <p className="mb-8">We use cookies and similar technologies to improve user experience, analyze performance, and personalize the platform.</p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
          <p className="mb-4">We may use the information we collect to:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Provide and operate the WaitWhiz queue management system</li>
            <li>Send WhatsApp notifications, calls, alerts, and reminders</li>
            <li>Improve and optimize our platform</li>
            <li>Offer customer support</li>
            <li>Communicate updates, offers, or service-related messages</li>
            <li>Maintain system security and prevent misuse</li>
            <li>Comply with legal obligations</li>
          </ul>
          <p className="mb-8">We do not sell, rent, or trade your personal information to third parties for marketing purposes.</p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Sharing of Information</h2>
          <p className="mb-4">We may share your information with:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Service providers (e.g., WhatsApp Business API providers, hosting providers)</li>
            <li>Business partners such as restaurants/outlets using our system for customer management</li>
            <li>Legal authorities when required by applicable law</li>
            <li>Analytics and monitoring tools to improve platform performance</li>
          </ul>
          <p className="mb-8">All third-party partners are required to maintain data confidentiality and follow lawful data practices.</p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Security</h2>
          <p className="mb-8">
            We implement industry-standard security measures to protect your personal information. Although we strive to use commercially acceptable methods, no transmission over the internet is 100% secure. Therefore, we cannot guarantee absolute security.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Retention</h2>
          <p className="mb-4">We retain your personal data only for as long as necessary for:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Providing our Services</li>
            <li>Fulfilling contractual obligations</li>
            <li>Meeting legal, tax, or regulatory requirements</li>
          </ul>
          <p className="mb-8">You may request data deletion at any time (details in Section 8).</p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Rights</h2>
          <p className="mb-4">Depending on your jurisdiction, you may have the right to:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Access your data</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to or restrict processing</li>
            <li>Withdraw consent</li>
            <li>Request a copy of your data</li>
          </ul>
          <p className="mb-8">We will respond to all valid requests within a reasonable timeframe.</p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Children’s Privacy</h2>
          <p className="mb-8">
            Our Services are not intended for use by children under the age of 13. We do not knowingly collect personal data from children. If you believe a child has provided us information, please contact us immediately.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Data Deletion Requests</h2>
          <p className="mb-4">If you would like us to delete your personal data, you can submit a request by emailing:</p>
          <p className="mb-4">
            📧 <a href="mailto:sandeep@waitwhiz.in" className="text-blue-600 hover:underline">sandeep@waitwhiz.in</a>
          </p>
          <p className="mb-8">Your request will be processed within 7–30 working days, depending on the complexity and legal requirements.</p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Changes to This Privacy Policy</h2>
          <p className="mb-4">
            We may update this Privacy Policy from time to time. The “Last Updated” date at the top indicates the latest revision. We encourage you to review this page periodically.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
