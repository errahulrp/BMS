import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaLightbulb, FaUsers, FaLeaf, FaStar } from 'react-icons/fa';

const Mission = () => {
  return (
    <section className=" bg-gray-100 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden" id='ourmision'>
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h2 className="text-5xl font-extrabold text-gray-900 mb-8 font-Asul">
          Our Mission
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12 font-Asul">
          At Brains Media Solutions, we are dedicated to driving growth and innovation through advanced digital strategies that push boundaries and deliver exceptional results.
        </p>
      </div>

      <div className="relative z-10 lg:grid lg:grid-cols-2 lg:gap-12 space-y-24 lg:space-y-0">
        <motion.div
          className="flex items-center justify-center lg:flex-row"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          <FaRocket className="text-6xl text-indigo-600 flex-shrink-0" />
          <div className="ml-6">
            <h3 className="text-3xl font-bold text-center text-gray-900 font-Asul">
              Innovation
            </h3>
            <p className="text-lg text-gray-600 mt-2 w-80 text-center font-Asul">
              We constantly push the boundaries of technology and creativity to help our clients stay ahead in an evolving digital landscape.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="flex items-center justify-center lg:flex-row"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          <FaLightbulb className="text-6xl text-indigo-600 flex-shrink-0" />
          <div className="ml-6">
            <h3 className="text-3xl font-bold text-center text-gray-900 font-Asul">
              Creativity
            </h3>
            <p className="text-lg text-gray-600 mt-2 w-80 text-center font-Asul">
              Our creative team crafts unique and impactful strategies, ensuring that our solutions resonate with each client’s vision.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="flex items-center justify-center lg:flex-row"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          <FaUsers className="text-6xl text-indigo-600 flex-shrink-0" />
          <div className="ml-6">
            <h3 className="text-3xl font-bold text-center text-gray-900 font-Asul">
              Collaboration
            </h3>
            <p className="text-lg text-gray-600 w-80 text-center mt-2 font-Asul">
              We work hand-in-hand with our clients to build meaningful relationships and long-lasting success.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="flex items-center justify-center lg:flex-row"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          <FaLeaf className="text-6xl text-indigo-600 flex-shrink-0" />
          <div className="ml-6">
            <h3 className="text-3xl font-bold text-gray-900 text-center font-Asul">
              Sustainability
            </h3>
            <p className="text-lg text-gray-600 mt-2 text-center w-80 font-Asul">
              We prioritize sustainable practices in all our solutions, ensuring a positive impact on the environment and society.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="absolute inset-x-0 top-1/4 h-1/2 bg-gradient-to-b from-transparent to-gray-100 opacity-50"></div>
    </section>
  );
};

export default Mission;
