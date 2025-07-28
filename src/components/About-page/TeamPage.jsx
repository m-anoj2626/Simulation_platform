import React from "react";
import { Github, Linkedin, Twitter, Mail, MapPin, Coffee } from "lucide-react";
import PageActions from "../ui/PageActions";

const teamMembers = [
  {
    name: "Sarah Chen",
    role: "Co-Founder & CEO",
    bio: "Visionary leader with 10+ years in tech. Previously at Google and Microsoft.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
    location: "San Francisco, CA",
    interests: ["AI Ethics", "Product Strategy", "Rock Climbing"],
    social: {
      linkedin: "sarahchen",
      twitter: "sarahc_tech",
      github: "sarahchen",
    },
    gradient: "from-purple-400 to-blue-500",
  },
  {
    name: "Marcus Rodriguez",
    role: "Co-Founder & CTO",
    bio: "Full-stack architect. Former lead engineer at Stripe.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    location: "Austin, TX",
    interests: ["Distributed Systems", "Open Source", "Photography"],
    social: {
      linkedin: "marcusrod",
      twitter: "mrod_dev",
      github: "marcusrodriguez",
    },
    gradient: "from-purple-700 to-orange-500",
  },
  {
    name: "Emily Thompson",
    role: "Head of Design",
    bio: "Award-winning UX designer. Passionate about accessibility.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    location: "Portland, OR",
    interests: ["Design Systems", "Accessibility", "Yoga"],
    social: {
      linkedin: "emilythompson",
      twitter: "emily_designs",
      github: "emilythompson",
    },
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    name: "David Kim",
    role: "Lead Backend Engineer",
    bio: "Performance expert and database architect from Netflix.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    location: "Seattle, WA",
    interests: ["Performance", "Databases", "Gaming"],
    social: {
      linkedin: "davidkim",
      twitter: "dkim_backend",
      github: "davidkim",
    },
    gradient: "from-green-500 to-emerald-500",
  },
  {
    name: "Alex Rivera",
    role: "Frontend Architect",
    bio: "React specialist. Former frontend lead at Vercel.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    location: "Miami, FL",
    interests: ["React", "DevTools", "Surfing"],
    social: {
      linkedin: "alexrivera",
      twitter: "alex_frontend",
      github: "alexrivera",
    },
    gradient: "from-orange-500 to-red-500",
  },
  {
    name: "Luna Zhang",
    role: "Product Manager",
    bio: "Data-driven strategist. Previously at Spotify and Slack.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
    location: "New York, NY",
    interests: ["Analytics", "User Research", "Travel"],
    social: {
      linkedin: "lunazhang",
      twitter: "luna_pm",
      github: "lunazhang",
    },
    gradient: "from-teal-500 to-blue-500",
  },
];

const Team = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-300 via-purple-200 to-green-100">
           <div>
            <PageActions/>
           </div>
      {/* Header Section */}
      <section className="pt-24 pb-16 text-center px-4">
        <div className="flex justify-center items-center gap-3 mb-4">
          <Coffee className="text-purple-500" size={48} />
          <span className="text-blue-600 font-semibold uppercase tracking-wider">Meet the Team</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
          <span className="bg-gradient-to-r from-blue-600 via-gray-600 to-purple-700 bg-clip-text text-transparent">Amazing People</span>
          <br />
          <span className="text-gray-900">Building the Future</span>
        </h1>
        <p className="text-shadow-slate-300 text-lg max-w-2xl mx-auto mt-4">
          We're a diverse team of innovators, creators, and problem-solvers building products that matter.
        </p>
      </section>

      {/* Team Grid */}
      <section className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={member.name}
            className=" hover:bg-gray-100 bg-gray-200 border border-gray-400 rounded-3xl shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 p-6"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex flex-col items-center text-center">
              <div className={`w-44 h-44 rounded-full p-1 mb-4 bg-gradient-to-r ${member.gradient}`}>
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
              <p className={`text-sm font-semibold bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent mb-2`}>
                {member.role}
              </p>
              <p className="text-sm text-gray-600 mb-3">{member.bio}</p>
              <div className="flex items-center text-gray-500 text-sm mb-3">
                <MapPin size={14} className="mr-2" />
                {member.location}
              </div>

              {/* Interests */}
              <div className="flex flex-wrap gap-2 mb-4 justify-center">
                {member.interests.map((interest) => (
                  <span key={interest} className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                    {interest}
                  </span>
                ))}
              </div>

              {/* Social Icons */}
              <div className="flex gap-3">
                <a
                  href={`https://linkedin.com/in/${member.social.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-50 hover:bg-blue-100 p-2 rounded-lg"
                >
                  <Linkedin size={16} className="text-blue-600" />
                </a>
                <a
                  href={`https://twitter.com/${member.social.twitter}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-sky-50 hover:bg-sky-100 p-2 rounded-lg"
                >
                  <Twitter size={16} className="text-sky-600" />
                </a>
                <a
                  href={`https://github.com/${member.social.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-50 hover:bg-gray-100 p-2 rounded-lg"
                >
                  <Github size={16} className="text-gray-700" />
                </a>
                <a
                  href={`mailto:${member.name.toLowerCase().replace(" ", ".")}@platform.com`}
                  className="bg-green-50 hover:bg-green-100 p-2 rounded-lg"
                >
                  <Mail size={16} className="text-green-600" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Join Us Section */}
      <section className="mt-20 max-w-4xl mx-auto px-4 text-center">
        <div className="bg-gradient-to-r from-sky-600 to-pink-300 text-white p-10 rounded-3xl">
          <h2 className="text-3xl font-bold mb-3">Want to Join Our Team?</h2>
          <p className="text-lg opacity-90 mb-6">
            We're always looking for talented individuals who share our vision.
          </p>
          <button className="bg-white text-purple-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100  hover:scale-105 transition">
            Start Your Journey
          </button>
        </div>
      </section>
    </div>
  );
};

export default Team;
