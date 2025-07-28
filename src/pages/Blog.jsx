import React, { useState } from "react";
import { Search, Calendar, User } from "lucide-react";

const featured = {
  id: 1,
  title: "The Future of Work: Remote & Beyond",
  excerpt:
    "Explore the latest trends shaping web development, from AI integration to new frameworks that are revolutionizing how we build applications. With the rise of remote teams, flexible workspaces, and asynchronous collaboration, developers are adapting tools and workflows to suit modern demands. These shifts aren't just temporary responses to global changes—they’re shaping the long-term future of the industry. Embracing new technologies like AI-powered code assistance, cloud-native stacks, and distributed systems has become the new norm in engineering and product teams around the world.",
  image: "blogtech.jpg",
  author: "Aarav Mehta",
  date: "2025-06-15",
  category: "Technology",
};

const articles = [
  {
    id: 2,
    title: "Building Resilient Web Applications",
    excerpt:
      "Techniques and tools to improve your web app's uptime and fault tolerance. Discover strategies for monitoring, redundancy, load balancing, and fault recovery to ensure consistent user experiences and business continuity.",
    image: "html.jpg",
    author: "Isha Sharma",
    date: "2025-06-10",
    category: "Development",
  },
  {
    id: 3,
    title: "Design Trends for 2025",
    excerpt:
      "Discover UI/UX design directions for the modern web and mobile interfaces. Emphasis on accessibility, micro-interactions, fluid layouts, and inclusive design continues to grow in importance.",
    image: "uiux.jpg",
    author: "Rahul Verma",
    date: "2025-06-05",
    category: "Design",
  },
  {
    id: 4,
    title: "Mastering React Performance",
    excerpt:
      "Boost speed and reduce bottlenecks with these React optimization techniques. Learn memoization, lazy loading, and rendering control to maximize efficiency.",
    image: "react.jpg",
    author: "Sneha Patel",
    date: "2025-06-01",
    category: "Development",
  },
  {
  id: 5,
  title: "Next.js vs. React: Which One to Choose?",
  excerpt:
    "Understand the key differences between Next.js and React, their use-cases, performance benefits, and when to choose one over the other for your projects.",
  image: "vs.jpg",
  author: "Karan Desai",
  date: "2025-05-28",
  category: "Development",
},
{
  id: 6,
  title: "Accessibility in Modern Web Design",
  excerpt:
    "Learn how to build inclusive digital experiences by following accessibility standards like WCAG, ARIA roles, and semantic HTML best practices.",
  image: "learnEd.jpg",
  author: "Meera Nair",
  date: "2025-05-20",
  category: "Design",
},
{
  id: 7,
  title: "Top 10 VS Code Extensions for Web Developers",
  excerpt:
    "Speed up your workflow with these essential Visual Studio Code extensions for linting, formatting, debugging, and UI enhancements.",
  image: "coding.jpg",
  author: "Rohit Singh",
  date: "2025-05-15",
  category: "Technology",
}

];

const categories = ["All", "Technology", "Development", "Design"];

const Blog = () => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [expandedId, setExpandedId] = useState(null);
  const [expandedFeatured, setExpandedFeatured] = useState(false);

  const filtered = articles.filter((a) => {
    const matchSearch = a.title.toLowerCase().includes(search.toLowerCase());
    const matchCategory =
      selectedCategory === "All" || a.category === selectedCategory;
    return matchSearch && matchCategory;
  });

  const shouldShowReadMore = (text, length = 150) => text.length > length;

  return (
    <div className="bg-slate-50 min-h-screen px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-600">Blog & Insights</h1>
        <p className="text-gray-600 mt-2">Explore the latest trends and guides</p>
      </header>

      {/* Featured */}
      <section className="mb-12 duration-200 shadow-gray-600 bg-white shadow rounded-2xl overflow-hidden md:flex">
        <img
          src={featured.image}
          alt=""
          className="md:w-1/2 object-cover h-64 md:h-auto"
        />
        <div className="p-6 md:w-1/2">
          <div className="flex items-center gap-3 text-sm text-gray-500 mb-2">
            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
              {featured.category}
            </span>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">{featured.title}</h2>
          <p className="text-gray-600 mb-2">
            {expandedFeatured || !shouldShowReadMore(featured.excerpt)
              ? featured.excerpt
              : featured.excerpt.slice(0, 150) + "..."}
          </p>
          {shouldShowReadMore(featured.excerpt) && (
            <button
              onClick={() => setExpandedFeatured(!expandedFeatured)}
              className="text-blue-600 hover:text-blue-800 font-medium text-sm mb-4"
            >
              {expandedFeatured ? "Read less" : "Read more"}
            </button>
          )}
          <div className="flex items-center justify-between text-sm text-blue-600 font-semibold">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              {featured.author}
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {new Date(featured.date).toLocaleDateString()}
            </div>
          </div>
        </div>
      </section>

      {/* Search + Category */}
      <div className="flex flex-col md:flex-row gap-4 mb-8 items-center justify-between">
        <div className="relative w-full md:max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Search articles..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-gray-300 rounded-md py-2 pl-10 pr-4 shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1 rounded-full text-sm font-medium transition ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white"
                  : "bg-white border text-gray-600 hover:bg-blue-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Articles Grid */}
      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((article) => (
          <div
            key={article.id}
            className="bg-white rounded-2xl overflow-hidden shadow-gray-500 hover:shadow-md transition hover:scale-105 duration-300 ease-in-out"
          >
            <img
              src={article.image}
              alt={article.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-5 space-y-2">
              <div className="flex justify-between items-center text-xs text-gray-500">
                <span className="bg-slate-300 px-2 py-1 rounded-full text-gray-800">
                  {article.category}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">{article.title}</h3>
              <div className="text-sm text-gray-700">
                <p className={expandedId === article.id ? "" : "line-clamp-2"}>
                  {expandedId === article.id || !shouldShowReadMore(article.excerpt)
                    ? article.excerpt
                    : article.excerpt.slice(0, 150) + "..."}
                </p>
                {shouldShowReadMore(article.excerpt) && (
                  <button
                    onClick={() =>
                      setExpandedId(expandedId === article.id ? null : article.id)
                    }
                    className="mt-2 text-blue-600 hover:text-blue-800 hover:underline font-medium text-sm"
                  >
                    {expandedId === article.id ? "Read less" : "Read more"}
                  </button>
                )}
              </div>
              <div className="flex items-center justify-between text-sm text-blue-600 mt-3 font-semibold">
                <span className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  {article.author}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {new Date(article.date).toLocaleDateString()}
                </span>
              </div>
            </div>
          </div>
        ))}
        {filtered.length === 0 && (
          <p className="text-center col-span-full text-gray-500 mt-10">
            No articles found.
          </p>
        )}
      </section>
    </div>
  );
};

export default Blog;
