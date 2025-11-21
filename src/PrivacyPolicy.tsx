import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="mb-8">
                    <Link
                        to="/"
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
                    >
                        <ArrowLeft className="mr-2" size={20} />
                        Back to Home
                    </Link>
                </div>

                <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
                <p className="text-gray-600 mb-8">Last Updated: 21 November 2025</p>

                <div className="prose prose-lg max-w-none text-gray-600">
                    <p className="mb-6">
                        WaitWhiz Technologies (“WaitWhiz”, “we”, “our”, or “us”) operates the WaitWhiz queue
                        management system, restaurant tools, and related digital services (collectively, the
                        “Services”). This Privacy Policy explains how we collect, use, store, and share your
                        information, including when you interact with us through Meta (Facebook) products such
                        as WhatsApp and Facebook.
                    </p>
                    <p className="mb-8">
                        By accessing or using our Services, you agree to this Privacy Policy. If you do not
                        agree, please do not use our Services.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>

                    <h3 className="text-xl font-semibold text-gray-900 mb-3">1.1 Personal Information</h3>
                    <p className="mb-4">We may collect the following personal information when you interact with our Services:</p>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li>Name</li>
                        <li>Phone number / WhatsApp number</li>
                        <li>Email address</li>
                        <li>Device information</li>
                        <li>Table/queue details and visit history</li>
                        <li>Business/restaurant information (for business users)</li>
                        <li>Any other information you provide voluntarily</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-900 mb-3">1.2 Log &amp; Usage Data</h3>
                    <p className="mb-4">We may collect data on how the Services are accessed and used, including:</p>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li>Browser type and version</li>
                        <li>IP address</li>
                        <li>Operating system and device type</li>
                        <li>Pages visited and features used</li>
                        <li>Time and date of your visits</li>
                        <li>Interaction logs related to queue and table management</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-900 mb-3">1.3 Cookies &amp; Tracking Technologies</h3>
                    <p className="mb-8">
                        We use cookies and similar tracking technologies to operate and improve our website and
                        Services, authenticate sessions, remember preferences, and analyze performance. You can
                        control cookies through your browser settings, but some features of the Services may not
                        function properly if cookies are disabled.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
                    <p className="mb-4">We may use the information we collect to:</p>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li>Provide, operate, and maintain the WaitWhiz queue management system</li>
                        <li>Send WhatsApp notifications, messages, calls, alerts, and reminders</li>
                        <li>Connect you with partner businesses (such as restaurants or outlets) when you join their queues</li>
                        <li>Improve, personalize, and optimize our platform and user experience</li>
                        <li>Monitor usage, perform analytics, and troubleshoot issues</li>
                        <li>Offer customer support and respond to your requests</li>
                        <li>Communicate updates, service-related information, and important notices</li>
                        <li>Maintain system security, prevent fraud, and detect misuse</li>
                        <li>Comply with legal, regulatory, and contractual obligations</li>
                    </ul>
                    <p className="mb-8">
                        We do not sell, rent, or trade your personal information to third parties for marketing
                        purposes.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Sharing of Information</h2>
                    <p className="mb-4">We may share your information with:</p>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li>
                            <strong>Service providers</strong> (e.g., WhatsApp Business API providers, cloud hosting
                            providers, analytics and monitoring tools) who help us operate and support the Services.
                        </li>
                        <li>
                            <strong>Partner businesses</strong> such as restaurants, cafés, or outlets using our system
                            for queue and customer management, but only in connection with the specific business you
                            interact with.
                        </li>
                        <li>
                            <strong>Legal and regulatory authorities</strong> when required by applicable law,
                            regulation, legal process, or enforceable governmental request.
                        </li>
                    </ul>
                    <p className="mb-8">
                        All third-party partners are required to maintain data confidentiality and follow lawful
                        data protection practices consistent with this Privacy Policy and applicable regulations.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Use of Meta (Facebook) Products</h2>
                    <p className="mb-4">
                        Our Services integrate with Meta (Facebook) products, including WhatsApp and, in some
                        cases, Facebook login or related tools. When you interact with us through these products:
                    </p>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li>
                            We may receive information that you choose to share with us via WhatsApp messages or
                            forms.
                        </li>
                        <li>
                            Any data you share via Facebook or WhatsApp is also subject to Meta’s own terms and
                            privacy policies.
                        </li>
                        <li>
                            We use this data only to provide and improve our Services and do not use it to build
                            independent profiles for advertising outside of the Services.
                        </li>
                    </ul>

                    <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Security</h2>
                    <p className="mb-8">
                        We implement industry-standard security measures designed to protect your personal
                        information, including encryption in transit where appropriate, access controls, and
                        secure infrastructure. However, no method of transmission over the internet or method of
                        electronic storage is completely secure, and we cannot guarantee absolute security.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Data Retention</h2>
                    <p className="mb-4">We retain your personal data only for as long as necessary for:</p>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li>Providing and improving our Services</li>
                        <li>Fulfilling our contractual obligations</li>
                        <li>Resolving disputes and enforcing our agreements</li>
                        <li>Meeting legal, tax, or regulatory requirements</li>
                    </ul>
                    <p className="mb-8">
                        When personal data is no longer required, we will delete or anonymize it in a secure
                        manner, unless a longer retention period is required or permitted by law.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Your Rights</h2>
                    <p className="mb-4">Depending on your jurisdiction, you may have the right to:</p>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li>Access the personal data we hold about you</li>
                        <li>Request correction of inaccurate or incomplete data</li>
                        <li>Request deletion of your personal data</li>
                        <li>Object to or restrict certain types of processing</li>
                        <li>Withdraw consent where processing is based on consent</li>
                        <li>Request a copy of your data in a commonly used format (where applicable)</li>
                    </ul>
                    <p className="mb-8">
                        We will respond to all valid requests within a reasonable timeframe and in accordance
                        with applicable law. We may require you to verify your identity before responding to
                        certain requests.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Children’s Privacy</h2>
                    <p className="mb-8">
                        Our Services are not intended for use by children under the age of 13, and we do not
                        knowingly collect personal data from children. If you believe that a child has provided
                        us with personal information, please contact us immediately so that we can take
                        appropriate action, including deleting such information where required.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Data Deletion Requests</h2>
                    <p className="mb-4">
                        If you would like us to delete your personal data associated with our Services, you can
                        submit a request by emailing:
                    </p>
                    <p className="mb-4">
                        📧{' '}
                        <a
                            href="mailto:sandeep@waitwhiz.in"
                            className="text-blue-600 hover:underline"
                        >
                            sandeep@waitwhiz.in
                        </a>
                    </p>
                    <p className="mb-8">
                        We will review and process your request within 7–30 working days, subject to verification
                        of your identity and provided that we are not required to retain certain data for legal,
                        regulatory, or legitimate business purposes.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Third-Party Links and Services</h2>
                    <p className="mb-8">
                        Our website and Services may contain links to third-party websites or services that are
                        not operated by us. We are not responsible for the content, privacy policies, or
                        practices of any third-party sites or services. We encourage you to review the privacy
                        policies of every site you visit.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to This Privacy Policy</h2>
                    <p className="mb-4">
                        We may update this Privacy Policy from time to time. The “Last Updated” date at the top
                        of this page indicates the latest revision. Any changes become effective when we post the
                        updated Privacy Policy on this page.
                    </p>
                    <p className="mb-8">
                        Your continued use of the Services after any changes signifies your acceptance of the
                        updated Privacy Policy. If you do not agree with the updated terms, you should stop using
                        the Services.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Us</h2>
                    <p className="mb-4">
                        If you have any questions, concerns, or requests regarding this Privacy Policy or our
                        data practices, you can contact us at:
                    </p>
                    <ul className="list-disc pl-6 mb-8 space-y-2">
                        <li>
                            Email (Data Deletion &amp; Privacy Requests):{' '}
                            <a
                                href="mailto:sandeep@waitwhiz.in"
                                className="text-blue-600 hover:underline"
                            >
                                sandeep@waitwhiz.in
                            </a>
                        </li>
                        <li>
                            General Support:{" "}
                            <a
                                href="mailto:support@waitwhiz.in"
                                className="text-blue-600 hover:underline"
                            >
                                support@waitwhiz.in
                            </a>
                        </li>
                        <li>Website: www.waitwhiz.in</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
