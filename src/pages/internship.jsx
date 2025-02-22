import React from "react";
import { motion } from "framer-motion";
import { subjects, Cheatsheets } from '../assets/internshipData';

export default function internship() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4 pt-12">
      <div className="max-w-7xl mx-auto">
        <br></br>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 pt-10">
          Free Internship
        </h1>

        {/* Display 6 Subjects with Direct Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {subjects.map((subject) => (
            <motion.a
              key={subject.id}
              href={subject.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-xl transition-shadow duration-200 border-2 border-transparent hover:border-blue-600 block"
            >
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {subject.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300">Click to open</p>
            </motion.a>
          ))}
        </div>

        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 pt-10">
          Paid Internship
        </h1>

        {/* Display 6 Subjects with Direct Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Cheatsheets.map((Cheatsheets) => (
            <motion.a
              key={Cheatsheets.id}
              href={Cheatsheets.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-xl transition-shadow duration-200 border-2 border-transparent hover:border-blue-600 block"
            >
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {Cheatsheets.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300">Click to open notes</p>
            </motion.a>
          ))}
        </div>

        <div className="mt-8 bg-blue-50 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Before Applying
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Identify Your Goals</li>
            <li>Build a Strong Resume & Portfolio</li>
            <li>Upskill Yourself</li>
            <li>Prepare for Coding & Technical Interviews</li>
            <li>Optimize Your LinkedIn & GitHub</li>
          </ul>
        </div>
        <div className="mt-8 bg-blue-50 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
          During the Internship
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Be Proactive & Ask Questions</li>
            <li>Network & Build Relationships</li>
            <li>Document Your Work & Get Recommendations</li>
          </ul>
        </div>
        <div className="mt-8 bg-blue-50 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
          After the Internship
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Update Your Resume & LinkedIn</li>
            <li>Leverage the Experience for Future Jobs</li>
            <li>Stay in Touch with Your Network</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
