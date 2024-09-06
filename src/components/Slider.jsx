import React, { useState } from 'react';
import WebDev from '../assets/WebDevelopment.jpg';
import Tech from '../assets/Tech.jpg';
import Innovation from '../assets/Innovation.jpg';

const Slider = () => {
  const slides = [
    {
      id: 1,
      image: WebDev,
      alt: 'Slide 1 - Web Development',
    },
    {
      id: 2,
      image: Tech,
      alt: 'Slide 2 - Technology',
    },
    {
      id: 3,
      image: Innovation,
      alt: 'Slide 3 - Coding and Innovation',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-64 sm:h-96 lg:h-[680px] overflow-hidden top-16">
      <div className="w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${index === currentSlide ? 'translate-x-0' : 'translate-x-full opacity-0'
              }`}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-center object-cover"
            />
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-gray-700 p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
      >
        <svg
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-gray-700 p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
      >
        <svg
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 w-3 rounded-full ${currentSlide === index ? 'bg-indigo-600' : 'bg-gray-300'
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
