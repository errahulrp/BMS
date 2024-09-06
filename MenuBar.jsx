import React, { useState } from 'react';
import { Transition } from '@headlessui/react';

const MenuBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed bg-white shadow-xl w-full z-50 bg-opacity-40 backdrop-blur-3xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div>
            <h1 className="text-xl text-black font-Aladin cursor-pointer">Brains Media Solutions</h1>
          </div>

          <div className="hidden md:flex justify-center ">
            <div className="flex space-x-8">
              <a href="#aboutus" className="text-black hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium font-Asul">
                About Us
              </a>
              <a href="#ourmision" className="text-black hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium font-Asul">
                Our Mission
              </a>
              <a href="#ourservice" className="text-black hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium font-Asul">
                Our Services
              </a>
              <a href="#ourvision" className="text-black hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium font-Asul">
                Our Vision
              </a>
              <a href="#contact" className="text-black hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium font-Asul">
                Contact
              </a>
            </div>
          </div>

          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-200 inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#aboutus" className="text-gray-700 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium">
            About Us
            </a>
            <a href="#ourmision" className="text-gray-700 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium">
              Our Mission
            </a>
            <a href="#ourservice" className="text-gray-700 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium">
              Our Service
            </a>
            <a href="#ourvision" className="text-gray-700 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium">
              Our Vision
            </a>
            <a href="#contact" className="text-gray-700 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium">
              Contact
            </a>
          </div>
        </div>
      </Transition>
    </nav>
  );
};

export default MenuBar;
