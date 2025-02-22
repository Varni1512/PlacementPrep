import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Notes from './pages/Notes';
import InterviewQuestions from './pages/InterviewQuestions';
import CodingQuestions from './pages/CodingQuestions';
import Aptitude from './pages/Aptitude';
import ResumeTemplates from './pages/ResumeTemplates';
import Roadmap from './pages/Roadmap';
import Internship from './pages/internship'
import { Heart, ArrowUp, Linkedin, X, Instagram, Youtube, Github } from 'lucide-react';

function App() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/notes" element={<Notes />} />
              <Route path="/interview-questions" element={<InterviewQuestions />} />
              <Route path="/coding-questions" element={<CodingQuestions />} />
              <Route path="/aptitude" element={<Aptitude />} />
              <Route path="/internship" element={<Internship />} />
              <Route path="/resume-templates" element={<ResumeTemplates />} />
              <Route path="/roadmap" element={<Roadmap />} />
            </Routes>
          </main>

          {/* Footer */}
          <footer className="w-full bg-white dark:bg-gray-800 text-white">
            <div className="w-full max-w-7xl mx-auto px-6 py-6">
              <div className="flex flex-col md:flex-row justify-between items-center md:items-start w-full">

                {/* Left Side - Centered on Mobile */}
                <div className="text-center md:text-left md:w-1/3 w-full">
                  <a href="/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 text-2xl font-bold">
                    PlacementPrep
                  </a>
                  <p className="text-sm mt-2 text-gray-700 dark:text-gray-300 max-w-lg mx-auto md:mx-0">
                    The best place to learn data structures, algorithms, most asked coding interview questions, real interview experiences free of cost.
                  </p>
                  <div className="flex justify-center md:justify-start space-x-4 mt-4">
                    <a href="http://www.linkedin.com/in/varnikumarpatel" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="text-gray-700 dark:text-gray-300 dark:hover:text-blue-400 hover:text-blue-400 cursor-pointer w-6 h-6" />
                    </a>
                    <a href="https://github.com/Varni1512" target="_blank" rel="noopener noreferrer">
                      <Github className="text-gray-700 dark:text-gray-300 dark:hover:text-black hover:text-black cursor-pointer w-6 h-6" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                      <Instagram className="text-gray-700 dark:text-gray-300 dark:hover:text-pink-400 hover:text-pink-600 cursor-pointer w-6 h-6" />
                    </a>
                  </div>
                </div>

                {/* Right Side - Full Width on Large Screens */}
                <div className="hidden md:grid grid-cols-2 md:grid-cols-4 gap-10 text-sm text-right w-full md:w-2/3">
                  <div>
                    <h4 className="font-semibold text-blue-600 dark:text-blue-400">Company</h4>
                    <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                      <li className='hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer'>About Us</li>
                      <li className='hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer'>Contact Us</li>
                      <li className='hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer'>Privacy Policy</li>
                      <li className='hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer'>Terms and Conditions</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600 dark:text-blue-400">Quick Access</h4>
                    <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                      <li className='hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer'>Coding Questions</li>
                      <li className='hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer'>Resume Templates</li>
                      <li className='hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer'>CS Subjects</li>
                      <li className='hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer'>Interview Questions</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600 dark:text-blue-400">DSA Sheets</h4>
                    <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                      <li className='hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer'><a href='https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/'>Striver's SDE Sheet</a></li>
                      <li className='hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer'><a href='https://drive.google.com/file/d/1FMdN_OCfOI0iAeDlqswCiC2DZzD4nPsb/view'>Love Babbar DSA Sheet</a></li>
                      <li className='hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer'><a href='http://takeuforward.org/interviews/must-do-questions-for-dbms-cn-os-interviews-sde-core-sheet/'>SDE Core Sheet</a></li>
                      <li className='hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer'><a href='https://www.geeksforgeeks.org/courses/dsa-self-paced'>GFG DSA Self-Paced Sheet</a></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600 dark:text-blue-400">DSA Playlist</h4>
                    <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                      <li className='hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer'><a href='https://youtube.com/@codehelp?si=zCf6o66arPWeuIBN'>Love Babbar</a></li>
                      <li className='hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer'><a href='https://youtube.com/@takeuforward?si=pfnFiW9LSlUuWUn4'>Raj Vikramaditya (Striver)</a></li>
                      <li className='hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer'><a href='https://youtube.com/@kunalkushwaha?si=P5gHJU2b4rsFMHfK'>Kunal Kushwaha</a></li>
                      <li className='hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer'><a href='https://youtube.com/@codewithharry?si=XClqjrDIZhrsZwiC'>Code with Harry</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <hr></hr>
            {/* Copyright - Full Width */}
            <div className="w-full bg-white dark:bg-gray-800 py-4">
              <p className="text-xs text-gray-400 text-center w-full">
                Copyright © 2024 PlacementPrep | All rights reserved
              </p>
            </div>
          </footer>



          {/* Scroll-to-Top Button */}
          {showScroll && (
            <button
              onClick={scrollToTop}
              className="fixed bottom-6 right-6 bg-blue-500 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:bg-blue-600 animate-bounce"
            >
              <ArrowUp size={24} />
            </button>
          )}
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;

