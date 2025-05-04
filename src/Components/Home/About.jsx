import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Footer from "./Footer";
import CertificateSlider from "./CertificateSlider";

const About = () => {
  // Certificate images array - replace with your actual certificate paths
  const certificates = [
    "./cert1.jpg",
    "./cert2.jpg",
    "./cert3.jpg",
    "./cert4.jpg",

  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-yellow-50 to-orange-50 pt-24 pb-16">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgZmlsbD0iI2ZmYzEwNyIgY3g9IjMwIiBjeT0iMzAiIHI9IjEwIi8+PC9nPjwvc3ZnPg==')]"></div>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Founder Images */}
            <div className="w-full lg:w-5/12 relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative group overflow-hidden rounded-2xl shadow-xl">
                  <img
                    src="maam.jpg"
                    alt="Divyya Sharma"
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-6">
                    <span className="text-white font-medium">Divyya Sharma</span>
                  </div>
                </div>
                <div className="relative group overflow-hidden rounded-2xl shadow-xl mt-8">
                  <img
                    src="maam2.jpg"
                    alt="Divyya Sharma Teaching"
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-6">
                    <span className="text-white font-medium">Divyya Sharma Teaching</span>
                  </div>
                </div>
              </div>
              {/* <div className="absolute -bottom-6 -right-6 z-10 hidden lg:block">
                <img
                  src="logo-removebg.png"
                  alt="DivyNumerology Logo"
                  className="w-32 h-32 object-contain"
                />
              </div> */}
            </div>

            {/* Hero Content */}
            <div className="w-full lg:w-7/12">
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-orange-100">
                <span className="inline-block px-4 py-1 mb-4 text-xs font-semibold tracking-wider text-orange-600 uppercase rounded-full bg-orange-100">
                  Ancient Wisdom, Modern Application
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                  Empowering Lives Through <span className="text-orange-600">Numerology</span>
                </h1>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Founded by renowned numerologist <strong>Divyya Sharma</strong>, DivyNumerology combines ancient Vedic wisdom with modern insights to help you unlock your true potential and navigate life's challenges with confidence.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="/Calculators"
                    className="px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                  >
                    Explore Calculators
                  </a>
                  <a
                    href="#certificates"
                    className="px-8 py-3 bg-white text-orange-600 font-medium rounded-full shadow-md border border-orange-200 hover:bg-orange-50 transition-all duration-300"
                  >
                    View Credentials
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The <span className="text-orange-600">DivyNumerology</span> Story
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* English Version */}
            <div className="space-y-8">
            <div className="p-6 bg-white rounded-xl border border-orange-100 shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-orange-700">From Banking to Numerology</h3>
                <p className="text-gray-700 leading-relaxed">
                  Divyya Sharma's journey began 12 years ago as a national bank officer. Fascinated by intricate number patterns, she embarked on a life-changing exploration of numerology.
                </p>
                <h3 className=" mt-5 text-xl font-semibold mb-3 text-orange-700">The Turning Point</h3>
               
                <p className="text-gray-700 leading-relaxed">
                  Her initial numerology foray analyzed her Lo Shu grid chart, revealing an unexpected future in education. Within a year, she became Assistant Professor at a reputed State University.
                </p>
                <h3 className="mt-5 text-xl font-semibold mb-3 text-orange-700">Establishing Roots</h3>
                <p className="text-gray-700 leading-relaxed">
                  With family support, Divyya established a private degree college within two years, reinforcing her belief in celestial bodies' influence and deepening her numerology commitment.
                </p>
              </div>

             
            </div>

            {/* Hindi Version */}
            <div className="space-y-8">
            <div className="p-6 bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-yellow-700">बैंकिंग से अंकशास्त्र तक</h3>
                <p className="text-gray-700 leading-relaxed">
                  एक प्रतिष्ठित राष्ट्रीय बैंक में अधिकारी रहते हुए मेरा झुकाव अंकशास्त्र की ओर हुआ। खुद का लॉशोग्रिड चार्ट जब मैंने देखा, तो भविष्य में शिक्षा और ज्योतिष के क्षेत्र में जाने का संकेत मिला।
                </p>
                <h3 className=" mt-5 text-xl font-semibold mb-3 text-yellow-700">निर्णायक मोड़</h3>
                <p className="text-gray-700 leading-relaxed">
                  परिस्थितियाँ बदलीं और मैं चौधरी चरण सिंह विश्वविद्यालय में असिस्टेंट प्रोफेसर बनी। आगे चलकर एक डिग्री कॉलेज की भी स्थापना की।
                </p>
                <h3 className=" mt-5 text-xl font-semibold mb-3 text-yellow-700">अंकशास्त्र में विश्वास</h3>
                <p className="text-gray-700 leading-relaxed">
                  इन अनुभवों से यह यकीन हुआ कि हमारे निर्णय नक्षत्रों और संख्याओं द्वारा तय होते हैं। इसी ने मेरा विश्वास इस दिव्य विद्या पर और प्रबल किया।
                </p>
              </div>

             
            </div>
          </div>
        </div>
      </section>

      {/* Certificate Carousel */}
      <section id="certificates" className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              My <span className="text-orange-600">Certifications</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              DivyNumerology is backed by extensive training and recognized certifications in the field of numerology.
            </p>
          </div>

          <CertificateSlider certificates={certificates}/>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="energy.jpg"
                alt="Numerology Energy"
                className="rounded-xl shadow-xl w-full max-w-md mx-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our <span className="text-orange-600">Philosophy</span>
              </h2>
              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  अंकशास्त्र की अचूक विद्या की सहायता से, नियति द्वारा निर्धारित रास्ते का आभास यदि हमें हो जाए तो उस पर तीव्र व लंबी दौड़ लगाकर निश्चित ही अपने गंतव्य का स्पर्श किया जा सकता है।
                </p>
                <p className="text-gray-700 leading-relaxed">
                  पिछले एक दशक से अधिक समय में सहस्रों व्यक्तियों के लाभान्वित होने का माध्यम ईश्वर ने मुझे बनाया जिससे उन भद्रजनों ने मुझे इतनी शुभकामनाएँ दीं की मेरी झोली छोटी पड़ गई।
                </p>
                <div className="bg-orange-50 p-6 rounded-xl border border-orange-200">
                  <p className="text-orange-700 font-medium italic">
                    "DIVYNUMEROLOGY के माध्यम से हम आपसे जुड़ रहे हैं और इस पवित्र महाविद्या का जितना लाभ आप ले सकें उतने में आपका भरपूर सहयोग करने हेतु प्रतिबद्ध हैं।"
                  </p>
                </div>
                <p className="text-orange-600 font-semibold">
                  आप सभी को आनंदमयी वर्तमान सहित प्रकाशमान भविष्य की असीम मंगलकामनाएँ।
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-50 to-yellow-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Discover Your <span className="text-orange-600">Numerological Path</span>?
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Unlock the secrets hidden in your numbers and gain valuable insights into your life's journey.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {/* <a
              href="/consultation"
              className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-lg"
            >
              Book a Consultation
            </a> */}
            {/* <a
              href="/learn"
              className="px-8 py-4 bg-white text-orange-600 font-medium rounded-full shadow-md border border-orange-200 hover:bg-orange-50 transition-all duration-300 text-lg"
            >
              Learn Numerology Basics
            </a> */}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;