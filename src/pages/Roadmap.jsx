import React from "react";
import { motion } from "framer-motion";
import { subjects } from '../assets/roadmapData';

export default function Notes() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4 pt-12">
      <div className="max-w-7xl mx-auto">
        <br></br>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 pt-10">
          Roadmaps
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
              <p className="text-gray-600 dark:text-gray-300">Click to open notes</p>
            </motion.a>
          ))}
        </div>

        <div className="mt-8 bg-blue-50 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Best YouTube Course
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>
              <a
                href="https://youtube.com/playlist?list=PLu0W_9lII9agq5TrH9XLIKQvv0iaF2X3w&si=Uv1MHNKotDq7fF9L"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Code With Harry (Full-Stack Web Development)
              </a>
            </li>
            <li>
              <a
                href="https://youtube.com/playlist?list=PLeo1K3hjS3uvCeTYTeyfe0-rN5r8zn9rw&si=z1bHnVP2Tdr1NCEC"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Code Basics (Artificial Intelligence & Machine Learning)
              </a>
            </li>
            <li>
              <a
                href="https://youtube.com/playlist?list=PLS5SEs8ZftgUNcUVXtn2KXiE1Ui9B5UrY&si=38PxfTTPpqx6hmr8"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Dapp University (Blockchain Developer)
              </a>
            </li>
            <li>
              <a
                href="https://youtube.com/playlist?list=PLEiEAq2VkUUJfPOj5nRounXvf3n17PCft&si=nasIiz_3cWaiD9GZ"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Simplilearn (Cybersecurity Developer)
              </a>
            </li>
            <li>
              <a
                href="https://youtu.be/u64gyCdqawU?si=ZXU9H5TZUxTsIa6y"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                WsCube Tech (Android App Development)
              </a>
            </li>
            <li>
              <a
                href="https://youtube.com/playlist?list=PLSzsOkUDsvdu5Mm67aBYs2YPu2OM4mFzt&si=3a66RwKYZSqbau1D"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                London App Brewery (IOS App Development)
              </a>
            </li>
          </ul>
        </div>
        {/* Best YouTube Free Course Section */}
        <div className="mt-8 bg-blue-50 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Additional Tips
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600 ">
            <li>Consistency is key - code daily</li>
            <li>Make Real World Projects</li>
            <li>Build a strong portfolio of projects</li>
            <li>Network with professionals on LinkedIn</li>
            <li>Participate in coding competitions</li>
            <li>Follow tech blogs and stay updated</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
