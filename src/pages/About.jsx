// SinglePage.jsx
import { motion } from "framer-motion";
import { Target, BookOpen, Users, Handshake} from "lucide-react";
import { Link } from "react-router-dom";
import { ArrowLeft } from 'lucide-react';

const navItems = [
  {
    icon: <Target size={32} />,
    title: "Mission & Vision",
    path: "/about/mission",
    desc: "Discover our purpose and goals",
  },
  {
    icon: <BookOpen size={32} />,
    title: "Our Story",
    path: "/about/story",
    desc: "Learn about our journey",
  },
  {
    icon: <Users size={32} />,
    title: "Our Team",
    path: "/about/team",
    desc: "Meet our amazing people",
  },
  {
    icon: <Handshake size={32} />,
    title: "Partners",
    path: "/about/partners",
    desc: "Our trusted collaborators",
  },
];

const About = () => {
  return (
    <>
  {/* {/home btn or back btn}
     <div className="fixed top-6 left-6 z-50 flex gap-4">
        <Link to="/" className="group">
          <button className="flex items-center gap-2 bg-white/90 backdrop-blur-sm text-gray-800 font-semibold py-3 px-6 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border border-white/50">
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform duration-300" />
            Back
          </button>
        </Link>

        </div> */}
      {/* Hero Section with Animated Circles */}
      <section className="relative py-20 px-4 text-center bg-gradient-to-b from-blue-200 via-sky-200 to-gray-300 overflow-hidden">
        <motion.div
          className="absolute top-10 left-10 w-24 h-24 bg-gradient-to-tr from-blue-300 to-purple-300 rounded-full"
          animate={{ y: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 6 }}
        />
        <motion.div
          className="absolute bottom-10 left-1/2 w-10 h-10 bg-gradient-to-r from-green-300 to-blue-300 rounded-full"
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 5 }}
        />
        <motion.div
          className="absolute top-1/2 right-10 w-16 h-16 bg-gradient-to-br from-pink-300 to-red-300 rounded-full"
          animate={{ y: [0, 25, 0] }}
          transition={{ repeat: Infinity, duration: 7 }}
        />

        <h1 className="text-7xl font-bold mb-4">
          Welcome to the <br />{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Future of Innovation
          </span>
        </h1>
        <p className="text-gray-700 max-w-2xl mx-auto text-lg">
          Empowering organizations worldwide through cutting-edge technology
          solutions and collaborative partnerships that drive meaningful change.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold shadow hover:opacity-90">
            Learn About Us →
          </button>
          <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50">
            Get Started
          </button>
        </div>

        {/* Navigation Cards Section */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-12 px-4 bg-transparent text-center">
          {navItems.map((item, index) => (
            <Link to={item.path} key={index}>

            <div className="border p-6 rounded-xl shadow-lg hover:shadow-gray-600 transition  ">
              <div
                className={` w-16 h-16 mx-auto rounded-full flex items-center justify-center text-white mb-4 bg-gradient-to-r ${
                  index === 0
                    ? "from-purple-500 to-indigo-500"
                    : index === 1
                    ? "from-pink-500 to-red-400"
                    : index === 2
                    ? "from-red-400 to-pink-500"
                    : "from-green-400 to-blue-500"
                }`}
              >
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>

            </Link>
          ))}
        </section>
      </section>
    </>
  );
};

export default About;
