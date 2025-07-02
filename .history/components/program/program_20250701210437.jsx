import Image from "next/image";
import Navbar from "../home/Navbar";

export default function Program() {
  return (
    <>
    
        <Navbar />
    
        // pages/index.js
import React from 'react';

// This is the ProgramCard component directly embedded for a single file solution
const ProgramCard = ({ title, ageRange, focusAreas, childTeacherRatio, icon }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col items-start space-y-4 border border-gray-100">
      <div className="flex items-center space-x-4">
        {icon && <div className="p-3 bg-green-50 rounded-full flex items-center justify-center">{icon}</div>}
        <div>
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
          <p className="text-sm text-gray-500">{ageRange}</p>
        </div>
      </div>
      <ul className="list-disc list-inside text-gray-600 text-sm space-y-2">
        {focusAreas.map((area, index) => (
          <li key={index}>
            <span className="font-medium">Focus Areas:</span> {area}
          </li>
        ))}
        <li>
          <span className="font-medium">Child-teacher ratio:</span> {childTeacherRatio} student-to-teacher ratio, well-trained & experienced Early Childhood Educators.
        </li>
      </ul>
      <a href="#" className="flex items-center text-green-600 font-medium text-sm mt-4 group">
        Read More
        <svg className="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </a>
    </div>
  );
};

// Main Page Component
const Home = () => {
  const programs = [
    {
      title: 'Infants',
      ageRange: '(12 months to 18 months)',
      focusAreas: [
        'Creating a nurturing and stimulating environment.',
      ],
      childTeacherRatio: '4:1',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8m0 0V3h9v5m-9 0h-3.328a2 2 0 01-1.632-.977l-2.482-4.137A2 2 0 002.328 1H.672a2 2 0 00-1.632.977l-2.482 4.137A2 2 0 01-7.328 8H-10m-2 13a2 2 0 100-4 2 2 0 000 4zm7-4a2 2 0 100-4 2 2 0 000 4zm7-4a2 2 0 100-4 2 2 0 000 4z" />
          {/* Custom paths for the car like shape, adjusted for SVG */}
          <path d="M5 13a2 2 0 100 4h14a2 2 0 100-4H5z" className="stroke-current text-green-500"/>
          <circle cx="8" cy="15" r="1.5" className="stroke-current text-green-500 fill-current" />
          <circle cx="16" cy="15" r="1.5" className="stroke-current text-green-500 fill-current" />
        </svg>
      ),
    },
    {
      title: 'Toddlers',
      ageRange: '(19 months to 35 months)',
      focusAreas: [
        'Guide students\' self-discovery during this sensitive stage of development.',
      ],
      childTeacherRatio: '6:1',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m0 0l-7 7-7-7M19 10v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          {/* Custom path for the shopping cart, adjusted for SVG */}
          <path d="M10 13l2-2m0 0l7 7m-7-7V3m0 0H9m5 0h-5" className="stroke-current text-green-500"/>
          <circle cx="7" cy="19" r="2" className="stroke-current fill-current text-green-500"/>
          <circle cx="17" cy="19" r="2" className="stroke-current fill-current text-green-500"/>
          <path d="M4 4h16l-1 9H5L4 4z" className="stroke-current text-green-500 fill-current opacity-75"/>
        </svg>
      ),
    },
    {
      title: 'Pre-schoolers',
      ageRange: '(3 years to less than 4 years)',
      focusAreas: [
        'The Preschool program at Clearwater Early Learning Centre will revolve around building and strengthening the foundations learned by the students in the Toddler program.',
      ],
      childTeacherRatio: '8:1',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.01 12.01 0 002.944 12c.047 1.605.342 3.161.874 4.646.425 1.157 1.05 2.223 1.87 3.176L12 22l7.118-4.978c.82-.953 1.445-2.019 1.87-3.176.532-1.485.827-3.041.874-4.646A12.01 12.01 0 0021.056 12.013a11.955 11.955 0 01-1.026 5.568" />
          {/* Custom paths for the two pots, adjusted for SVG */}
          <circle cx="7" cy="17" r="2" className="stroke-current fill-current text-green-500"/>
          <circle cx="17" cy="17" r="2" className="stroke-current fill-current text-green-500"/>
          <path d="M6 15h2m8 0h2" className="stroke-current text-green-500"/>
          <path d="M7 15V7l-2 2" className="stroke-current text-green-500"/>
          <path d="M17 15V7l2 2" className="stroke-current text-green-500"/>
        </svg>
      ),
    },
    {
      title: 'Kindergarden',
      ageRange: '(4 years to 6 years)',
      focusAreas: [
        "Clearwater Early Learning Centre's unique program will be based on the 4 pillars of teaching (Montessori, Waldorf, Reggio and Specialty Enrichment), the common factor amongst these pillars is the concept of emergent curriculum along with the Licensing of Education pedagogy on early learning to help children achieve their fullest potential.",
      ],
      childTeacherRatio: '10:1',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.523 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.523 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          {/* Custom paths for the book like shape, adjusted for SVG */}
          <path d="M4 6.5C4 5.67157 4.67157 5 5.5 5H18.5C19.3284 5 20 5.67157 20 6.5V17.5C20 18.3284 19.3284 19 18.5 19H5.5C4.67157 19 4 18.3284 4 17.5V6.5Z" className="stroke-current fill-current text-green-500"/>
          <path d="M4 10H20" className="stroke-current text-white"/>
          <circle cx="8" cy="14" r="1" className="stroke-current fill-current text-white"/>
          <circle cx="16" cy="14" r="1" className="stroke-current fill-current text-white"/>
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8"> {/* Added a light gray background to match the image */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {programs.map((program, index) => (
            <ProgramCard key={index} {...program} />
          ))}
        </div>
      </section>
    </div>
  );
};


    </>

        );
    }
    