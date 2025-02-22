import React from "react";
import { motion } from "framer-motion";
import { dataintes, digital, logical, ninja, quantitatives, verbal } from '../assets/aptitudeData';

export default function Aptitude() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4 pt-12">
      <div className="max-w-7xl mx-auto">
        <br></br>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 pt-10">
          Quantitative Aptitude
        </h1>

        {/* Display 6 Subjects with Direct Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {quantitatives.map((quantitative) => (
            <motion.div
              key={quantitative.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-xl transition-shadow duration-200 border-2 border-transparent hover:border-blue-600 block"
            >
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {quantitative.title}
              </h2>
              <div className="flex gap-4">
                <a
                  href={quantitative.link1}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 px-4 py-2 rounded-lg font-semibold transition-colors"
                >
                  Easy
                </a>
                <a
                  href={quantitative.Link2}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300 px-4 py-2 rounded-lg font-semibold transition-colors"
                >
                  Medium
                </a>
              </div>
            </motion.div>
          ))}
        </div>


        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 pt-10">
          Data Interpretation (UpComing)
        </h1>

        {/* Display 6 Subjects with Direct Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {dataintes.map((dataintes) => (
            <motion.div
              key={dataintes.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-xl transition-shadow duration-200 border-2 border-transparent hover:border-blue-600 block"
            >
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {dataintes.title}
              </h2>
              <div className="flex gap-4">
                <a
                  href={dataintes.link1}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 px-4 py-2 rounded-lg font-semibold transition-colors"
                >
                  Easy
                </a>
                <a
                  href={dataintes.Link2}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300 px-4 py-2 rounded-lg font-semibold transition-colors"
                >
                  Medium
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 pt-10">
          Logical Reasoning (UpComing)
        </h1>

        {/* Display 6 Subjects with Direct Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {logical.map((logical) => (
            <motion.div
              key={logical.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-xl transition-shadow duration-200 border-2 border-transparent hover:border-blue-600 block"
            >
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {logical.title}
              </h2>
              <div className="flex gap-4">
                <a
                  href={logical.link1}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 px-4 py-2 rounded-lg font-semibold transition-colors"
                >
                  Easy
                </a>
                <a
                  href={logical.Link2}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300 px-4 py-2 rounded-lg font-semibold transition-colors"
                >
                  Medium
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 pt-10">
          Verbal Ability (UpComing)
        </h1>

        {/* Display 6 Subjects with Direct Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {verbal.map((verbal) => (
            <motion.div
              key={verbal.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-xl transition-shadow duration-200 border-2 border-transparent hover:border-blue-600 block"
            >
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {verbal.title}
              </h2>
              <div className="flex gap-4">
                <a
                  href={verbal.link1}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 px-4 py-2 rounded-lg font-semibold transition-colors"
                >
                  Easy
                </a>
                <a
                  href={verbal.Link2}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300 px-4 py-2 rounded-lg font-semibold transition-colors"
                >
                  Medium
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 pt-10">
          TCS Ninja Tests (UpComing)
        </h1>

        {/* Display 6 Subjects with Direct Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ninja.map((ninja) => (
            <motion.a
              key={ninja.id}
              href={ninja.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-xl transition-shadow duration-200 border-2 border-transparent hover:border-blue-600 block"
            >
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {ninja.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300">Click to open test</p>
            </motion.a>
          ))}
        </div>

        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 pt-10">
          TCS Digital Tests (UpComing)
        </h1>

        {/* Display 6 Subjects with Direct Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {digital.map((digital) => (
            <motion.a
              key={digital.id}
              href={digital.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-xl transition-shadow duration-200 border-2 border-transparent hover:border-blue-600 block"
            >
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {digital.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300">Click to open test</p>
            </motion.a>
          ))}
        </div>

        {/* Best YouTube Free Course Section */}
        <div className="mt-8 bg-blue-50 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Best YouTube Free Course
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>
              <a
                href="https://youtube.com/playlist?list=PLpyc33gOcbVADMKqylI__O_O_RMeHTyNK&si=0TNTPIcvz3zDCzV4"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                CareerRide (Logical Reasoning)
              </a>
            </li>
            <li>
              <a
                href="https://youtube.com/playlist?list=PLpyc33gOcbVA4qXMoQ5vmhefTruk5t9lt&si=IrVZ-7Ps-IjnmxUF"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                CareerRide (Quantitative Aptitude)
              </a>
            </li>
            <li>
              <a
                href="https://youtube.com/playlist?list=PLpyc33gOcbVBbD8Vfy-gCbivjSSHbMpUX&si=eRRfeiE5mOEphRKP"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                CareerRide (Verbal Ability)
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
