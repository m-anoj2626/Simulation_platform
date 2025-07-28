import React from "react";
import {
  FaGraduationCap,
  FaHandshake,
  FaChartLine,
  FaLightbulb,
} from "react-icons/fa";
import { PiStudentLight } from "react-icons/pi";
import { PiBuildingsBold } from "react-icons/pi";
import { LiaUniversitySolid } from "react-icons/lia";
import { GiGrowth } from "react-icons/gi";
import { SlBadge } from "react-icons/sl";
import { FaUserCheck } from "react-icons/fa"
import { GiTechnoHeart } from "react-icons/gi";
import PageActions from "../ui/PageActions";

const StoryPage = () => {
  const features = [
    {
      icon: <FaGraduationCap className="text-4xl text-cyan-400" />,
      title: "Student-Centric",
      description: "Built specifically for undergraduate needs and schedules",
    },
    {
      icon: <FaHandshake className="text-4xl text-cyan-400" />,
      title: "Quality Matches",
      description: "AI-powered matching for better student-employer fits",
    },
    {
      icon: <FaChartLine className="text-4xl text-cyan-400" />,
      title: "Career Growth",
      description: "Tools to track your professional development journey",
    },
    {
      icon: <FaLightbulb className="text-4xl text-cyan-400" />,
      title: "Innovative Approach",
      description: "Constantly evolving based on student feedback",
    },
  ];

  const stats = [
    { value: "10,000+", label: "Students Hired", icon: <PiStudentLight className='text-sky-500' size={32} /> },
    { value: "500+", label: "Partner Companies", icon: <PiBuildingsBold className="text-sky-500" size={32} /> },
    { value: "85%", label: "Retention Rate", icon: <GiGrowth className="text-sky-500" size={32}/> },
    { value: "50+", label: "Universities", icon: <LiaUniversitySolid className=" text-sky-500"  size={32}/> },
  ];

  return (

    <div className="bg-gradient-to-br from-sky-300 via-purple-200 to-green-100 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
         <div>
              <PageActions/>
            </div>
     
      <div className="max-w-7xl mx-auto">
        {/* Hero Header */}
        <div className=" text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">
            Our Story
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-800 max-w-3xl mx-auto">
            Empowering undergraduates to launch their careers
          </h2>
        </div>

        {/* Mission Section */}
        <div className=" hover:shadow-gray-400 transform transition duration-350 hover:scale-103 bg-white rounded-xl shadow-lg overflow-hidden mb-16">
          <div className="md:flex  ">
            <div className="md:w-1/2 p-8 md:p-12 bg-blue-700 text-white  ">
              <h3 className="text-3xl font-bold mb-4">Our Beginning</h3>
              <p className="mb-6 ">
                Founded in 2018 by recent graduates who struggled to find
                relevant opportunities during college. We knew there had to be a
                better way to connect academic talent with meaningful work
                experiences.
              </p>
              <h3 className="text-3xl font-bold mb-4 mt-8">Our Vision</h3>
              <p>
                To become the most trusted career launchpad for undergraduates
                worldwide, where every student can find opportunities that help
                them grow professionally.
              </p>
            </div>

            <div className="md:w-1/2 p-8 md:p-12">
              <h3 className="text-3xl font-bold mb-4 text-gray-800">
                Why We Exist
              </h3>
              <p className="mb-6 text-gray-600">
                Traditional job platforms aren't built for students. We solve
                the unique challenges undergraduates face: limited experience,
                flexible scheduling needs, and the desire for career-exploration
                opportunities.
              </p>
              <h3 className="text-3xl font-bold mb-4 text-gray-800 mt-8">
                Our Difference
              </h3>
              <p className="text-gray-600">
                Every feature is designed with students in mind - from our
                application process to our mentorship programs and
                skill-building resources.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className=" bg-gradient-to-br from-sky-200 via-gray-100 to-purple-100 hover:shadow-gray-300 transform transition duration-300 hover:scale-105 hover:bg-gray-100 bg-white p-2 rounded-3xl shadow text-center"
            >
              <div className="flex  items-center justify-center mb-2">
                <div className=" text-sky-600 px-4 pt-4 rounded-full  mb-2">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-sky-600">
                  {stat.value}
                </div>
              </div>

              <div className="font-bold text-blue-500">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
            What Makes Us Unique
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-sky-200 via-gray-100 to-purple-100 hover:shadow-gray-300 transform transition duration-300 hover:scale-105 hover:bg-gray-100 p-8 rounded-xl shadow-md text-center hover:shadow-lg "
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h4 className="text-xl font-semibold mb-2 text-gray-800">
                  {feature.title}
                </h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className=" hover:shadow-gray-300 transform transition duration-350 hover:scale-105 hover:bg-gray-100 bg-gradient-to-br from-sky-200 via-gray-100 to-red-200 rounded-4xl shadow-lg p-8 mb-16">
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">
            The Team Behind the Platform
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto rounded-full bg-red-600 mb-4 flex items-center justify-center">
                <FaUserCheck  className="text-4xl text-gray-100" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Former Students</h4>
              <p className="text-gray-600">
                Who understand the challenges firsthand
              </p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 mx-auto rounded-full bg-sky-400 mb-4 flex items-center justify-center">
                <SlBadge className="text-4xl text-amber-400" />
              </div>
              <h4 className="text-xl font-semibold mb-2">HR Experts</h4>
              <p className="text-gray-600">
                Who know what employers really want
              </p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 mx-auto rounded-full bg-green-500 mb-4 flex items-center justify-center">
                <GiTechnoHeart className="text-4xl text-red-700" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Tech Innovators</h4>
              <p className="text-gray-600">
                Building the best matching technology
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-blue-600 rounded-xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Begin Your Journey?
          </h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of students who've launched their careers through our
            platform
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 hover:scale-105 transition">
              Student Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryPage;
