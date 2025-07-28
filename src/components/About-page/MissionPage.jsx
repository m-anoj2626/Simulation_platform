import React from "react";
import PageActions from "../ui/PageActions";

const MissionPage = () => {
  const values = [
    {
      title: "Innovation", 
      iconUrl: "tech.jpg",

      description: "We push boundaries and embrace cutting-edge solutions to solve complex challenges.",
      icon: "🚀",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Collaboration",
       iconUrl: "code.jpg",
      description: "Together we achieve more. We believe in the power of collective intelligence.",
      icon: "🤝",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Excellence",
       iconUrl: "code.jpg",
      description: "We strive for perfection in everything we do, delivering exceptional results.",
      icon: "⭐",
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Sustainability",
       iconUrl: "code.jpg",
      description: "Building solutions that create lasting positive impact for future generations.",
      icon: "🌱",
      color: "from-emerald-500 to-green-600"
    },
    {
      title: "Transparency",
       iconUrl: "code.jpg",
      description: "Open communication and honest relationships form the foundation of our work.",
      icon: "🔍",
      color: "from-purple-500 to-indigo-500"
    },
    {
      title: "Growth",
       iconUrl: "code.jpg",
      description: "Continuous learning and development drive our personal and collective evolution.",
      icon: "📈",
      color: "from-pink-500 to-rose-500"
    }
  ];

  const goals = [
    {
      title: "Connect Global Talent",
      description: "Bridge the gap between brilliant minds across the world",
      progress: 85
    },
    {
      title: "Foster Innovation",
      description: "Create an environment where groundbreaking ideas flourish",
      progress: 92
    },
    {
      title: "Drive Impact",
      description: "Generate meaningful solutions that transform industries",
      progress: 78
    },
    {
      title: "Build Community",
      description: "Cultivate a thriving ecosystem of creators and innovators",
      progress: 88
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
        <div>
          <PageActions/>
        </div>
      
      {/* Hero */}
      <div className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-24 px-4 text-center">
        <h1 className="text-6xl md:text-8xl font-bold mb-6">
          Our <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Mission</span>
        </h1>
        <p className="text-2xl md:text-3xl text-indigo-100 max-w-4xl mx-auto mb-8">
          Empowering innovation through collaboration and connecting brilliant minds to solve tomorrow's challenges
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <span className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-cyan-200 font-medium">Global Impact</span>
          <span className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-purple-200 font-medium">Innovation First</span>
          <span className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-pink-200 font-medium">Community Driven</span>
        </div>
      </div>

      {/* Purpose */}
      <section className="py-20 px-4 max-w-7xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-8">Purpose of Our Platform</h2>
        <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12">
          We exist to break down barriers and create a world where innovation knows no boundaries.
          Our platform serves as the bridge between visionary minds and transformative opportunities.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: "🌍", title: "Global Reach", desc: "Connecting talent across continents" },
            { icon: "💡", title: "Innovation Hub", desc: "Where ideas become reality" },
            { icon: "🚀", title: "Future Focus", desc: "Building tomorrow's solutions today" }
          ].map((item, idx) => (
            <div key={idx} className="text-center group">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-3xl group-hover:scale-110 transition duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Goals Section - Improved Design */}
<div className="bg-gradient-to-r from-gray-50 to-blue-50 py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
        Our Goals
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Measurable objectives that drive our mission forward and create lasting impact
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {goals.map((goal, index) => (
        <div
          key={index}
          className="bg-white/80 backdrop-blur-md shadow-xl rounded-xl p-8 flex items-center gap-6 hover:shadow-2xl transition duration-300"
        >
          {/* Circular Progress */}
          <div className="relative w-20 h-20">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke="#e5e7eb"
                strokeWidth="10"
                fill="none"
              />
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke="url(#grad)"
                strokeWidth="10"
                fill="none"
                strokeDasharray="282.6"
                strokeDashoffset={`${282.6 - (goal.progress / 100) * 282.6}`}
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center text-lg font-bold text-gray-700">
              {goal.progress}%
            </div>
          </div>

          {/* Goal Text */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              {goal.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {goal.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
{/* Goals */}
      

      {/* Values */}
      {/* <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">Our Values</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-16">
            The principles that guide every decision we make and every partnership we forge
          </p>
          <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((val, index) => (
              <div
                key={index}
                className=" w-[90%] h-90 rounded-xl overflow-hidden bg-white/90 backdrop-blur-sm hover:scale-105 transition duration-500 shadow group"
              >
                <div className={`h-20 bg-gradient-to-br ${val.color} flex items-center justify-center text-4xl`}>
                  {val.icon}
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 group-hover:text-indigo-600 transition">
                    {val.title}
                  </h3>
                  <p className="text-gray-600 mt-2">{val.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 max-w-7xl mx-auto">
  {values.map((val, index) => (
    <div
      key={index}
      className="rounded-3xl shadow-md hover:shadow-xl bg-white/90 backdrop-blur-sm transform transition-transform duration-300 hover:-translate-y-2 overflow-hidden"
    >
      {/* Top Banner with Emoji and Gradient */}
      <div className={`h-28 flex items-center justify-center text-5xl text-white bg-gradient-to-br ${val.color}`}>
        {val.icon}
      </div>

      {/* Content */}
      <div className="p-6 text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{val.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{val.description}</p>
        <button className="text-white bg-blue-500 hover:bg-blue-600 px-5 py-2 text-sm font-medium rounded-full border border-blue-700 transition">
          Explore
        </button>
      </div>
    </div>
  ))}
</div>






      {/* CTA */}
      <section className="mt-5 not-first:bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white py-20 px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Make an Impact?</h2>
        <p className="text-xl mb-8 text-indigo-100">
          Join us in shaping the future. Be part of something extraordinary.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-gradient-to-r from-cyan-400 to-blue-500 text-gray-900 font-bold py-4 px-8 rounded-full hover:scale-105 transition">
            Get Started
          </button>
          <button className="border-2 border-white text-white font-bold py-4 px-8 rounded-full hover:bg-white hover:text-gray-900 transition">
            Learn More
          </button>
        </div>
      </section>
    </div>
  );
};

export default MissionPage;
