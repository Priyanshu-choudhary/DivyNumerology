import React from "react";
import HeroSection from "./HeroSection";
import Footer from "./Footer";

const About = () => {
    return (
        <>
            <section className="bg-yellow-50 overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]  ">
                <div className="container mx-auto">
                    <div className="flex flex-wrap items-center justify-between -mx-4">
                        <div className="w-full px-4 lg:w-6/12">
                            <div className="flex items-center -mx-3 sm:-mx-4">
                                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                                    <div className="py-3 sm:py-4">
                                        <img
                                            src="maam.jpg"
                                            alt=""
                                            className="w-full rounded-2xl"
                                        />
                                    </div>
                                    <div className="py-3 sm:py-4">
                                        <img
                                            src="maam2.jpg"
                                            alt=""
                                            className="w-full rounded-2xl"
                                        />
                                    </div>
                                </div>
                                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                                    <div className="relative z-10 my-4">
                                        <img
                                            src="logo-removebg.png"
                                            alt=""
                                            className=" rounded-2xl"

                                        />
                                        
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
                            <div className="mt-10 lg:mt-0 space-y-8">
                                {/* Header Section */}
                                <div className="relative mb-6">
                                    <span className="text-orange-500 text-sm font-semibold tracking-wider uppercase">
                                        DivyNumerology
                                    </span>
                                    <h2 className="mt-2 text-4xl font-extrabold text-orange-900 dark:text-white leading-snug sm:text-[40px]/[48px]">
                                        Empowering lives through the ancient science of numerology
                                    </h2>
                                </div>

                                {/* Intro Section */}
                                <div className="p-6 rounded-2xl bg-orange-50/60 dark:bg-orange-100/10 shadow backdrop-blur-sm border border-orange-100 dark:border-dark-4 transition hover:shadow-lg">
                                    <p className="text-base text-orange-800 dark:text-orange-200 leading-relaxed">
                                        Welcome to <strong>DivyNumerology</strong>, where ancient wisdom meets modern insight.
                                        Founded by renowned numerologist <strong>Divyya Sharma</strong>, our mission is to help individuals
                                        unlock their full potential through the power of numbers.
                                    </p>
                                </div>

                                {/* Story Section */}
                                <div className="p-6 rounded-2xl bg-gradient-to-tr from-yellow-100 via-orange-50 to-yellow-50 dark:from-dark dark:to-dark-2 border-l-4 border-orange-400 shadow-inner">
                                    <h3 className="text-xl font-semibold mb-3 text-orange-600 flex items-center gap-2">
                                        <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2"
                                            viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c.868 0 1.634.276 2.26.74l3.24-3.24a9 9 0 10-3.24 3.24A3.993 3.993 0 0112 8z" /></svg>
                                        The Journey
                                    </h3>
                                    <p className="text-base text-body-color dark:text-dark-6">
                                        Divyya's journey began 12 years ago as a national bank officer. Her fascination with numbers led her to explore the Lo Shu grid chart...
                                    </p>
                                    <p className="mt-3 text-base text-body-color dark:text-dark-6">
                                        With the support of her family, Divyya went on to establish a private degree college...
                                    </p>
                                </div>

                                {/* Benefits */}
                                <div className="p-6 rounded-xl bg-orange-100/60 dark:bg-orange-900/20 border border-orange-300 dark:border-orange-600">
                                    <h3 className="text-xl font-semibold mb-4 text-orange-700 flex items-center gap-2">
                                        <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" strokeWidth="2"
                                            viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" /></svg>
                                        How Numerology Helps
                                    </h3>
                                    <ul className="space-y-2 list-disc list-inside text-orange-900 dark:text-orange-100">
                                        <li>Reveal your life's purpose and direction</li>
                                        <li>Protect you during challenging times</li>
                                        <li>Guide informed decisions</li>
                                        <li>Enhance relationships and careers</li>
                                        <li>Find compatible partners</li>
                                        <li>Name and number corrections for success</li>
                                    </ul>
                                </div>

                                {/* Mission */}
                                <div className="relative p-6 rounded-2xl bg-gradient-to-br from-yellow-50 via-orange-50 to-amber-100 dark:bg-dark-2 border border-yellow-200 dark:border-dark-3">
                                    <h3 className="text-xl font-semibold mb-3 text-orange-800 flex items-center gap-2">
                                        <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" strokeWidth="2"
                                            viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                        Our Mission
                                    </h3>
                                    <ul className="list-disc list-inside space-y-2 text-body-color dark:text-dark-6">
                                        <li>To empower individuals through sacred Mahavidya</li>
                                        <li>To help people live balanced, fulfilling lives</li>
                                    </ul>
                                </div>

                                {/* Final Message */}
                                <div className="p-6 rounded-2xl bg-orange-50/50 border border-orange-100 dark:border-dark-4 shadow">
                                    <p className="text-base text-body-color dark:text-dark-6">
                                        Join us on this journey of self-discovery and enlightenment. Divyya Sharma sends her warmest wishes for your present and future.
                                    </p>
                                </div>

                                {/* CTA */}
                                <div className="pt-4 text-center">
                                    <a
                                        href="#"
                                        className="inline-flex items-center gap-2 justify-center py-3 px-8 text-base font-semibold text-white bg-gradient-to-r from-orange-500 to-orange-600 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 motion-safe:animate-pulse"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2"
                                            viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" /></svg>
                                        Get Started
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <HeroSection/>
            <Footer/>
        </>
    );
};

export default About;
