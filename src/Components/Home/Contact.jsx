import React from "react";

const Contact = () => {
  return (
    <>
      <section className="relative z-10 overflow-hidden bg-yellow-50 py-20 lg:py-[120px]">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap lg:justify-between">
            {/* Left Column - Contact Information */}
            <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
              <div className="mb-12 max-w-[570px] rounded-2xl bg-gradient-to-br from-yellow-50 via-orange-50 to-amber-100 border border-orange-200 p-6 shadow-xl ring-1 ring-orange-100">
                <span className="mb-3 block text-sm font-semibold uppercase text-orange-500 tracking-widest">
                  Reach Out
                </span>
                <h2 className="mb-5 text-4xl font-extrabold text-orange-600 sm:text-5xl">
                  Get In Touch
                </h2>
                <p className="mb-10 text-base leading-relaxed text-gray-600">
                  We’re here to answer your questions, guide your journey, or simply listen. Our team is always happy to hear from curious minds and kind souls.
                </p>

                {/* Info Block */}
                <div className="space-y-7">
                  {/* Location */}
                  <div className="flex items-start space-x-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-orange-100 text-orange-600 shadow-inner">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5s-3 1.343-3 3 1.343 3 3 3z" />
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900">Our Location</h4>
                      <p className="text-sm text-gray-600">
                        99 St. Jomblo Park, Pekanbaru 28292, Indonesia
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start space-x-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-orange-100 text-orange-600 shadow-inner">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.87 19.87 0 0 1 3 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.12.96.36 1.87.71 2.75a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.58 6.58l1.27-1.27a2 2 0 0 1 2.11-.45c.88.35 1.79.59 2.75.71A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900">Phone Number</h4>
                      <p className="text-sm text-gray-600">(+62) 81 414 257 9980</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-orange-100 text-orange-600 shadow-inner">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M4 4h16v16H4z" stroke="none" />
                        <path d="M4 4l8 8 8-8" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900">Email Address</h4>
                      <p className="text-sm text-gray-600">info@yourdomain.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="relative">
                <form className="space-y-6 rounded-2xl bg-yellow-50 p-6 shadow-xl ring-1 ring-orange-200">
                  <div className="flex flex-col space-y-1">
                    <label className="text-sm font-semibold text-orange-600">
                      Full Name
                    </label>
                    <ContactInputBox
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div className="flex flex-col space-y-1">
                    <label className="text-sm font-semibold text-orange-600">
                      Email Address
                    </label>
                    <ContactInputBox
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div className="flex flex-col space-y-1">
                    <label className="text-sm font-semibold text-orange-600">
                      Phone Number
                    </label>
                    <ContactInputBox
                      type="text"
                      name="phone"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div className="flex flex-col space-y-1">
                    <label className="text-sm font-semibold text-orange-600">
                      Your Message
                    </label>
                    <ContactTextArea
                      row="6"
                      name="details"
                      placeholder="Tell us how we can help you..."
                      defaultValue=""
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full rounded-xl bg-orange-500 p-3 text-lg font-medium text-white shadow-md transition duration-300 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    >
                      Send Message ✉️
                    </button>
                  </div>
                </form>

                {/* Decorative SVG Overlays */}
                <div>
                  <span className="absolute -right-9 -top-10 z-[-1]">
                    <svg width={100} height={100} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M0 100C0 44.7715 0 0 0 0C55.2285 0 100 44.7715 100 100C100 100 100 100 0 100Z" fill="#FFA726" />
                    </svg>
                  </span>
                  <span className="absolute -right-10 top-[90px] z-[-1]">
                    <svg width={34} height={134} viewBox="0 0 34 134" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="32" cy="132" r="1.66667" fill="#FB8C00" />
                      <circle cx="32" cy="117.333" r="1.66667" fill="#FB8C00" />
                      <circle cx="32" cy="102.667" r="1.66667" fill="#FB8C00" />
                      <circle cx="32" cy="88" r="1.66667" fill="#FB8C00" />
                      <circle cx="32" cy="73.3333" r="1.66667" fill="#FB8C00" />
                      <circle cx="32" cy="45" r="1.66667" fill="#FB8C00" />
                      <circle cx="32" cy="16" r="1.66667" fill="#FB8C00" />
                      <circle cx="32" cy="59" r="1.66667" fill="#FB8C00" />
                      <circle cx="32" cy="30.6666" r="1.66667" fill="#FB8C00" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

// Custom Input Box Component with matching styling
const ContactInputBox = ({ type, placeholder, name }) => {
  return (
    <div className="mb-6">
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        className="w-full rounded-xl border border-orange-200 bg-white px-4 py-3 text-base text-gray-700 transition focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-300"
      />
    </div>
  );
};

// Custom TextArea Component with matching styling
const ContactTextArea = ({ row, placeholder, name, defaultValue }) => {
  return (
    <div className="mb-6">
      <textarea
        rows={row}
        placeholder={placeholder}
        name={name}
        className="w-full resize-none rounded-xl border border-orange-200 bg-white px-4 py-3 text-base text-gray-700 transition focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-300"
        defaultValue={defaultValue}
      />
    </div>
  );
};
