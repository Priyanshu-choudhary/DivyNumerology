import React from "react";
import Footer from "../Home/Footer";

const PrivacyPolicy = () => {
  return (
    <div>
    <div className="bg-yellow-50 min-h-screen py-10 px-4 md:px-20 text-gray-800">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8 mt-20">
        <h1 className="text-3xl font-bold text-orange-600 mb-4">DivyNumerology Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-6">Effective Date: April 6, 2025</p>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-orange-500 mb-2">Introduction</h2>
          <p>At DivyNumerology, your trust is our priority. We are dedicated to safeguarding your personal information. This Privacy Policy outlines how we collect, use, disclose, and protect your data when you access our website or utilize our numerology services.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-orange-500 mb-2">Information We Collect</h2>
          <p className="mb-2 font-medium">1. Personal Information:</p>
          <ul className="list-disc list-inside mb-2">
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Birth date</li>
            <li>Any additional details relevant to numerology services</li>
          </ul>
          <p className="mb-2 font-medium">2. Non-Personal Information:</p>
          <ul className="list-disc list-inside">
            <li>IP address</li>
            <li>Browser type</li>
            <li>Operating system</li>
            <li>Page views</li>
            <li>Website usage data</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-orange-500 mb-2">How We Use Your Information</h2>
          <ul className="list-disc list-inside">
            <li>Deliver Services: Including mobile number readings, name correction, compatibility analysis, and future predictions.</li>
            <li>Provide Remedies: Tailored numerology-based solutions and guidance.</li>
            <li>Communicate: Respond to inquiries, share updates, and send newsletters or promotions.</li>
            <li>Improve Experience: Analyze behavior to enhance website functionality and services.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-orange-500 mb-2">Information Disclosure</h2>
          <p>We do <strong>not</strong> sell or share your personal information with third parties, except:</p>
          <ul className="list-disc list-inside">
            <li>With Your Consent: If you permit us to do so.</li>
            <li>Legal Obligations: When required by law, regulation, or legal process.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-orange-500 mb-2">Data Security Measures</h2>
          <ul className="list-disc list-inside">
            <li>SSL Encryption: Secure data during transmission.</li>
            <li>Firewalls: Block unauthorized access.</li>
            <li>Restricted Access: Only authorized personnel can access sensitive data.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-orange-500 mb-2">Cookies</h2>
          <p>We use cookies to improve user experience and track site performance. You can control cookie preferences through your browser settings.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-orange-500 mb-2">Your Rights</h2>
          <ul className="list-disc list-inside">
            <li>Access: View the personal information we store.</li>
            <li>Correction: Request changes to incorrect data.</li>
            <li>Deletion: Request removal of your personal data.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-orange-500 mb-2">Disclaimers</h2>
          <ul className="list-disc list-inside">
            <li>No Guarantee: Services and remedies are provided "as-is."</li>
            <li>Limited Liability: We are not liable for any indirect damages.</li>
            <li>Variable Results: Numerology outcomes can vary for each person.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-orange-500 mb-2">Terms for Remedies</h2>
          <p>Our remedies are intended for support and insight. Their effects may vary, and we are not responsible for individual outcomes.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-orange-500 mb-2">Numerology Services Terms</h2>
          <ul className="list-disc list-inside">
            <li>Payment: Due at the time of service.</li>
            <li>Refunds: All payments are non-refundable.</li>
            <li>Cancellations: Must be rescheduled with a minimum 24-hour notice.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-orange-500 mb-2">Contact Us</h2>
          <p>If you have any questions or concerns, feel free to reach out:</p>
          <p className="mt-2">📧 <a href="mailto:contact@divynumerology.com" className="text-blue-600 underline">contact@divynumerology.com</a></p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-orange-500 mb-2">Updates to This Policy</h2>
          <p>We reserve the right to update this Privacy Policy at any time. Changes will take effect immediately upon being posted on our site.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-orange-500 mb-2">Acceptance of Policy</h2>
          <p>By using our website or services, you confirm that you have read and accepted the terms of this Privacy Policy.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-orange-500 mb-2">Governing Law</h2>
          <p>This Privacy Policy is governed by the laws of <strong>India</strong>.</p>
        </section>
      </div>

    </div>
    <Footer/>
    </div>
  );
};

export default PrivacyPolicy;