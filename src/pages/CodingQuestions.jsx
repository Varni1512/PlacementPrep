import React from 'react';
import { motion } from 'framer-motion';
import { topics } from '../assets/codingData';

export default function CodingQuestions() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4 pt-12">
      <div className="max-w-7xl mx-auto">
        <br></br>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 pt-10">
          Coding Questions
        </h1>

        <div className="space-y-8">
          {topics.map((topic, topicIndex) => (
            <motion.div
              key={topicIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: topicIndex * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
            >
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {topic.title}
              </h2>
              
              <div className="space-y-4">
                {topic.questions.map((question, questionIndex) => (
                  <motion.a
                    key={questionIndex}
                    href={question.leetcodeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    className="block p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                          {question.title}
                        </h3>
                        <span className={`px-2 py-1 rounded-full text-sm font-medium ${
                          question.difficulty === 'Easy' 
                            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                            : question.difficulty === 'Medium'
                            ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
                            : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
                        }`}>
                          {question.difficulty}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {question.companies.map((company, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 rounded-full"
                          >
                            {company}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 bg-blue-50 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            best tips to solve any coding/DSA problem
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Understand the Problem Deeply</li>
            <li>Start with Examples</li>
            <li>Think Before Coding</li>
            <li>Time & Space Complexity</li>
            <li>Code Step-by-Step</li>
            <li>Test Relentlessly</li>
            <li>Handle Failure Gracefully</li>
            <li>Master the Patterns(Sliding Window,Two Pointers,BFS/DFS,Dynamic Programming,Heap/Priority Queue,Binary Search)</li>
            <li>Mindset Matters</li>
          </ul>
        </div>
      </div>
    </div>
  );
}