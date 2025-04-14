import React from "react";
import Footer from "../Home/Footer";

const ShippingAndDeliveryPolicy = () => {
  return (
    <div>
    <div className="bg-yellow-50 min-h-screen py-10 px-4 md:px-20 text-gray-800 ">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8 mt-20">
        <h1 className="text-3xl font-bold text-orange-600 mb-4">Shipping & Delivery Policy</h1>
        <p className="text-sm text-gray-500 mb-6">Last Updated: April 6, 2025</p>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-orange-500 mb-2">Introduction</h2>
          <p>DivyNumerology offers services such as in-person consultations, online consultations, and mobile number search services. This policy outlines the terms and conditions regarding the delivery of these services.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-orange-500 mb-2">Delivery of Services</h2>
          <ul className="list-disc list-inside">
            <li><strong>In-person consultations:</strong> Delivered at our designated location by appointment.</li>
            <li><strong>Online consultations:</strong> Conducted via phone, video call, or messaging platforms.</li>
            <li><strong>Mobile number search:</strong> We provide a list of available mobile numbers tailored to your numeroscope. You are responsible for purchasing and activating the number with a telecom vendor.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-orange-500 mb-2">Shipping</h2>
          <ul className="list-disc list-inside">
            <li>No physical products are shipped as all services are digital or in-person.</li>
            <li>Mobile number suggestions will be shared via email or phone.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-orange-500 mb-2">Delivery Timeline</h2>
          <ul className="list-disc list-inside">
            <li><strong>In-person consultations:</strong> Based on mutual scheduling and availability.</li>
            <li><strong>Online consultations:</strong> Scheduled and delivered as per availability.</li>
            <li><strong>Mobile number search:</strong> Results are typically shared within 10-15 business days.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-orange-500 mb-2">Your Responsibilities</h2>
          <ul className="list-disc list-inside">
            <li>Purchasing and activating the suggested mobile number is your responsibility.</li>
            <li>We are not liable for telecom-related processes or SIM activation.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-orange-500 mb-2">Limitations</h2>
          <p>Mobile number search services are currently limited to your regional/local area.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-orange-500 mb-2">Contact Us</h2>
          <p>If you have any questions regarding shipping or service delivery, feel free to contact us:</p>
          <p className="mt-2">📧 <a href="mailto:info@divynumerology.com" className="text-blue-600 underline">info@divynumerology.com</a></p>
          <p>📞 9012578333</p>
        </section>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default ShippingAndDeliveryPolicy;
