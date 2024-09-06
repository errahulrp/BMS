import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 font-Asul">Brains Media Solutions</h4>
            <p className="text-sm text-gray-400 font-Asul">
              We deliver high-quality digital solutions, empowering businesses to grow and succeed in the online world.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4 font-Asul">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#aboutus" className="text-gray-400 hover:text-white font-Asul">About Us</a></li>
              <li><a href="#ourmision" className="text-gray-400 hover:text-white font-Asul">Our Mission</a></li>
              <li><a href="#ourvision" className="text-gray-400 hover:text-white font-Asul">Our Vision</a></li>
              <li><a href="#ourservice" className="text-gray-400 hover:text-white font-Asul">Our Service</a></li>
            </ul>
          </div>

          <div id='contact'>
            <h4 className="text-lg font-semibold text-white mb-4 font-Asul">Contact Us</h4>
            <p className="text-sm text-gray-400 font-Asul">
              Email: info@brainsmedia.com
            </p>
            <p className="text-sm text-gray-400 font-Asul">
              Phone: +91 95355 33588
            </p>
            <p className="text-sm text-gray-400 font-Asul">
              Address: 2nd Floor, Plot No 28, Ganeshpur Rd, above Pilot Coaching, near Military Hospital, Vinayak Nagar, Belagavi, Karnataka 591108
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4 font-Asul">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/brainsmediasolutions" className="text-gray-400 hover:text-white">
                <FaFacebookF className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/Brains_Media_Solutions/" className="text-gray-400 hover:text-white">
                <FaInstagram className="w-6 h-6" />
              </a>
              <a href="https://x.com/brainsmedia2012" className="text-gray-400 hover:text-white">
                <FaTwitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-4 text-sm text-gray-500 text-center font-Asul">
          <p>© 2024 Brains Media Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
