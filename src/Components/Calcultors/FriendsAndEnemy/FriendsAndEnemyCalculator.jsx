import React, { useState } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

// Master Numerology Table
const numerologyTable = {
  1: { role: 'KING', friends: [1, 2, 3, 5, 6, 9], enemy: [8], neutral: [4, 7] },
  2: { role: 'QUEEN', friends: [1, 2, 3, 5], enemy: [8, 4, 9], neutral: [7, 6] },
  3: { role: 'PRIME MINISTER', friends: [1, 2, 3, 5, 7], enemy: [6], neutral: [4, 8, 7, 9] },
  4: { role: 'REBEL', friends: [1, 5, 7, 6, 4, 8], enemy: [2, 9], neutral: [3] },
  5: { role: 'PRINCE', friends: [1, 2, 3, 5, 6], enemy: [], neutral: [4, 7, 8, 9] },
  6: { role: 'TEACHER (DEVIL)', friends: [1, 4, 5, 6, 7], enemy: [3], neutral: [2, 8, 9] },
  7: { role: 'SAINT', friends: [1, 3, 5, 4, 6], enemy: [], neutral: [8, 2, 7, 9] },
  8: { role: 'JUDGE', friends: [5, 3, 6, 7, 4, 8], enemy: [1, 2], neutral: [9] },
  9: { role: 'COMMANDER', friends: [1, 3, 5], enemy: [4, 2], neutral: [9, 7, 6, 8] },
};

// Utility: Single-digit sum
const calculateDriverNumber = (day) => {
  let sum = 0;
  while (day > 0) {
    sum += day % 10;
    day = Math.floor(day / 10);
  }
  return sum > 9 ? calculateDriverNumber(sum) : sum;
};

// Utility: Total digit sum of DOB
const calculateConductorNumber = (dob) => {
  const digits = dob.replace(/\D/g, '');
  let sum = digits.split('').reduce((acc, d) => acc + Number(d), 0);
  while (sum > 9) {
    sum = sum.toString().split('').reduce((a, b) => a + +b, 0);
  }
  return sum;
};

// Get neutral, enemy, and left (friends) numbers for a given number
const calculateDetails = (number) => {
  if (!numerologyTable[number]) return { neutral: [], enemy: [], left: [] };
  const all = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const { neutral, enemy } = numerologyTable[number];
  const combined = new Set([...neutral, ...enemy]);
  const left = all.filter(n => !combined.has(n));
  return { neutral, enemy, left };
};

