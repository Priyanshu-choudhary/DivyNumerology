import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const CertificateSlider = ({ certificates }) => {
  return (
    <div className="relative px-4 md:px-12 py-8">
     

      <Swiper
        spaceBetween={20}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="mySwiper"
      >
        {certificates.map((cert, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-xl shadow-xl border border-gray-200 hover:shadow-2xl transition duration-300 h-full flex flex-col overflow-hidden">
              <div className="overflow-hidden">
                <img
                  src={cert}
                  alt={`Certificate ${index + 1}`}
                  className="w-full h-60 object-cover transform hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-4 text-center bg-gray-50">
                <h3 className="text-md font-semibold text-orange-700">
                  Certificate {index + 1}
                </h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CertificateSlider;
