import React from 'react';
import { FileText } from 'lucide-react';
import { templates } from '../assets/resumeData';

export default function ResumeTemplates() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4 pt-12">
      <div className="max-w-7xl mx-auto">
        <br></br>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 pt-10">
          Resume Templates
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {templates.map((template, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-200 border-2 border-transparent hover:border-blue-600"
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                  <FileText className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {template.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {template.description}
                  </p>
                  <a
                    href={template.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                  >
                    Show Template
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-blue-50 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            ATS Score Checker Tools
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>
              <a
                href="https://www.jobscan.co/"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Jobscan
              </a>
            </li>
            <li>
              <a
                href="https://resumeworded.com/"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                ResumeWorded
              </a>
            </li>
            <li>
              <a
                href="https://www.topresume.com/resume-review"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                TopResume
              </a>
            </li>
          </ul>
        </div>
        <div className="mt-8 bg-blue-50 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Key ATS Tips
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li><b>Fonts: </b>Use Arial, Calibri, or Times New Roman (Size 11-12).</li>
            <li><b>No Graphics: </b>Avoid tables, icons, and columns.</li>
            <li><b>Keywords: </b>Mirror words from the job description (e.g., "REST APIs", "Agile").</li>
            <li><b>File Format: </b>Save as PDF (Name: "John_Doe_Resume.pdf").</li>
            <li><b>1 Page Only: </b>Trim irrelevant details (e.g., school projects if you have internships).</li>
          </ul>
        </div>
        <div className="mt-8 bg-blue-50 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Resume Checklist
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Contact info at the top</li>
            <li>Education section with CGPA</li>
            <li>Projects with results (metrics like "30% faster")</li>
            <li>Skills match job description</li>
            <li>No typos/grammar errors</li>
            <li>ATS-tested using Jobscan/ResumeWorded</li>
          </ul>
        </div>
      </div>
    </div>
  );
}