import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-gray-100 py-20 px-4 mt-16 sm:px-6 lg:px-8" id='aboutus'>
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase font-Asul">ABout Us</h2>
        <p className="mt-2 text-3xl leading-9 font-extrabold text-gray-900 sm:text-4xl font-Asul">
          Your One-Stop Solution for Media & Marketing
        </p>
        <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto font-Asul">
          At Brains Media Solutions, we specialize in creative media, marketing strategies, and impactful branding solutions.
          Our goal is to drive your business to new heights through innovative approaches and expert execution.
        </p>
        <div className="mt-10 flex justify-center">
          <a href="#contact" className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-indigo-700 transition-colors font-Asul">
            Get Started Today
          </a>
        </div>
      </div>
    
    </div>
  );
};

export default AboutUs;
