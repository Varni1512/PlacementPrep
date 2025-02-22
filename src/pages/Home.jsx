import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Book, MessageSquare, Code, FileText, Map, BarChart, Briefcase } from 'lucide-react';
import CountUp from 'react-countup';

const features = [
  {
    icon: <Book className="w-10 h-10" />,
    title: 'Study Notes',
    description: 'Comprehensive notes and cheatsheets for Java, Python, C++, CN, OS, DBMS, Aptitude',
  },
  {
    icon: <MessageSquare className="w-10 h-10" />,
    title: 'Interview Questions',
    description: 'Frequently asked interview questions with detailed answers',
  },
  {
    icon: <Code className="w-10 h-10" />,
    title: 'Coding Questions',
    description: 'Practice coding questions with LeetCode integration',
  },
  {
    icon: <FileText className="w-10 h-10" />,
    title: 'Resume Templates',
    description: 'Professional resume formats and ATS Score Checker sites',
  },
  {
    icon: <Map className="w-10 h-10" />,
    title: 'Roadmaps',
    description: 'Step-by-step guides for Web Dev, App Dev, FAANG prep, and more',
  },
  {
    icon: <BarChart className="w-10 h-10" />,
    title: 'Aptitude Quiz',
    description: 'Test your problem-solving skills with interactive quizzes',
  },
  {
    icon: <Briefcase className="w-10 h-10" />,
    title: 'Internship Companies',
    description: 'Curated list of top internship opportunities with application links',
  },
];

const faqs = [
  {
    question: "What's the best way to prepare for coding interviews?",
    answer:
      "Preparation is key! Consistent practice with coding problems is more effective than cramming. Work on data structures, algorithms, and problem-solving patterns. Also, practice mock interviews to build confidence.",
  },
  {
    question: "How should I approach system design interview questions?",
    answer:
      "System design is about understanding how to build scalable, reliable, and maintainable systems. Focus on the process: requirements, data flow, reliability, consistency, etc. We provide guides and examples on our site!",
  },
  {
    question: "Are the Striver's SDE sheet & Love Babbar sheet questions enough for interview preparation?",
    answer:
      "The Striver's SDE Sheet & Love Babbar sheet is an excellent resource, but also explore additional platforms and problems. It's a good start, but combining it with more practice and real interview scenarios is recommended.",
  },
  {
    question: "How do I get the most out of your website or PlacementPrep community?",
    answer:
      "Engage with the community! Ask questions, share resources, and collaborate on projects. Our site offers structured roadmaps, interactive quizzes, and expert blog posts to guide you.",
  },
  {
    question: "What are the essential things to cover in core coding subjects?",
    answer:
      "Focus on Data Structures, Algorithms, Operating Systems, DBMS, and Networking. Also, build strong problem-solving and debugging skills. Our site has comprehensive notes for all of these!",
  },
  {
    question: "Do you offer any 1:1 mentorship?",
    answer:
      "We’re planning to introduce 1:1 mentorship soon. Meanwhile, you can join our community sessions and Q&A forums for direct guidance from peers and experts.",
  },
];

