import React from "react";
import Footer from "../Home/Footer";

const CancellationRefundPolicy = () => {
  return (
    <div>
    <div className="bg-yellow-50 min-h-screen py-10 px-4 md:px-20 text-gray-800">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8 mt-20">
        <h1 className="text-3xl font-bold text-orange-600 mb-4">Cancellation & Refund Policy</h1>
        <p className="text-sm text-gray-500 mb-6">Last Updated: April 6, 2025</p>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-orange-500 mb-2">Introduction</h2>
          <p>
            DivyNumerology is committed to delivering high-quality numerology services. This Cancellation and Refund Policy outlines our terms for service cancellations and refunds.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-orange-500 mb-2">Cancellation Policy</h2>
          <ul className="list-disc list-inside">
            <li>Cancellations must be submitted in writing to <a href="mailto:info@divynumerology.com" className="text-blue-600 underline">info@divynumerology.com</a> or via phone at <strong>9012578333</strong>.</li>
            <li>Cancellations are processed within 12–24 hours.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-orange-500 mb-2">Refund Policy</h2>
          <ul className="list-disc list-inside">
            <li>No refunds are provided if the customer cancels after booking a slot.</li>
            <li>Refunds are available if cancellation occurs at least 12–24 hours before the scheduled service.</li>
            <li>All refunds are processed within 7–10 business days.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-orange-500 mb-2">Mobile Number Search Services</h2>
          <ul className="list-disc list-inside">
            <li>Payments must be made in advance.</li>
            <li>No refunds after booking and payment.</li>
            <li>Charges apply solely for the search and recommendation based on your numeroscope. Customers are responsible for acquiring the number from a telecom provider and paying applicable SIM charges.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-orange-500 mb-2">Refund Structure</h2>
          <ul className="list-disc list-inside">
            <li><strong>Full Refund:</strong> If the service is cancelled before booking a slot.</li>
            <li><strong>No Refund:</strong> If the service is cancelled after booking a slot.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-orange-500 mb-2">Exceptions</h2>
          <ul className="list-disc list-inside">
            <li>Customized services are non-refundable.</li>
            <li>Services cancelled due to the user's non-compliance with our Terms of Service are also non-refundable.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-orange-500 mb-2">Dispute Resolution</h2>
          <ul className="list-disc list-inside">
            <li>All disputes will be resolved via negotiation, mediation, or arbitration.</li>
            <li>This policy is governed by the laws of <strong>India</strong>.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-orange-500 mb-2">Contact Us</h2>
          <p>
            For any cancellation or refund-related inquiries, please contact:
          </p>
          <p className="mt-2">📧 <a href="mailto:info@divynumerology.com" className="text-blue-600 underline">info@divynumerology.com</a></p>
          <p>📞 9012578333</p>
        </section>

        <section className="mt-6">
          <p>By using our services, you acknowledge that you have read, understood, and agreed to this Cancellation and Refund Policy.</p>
        </section>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default CancellationRefundPolicy;
