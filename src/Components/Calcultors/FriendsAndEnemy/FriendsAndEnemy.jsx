import React from 'react';
import Navbar from '../../Navbr/Navbr';
import Footer from '../../Home/Footer';
import FriendsAndEnemyCalculator from './FriendsAndEnemyCalculator';

const FriendsAndEnemy = () => {
  return (
    <div className="bg-yellow-50 min-h-screen flex flex-col justify-between">
      <Navbar />

      <main className="px-4 md:px-12 lg:px-24 py-12 flex-grow">
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-orange-600 mb-4 mt-10">Friends & Enemies</h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Discover your hidden connections with the <strong>Friend and Enemy Number Calculator</strong> by Divyne Numerology.
          </p>
        </section>

        <section className="bg-white shadow-xl rounded-2xl p-8 md:p-12 mb-12">
          <h2 className="text-2xl font-semibold text-orange-700 mb-4">What Are Friend & Enemy Numbers?</h2>
          <p className="text-gray-700 mb-6">
            In numerology, Friend and Enemy Numbers uncover the people who significantly affect your life’s journey. 
            <strong> Friend Numbers</strong> indicate harmony and support, while <strong>Enemy Numbers</strong> highlight challenges and growth opportunities.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="font-bold text-orange-600 mb-2">✨ Benefits of Knowing Them:</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Understand supportive relationships</li>
                <li>Recognize life’s challenges</li>
                <li>Improve social dynamics</li>
                <li>Make better personal decisions</li>
                <li>Grow emotionally and spiritually</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-orange-600 mb-2">🧮 How It Works:</h3>
              <ol className="list-decimal list-inside text-gray-700 space-y-1">
                <li>Enter your Date of Birth</li>
                <li>Pay ₹57</li>
                <li>Get instant personalized insights</li>
              </ol>
            </div>
          </div>

          <div className="bg-orange-50 p-6 rounded-xl shadow-inner text-center">
            <h3 className="text-xl font-bold text-orange-700 mb-2">💌 Your Report Includes:</h3>
            <p className="text-gray-800">
              A detailed list of your <strong>Friend Numbers</strong> and <strong>Enemy Numbers</strong> —
              giving you clarity on who supports your energy and who challenges it.
            </p>
          </div>
        </section>
        <FriendsAndEnemyCalculator/>
        <section className="text-center mb-16">
          <h3 className="text-2xl font-semibold text-orange-600 mb-2">Need Deeper Guidance?</h3>
          <p className="text-gray-800 mb-4">
            Contact our expert numerologist <strong>Divyya Sharma</strong> for personalized insights.
          </p>
          <p className="text-gray-700">
            📞 Phone: <em className='font-bold'>+91 9012312552</em><br />
            📧 Email: <em className='font-bold'>tyagi.div@gmail.com</em>
          </p>
        </section>

        <section className="text-center bg-orange-500 py-8 px-6 rounded-xl shadow-lg text-white mb-10">
          <h3 className="text-2xl font-bold mb-2">Unlock Your Relationship Secrets Today</h3>
          <p className="mb-4">
            Get your personalized numerology report now and take charge of your connections.
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

export default FriendsAndEnemy;
