import { Award, Clock, Users } from 'lucide-react';
import React from 'react';
import SimulationCard from '../ui/SimulationCard';

const simulationTypes = [
  {
    title: "Short Simulations",
    duration: "1-3 hours",
    icn :Clock,
    bgc:"blue",
    price: "Mostly Free",
    description: "Quick, focused tasks that introduce you to specific job functions and industry practices.",
    features: [
      "Single task completion",
      "Immediate feedback",
      "Perfect for beginners",
      "No time commitment pressure",
      "Instant skill validation"
    ],
    examples: [
      "Social Media Campaign Planning",
      "Financial Statement Analysis",
      "Website Wireframe Design",
      "Content Writing Assignment"
    ],
    ideal: "Students wanting to explore different fields or quick skill building",
    color: "from-green-500 to-emerald-600",
    clr:"green"
  },
  {
    title: "Long Simulations",
    duration: "5-10+ hours",
    icn :Users,
    price: "Premium/Paid",
    description: "Comprehensive projects that simulate real job responsibilities over extended periods.",
    features: [
      "Multi-phase projects",
      "Complex problem solving",
      "Industry-standard tools",
      "Detailed feedback reports",
      "Professional certificates"
    ],
    examples: [
      "Complete Marketing Campaign",
      "Software Development Project",
      "Financial Model Building",
      "Business Strategy Development"
    ],
    ideal: "Students serious about developing deep expertise in specific areas",
    color: "from-blue-500 to-indigo-600",
    clr:"blue"
  },
  {
    title: "Virtual Internships",
    duration: "20-40+ hours",
    icn :Award,
    price: "Premium with Mentorship",
    description: "Extended programs with mentor guidance, simulating real internship experiences.",
    features: [
      "One-on-one mentorship",
      "Real company projects",
      "Professional networking",
      "Letter of recommendation",
      "Industry connections"
    ],
    examples: [
      "Investment Banking Analyst Program",
      "Full-Stack Development Internship",
      "Digital Marketing Specialist Track",
      "Product Management Fellowship"
    ],
    ideal: "Students seeking comprehensive professional development and industry connections",
    color: "from-red-400 to-pink-400",
    clr:"red"
      
  }
];


const SimulationType = () => {
  return (
    <div className="min-h-screen bg-gray-50  ">
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-500 via-white to-purple-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold  mb-6">
              Choose Your Learning Path
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
              From quick skill-building exercises to comprehensive virtual internships, 
              find the perfect simulation to match your goals and schedule.
            </p>
          </div>
        </div>
      </section>

      {/* Simulation Types */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {simulationTypes.map((type, index) => (
              <SimulationCard key={index} type={type}/>
            ))}
          </div>
        </div>
      </section>

      {/* Selection Quiz CTA */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center bg-white rounded-2xl p-12 shadow-lg hover:-translate-y-3  duration-300 ease-in-out hover:shadow-xl border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Not Sure Which Type is Right for You?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Take our quick assessment to get personalized recommendations based on your goals, 
              experience level, and available time commitment.
            </p>
            <button className="bg-blue-500 text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-lg font-semibold">
              Take Assessment Quiz
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SimulationType;