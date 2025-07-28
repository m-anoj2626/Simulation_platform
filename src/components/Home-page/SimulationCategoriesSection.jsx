import React, { useState } from "react";
import categories from "../../data/categories";

const SimulationCategoriesSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter logic
  const filteredCategories = selectedCategory === "All"
    ? categories
    : categories.filter(cat => cat.name === selectedCategory);

  // Get unique category names for buttons
  const categoryNames = ["All", ...new Set(categories.map(cat => cat.name))];

  return (
    <section className="py-12">
      <h2 className="text-gray-200 text-2xl font-bold text-center mb-auto p-4 bg-blue-400 rounded-3xl">
        Simulation Categories
      </h2>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 my-8">
        {categoryNames.map((name, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(name)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
              selectedCategory === name
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-blue-600 border-blue-300 hover:bg-blue-50"
            }`}
          >
            {name}
          </button>
        ))}
      </div>

      {/* Category Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {filteredCategories.map(cat => (
          <div
            key={cat.id}
            className="bg-white-400 pb-20 mt-10 border rounded-3xl flex flex-col items-center transform transition-transform duration-300 hover:-translate-y-2 shadow-md hover:shadow-lg"
          >
            <img
              src={cat.iconUrl}
              alt={cat.name}
              className="w-full h-40 object-cover mb-3 rounded-t-3xl"
            />

            <h3 className="text-lg font-bold mb-1">{cat.name}</h3>
            <p className="text-gray-700 text-center px-2">{cat.description}</p>
            <a
              href={cat.link}
              className="mt-4 text-white bg-blue-500 px-4 py-2 rounded-2xl border-2 border-blue-700 hover:bg-blue-600"
            >
              Explore
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SimulationCategoriesSection;
