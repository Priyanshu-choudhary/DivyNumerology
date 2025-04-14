import React from 'react';

function Footer() {
    return (
        <footer className="bg-orange-100 text-gray-800 ">
            <div className="max-w-screen-xl mx-auto px-4 pt-16 pb-10 sm:px-6 lg:px-8 lg:pt-24">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
                    <div className="text-center sm:text-left">
                        <img src="./logo-removebg.png" alt="logo" width={120} className="mx-auto sm:mx-0 " />
                        <p className="mt-6 max-w-md mx-auto sm:mx-0 text-sm leading-relaxed text-gray-700">
                            With love and insight from <span className="font-semibold text-orange-600">Divyya Sharma</span> – unlocking your true potential.
                        </p>

                        <div className="mt-6 flex justify-center sm:justify-start gap-5">
                            {/* Social icons */}
                            {[
                                { label: 'Facebook', icon: 'facebook' },
                                { label: 'Instagram', icon: 'instagram' },
                                { label: 'Twitter', icon: 'twitter' }
                            ].map(({ label, icon }) => (
                                <a
                                    key={label}
                                    href="#"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-orange-600 hover:text-orange-700 transition"
                                >
                                    <span className="sr-only">{label}</span>
                                    <i className={`fab fa-${icon} text-xl`}></i>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:col-span-2 text-sm">
                        <div>
                            <h3 className="font-bold text-gray-900 mb-4">About Us</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:text-orange-600">About us</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-bold text-gray-900 mb-4">Our Services</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:text-orange-600">Numerology calculators</a></li>
                                <li><a href="#" className="hover:text-orange-600">Friends and enemies</a></li>
                                <li><a href="#" className="hover:text-orange-600">Check mobile number</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-bold text-gray-900 mb-4">Helpful Links</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:text-orange-600">FAQs</a></li>
                                <li><a href="#" className="hover:text-orange-600">Support</a></li>
                                <li className="flex items-center gap-2">
                                    <span className="relative flex h-2 w-2">
                                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-600"></span>
                                    </span>
                                    <span>Live</span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-bold text-gray-900 mb-4">Contact Us</h3>
                            <ul className="mt-8 space-y-4 text-sm">
                                <li>
                                    <a
                                        className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                                        href="#"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="size-5 shrink-0 text-gray-900 shadow-sm"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                            />
                                        </svg>

                                        <span className="flex-1 text-gray-700">tyagi.div@gmail.com</span>
                                    </a>
                                </li>

                                <li>
                                    <a
                                        className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                                        href="#"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="size-5 shrink-0 text-gray-900 shadow-sm"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                            />
                                        </svg>

                                        <span className="flex-1 text-gray-700">+91 9012312552</span>
                                    </a>
                                </li>

                                <li
                                    className="flex items-start justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="size-5 shrink-0 text-gray-900 shadow-sm"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>

                                    <address className="-mt-0.5 flex-1 text-gray-700 not-italic">
                                        Chaudhary Charan Singh University,Meerut,India
                                    </address>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-12 border-t border-orange-200 pt-6 text-sm text-center sm:text-left sm:flex sm:items-center sm:justify-between">
                    <p className="text-gray-600">&copy; 2025 DivyNumerology. All rights reserved.</p>
                    <div className="flex gap-4 mt-4 sm:mt-0">
                        <a href="/ShippingAndDeliveryPolicy" className="text-orange-600 hover:text-orange-700">Shipping And Delivery Policy</a>
                        <a href="/CancellationRefundPolicy" className="text-orange-600 hover:text-orange-700">Cancellation and RefundPolicy</a>
                        <a href="/PrivacyPolicy" className="text-orange-600 hover:text-orange-700">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
