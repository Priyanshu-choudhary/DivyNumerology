import React from 'react';
import Navbar from '../Navbr/Navbr';
import Footer from '../Home/Footer';
import Card from './Card';

const CalculatorNav = () => {
  return (
    <div className="bg-yellow-50 min-h-screen flex flex-col justify-between">
      <Navbar />

      <main className="px-4 md:px-12 lg:px-24 py-12 flex-grow mt-20">
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-orange-600 mb-4">Explore Our Numerology Calculators</h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Discover the hidden meanings behind numbers. Choose from a variety of tools to guide your spiritual and personal journey.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <Card 
  name="Friends and Enemies"  
  url={"Calculators/FriendsAndEnemy"} 
  description="Discover the numbers that align or clash with your life path. This tool reveals supportive (friend) and conflicting (enemy) energies based on your birth numbers." 
  features={[
    "Reveals common supportive numbers",
    "Identifies conflicting energies",
    "Highlights neutral influences",
    "Helps improve compatibility in relationships"
  ]}
/>

<Card 
  name="Blessing Year" 
  url={"Calculators/BlessingYear"} 
  description="Find your current Blessing Year — a numerological cycle that reveals the hidden energies and themes influencing your personal growth this year." 
  features={[
    "Calculates your Blessing Year from DOB",
    "Understand your current life phase",
    "Offers spiritual guidance for the year",
    "Align actions with your soul path"
  ]}
/>

<Card 
  name="Personal Year Calculator" 
  url={"Calculators/PersonalYear"} 
  description="Uncover what this year holds for you with your Personal Year Number. Learn how yearly vibrations affect your goals, relationships, and opportunities." 
  features={[
    "Calculates your Personal Year Number",
    "Interprets yearly numerology influence",
    "Forecasts energy patterns and challenges",
    "Supports better planning and alignment"
  ]}

  
/>

<Card 
  name="Mobile Number search" 
  url={"Calculators/MobileNumber"} 
  description="get a perfect mobile number for you Number." 
  features={[
    "Calculates your Personal Year Number",
    "Interprets yearly numerology influence",
    "Forecasts energy patterns and challenges",
    "Supports better planning and alignment"
  ]}

  
/>
          {/* You can add more cards here easily */}
        </section>

        <section className="text-center bg-orange-100 rounded-2xl py-10 px-6 shadow-lg">
          <h2 className="text-2xl font-semibold text-orange-700 mb-4">
            Pay What You Want 🌟
          </h2>
          <p className="text-gray-800 mb-6">
            Unlock your personalized numerology report crafted just for you.
            Dive into your soul’s blueprint and uncover insights you never knew!
          </p>
          <a
            href="#"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full transition"
          >
            Try It Now
          </a>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CalculatorNav;
