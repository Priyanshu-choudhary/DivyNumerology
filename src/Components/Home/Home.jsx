import { useEffect, useState } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Home = () => {
  const [activeLifePath, setActiveLifePath] = useState(1);
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  // Numerology life path number descriptions
  const lifePathNumbers = {
    1: { title: "The Leader", traits: "Independent, creative, original" },
    2: { title: "The Peacemaker", traits: "Diplomatic, intuitive, cooperative" },
    3: { title: "The Communicator", traits: "Expressive, artistic, joyful" },
    4: { title: "The Builder", traits: "Practical, organized, disciplined" },
    5: { title: "The Freedom Seeker", traits: "Adventurous, progressive, versatile" },
    6: { title: "The Nurturer", traits: "Responsible, protective, compassionate" },
    7: { title: "The Seeker", traits: "Analytical, spiritual, wise" },
    8: { title: "The Powerhouse", traits: "Ambitious, executive, successful" },
    9: { title: "The Humanitarian", traits: "Generous, idealistic, global" }
  };

  // Floating numbers with numerology significance
  const FloatingNumbers = () => {
    const significantNumbers = [
      { num: 1, color: "text-yellow-500" },
      { num: 3, color: "text-orange-500" },
      { num: 5, color: "text-purple-500" },
      { num: 7, color: "text-yellow-500" },
      { num: 9, color: "text-orange-500" },
      { num: 11, color: "text-purple-500" },
      { num: 22, color: "text-yellow-500" },
      { num: 33, color: "text-orange-500" }
    ];

    return (
      <div className="absolute inset-0 overflow-hidden z-0">
        {Array.from({ length: 15 }).map((_, i) => {
          const randomNum = significantNumbers[Math.floor(Math.random() * significantNumbers.length)];
          return (
            <motion.span
              key={i}
              className={`absolute font-bold ${randomNum.color}`}
              style={{
                fontSize: `${Math.random() * 2 + 1}rem`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: 0.2
              }}
              animate={{
                y: [0, -100],
                opacity: [0.1, 0.4, 0.1],
                rotate: [0, Math.random() > 0.5 ? 360 : -360]
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                delay: Math.random() * 5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
            >
              {randomNum.num}
            </motion.span>
          );
        })}
      </div>
    );
  };

  // Animated number sequence for calculator preview
  const AnimatedNumberSequence = () => {
    const sequences = [
      "1-3-5-7-9",
      "2-4-6-8-11",
      "5-7-9-11-22",
      "3-6-9-12-33"
    ];
    const [currentSequence, setCurrentSequence] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentSequence((prev) => (prev + 1) % sequences.length);
      }, 3000);
      return () => clearInterval(interval);
    }, []);

    return (
      <div className="relative h-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSequence}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex justify-center items-center"
          >
            <div className="flex space-x-4">
              {sequences[currentSequence].split('-').map((num, i) => (
                <motion.div
                  key={`${currentSequence}-${i}`}
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    delay: i * 0.1,
                    type: 'spring',
                    stiffness: 500,
                    damping: 15
                  }}
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl
                    ${i % 3 === 0 ? 'bg-yellow-500' : 
                      i % 3 === 1 ? 'bg-orange-500' : 'bg-purple-500'}`}
                >
                  {num}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    );
  };

  return (
    <div className="bg-gray-50">
      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-700 via-purple-600 to-purple-500 text-white py-24 overflow-hidden">
        <FloatingNumbers />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: 'spring' }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="text-yellow-400">Numerology</span> Secrets <span className="text-orange-400">Revealed</span>
              </h1>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-xl md:text-2xl mb-8"
            >
              Unlock the <span className="font-bold">hidden messages</span> in your numbers and align with your <span className="font-bold">cosmic blueprint</span>
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#F59E0B" }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-500 hover:bg-yellow-600 text-purple-900 font-bold px-8 py-4 rounded-full text-lg shadow-lg transition-colors"
              >
                Calculate Your Life Path Number
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Animated number path at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden">
          <motion.div
            className="flex whitespace-nowrap"
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          >
            {Array.from({ length: 20 }).map((_, i) => (
              <span key={i} className="text-4xl mx-8 text-white opacity-20">
                {i % 9 + 1} • {i % 11 + 1} • {i % 22 + 1} • {i % 33 + 1}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Numerology Magic Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 20 }
            }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-purple-800 mb-6">
              The <span className="text-yellow-500">Magic</span> of <span className="text-orange-500">Numbers</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Numbers vibrate with cosmic energy. Discover how your personal numbers influence every aspect of your life.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🧮',
                title: 'Birth Date Analysis',
                desc: 'Your birth date reveals your Life Path Number - the most significant number in your numerology chart',
                color: 'bg-purple-100'
              },
              {
                icon: '🔢',
                title: 'Name Numerology',
                desc: 'Each letter corresponds to a number, creating your Expression Number that reveals your talents',
                color: 'bg-yellow-100'
              },
              {
                icon: '💞',
                title: 'Compatibility',
                desc: 'Certain numbers naturally harmonize while others challenge - discover your ideal matches',
                color: 'bg-orange-100'
              },
              {
                icon: '🏡',
                title: 'House Numbers',
                desc: 'The vibration of your home address affects your living experience and energy flow',
                color: 'bg-purple-100'
              },
              {
                icon: '📱',
                title: 'Phone Numbers',
                desc: 'Your mobile number carries energy that influences communication and opportunities',
                color: 'bg-yellow-100'
              },
              {
                icon: '💰',
                title: 'Lucky Numbers',
                desc: 'Specific numbers attract abundance and prosperity based on your unique chart',
                color: 'bg-orange-100'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
                className={`${feature.color} p-8 rounded-xl shadow-md`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div 
                  className="text-5xl mb-4"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-2xl font-bold text-purple-700 mb-3">{feature.title}</h3>
                <p className="text-gray-700">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Life Path Number Explorer */}
      <section className="py-20 bg-gradient-to-r from-purple-50 to-yellow-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-purple-800 mb-12">
            Discover Your <span className="text-orange-500">Life Path Number</span>
          </h2>
          
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                  <motion.button
                    key={num}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveLifePath(num)}
                    className={`h-16 rounded-full flex items-center justify-center text-xl font-bold
                      ${activeLifePath === num ? 
                        'bg-yellow-500 text-purple-900 shadow-lg' : 
                        'bg-white text-purple-700 shadow-md'}`}
                  >
                    {num}
                  </motion.button>
                ))}
              </div>
              
              <motion.div
                key={activeLifePath}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <h3 className="text-2xl font-bold text-purple-800 mb-2">
                  Life Path {activeLifePath}: {lifePathNumbers[activeLifePath].title}
                </h3>
                <p className="text-lg text-gray-700 mb-4">
                  {lifePathNumbers[activeLifePath].traits}
                </p>
                <p className="text-gray-600">
                  {[
                    "Your life path number is calculated by reducing your birth date to a single digit (except for master numbers 11, 22, 33).",
                    "This number reveals your life's purpose, challenges, and lessons.",
                    "People with this number often excel in fields that require the traits mentioned above."
                  ].join(' ')}
                </p>
              </motion.div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="bg-purple-800 text-white p-8 rounded-xl shadow-2xl">
                <h3 className="text-2xl font-bold mb-6 text-yellow-400">
                  Calculate Your Life Path Number
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-purple-200 mb-2">Birth Date</label>
                    <input 
                      type="date" 
                      className="w-full p-3 rounded bg-purple-700 border border-purple-600 text-white" 
                    />
                  </div>
                  <div>
                    <label className="block text-purple-200 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="Enter your name as per birth certificate" 
                      className="w-full p-3 rounded bg-purple-700 border border-purple-600 text-white" 
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02, backgroundColor: "#F59E0B" }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-yellow-500 text-purple-900 font-bold py-3 rounded-lg mt-4"
                  >
                    Reveal My Numbers
                  </motion.button>
                </div>
                
                <div className="mt-8">
                  <h4 className="text-lg font-semibold text-orange-300 mb-3">
                    Master Numbers
                  </h4>
                  <div className="flex justify-between">
                    {[11, 22, 33].map((num) => (
                      <motion.div
                        key={num}
                        whileHover={{ scale: 1.1 }}
                        className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center font-bold text-xl"
                      >
                        {num}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Calculator Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-purple-800 mb-4">
            Our <span className="text-yellow-500">Numerology</span> Calculators
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Discover the hidden meanings in your numbers with our interactive tools
          </p>
          
          <div className="bg-gradient-to-r from-purple-100 to-yellow-50 rounded-2xl p-8 shadow-inner">
            <AnimatedNumberSequence />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {[
                {
                  title: "Life Path Calculator",
                  desc: "Discover your core purpose",
                  icon: "🌟",
                  color: "bg-purple-500"
                },
                {
                  title: "Compatibility Analyzer",
                  desc: "Find your perfect matches",
                  icon: "💑",
                  color: "bg-yellow-500"
                },
                {
                  title: "Personal Year Forecast",
                  desc: "See what this year holds",
                  icon: "📅",
                  color: "bg-orange-500"
                },
                {
                  title: "Mobile Number Scan",
                  desc: "Optimize your communication",
                  icon: "📱",
                  color: "bg-purple-500"
                }
              ].map((calc, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`h-2 ${calc.color}`}></div>
                  <div className="p-6">
                    <div className="text-4xl mb-4">{calc.icon}</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{calc.title}</h3>
                    <p className="text-gray-600 mb-4">{calc.desc}</p>
                    <button className="text-purple-600 font-semibold hover:underline">
                      Try Calculator →
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sacred Geometry Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 to-purple-700 text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold mb-6">
                  The <span className="text-yellow-400">Sacred Geometry</span> of Numbers
                </h2>
                <p className="text-xl mb-6">
                  Numbers form the building blocks of the universe, each carrying unique vibrational energy that shapes our reality.
                </p>
                <div className="space-y-4">
                  {[
                    "Certain numbers appear repeatedly in nature (Fibonacci sequence)",
                    "The angles between numbers create sacred geometric patterns",
                    "Your personal numbers form a unique energetic signature",
                    "Master numbers (11, 22, 33) carry higher spiritual vibrations"
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start"
                    >
                      <span className="text-yellow-400 mr-3">▸</span>
                      <span>{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
            
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Sacred geometry animation placeholder */}
                <div className="relative w-full h-96 bg-purple-800 rounded-xl overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
                      className="text-yellow-300 text-8xl"
                    >
                      ✧
                    </motion.div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                      className="text-orange-300 text-6xl"
                    >
                      ✦
                    </motion.div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 8, repeat: Infinity }}
                      className="text-white text-9xl"
                    >
                      {activeLifePath}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-r from-yellow-400 to-orange-500">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-purple-900">
              Ready to <span className="text-white">Decode Your Destiny</span>?
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-purple-900 max-w-3xl mx-auto">
              Get your personalized numerology report and uncover secrets hidden in your numbers.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#7C3AED" }}
              whileTap={{ scale: 0.95 }}
              className="bg-purple-700 text-white font-bold px-10 py-4 rounded-full text-lg shadow-xl"
            >
              Get My Numerology Reading
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;