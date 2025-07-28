// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Logo() {
  return (
    <span className="flex flex-col items-center">
      <span className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-500 via-blue-400 to-yellow-300 flex items-center justify-center shadow-lg mb-1">
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path
            d="M12 4v8M12 12l4.2 7M12 12l-4.2 7"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <ellipse
            cx="12"
            cy="13.8"
            rx="4.6"
            ry="4.2"
            stroke="#fff"
            strokeWidth="2"
          />
        </svg>
      </span>
      <span className="text-sm font-bold tracking-wide text-purple-700">
        Zeetheta
      </span>
    </span>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const nav = [
    { label: "Home", to: "/" },
    { label: "Simulations", to: "/simulations", dropdown: true },
    { label: "Industries", to: "/industries" },
    { label: "About", to: "/about" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur border-b border-purple-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center gap-3">
              <Logo />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8 items-center">
              {nav.map((item, i) => {
                const isActive =
                  location.pathname === item.to ||
                  (item.to !== "/" && location.pathname.startsWith(item.to));

                // Simulations dropdown
                // Simulations dropdown
                if (item.dropdown && item.label === "Simulations") {
                  return (
                    <div key={i} className="relative group">
                      <span
                        className={`flex items-center gap-1 font-medium transition ${
                          isActive
                            ? "text-purple-700"
                            : "text-gray-700 hover:text-purple-600"
                        } pb-2 cursor-pointer`}
                      >
                        {item.label}
                      </span>

                      {/* Dropdown Box */}
                      <div className="absolute top-full left-0 w-96  rounded-xl shadow-2xl border mt-3 p-6 hidden group-hover:block z-50 space-y-3">
                        {/* Highlight Card */}
                        <div className="bg-gradient-to-br from-blue-500 to-cyan-400 text-white rounded-xl p-5 shadow-md">
                          <h3 className="text-lg font-semibold text-gray-800">
                            Simulation Hub
                          </h3>
                          <p className="text-sm opacity-90 mt-1 text-gray-600">
                            Your complete destination for all simulation
                            features and learning paths.
                          </p>
                        </div>

                        {/* Link Cards */}
                        <div className="rounded-3xl pt-3 space-y-4 text-sm text-gray-800 bg-gradient-to-br from-emerald-500 to-lime-500">
                          <Link
                            to="/simulations/hub"
                            className="block p-3 rounded-md hover:bg-gray-100 transition"
                          >
                            <p className="font-semibold">
                              Browse All Simulations
                            </p>
                            <p className="text-gray-500 text-xs">
                              Explore our full catalog of simulations
                            </p>
                          </Link>
                          <Link
                            to="/simulations/types"
                            className="block p-3 rounded-md hover:bg-gray-100 transition"
                          >
                            <p className="font-semibold">Simulation Types</p>
                            <p className="text-gray-500 text-xs">
                              Short, Long, and Virtual Internships
                            </p>
                          </Link>
                          <Link
                            to="/simulations/industry"
                            className="block p-3 rounded-md hover:bg-gray-100 transition"
                          >
                            <p className="font-semibold">By Industry</p>
                            <p className="text-gray-500 text-xs">
                              Find simulations by industry focus
                            </p>
                          </Link>
                          <Link
                            to="/simulations/mylearning"
                            className="block p-3 rounded-md hover:bg-gray-100 transition"
                          >
                            <p className="font-semibold">My Learning</p>
                            <p className="text-gray-500 text-xs">
                              Track your enrolled simulations
                            </p>
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={i}
                    to={item.to}
                    className={`flex items-center gap-3 font-medium transition ${
                      isActive
                        ? "text-purple-700"
                        : "text-gray-700 hover:text-purple-600"
                    } relative pb-2`}
                  >
                    {item.label}
                    <span
                      className={`absolute -bottom-0.5 left-0 w-full h-[2px] rounded bg-gradient-to-r from-purple-500 to-blue-400 transition-transform duration-300 ${
                        isActive
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      } origin-left`}
                    />
                  </Link>
                );
              })}
            </div>

            {/* Desktop Buttons */}
            <div className="hidden md:flex gap-3 items-center">
              <Link to="/auth">
                <button className="text-gray-700 hover:text-purple-600 px-4 py-2 rounded transition">
                  Login
                </button>
              </Link>
              <Link to="/auth">
                <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-5 py-2 rounded-xl font-semibold shadow hover:from-purple-700 hover:to-blue-700 transition">
                  Sign Up
                </button>
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-purple-50"
              onClick={() => setOpen(!open)}
            >
              <span className="sr-only">Toggle Menu</span>
              <div className="w-6 h-0.5 bg-gray-800 mb-1"></div>
              <div className="w-6 h-0.5 bg-gray-800 mb-1"></div>
              <div className="w-6 h-0.5 bg-gray-800"></div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden bg-white/95 backdrop-blur border-t border-purple-100 py-4">
            <div className="px-4 space-y-3">
              {nav.map((item, i) => {
                const isActive =
                  location.pathname === item.to ||
                  (item.to !== "/" && location.pathname.startsWith(item.to));
                return (
                  <Link
                    key={i}
                    to={item.to}
                    className={`flex items-center gap-2 py-2 font-medium ${
                      isActive
                        ? "text-purple-700"
                        : "text-gray-700 hover:text-purple-600"
                    } hover:bg-purple-50 rounded-lg transition`}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </nav>
      <div className="h-20" />
    </>
  );
}
