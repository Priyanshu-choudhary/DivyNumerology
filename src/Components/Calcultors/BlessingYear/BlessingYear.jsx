import React from 'react';
import Navbar from '../../Navbr/Navbr';
import Footer from '../../Home/Footer';
import BlessingYearCalculator from './BlessingYearCalculator';

const BlessingYear = () => {
  return (
    <div className="bg-yellow-50 min-h-screen flex flex-col justify-between">
      <Navbar />

      <main className="px-4 md:px-12 lg:px-24 py-12 flex-grow">
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-orange-600 mb-4 mt-10">Blessing Year Calculator</h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Find out your <strong>Numerology Blessing Year</strong> — the year when the universe aligns to shower you with abundance and opportunities.
          </p>
        </section>

        <section className="bg-white shadow-xl rounded-2xl p-8 md:p-12 mb-12">
          <h2 className="text-2xl font-semibold text-orange-700 mb-4">What is a Blessing Year?</h2>
          <p className="text-gray-700 mb-6">
            A <strong>Blessing Year</strong> in numerology represents a powerful phase of transformation, abundance, and divine alignment.
            Knowing this year allows you to align your goals and maximize your potential during that special time.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="font-bold text-orange-600 mb-2">🌟 Why It Matters:</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Plan major life moves with divine timing</li>
                <li>Maximize career, love, and financial decisions</li>
                <li>Know when to push forward and when to pause</li>
                <li>Embrace inner growth and spiritual energy</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-orange-600 mb-2">📋 How It Works:</h3>
              <ol className="list-decimal list-inside text-gray-700 space-y-1">
                <li>Enter your Date of Birth</li>
                <li>Pay ₹57</li>
                <li>Receive your Blessing Year report instantly</li>
              </ol>
            </div>
          </div>

          <div className="bg-orange-50 p-6 rounded-xl shadow-inner text-center">
            <h3 className="text-xl font-bold text-orange-700 mb-2">🔮 Your Report Includes:</h3>
            <p className="text-gray-800">
              Your exact <strong>Blessing Year</strong>, what it means, and how to make the most of its powerful energy in every area of life.
            </p>
          </div>
        </section>

        <BlessingYearCalculator />

        <section className="text-center mb-16">
          <h3 className="text-2xl font-semibold text-orange-600 mb-2">Need Help Understanding Your Blessing Year?</h3>
          <p className="text-gray-800 mb-4">
            Connect with our numerology expert <strong>Divyya Sharma</strong> for personalized guidance and interpretations.
          </p>
          <p className="text-gray-700">
            📞 Phone: <em className='font-bold'>+91 9012312552</em><br />
            📧 Email: <em className='font-bold'>tyagi.div@gmail.com</em>
          </p>
        </section>

        <section className="text-center bg-orange-500 py-8 px-6 rounded-xl shadow-lg text-white mb-10">
          <h3 className="text-2xl font-bold mb-2">Tap Into Your Divine Timing</h3>
          <p className="mb-4">
            Find your Blessing Year and use it to align with your true purpose.
          </p>
          <a
            href="#"
            className="inline-block bg-white text-orange-600 font-semibold py-3 px-6 rounded-full shadow hover:bg-orange-100 transition"
          >
            Calculate Now
          </a>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlessingYear;
