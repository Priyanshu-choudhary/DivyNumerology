import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
// Import professional icons from Heroicons
// import { useRouter } from "next/router";
import {
  AcademicCapIcon,
  BookOpenIcon,
  UserGroupIcon,
  CalendarIcon,
  ChartBarIcon,
  HeartIcon,
  BadgeCheckIcon,
  ClockIcon,
  DocumentTextIcon,
  PhoneIcon
} from '@heroicons/react/solid';
import ArrowButton from '../../Buttons/ArrowButton';
const Home = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const navigate = useNavigate();

  // const router = useRouter();
  const services = [
    {
      title: "Friends and Enemies",
      desc: "Find numbers that align or clash with your life path.",
      icon: <AcademicCapIcon className="w-10 h-10 text-yellow-500" />,
      link: "/Calculators/FriendsAndEnemy"
    },
    {
      title: "Blessing Year",
      desc: "Reveal the numerology theme guiding you this year.",
      icon: <BookOpenIcon className="w-10 h-10 text-yellow-500" />,
      link: "/Calculators/BlessingYear"
    },
    {
      title: "Personal Year Calculator",
      desc: "See how this year's energy influences your journey.",
      icon: <UserGroupIcon className="w-10 h-10 text-yellow-500" />,
      link: "/Calculators/PersonalYear"
    },
    {
      title: "Mobile Number Search",
      desc: "Choose a mobile number that matches your energy.",
      icon: <CalendarIcon className="w-10 h-10 text-yellow-500" />,
      link: "/Calculators/MobileNumber"
    }
  ];


  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <div className="bg-yellow-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-20">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Discover Your Life&apos;s Blueprint with <span className="text-yellow-200">Numerology</span>
              </h1>
              <p className="text-xl mb-8 text-yellow-100">
                With over 12 years of expertise, Divyya Sharma guides you through personalized numerology insights for a purposeful life.
              </p>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => navigate('/Calculators')}
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-lg text-lg shadow-lg transition-colors"
              >
                Calculate Your Life Path
              </motion.button>
            </motion.div>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              <img
                src="maam2.jpg"
                alt="Divyya Sharma - Numerologist"
                className="rounded-lg shadow-2xl w-full max-w-md border-4 border-orange-500"
              />
              <div className="absolute -bottom-6 -right-6 bg-white text-gray-800 p-4 rounded-lg shadow-lg max-w-xs">
                <p className="font-semibold">Divyya Sharma</p>
                <p className="text-sm">Certified Numerologist & Life Coach</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-yellow-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              About <span className="text-yellow-500">DivyNumerology</span>
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
            <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
              <div className="max-w-5xl mx-auto">


                <div className="grid md:grid-cols-2 gap-12 items-start">
                  {/* English Section */}
                  <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-yellow-500">
                    {/* <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Our Story</h3> */}
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p>Welcome to Divynumerology, where the ancient science of numerology meets passion and expertise. Founded by renowned numerologist Divyya Sharma, our mission is to empower individuals to achieve their full potential.</p>

                      <p>Divyya Sharma's numerology journey began 12 years ago as a national bank officer. Fascinated by intricate number patterns, she embarked on life-changing exploration. Her initial numerology foray analyzed her Lo Shu grid chart, revealing an unexpected future in education.</p>

                      <p>Within a year, she became Assistant Professor at a reputed State University, igniting a passion for education. With family support, Divyya established a private degree college within two years, reinforcing her belief in celestial bodies' influence.</p>

                      <p>Through rigorous study and research, Divyya discovered planetary movements' vast knowledge and interconnectedness with numbers and human life. At Divynumerology, we believe that understanding numerology unlocks human potential, contributing to a harmonious existence.</p>
                    </div>
                  </div>

                  {/* Hindi Section */}
                  <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-orange-500">
                    {/* <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">हमारी कहानी</h3> */}
                    <div className="space-y-4 text-gray-700 leading-relaxed text-justify">
                      <p>अंकशास्त्र की अचूक विद्या की सहायता से, नियति द्वारा निर्धारित रास्ते का आभास यदि हमें हो जाए तो उस पर तीव्र व लंबी दौड़ लगाकर निश्चित ही अपने गंतव्य का स्पर्श किया जा सकता है।</p>

                      <p>साथ ही जटिल समय में, इस विज्ञान द्वारा तय उपायों से हम उसी प्रकार अपना बचाव कर सकते हैं जैसे छाते के उपयोग से बारिश से बचा जाता है। पीछे मुड़कर देखती हूँ तो लगभग 12 वर्ष पूर्व एक प्रतिष्ठित राष्ट्रीय बैंक की अधिकारी रहते मेरा रुझान अंक शास्त्र की ओर हुआ।</p>

                      <p>धीरे-धीरे अध्ययन करने पर मैंने स्वयं के लॉशोग्रिड चार्ट का विश्लेषण किया तो उक्त कार्यक्षेत्र छोड़ कर ज्योतिष व शिक्षा के क्षेत्र में जाने का संकेत मिला। समय ने करवट ली और परिस्थिति के अधीन अगले एक वर्ष के भीतर मैंने चौधरी चरण सिंह विश्वविद्यालय परिसर में असिस्टेंट प्रोफेसर का दायित्व ग्रहण किया।</p>

                      <p>शिक्षा के क्षेत्र में मेरी भागीदारी तब और गहरी हुई जब अगले दो वर्ष में मैंने अपने परिवार की सहायता से एक डिग्री कॉलेज की स्थापना की। इस घटनाक्रम से मुझे अनुभूति हुई कि अंतिम निर्णय हमारे नक्षत्रों का ही होता है।</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 text-center">
                  <button className="px-8 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-medium rounded-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                    Learn More About Our Services
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Experience Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-yellow-500 text-4xl mb-4">
                <AcademicCapIcon className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">12+ Years Experience</h3>
              <p className="text-gray-600">
                Over a decade of transforming lives through numerology and trusted guidance for thousands worldwide.
              </p>
            </motion.div>
            {/* Professional Background Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="text-yellow-500 text-4xl mb-4">
                <BookOpenIcon className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Professional Background</h3>
              <p className="text-gray-600">
                Former national bank officer turned expert numerologist, merging analytical prowess with spiritual depth.
              </p>
            </motion.div>
            {/* Global Reach Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="text-yellow-500 text-4xl mb-4">
                <UserGroupIcon className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Global Reach</h3>
              <p className="text-gray-600">
                Serving clients across continents with precision numerology readings and transformative insights.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Numerology Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Numerology <span className="text-yellow-500">Services</span>
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our tailored services designed to reveal your hidden potentials and life challenges.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)" }}
                className="bg-yellow-50 p-6 rounded-lg border border-gray-200 relative pb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>

                <div className="absolute bottom-4 left-4">
                <button onClick={() => navigate(service.link)}>
                    <ArrowButton />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section - Extra Content */}
      <section className="py-20 bg-yellow-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our <span className="text-yellow-500">Methodology</span>
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We combine time-tested ancient wisdom with modern analytical techniques. Our process involves a deep dive into your numbers, interpreting vibrations and patterns that reveal your life path.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="bg-white p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Comprehensive Analysis</h3>
              <p className="text-gray-600">
                Our readings assess everything from your birth date to your name vibrations, creating a blueprint that aligns with your higher purpose.
              </p>
            </motion.div>
            <motion.div
              className="bg-white p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Personalized Guidance</h3>
              <p className="text-gray-600">
                Every client receives a unique numerology reading that covers career, relationships, and personal growth strategies tailored just for you.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '12+', label: 'Years Experience', icon: <ClockIcon className="w-8 h-8 mx-auto text-yellow-500" /> },
              { number: '5,000+', label: 'Clients Served', icon: <UserGroupIcon className="w-8 h-8 mx-auto text-yellow-500" /> },
              { number: '98%', label: 'Satisfaction Rate', icon: <HeartIcon className="w-8 h-8 mx-auto text-yellow-500" /> },
              { number: '250+', label: 'Corporate Clients', icon: <ChartBarIcon className="w-8 h-8 mx-auto text-yellow-500" /> }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="p-6 bg-yellow-50 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {stat.icon}
                <div className="text-3xl font-bold text-gray-800 mt-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - Extra Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Frequently <span className="text-yellow-500">Asked Questions</span>
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="p-6 bg-yellow-50 rounded-lg shadow">
                <h3 className="text-xl font-bold text-gray-800">What is numerology?</h3>
                <p className="text-gray-600 mt-2">
                  Numerology is the study of numbers and their mystical significance in our lives. It interprets how the vibrations of numbers shape our personality and destiny.
                </p>
              </div>
              <div className="p-6 bg-yellow-50 rounded-lg shadow">
                <h3 className="text-xl font-bold text-gray-800">How can a numerology reading help me?</h3>
                <p className="text-gray-600 mt-2">
                  A personalized reading provides insights into your strengths, challenges, and life purpose. It guides you on decisions and helps you align your life with your true potential.
                </p>
              </div>
              <div className="p-6 bg-yellow-50 rounded-lg shadow">
                <h3 className="text-xl font-bold text-gray-800">Is numerology scientifically proven?</h3>
                <p className="text-gray-600 mt-2">
                  While numerology is rooted in ancient traditions and symbolism, many view it as a tool for self-reflection and guidance rather than a strict scientific methodology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Client <span className="text-yellow-500">Testimonials</span>
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Divyya’s numerology reading revealed insights that completely transformed my career and personal life.",
                name: "Rahul Sharma",
                role: "Entrepreneur"
              },
              {
                quote: "The name correction session provided by Divyya brought immense clarity and boosted my business success.",
                name: "Priya Patel",
                role: "Business Owner"
              },
              {
                quote: "Her precise predictions and guidance helped me navigate a challenging year with confidence.",
                name: "Anjali Mehta",
                role: "Corporate Executive"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-yellow-50 p-8 rounded-lg border border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-orange-500 text-2xl mb-4">"</div>
                <p className="text-gray-600 italic mb-6">{testimonial.quote}</p>
                <div className="font-semibold text-gray-800">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.role}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-24 bg-gradient-to-r from-yellow-500 to-orange-500">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to <span className="text-yellow-50">Decode Your Destiny</span>?
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-yellow-50 max-w-3xl mx-auto">
              Get your personalized numerology report and begin your journey toward self-discovery and lasting transformation.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#e65100" }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange-500 text-white font-bold px-10 py-4 rounded-full text-lg shadow-xl"
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
