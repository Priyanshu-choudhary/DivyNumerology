import React from "react";

const HeroSection = () => {
  return (
    <div className="bg-yellow-50 px-6 py-20 lg:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h1 className="text-4xl font-bold text-orange-600 mb-6">हमारे बारे में</h1>
          <div className="space-y-6 text-gray-800 leading-relaxed text-[17px]">

            <p>
              <span className="font-semibold text-orange-500">"अंकशास्त्र की अचूक विद्या"</span> की सहायता से, यदि नियति के रास्ते का आभास हमें हो जाए तो उस पर तीव्र व लंबी दौड़ लगाकर निश्चित ही अपने गंतव्य को पाया जा सकता है।
            </p>

            <div className="bg-white p-4 rounded-xl shadow-sm border-l-4 border-orange-300">
              <p>जटिल समय में इस विज्ञान द्वारा सुझाए गए उपायों से हम उसी तरह सुरक्षित हो सकते हैं जैसे बारिश में छाता उपयोगी होता है।</p>
            </div>

            <p>
              एक प्रतिष्ठित राष्ट्रीय बैंक में अधिकारी रहते हुए मेरा झुकाव <span className="italic text-orange-600">अंकशास्त्र</span> की ओर हुआ। खुद का लॉशोग्रिड चार्ट जब मैंने देखा, तो भविष्य में शिक्षा और ज्योतिष के क्षेत्र में जाने का संकेत मिला।
            </p>

            <div className="bg-orange-100 p-4 rounded-lg">
              <p>
                परिस्थितियाँ बदलीं और मैं <span className="font-medium text-orange-700">चौधरी चरण सिंह विश्वविद्यालय</span> में असिस्टेंट प्रोफेसर बनी। आगे चलकर एक डिग्री कॉलेज की भी स्थापना की।
              </p>
            </div>

            <p>
              इन अनुभवों से यह यकीन हुआ कि <span className="text-orange-600 font-semibold">हमारे निर्णय नक्षत्रों और संख्याओं द्वारा तय होते हैं</span>। इसी ने मेरा विश्वास इस दिव्य विद्या पर और प्रबल किया।
            </p>

            <p>
              पिछले एक दशक से अधिक समय में सहस्रों लोगों को इस विद्या से लाभ मिला है। उनकी शुभकामनाओं ने मेरी झोली भर दी।
            </p>

            <div className="bg-orange-50 p-5 rounded-xl border border-orange-200 shadow-inner">
              <p className="text-orange-700 font-medium">
                DIVYNUMEROLOGY के माध्यम से हम आपसे जुड़ रहे हैं ताकि आप इस <span className="underline">पवित्र महाविद्या</span> का लाभ ले सकें। हम आपके लिए हरसंभव सहयोग देने हेतु प्रतिबद्ध हैं।
              </p>
            </div>

            <p className="pt-2 text-orange-600 font-semibold">
              आप सभी को आनंदमयी वर्तमान और प्रकाशमान भविष्य की मंगलकामनाएँ ✨
            </p>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <img
              src="./energy.jpg"
              alt="Divine Numerology"
              className="rounded-xl shadow-lg max-w-md"
            />
            <span className=" -bottom-6 -left-6 z-[-1]">
              <svg
                width="200"
                height="200"
                viewBox="0 0 93 93"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {[...Array(5)].map((_, row) =>
                  [...Array(5)].map((_, col) => (
                    <circle
                      key={`${row}-${col}`}
                      cx={2.5 + col * 22}
                      cy={2.5 + row * 22}
                      r="2.5"
                      fill="#fb923c"
                    />
                  ))
                )}
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
