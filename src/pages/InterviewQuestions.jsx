import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { categories } from '../assets/interviewData';

export default function InterviewQuestions() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4 pt-12">
      <div className="max-w-7xl mx-auto">
        <br></br>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 pt-10">
          Interview Questions
        </h1>

        {!selectedCategory ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(categories).map(([key, category]) => (
              <motion.div
                key={key}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(key)}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-xl transition-shadow duration-200 border-2 border-transparent hover:border-blue-600"
              >
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {category.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Click to view questions
                </p>
              </motion.div>
            ))}
          </div>
        ) : (
          <div>
            <button
              onClick={() => {
                setSelectedCategory(null);
                setSelectedQuestion(null);
              }}
              className="mb-6 text-blue-500 hover:text-blue-600 flex items-center"
            >
              ← Back to Categories
            </button>

            <div className="space-y-4">
              {categories[selectedCategory].questions.map((question, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 cursor-pointer"
                  onClick={() => setSelectedQuestion(question)}
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {question.q}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {selectedQuestion && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
            onClick={() => setSelectedQuestion(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-2xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {selectedQuestion.q}
              </h3>
              <p className="text-gray-600 dark:text-gray-300"
                dangerouslySetInnerHTML={{ __html: selectedQuestion.a }}>
              </p>
            </motion.div>
          </motion.div>
        )}
        <div className="mt-8 bg-blue-50 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Top 10 Interview Tips
          </h2>
          <ul className="list-disc list-inside space-y-3 text-gray-700">
            <li><b>Master the Basics:</b> Revise core DSA (arrays, strings, linked lists) and OOP concepts. Practice explaining your code aloud.</li>
            <li><b>Clarify First, Code Later:</b> Always ask questions to confirm input/output, edge cases, and constraints. Example: “Can the array have negative numbers?”</li>
            <li><b>Think Out Loud:</b> Narrate your thought process. Interviewers care about how you solve problems. Example: “I’ll use a hashmap to reduce the time complexity from O(n²) to O(n).”</li>
            <li><b>Start with Brute Force:</b> Explain the naive approach first, then optimize. Shows structured thinking.</li>
            <li><b>Test Your Code:</b> Dry-run with sample inputs and edge cases (empty input, duplicates).</li>
            <li><b>Behavioral Prep:</b> Use the STAR method (Situation, Task, Action, Result) for questions like: “Describe a time you failed.” Prepare 5-6 stories about teamwork, leadership, and problem-solving.</li>
            <li><b>Ask Smart Questions:</b> End with “What does success look like in this role?” or “How does the team collaborate?”</li>
            <li><b>Body Language:</b> Maintain eye contact (even in virtual interviews), sit straight, and smile.</li>
            <li><b>Handle Mistakes Gracefully:</b> If stuck, say: “I’ll take a moment to rethink my approach.”</li>
            <li><b>Mock Interviews:</b> Simulate real interviews with timers and random questions.</li>
          </ul>
        </div>
        <div className="mt-8 bg-blue-50 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Free Mock Interview Platforms
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>
              <a
                href="https://www.pramp.com/"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pramp
              </a>
            </li>
            <li>
              <a
                href="https://interviewbuddy.in/"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                InterviewBuddy
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/learning"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn Learning (Free Trial)
              </a>
            </li>
            <li>
              <a
                href="https://grow.google/certificates/interview-warmup/"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Interview Warmup
              </a>
            </li>
            <li>
              <a
                href="https://meetapro.com/"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Meetapro
              </a>
            </li>
          </ul>
        </div>
        <div className="mt-8 bg-blue-50 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Pro Tips for Mock Interviews
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li><b>Record Yourself: </b>Use Zoom/OBS to review body language and speaking clarity.</li>
            <li><b>Time Constraints: </b>Solve problems in 20-25 minutes (mirror real interviews).</li>
            <li><b>Feedback Loop: </b>After mocks, note weak areas (e.g., binary search, DP) and revise.</li>
            </ul>
        </div>
      </div>
    </div>
  );
}