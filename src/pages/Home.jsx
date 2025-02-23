import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Book, MessageSquare, Code, FileText, Map, BarChart, Briefcase } from 'lucide-react';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

// Animated components
const AnimatedFeature = ({ feature, index }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeInUp}
    >
      <Link to="#" className="block transition-transform transform hover:scale-105">
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
    </motion.div>
  );
};

const AnimatedStat = ({ value, label, duration = 2, color = "text-2xl font-bold" }) => {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg transition-transform transform hover:scale-105 border-2 border-transparent hover:border-blue-600"
    >
      <h3 className={`${color}`}>
        {inView ? (
          <CountUp start={0} end={value} duration={duration} separator="," />
        ) : (
          0
        )}
        +
      </h3>
      <p className="mt-4 text-xl">{label}</p>
    </motion.div>
  );
};

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
    question: "What does Placement Prep offer?",
    answer:
      "📌 Placement Prep provides roadmaps, interview questions, coding challenges, aptitude quizzes, resume templates, and internship listings—all 100% free!",
  },
  {
    question: "Who can benefit from this platform?",
    answer:
      "👨‍🎓 Students from all years (1st, 2nd, 3rd, final year) looking for structured guidance in placements, web/app development, blockchain, and competitive programming.",
  },
  {
    question: "Is everything on this platform free?",
    answer:
      "✅ Yes! All resources, tools, and guides are completely free. No hidden charges, no paid content!",
  },
  {
    question: "How can I improve my resume for placements?",
    answer:
      "📄 Use our ATS-optimized resume templates and resume score checker to ensure your CV is job-ready and ATS-friendly—all at zero cost!",
  },
  {
    question: "Do you provide internship opportunities?",
    answer:
      "💼 Yes! We curate a list of free and paid internships from top companies to help you gain real-world experience.",
  },
  {
    question: "How can I practice aptitude and coding questions?",
    answer:
      "🧠 You can access our aptitude quizzes, coding challenges, and TCS Ninja/Digital PYQs to practice effectively—all free!",
  },
  {
    question: "Where can I find the best free learning resources?",
    answer:
      "📚 We provide a list of the best YouTube channels, free courses, interview prep websites, and other valuable study materials—so you don’t have to search for them.",
  },
  {
    question: "Is there a structured roadmap for different domains?",
    answer:
      "✅ Yes! We provide dedicated roadmaps for Web Dev, App Dev, Blockchain, and competitive programming, along with year-wise placement preparation guides.",
  },
  {
    question: "How do I get started?",
    answer:
      "🚀 Just explore our platform, follow the recommended roadmap, practice coding & aptitude questions, and start applying for internships & jobs!",
  },
];

export default function Home() {
  const [openFAQIndex, setOpenFAQIndex] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [founderRef, founderInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const toggleFAQ = (index) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white py-20"
      >
        <div className="max-w-7xl mx-auto px-4 text-center pt-12">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl font-bold mb-4"
          >
            Gear Up for{' '}
            <span className="text-5xl font-bold text-red-600">Success:</span> Your Ultimate
            Preparation Hub!
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl mb-8"
          >
            Comprehensive resources, dynamic site sections, and real-time user insights—all in one place.
          </motion.p>
        </div>
      </motion.header>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Our Features</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Discover our diverse site sections and interactive tools.
            </p>
          </motion.div>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <AnimatedFeature key={index} feature={feature} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl text-black dark:text-white font-bold text-center mb-6">
            Why choose us?
          </h2>
          <p className="text-center text-gray-400 mb-12">
            Unlock Your Potential with Our Comprehensive Learning Approach
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            {
              id: '01',
              title: '🎯 All-in-One Placement Hub',
              text: 'From Notes, Coding & Interview Questions to Aptitude Quizzes, Resume Templates, and Internships, everything you need is in one place!',
            },
            {
              id: '02',
              title: '📌 Expert-Curated Roadmaps',
              text: 'Tailored paths for 1st, 2nd, and 3rd-year students, covering Web Dev, App Dev, Blockchain, and more!',
            },
            {
              id: '03',
              title: '🛠 Top Free & Paid Resources',
              text: 'Find the best YouTube channels, free courses, ATS resume checkers, and interview prep sites all handpicked to save you time!',
            },
            {
              id: '04',
              title: '💼 Internship & Job Opportunities',
              text: 'Discover a curated list of free & paid internships, ensuring you gain real-world experience before placements.',
            },
            {
              id: '05',
              title: '🧑‍💻 Aptitude & Technical Mastery',
              text: 'Practice with TCS Ninja & Digital PYQs, quizzes, and coding challenges to stay ahead of the competition.',
            },
            {
              id: '06',
              title: '🚀 Crack Your Dream Job with Us!',
              text: 'With structured learning, expert resources, and real-world practice, we help you ace placements with confidence!',
            },
          ].map((item) => (
            <motion.div
              key={item.id}
              variants={fadeInUp}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg transition-transform transform hover:scale-105 border-2 border-transparent hover:border-blue-600"
            >
              <h3 className="text-blue-600 text-xl font-semibold mb-2">{item.id}</h3>
              <h4 className="text-xl dark:text-white font-semibold mb-2">{item.title}</h4>
              <p className="text-gray-400">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Statistics Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <h2 className="text-3xl font-bold mb-6">Connect with our community</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 cursor-pointer">
              <AnimatedStat value={100} label="Active Users" />
              <AnimatedStat value={50} label="Happy Clients" />
              <AnimatedStat
                value={1000}
                label="Instagram"
                color="text-2xl font-bold text-pink-600"
              />
              <AnimatedStat
                value={500}
                label="LinkedIn"
                color="text-2xl font-bold text-blue-600"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Founder Section */}
      <motion.section
        ref={founderRef}
        initial={{ opacity: 0, x: -50 }}
        animate={founderInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="py-16"
      >
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
              src="/varni.jpg"
              alt="Founder"
              className="w-64 h-64 object-cover rounded-xl shadow-md"
            />
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-8"
          >
            Frequently Asked Questions
          </motion.h2>
          {faqs.map((faq, index) => {
            const [ref, inView] = useInView({ triggerOnce: true });
            return (
              <motion.div
                key={index}
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                className="border-b border-gray-200 dark:border-gray-700 py-4"
              >
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
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Get in Touch Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-16 bg-gray-50 dark:bg-gray-900"
      >
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
      </motion.section>

      {/* Modal */}
      {modalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 flex items-center justify-center z-50"
        >
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
                  className="text-gray-600 text-center dark:text-gray-300 hover:text-blue-500 transition duration-300  hover:dark:text-blue-600  hover:text-blue-600"
                >
                  Fill the Form
                </a>
              </p>
              <p className="text-gray-600 dark:text-gray-300">We will get back to you soon.</p>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