export default function Home() {
  // State for FAQ expand/collapse
  const [openFAQIndex, setOpenFAQIndex] = useState(null);
  // State for the "Get in Touch" modal
  const [modalOpen, setModalOpen] = useState(false);

  const toggleFAQ = (index) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <header className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center pt-12">
          <h1 className="text-5xl font-bold mb-4">
            Gear Up for{' '}
            <span className="text-5xl font-bold text-red-600">Success:</span> Your Ultimate
            Preparation Hub!
          </h1>
          <p className="text-xl mb-8">
            Comprehensive resources, dynamic site sections, and real-time user insights—all in one
            place.
          </p>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Our Features</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Discover our diverse site sections and interactive tools.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Link
                key={index}
                to="#"
                className="block transition-transform transform hover:scale-105"
              >
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300 border-2 border-transparent hover:border-blue-600">
                  <div className="flex justify-center mb-4 text-blue-500 dark:text-blue-400">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 text-center">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-center">
                    {feature.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Site? Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-4xl text-black dark:text-white font-bold text-center mb-6">
          Why choose us?
        </h2>
        <p className="text-center text-gray-400 mb-12">
          Unlock Your Potential with Our Comprehensive Learning Approach
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              id: '01',
              title: 'Expert-Crafted Learning',
              text: 'Our team of accomplished engineers, with impressive coding profiles, hails from top tech companies like Google, Amazon, Meta, and Microsoft.',
            },
            {
              id: '02',
              title: 'Structured Learning Path',
              text: 'Master Data Structures & Algorithms (DSA), System Design, core subjects, and practical projects with premium blog posts and video solutions.',
            },
            {
              id: '03',
              title: 'Unmatched Content Depth',
              text: 'We prioritize quality content, offering in-depth explanations and a wider range of solved problems in both free courses.',
            },
          ].map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg transition-transform transform hover:scale-105 border-2 border-transparent hover:border-blue-600"
            >
              <h3 className="text-blue-600 text-xl font-semibold mb-2">{item.id}</h3>
              <h4 className="text-xl dark:text-white font-semibold mb-2">{item.title}</h4>
              <p className="text-gray-400">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Site Statistics Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Connect with Community Boxes */}
          <div className="text-center mt-12">
            <h2 className="text-3xl font-bold mb-6">Connect with our community</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 cursor-pointer">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg transition-transform transform hover:scale-105">
              <h3 className="text-2xl font-bold">
                <CountUp start={0} end={100} duration={2} separator="," />+
              </h3>
              <p className="mt-4 text-xl">Active Users</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg transition-transform transform hover:scale-105">
              <h3 className="text-2xl font-bold">
                <CountUp start={0} end={50} duration={2} separator="," />+
              </h3>
              <p className="mt-4 text-xl">Happy Clients</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg transition-transform transform hover:scale-105">
                <h3 className="text-2xl font-bold text-pink-600">
                  <CountUp start={0} end={1000} duration={2} separator="," />+
                </h3>
                <p className="mt-4 text-xl text-gray-900 dark:text-white">Instagram</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg transition-transform transform hover:scale-105">
                <h3 className="text-2xl font-bold text-blue-600">
                  <CountUp start={0} end={500} duration={2} separator="," />+
                </h3>
                <p className="mt-4 text-xl text-gray-900 dark:text-white">LinkedIn</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Founder Section */}
      <section className="py-16">
        <h2 className="text-4xl text-black dark:text-white font-bold text-center mb-6">
          Meet Our Founder
        </h2>
        <div className="max-w-5xl mx-auto px-6 py-12 bg-white dark:bg-gray-800 rounded-xl shadow-lg flex flex-col md:flex-row items-center transition-transform transform hover:scale-105 border-2 border-transparent hover:border-blue-600">
          <div className="md:w-1/2 text-center md:text-left p-6">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Varnikumar Patel
            </h1>
            <p className="text-gray-500 dark:text-gray-400 mb-2">
              Student at VIT Bhopal University
            </p>
            <p className="text-gray-500 dark:text-gray-400 mb-2">
              Strong scores on LeetCode & GeeksforGeeks
            </p>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              Passionate about Web Development
            </p>
            <div className="flex justify-center md:justify-start space-x-4 mt-4">
              <a href="https://github.com/Varni1512" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                  alt="GitHub"
                  className="w-8 h-8"
                />
              </a>
              <a
                href="http://www.linkedin.com/in/varnikumarpatel"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                  alt="LinkedIn"
                  className="w-8 h-8"
                />
              </a>
              <a href="mailto:varni1505@gmail.com">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
                  alt="Email"
                  className="w-8 h-8"
                />
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
            {/* Make sure this image path is correct in your project setup */}
            <img
              src="src/pages/varni.jpg"
              alt="Founder"
              className="w-64 h-64 object-cover rounded-xl shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Frequently Asked Questions
          </h2>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 dark:border-gray-700 py-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left"
              >
                <span className="text-lg font-medium text-gray-900 dark:text-white">
                  {faq.question}
                </span>
                <span className="ml-2 text-gray-500 dark:text-gray-400">
                  {openFAQIndex === index ? '-' : '+'}
                </span>
              </button>
              {openFAQIndex === index && (
                <div className="mt-2 text-gray-600 dark:text-gray-300">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className=" max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Still have questions?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Can&apos;t find the answer you&apos;re looking for? Please chat to our friendly team.
          </p>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded transition-colors duration-300"
          >
            Get in Touch
          </button>
        </div>
      </section>

      {/* Modal for "Get in Touch" */}
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black opacity-50"
            onClick={() => setModalOpen(false)}
          ></div>

          {/* Modal Content */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 relative z-10">
            <button
              className="absolute top-2 right-2 text-gray-600 dark:text-gray-300"
              onClick={() => setModalOpen(false)}
            >
              X
            </button>
            <div className="flex flex-col items-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/166/166258.png"
                alt="Drop your question"
                className="w-16 h-16 mb-4"
              />
              <p className="text-lg text-gray-900 dark:text-white mb-2">
                Drop your question/query at{' '}
                <a
                  href="mailto:varnikumar1512@gmail.com"
                  className="text-blue-600 hover:underline"
                >
                  varnikumar1512@gmail.com
                </a>
                <h2 className='text-center'>OR</h2>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfCfDXQaZX3lfioBYiVEWbvqHSxtK_jaStl0uu_AlmQWlTRDA/viewform?usp=dialog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 text-center dark:text-gray-300 hover:text-blue-500 transition duration-300  hover:underline"
                >
                  Fill the Form 
                </a>
              </p>
              <p className="text-gray-600 dark:text-gray-300">We will get back to you soon.</p>
            </div>
          </div>
        </div>
      )}

      {/* Suggestions and Review Section */}
      {/* <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Suggestions or Review
          </h2>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfCfDXQaZX3lfioBYiVEWbvqHSxtK_jaStl0uu_AlmQWlTRDA/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition duration-300 underline"
          >
            Fill the form for any suggestions
          </a>
        </div>
      </section> */}
    </div>
  );
}
