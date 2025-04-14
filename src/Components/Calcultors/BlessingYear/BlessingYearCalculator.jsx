import React, { useState } from 'react';
import jsPDF from 'jspdf';

const calculateDriverNumber = (day) => {
  let sum = 0;
  while (day > 0) {
    sum += day % 10;
    day = Math.floor(day / 10);
  }
  return sum > 9 ? calculateDriverNumber(sum) : sum;
};

const generateBlessingYears = (driver, count = 10) => {
  const years = [];
  let current = driver;
  for (let i = 0; i < count; i++) {
    years.push(current);
    current += 9;
  }
  return years;
};

const formatDate = (dateStr) => {
  const [year, month, day] = dateStr.split('-');
  return `${day}/${month}/${year}`;
};

const BlessingYearCalculator = () => {
  const [dob, setDob] = useState('');
  const [formattedDob, setFormattedDob] = useState('');
  const [driver, setDriver] = useState(null);
  const [blessingYears, setBlessingYears] = useState([]);

  const handleChange = (e) => {
    const val = e.target.value;
    setDob(val);

    if (/^\d{4}-\d{2}-\d{2}$/.test(val)) {
      const day = parseInt(val.split('-')[2], 10);
      const driverNumber = calculateDriverNumber(day);
      const blessings = generateBlessingYears(driverNumber);

      setFormattedDob(formatDate(val));
      setDriver(driverNumber);
      setBlessingYears(blessings);
    } else {
      setDriver(null);
      setBlessingYears([]);
    }
  };

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text(`Blessing Year Report`, 20, 20);
    doc.setFontSize(12);
    doc.text(`DOB: ${formattedDob}`, 20, 30);
    doc.text(`Driver Number: ${driver}`, 20, 40);
    doc.text(`Your Blessing Years: ${blessingYears.join(', ')}`, 20, 50);
    doc.text(`These are important years where your energy is amplified for growth, change, and spiritual evolution.`, 20, 65);
    doc.text(`Created using Divynumerology by Divyya Sharma.`, 20, 75);
    doc.save(`${formattedDob.replace(/\//g, '-')}_blessing_year.pdf`);
  };

  return (
    <div className="bg-yellow-50 min-h-screen flex flex-col ">
      <div className=" p-6 mt-6 bg-white rounded-2xl shadow-lg">
        <h1 className="text-4xl font-bold text-orange-500 text-center mb-2">Blessing Year Calculator</h1>
        <p className="text-center text-gray-600 mb-6">
          Enter your birth date to discover the special years when the universe aligns for you 🌟
        </p>

        <label className="block text-lg font-medium text-gray-700 mb-2">
          Select your Date of Birth
        </label>
        <input
          type="date"
          value={dob}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
        />

        {driver && blessingYears.length > 0 && (
          <div className="mt-10 bg-orange-100 p-6 rounded-xl shadow text-center">
            <h2 className="text-2xl font-semibold text-orange-700 mb-2">Your Report</h2>
            <p className="text-lg text-gray-800 mb-2">Driver Number: <strong>{driver}</strong></p>
            <p className="text-lg text-gray-800">
              Your Blessing Years: <strong>{blessingYears.join(', ')}</strong>
            </p>
            <p className="text-gray-700 mt-4">
              These years carry amplified energy for progress, transformation, and alignment with your life’s path.
            </p>
            <button
              className="mt-6 bg-orange-600 hover:bg-orange-700 text-white px-5 py-2 rounded-lg transition-all"
              onClick={downloadPDF}
            >
              Download PDF
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlessingYearCalculator;
