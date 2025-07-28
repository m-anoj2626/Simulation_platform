import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";

import { Clock3, MailCheckIcon } from "lucide-react";
import { FaLinkedin, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Contact = () => {


  const socialLinks = [
  { name: "LinkedIn", icon: <FaLinkedin  />, link: "#" },
  { name: "Twitter", icon: <FaTwitter />, link: "#" },
  { name: "Instagram", icon: <FaInstagram />, link: "#" },
  { name: "YouTube", icon: <FaYoutube />, link: "#" },
];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-300 via-pink-200 to-indigo-500">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 ">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-800 font-semibold">
            We're here to help you succeed. Reach out to us with any questions,
            feedback, or suggestions.
          </p>
        </div>
      </section>

      {/* Form and Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <h2 className="text-3xl font-bold text-black mb-6 bg-blue-300 rounded-3xl p-2 px-10">
              Send us a Message
            </h2>
            <div className="bg-white shadow-md rounded-lg p-8 ">
              <form className="space-y-6 ">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="input placeholder:text-gray-500  border-gray-500 border-1 rounded-2xl px-4 py-1"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="input border-gray-500 border-1 rounded-2xl px-4 py-1"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="input border-gray-500 border-1 rounded-2xl px-4 py-1"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="input border-gray-500 border-1 rounded-2xl px-4 py-1"
                  />
                 
                </div>

                <div>
                  <label className="block mb-2 text-sm font-bold text-gray-700">
                    Inquiry Type
                  </label>
                  <select className="w-full border-1 border-gray-500 p-2 rounded-md">
                    <option>General Question</option>
                    <option>Technical Support</option>
                    <option>Partnership Inquiry</option>
                    <option>Feedback/Suggestion</option>
                    <option>Academic Collaboration</option>
                  </select>
                </div>

                <label
                  htmlFor="responsive-text"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Type your message here:
                </label>
                <textarea
                  id="responsive-text"
                  className="
              w-full p-3 border border-gray-500 rounded-md
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
              text-gray-700 placeholder-gray-400
              min-h-[100px]  /* Minimum height */
              max-h-[300px]  /* Optional: Maximum height to prevent it from growing too large */
              resize-y       /* Allows vertical resizing by the user */
              overflow-y-auto /* Ensures scrollbar appears if content exceeds max-height */
            "
                  rows={4} // Initial number of rows, will be overridden by JS auto-resize if enabled
                ></textarea>

                <button className=" hover:scale-105 duration-300 w-full py-3 text-white font-semibold bg-gradient-to-r from-blue-600 to-green-500 rounded-md">
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 bg-blue-300 rounded-3xl p-2 px-10">
              Contact Information
            </h2>

            <div className="border-1 bg-white p-6  rounded-lg   transition-all duration-300 ease-in-out
          hover:shadow-xl 
          hover:scale-105 
          cursor-pointer ">
             <h3 className="text-2xl font-bold mb-2 flex items-center ">
  <CiLocationOn size={50} className="text-blue-700 py-0 px-2"/>
  Office Address
</h3>
              <p className="text-gray-600">
                123 Education Hub
                <br />
                Sector 62, Noida
                <br />
                Uttar Pradesh 201309
                <br />
                India
              </p>
            </div>

            <div className="border-1 bg-white p-6  rounded-lg   transition-all duration-300 ease-in-out
          hover:shadow-xl 
          hover:scale-105 
          cursor-pointer">
              <h3 className="text-2xl font-bold mb-2 flex items-center">
  <CiPhone size={50} className="text-green-500 py-0 px-2"/>
  Phone Numbers
</h3>
              <p className="text-gray-600">
                Support: +91 1800-XXX-1234
                <br />
                Partnerships: +91 1800-XXX-5678
                <br />
                General: +91 120-XXX-9999
              </p>
            </div>

            <div className="border-1 bg-white p-6  rounded-lg   transition-all duration-300 ease-in-out
          hover:shadow-xl 
          hover:scale-105 
          cursor-pointer">
              <h3 className="text-2xl font-bold mb-2 flex items-center ">
  <MailCheckIcon size={50} className="text-purple-600 py-0 px-2"/>
  Email Addresses
</h3>
              <p className="text-gray-600">
                <span className="font-bold text-sm font-stretch-condensed">General:</span> info@jobsimulations.in
                <br />
                Support: support@jobsimulations.in
                <br />
                Partnerships: partners@jobsimulations.in
              </p>
            </div>

            <div className="border-1 bg-white p-6  rounded-lg   transition-all duration-300 ease-in-out
          hover:shadow-xl 
          hover:scale-105 
          cursor-pointer">
              <h3 className="text-2xl font-bold mb-2 flex items-center">
  <Clock3 size={50} className="text-orange-500 py-0 px-2"/>
  Business Hours
</h3>
              <p className="text-gray-600">
                Mon–Fri: 9 AM – 6 PM
                <br />
                Saturday: 10 AM – 4 PM
                <br />
                Sunday: Closed
                <br />
                <span className="text-sm">(Indian Standard Time)</span>
              </p>
            </div>
          </div>
        </div>
      </section>


    
      {/* Social Media */}
    <section className="py-12 bg-gradient-to-r from-blue-900 to-green-700 text-center text-white">
  <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
  <p className="mb-6">Stay updated with the latest news and opportunities</p>
  <div className="flex justify-center gap-4 flex-wrap">
    {socialLinks.map((social) => (
      <a
        key={social.name}
        href={social.link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 border border-white px-4 py-2 rounded hover:bg-white hover:text-blue-900 transition"
      >
        <span className="text-lg">{social.icon}</span>
        <span>{social.name}</span>
      </a>
    ))}
  </div>
</section>
    </div>
  );
};

export default Contact;
