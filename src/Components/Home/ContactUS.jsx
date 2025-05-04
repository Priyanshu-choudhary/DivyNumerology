import React from "react";
import { FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import Footer from "./Footer";

const ContactUs = () => {
  const whatsappNumber = "+919012312552";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}`;

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-yellow-50 to-orange-50 pt-24 pb-16">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgZmlsbD0iI2ZmYzEwNyIgY3g9IjMwIiBjeT0iMzAiIHI9IjEwIi8+PC9nPjwvc3ZnPg==')]"></div>
        </div>
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Get in <span className="text-orange-600">Touch</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              We'd love to hear from you! Reach out for numerology consultations, questions, or to learn more about our services.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* WhatsApp Card */}
            <div className="bg-orange-50 rounded-xl p-8 shadow-md border-l-4 border-orange-500 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-orange-100 p-3 rounded-full mr-4">
                  <FaWhatsapp className="text-orange-600 text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">WhatsApp Chat</h3>
              </div>
              <p className="text-gray-700 mb-6">
                For quick questions or to schedule a consultation, message us directly on WhatsApp.
              </p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white font-medium rounded-full hover:bg-orange-600 transition-colors duration-300 shadow-md"
              >
                <FaWhatsapp className="mr-2" />
                Chat on WhatsApp
              </a>
            </div>

            {/* Phone Card */}
            <div className="bg-orange-50 rounded-xl p-8 shadow-md border-l-4 border-orange-500 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-orange-100 p-3 rounded-full mr-4">
                  <FaPhone className="text-orange-600 text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Phone Call</h3>
              </div>
              <p className="text-gray-700 mb-6">
                Speak directly with our team for personal numerology consultations.
              </p>
              <a
                href={`tel:${whatsappNumber}`}
                className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white font-medium rounded-full hover:bg-orange-600 transition-colors duration-300 shadow-md"
              >
                <FaPhone className="mr-2" />
                Call +91 9012312552
              </a>
            </div>

            {/* Email Card */}
            <div className="bg-orange-50 rounded-xl p-8 shadow-md border-l-4 border-orange-500 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-orange-100 p-3 rounded-full mr-4">
                  <FaEnvelope className="text-orange-600 text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Email Us</h3>
              </div>
              <p className="text-gray-700 mb-6">
                For detailed inquiries or documentation, send us an email.
              </p>
              <a
                href="mailto:contact@divynumerology.com"
                className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white font-medium rounded-full hover:bg-orange-600 transition-colors duration-300 shadow-md"
              >
                <FaEnvelope className="mr-2" />
                contact@divynumerology.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form + Info Section */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
                  >
                    <option value="">Select a subject</option>
                    <option value="consultation">Numerology Consultation</option>
                    <option value="workshop">Workshop Inquiry</option>
                    <option value="general">General Question</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-orange-100 p-3 rounded-full mr-4">
                      <FaMapMarkerAlt className="text-orange-600 text-xl" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Our Location</h3>
                      <p className="text-gray-700">
                        123 Numerology Street<br />
                        Knowledge City, UP 201001<br />
                        India
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-orange-100 p-3 rounded-full mr-4">
                      <FaPhone className="text-orange-600 text-xl" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Phone Numbers</h3>
                      <p className="text-gray-700">
                        <a href="tel:+919012312552" className="hover:text-orange-600 transition-colors">
                          +91 9012312552 (Primary)
                        </a>
                        <br />
                        <a href="tel:+911234567890" className="hover:text-orange-600 transition-colors">
                          +91 1234567890 (Alternate)
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-orange-100 p-3 rounded-full mr-4">
                      <FaEnvelope className="text-orange-600 text-xl" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Email Address</h3>
                      <p className="text-gray-700">
                        <a href="mailto:contact@divynumerology.com" className="hover:text-orange-600 transition-colors">
                          contact@divynumerology.com
                        </a>
                        <br />
                        <a href="mailto:support@divynumerology.com" className="hover:text-orange-600 transition-colors">
                          support@divynumerology.com
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-orange-100 p-3 rounded-full mr-4">
                      <FaClock className="text-orange-600 text-xl" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Working Hours</h3>
                      <p className="text-gray-700">
                        Monday to Saturday: 9:00 AM - 7:00 PM<br />
                        Sunday: 10:00 AM - 2:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp Floating Button for Mobile */}
              <div className="lg:hidden fixed bottom-6 right-6 z-50">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-16 h-16 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 animate-bounce"
                  aria-label="Chat on WhatsApp"
                >
                  <FaWhatsapp className="text-2xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="rounded-xl overflow-hidden shadow-xl border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.566373968297!2d77.74224245629073!3d 28.96480902098399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2f2e8f3f7a1%3A0x9d9c5b8e7d6b5b8e!2sIndia%20Gate!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Our Location"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ContactUs;
// 28.96480902098399, 77.74224245629073