import React from "react";
import { motion } from "framer-motion";
import { subjects, Cheatsheets } from '../assets/notesData';

export default function Notes() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4 pt-12">
      <div className="max-w-7xl mx-auto">
        <br></br>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 pt-12">
                  Study Notes
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
        
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 pt-10">
                Cheatsheets
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

        {/* Best YouTube Free Course Section */}
        <div className="mt-8 bg-blue-50 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Best YouTube Free Course
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>
              <a
                href="https://www.youtube.com/playlist?list=PLgUwDviBIf0oF6QL8m22w1hIDC1vJ_BHz"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Striver’s A2Z DSA (C++/Java)
              </a>
            </li>
            <li>
              <a
                href="https://youtube.com/playlist?list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&si=jXAYDzjnL9lvO7ow"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Love Babbar (C++)
              </a>
            </li>
            <li>
              <a
                href="https://youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ&si=6nBy1XZOwRDL-8EK"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Kunal Kushwaha (Java)
              </a>
            </li>
            <li>
              <a
                href="https://youtu.be/IPvYjXCsTg8?si=KAkphT4qNyWQH_UW"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Kunal Kushwaha (Computer Network)
              </a>
            </li>
            <li>
              <a
                href="https://youtu.be/3obEP8eLsCw?si=vn0PZLhilbwB3aMa"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Love Babbar (Operating System)
              </a>
            </li>
            <li>
              <a
                href="https://youtu.be/dl00fOOYLOM?si=MIvuOK472e2FL8ah"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Love Babbar (DBMS)
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