const FriendsAndEnemyCalculator = () => {
  const [dob, setDob] = useState('');
  const [driver, setDriver] = useState(null);
  const [conductor, setConductor] = useState(null);
  const [driverDetails, setDriverDetails] = useState({});
  const [conductorDetails, setConductorDetails] = useState({});
  const [commonFriends, setCommonFriends] = useState([]);

  const handleChange = (e) => {
    const val = e.target.value;
    setDob(val);

    if (/^\d{2}\/\d{2}\/\d{4}$/.test(val)) {
      const day = parseInt(val.split('/')[0]);
      const d = calculateDriverNumber(day);
      const c = calculateConductorNumber(val);

      const dDetails = calculateDetails(d);
      const cDetails = calculateDetails(c);
      const common = dDetails.left.filter(n => cDetails.left.includes(n));

      setDriver(d);
      setConductor(c);
      setDriverDetails(dDetails);
      setConductorDetails(cDetails);
      setCommonFriends(common);
    } else {
      setDriver(null);
      setConductor(null);
      setDriverDetails({});
      setConductorDetails({});
      setCommonFriends([]);
    }
  };

  // Prepare combined results
  const combinedEnemies = Array.from(
    new Set([...(driverDetails.enemy || []), ...(conductorDetails.enemy || [])])
  );

  const combinedNeutrals = Array.from(
    new Set([...(driverDetails.neutral || []), ...(conductorDetails.neutral || [])])
  );

  const friends = commonFriends;
  const enemy = combinedEnemies;
  const neutral = combinedNeutrals;

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text(`${dob} Numerology Report`, 20, 20);
    doc.setFontSize(12);
    doc.text('Created using Divynumerology.', 20, 30);
    doc.text('For deeper insights, contact Divyya Sharma.', 20, 37);

    doc.text('* A Comprehensive Guide to Numerology Numbers *', 20, 50);
    doc.text('- Friends Numbers: Bring positivity and harmony.', 20, 60);
    doc.text('- Enemy Numbers: Indicate challenges or blockages.', 20, 67);
    doc.text('- Neutral Numbers: Neither positive nor negative.', 20, 74);

    doc.text('Your Numerology Report:', 20, 90);
    doc.autoTable({
      startY: 100,
      head: [['Type', 'Numbers']],
      body: [
        ['Friends Numbers', friends.join(', ') || 'None'],
        ['Enemy Numbers', enemy.join(', ') || 'None'],
        ['Neutral Numbers', neutral.join(', ') || 'None'],
      ],
    });

    doc.save(`${dob.replace(/\//g, '-')}_numerology_report.pdf`);
  };

  return (
    <div className="bg-yellow-50 min-h-screen flex flex-col">
      <div className="max-w-10xl mx-auto w-full p-6 mt-6 bg-white rounded-2xl shadow-lg">
        <h1 className="text-4xl font-bold text-orange-500 text-center mb-2">Friends & Enemy Calculator</h1>
        <p className="text-center text-gray-600 mb-6">
          Discover your hidden support system and challenges based on your date of birth.
        </p>

        <label className="block text-lg font-medium text-gray-700 mb-2">
          Enter your Date of Birth (DD/MM/YYYY)
        </label>
        <input
          type="text"
          value={dob}
          onChange={handleChange}
          placeholder="e.g. 06/04/1999"
          className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
        />

        {driver && conductor && (
          <div className="mt-10">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-orange-100 p-6 rounded-xl shadow">
                <h2 className="text-2xl font-semibold text-orange-700 mb-2">Driver Number: {driver}</h2>
                <p className="text-sm text-gray-700 mb-1">Neutral: {driverDetails.neutral?.join(', ')}</p>
                <p className="text-sm text-red-600 mb-1">Enemy: {driverDetails.enemy?.join(', ') || 'None'}</p>
                <p className="text-sm text-g-700">Friends: {driverDetails.left?.join(', ')}</p>
              </div>
              <div className="bg-orange-100 p-6 rounded-xl shadow">
                <h2 className="text-2xl font-semibold text-orange-700 mb-2">Conductor Number: {conductor}</h2>
                <p className="text-sm text-gray-700 mb-1">Neutral: {conductorDetails.neutral?.join(', ')}</p>
                <p className="text-sm text-red-600 mb-1">Enemy: {conductorDetails.enemy?.join(', ') || 'None'}</p>
                <p className="text-sm text-green-700">Friends: {conductorDetails.left?.join(', ')}</p>
              </div>
            </div>

            {/* <div className="mt-8 p-6 rounded-xl bg-white border border-dashed border-orange-300 shadow">
              <h3 className="text-xl font-bold text-orange-600 mb-2">Your Report</h3>
              <p className="text-gray-700 text-sm mb-2">
                <strong>Common Left Numbers (Friends):</strong>{' '}
                {commonFriends.length > 0 ? commonFriends.join(', ') : 'None'}
              </p>
              <p className="text-gray-600 text-sm">
                These numbers indicate people or influences that resonate well with both your core (Driver) and destiny (Conductor) energies.
              </p>
            </div> */}
          </div>
        )}

        {(friends.length > 0 || enemy.length > 0 || neutral.length > 0) && (
         <div className="mt-10 bg-white border border-orange-500 border-2 p-6 rounded-xl shadow">

            <h2 className="text-2xl font-bold mb-4 text-orange-500 text-center">Your Numerology Report</h2>

            <div className="prose max-w-none text-gray-800">
              <p className="italic">It was created using <strong>Divynumerology</strong>.</p>
              <p>Get in touch with <strong>Divyya Sharma</strong> for a thorough Numeroscope reading and further insights.</p>

              <h3 className="text-lg font-semibold mt-6 mb-2">📘 A Comprehensive Guide to Numerology Numbers</h3>
              <ul className="list-disc pl-5">
                <li><strong>Friends Numbers</strong>: These numbers complement you and provide encouragement and good vibes.</li>
                <li><strong>Enemies Numbers</strong>: These figures could indicate difficulties, disputes, or roadblocks.</li>
                <li><strong>Neutral Numbers</strong>: These figures have a neutral or mixed effect.</li>
              </ul>

              <h3 className="text-lg font-semibold mt-6 mb-2">🔍 Your Numerology Breakdown</h3>
              <p><strong>Friends Numbers:</strong> {friends.join(', ') || 'None'}</p>
              <p><strong>Enemy Numbers:</strong> {enemy.join(', ') || 'None'}</p>
              <p><strong>Neutral Numbers:</strong> {neutral.join(', ') || 'None'}</p>
            </div>
            <p className="text-gray-600 text-sm mt-5">
                These numbers indicate people or influences that resonate well with both your core (Driver) and destiny (Conductor) energies.
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

export default FriendsAndEnemyCalculator;
