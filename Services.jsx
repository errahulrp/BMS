import React from 'react';

const Services = () => {
  return (
    <section className="bg-gray-100 py-16" id='ourservice'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase font-Asul">
          Our Services
        </h2>
        <p className="mt-2 text-3xl leading-9 font-extrabold text-gray-900 sm:text-4xl lg:text-5xl font-Asul">
          Tailored Digital Solutions for Your Business
        </p>
        <p className="mt-6 max-w-2xl text-xl text-gray-600 mx-auto font-Asul">
          Brains Media Solutions offers a variety of services designed to help your business succeed in the digital world. Explore our offerings and discover how we can support your growth.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-lg rounded-lg p-8 text-center transform transition-transform hover:scale-105 hover:shadow-2xl duration-300">
          <div className="text-indigo-600 mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-12 mx-auto">
              <path fillRule="evenodd" d="M2.25 6a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V6Zm3.97.97a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 0 1 0 1.06l-2.25 2.25a.75.75 0 0 1-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 0 1 0-1.06Zm4.28 4.28a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" clipRule="evenodd" />
            </svg>
          </div>
          <h3 className="text-xl leading-6 font-bold text-gray-900 mb-4 font-Asul">Web Development</h3>
          <p className="text-base text-gray-500 font-Asul">
            We build custom, responsive websites designed to boost your online presence and engage your audience.
          </p>
          <button className="mt-6 px-6 py-2 font-semibold rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition duration-300 font-Asul">
            Learn More
          </button>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-8 text-center transform transition-transform hover:scale-105 hover:shadow-2xl duration-300">
          <div className="text-indigo-600 mb-6">
            <svg className="w-14 h-14 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3v18h18V3H3zm4 4h10v10H7V7zm2 2v6h6V9H9z" />
            </svg>
          </div>
          <h3 className="text-xl leading-6 font-bold text-gray-900 mb-4 font-Asul">App Development</h3>
          <p className="text-base text-gray-500 font-Asul">
            Our team creates high-performance mobile and web applications that drive user engagement and streamline processes.
          </p>
          <button className="mt-6 px-6 py-2 font-semibold rounded-full font-Asul bg-indigo-600 text-white hover:bg-indigo-700 transition duration-300">
            Learn More
          </button>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-8 text-center transform transition-transform hover:scale-105 hover:shadow-2xl duration-300">
          <div className="text-indigo-600 mb-6">
            <svg className="w-14 h-14 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.75l7 7v8a.75.75 0 01-.75.75h-12.5A.75.75 0 015 19.75v-8l7-7z" />
            </svg>
          </div>
          <h3 className="text-xl leading-6 font-bold text-gray-900 font-Asul mb-4">Digital Marketing</h3>
          <p className="text-base text-gray-500 font-Asul">
            We provide comprehensive digital marketing services, from SEO and PPC to social media campaigns, to grow your brand.
          </p>
          <button className="mt-6 px-6 py-2 font-Asul font-semibold rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition duration-300">
            Learn More
          </button>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-8 text-center transform transition-transform hover:scale-105 hover:shadow-2xl duration-300">
          <div className="text-indigo-600 mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10 mx-auto">
              <path fillRule="evenodd" d="M17.303 5.197A7.5 7.5 0 0 0 6.697 15.803a.75.75 0 0 1-1.061 1.061A9 9 0 1 1 21 10.5a.75.75 0 0 1-1.5 0c0-1.92-.732-3.839-2.197-5.303Zm-2.121 2.121a4.5 4.5 0 0 0-6.364 6.364.75.75 0 1 1-1.06 1.06A6 6 0 1 1 18 10.5a.75.75 0 0 1-1.5 0c0-1.153-.44-2.303-1.318-3.182Zm-3.634 1.314a.75.75 0 0 1 .82.311l5.228 7.917a.75.75 0 0 1-.777 1.148l-2.097-.43 1.045 3.9a.75.75 0 0 1-1.45.388l-1.044-3.899-1.601 1.42a.75.75 0 0 1-1.247-.606l.569-9.47a.75.75 0 0 1 .554-.68Z" clipRule="evenodd" />
            </svg>
          </div>
          <h3 className="text-xl leading-6 font-bold text-gray-900 mb-4 font-Asul">UI/UX Design</h3>
          <p className="text-base text-gray-500 font-Asul">
            Our design team crafts user-friendly interfaces and experiences that delight users and enhance brand loyalty.
          </p>
          <button className="mt-6 font-Asul px-6 py-2 font-semibold rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition duration-300">
            Learn More
          </button>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-8 text-center transform transition-transform hover:scale-105 hover:shadow-2xl duration-300">
          <div className="text-indigo-600 mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10 mx-auto">
              <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
              <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
            </svg>
          </div>
          <h3 className="text-xl leading-6 font-bold text-gray-900 mb-4 font-Asul">Content Creation</h3>
          <p className="text-base text-gray-500 font-Asul">
            We produce high-quality, engaging content that resonates with your audience and amplifies your message.
          </p>
          <button className="mt-6 px-6 py-2 font-semibold font-Asul rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition duration-300">
            Learn More
          </button>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-8 text-center transform transition-transform hover:scale-105 hover:shadow-2xl duration-300">
          <div className="text-indigo-600 mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10 mx-auto">
              <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
            </svg>
          </div>
          <h3 className="text-xl leading-6 font-bold text-gray-900 font-Asul mb-4">IT Support</h3>
          <p className="text-base text-gray-500 font-Asul">
            Our experts provide round-the-clock IT support to ensure your systems are running smoothly and efficiently.
          </p>
          <button className="mt-6 px-6 py-2 font-Asul font-semibold rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
