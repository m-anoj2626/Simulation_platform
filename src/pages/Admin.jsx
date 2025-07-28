import React from "react";
import { useState } from "react";
import {
  Users,
  BookOpen,
  TrendingUp,
  BarChart3,
  Plus,
  Filter,
  Eye,
  EyeOff,
  Edit,
  Trash2,
  Activity,
} from "lucide-react";

const AdminDashboard = () => {

  const [showEye, setShowEye] = useState(true);
  return (
    <div className="min-h-screen bg-gray-50 p-8 text-gray-800 text-sm">
      <h1 className="text-3xl font-bold text-gray-900 mb-1 ">
        Admin Dashboard
      </h1>
      <p className="text-gray-500 mb-6">
        Manage simulations, users, and platform content
      </p>

      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 ">
        {[
          {
            icon: <Users className="w-6 h-6 text-blue-600 " />,
            label: "Total Users",
            value: 3,
          },
          {
            icon: <BookOpen className="w-6 h-6 text-green-600" />,
            label: "Active Simulations",
            value: 1,
          },
          {
            icon: <TrendingUp className="w-6 h-6 text-purple-600" />,
            label: "Completion Rate",
            value: "78%",
          },
          {
            icon: <BarChart3 className="w-6 h-6 text-orange-600" />,
            label: "Industries",
            value: 3,
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-xl shadow hover:shadow-2xl hover:scale-103 transition-transform duration-200 border flex items-center"
          >
            {item.icon}
            <div className="ml-4">
              <p className="text-xs text-gray-500 uppercase">{item.label}</p>
              <p className="text-2xl font-bold">{item.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Middle Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="bg-white p-5 rounded-xl shadow border hover:shadow-2xl ">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-1">
            <Activity className="w-4 h-4" /> Recent Activity
          </h2>
          <ul className="space-y-3">
            <li className="text-green-600">
              🟢 New User registered for the platform{" "}
              <span className="text-gray-400">2 hours ago</span>
            </li>
            <li className="text-blue-600">
              📘 John Doe completed Investment Banking{" "}
              <span className="text-gray-400">3 hours ago</span>
            </li>
            <li className="text-purple-600">
              ➕ New simulation "Digital Marketing" was created{" "}
              <span className="text-gray-400">5 hours ago</span>
            </li>
            <li className="text-green-600">
              🟢 Jane Smith registered for the platform{" "}
              <span className="text-gray-400">6 hours ago</span>
            </li>
          </ul>
        </div>

        {/* Simulation Management */}
        <div className="bg-white p-5 rounded-xl shadow hover:shadow-2xl border ">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold ">Simulation Management</h2>
            <button className="px-3 py-1 text-sm hover:bg-blue-500 hover:scale-105 transition-transform duration-200 bg-blue-600 text-white rounded flex items-center gap-1 focus:outline-none focus:ring-0">
              <Plus className="w-4 h-4" /> New Simulation
            </button>
          </div>
          <div className="flex items-center gap-2 mb-3">
            <input
              type="text"
              placeholder="Search simulations..."
              className="w-full border rounded px-3 py-2 text-sm outline-none"
            />
            <button className="p-2 bg-gray-100 border rounded">
              <Filter className="w-4 h-4" />
            </button>
          </div>
          <div className="border p-3 rounded-xl">
            <div className="flex justify-between items-center mb-1">
              <p className="font-semibold">
                Investment Banking Analyst{" "}
                <span className="text-xs text-white bg-purple-700 px-2 py-0.5 rounded ml-2">
                  Featured
                </span>
              </p>
              <div className="flex gap-2 items-center">
                <span className="bg-blue-100 text-blue-700 text-xs px-2 py-0.5 rounded">
                  Published
                </span>
                {showEye ? (
              <Eye
                className="w-4 h-4 cursor-pointer"
                onClick={() => setShowEye(false)}
              />
            ) : (
              <EyeOff
                className="w-4 h-4 cursor-pointer"
                onClick={() => setShowEye(true)}
              />
            )}
                <Edit className="w-4 h-4 cursor-pointer" />
                <Trash2 className="w-4 h-4 text-red-600 cursor-pointer" />
              </div>
            </div>
            <p className="text-xs text-gray-500">
              Finance • long • 0 enrolled • 0 completed
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {/* Quick Actions */}
        <div className="bg-white p-5 rounded-xl shadow hover:shadow-2xl border">
          <h2 className="text-lg font-semibold mb-4">⚙️ Quick Actions</h2>
          <div className="space-y-2">
            <button className="w-full px-4 py-2 border rounded text-sm font-semibold hover:bg-blue-500 hover:text-white hover:scale-102 transition-transform duration-200">
              + Create New Simulation
            </button>
            <button className="w-full px-4 py-2 border rounded text-sm font-semibold hover:bg-blue-500 hover:text-white hover:scale-102 transition-transform duration-200">
              + Add Industry
            </button>
            <button className="w-full px-4 py-2 border rounded text-sm font-semibold hover:bg-blue-500 hover:text-white hover:scale-103 transition-transform duration-200">
              📄 Generate Report
            </button>
          </div>
        </div>

        {/* Industry Management */}
        <div className="bg-white p-5 rounded-xl shadow hover:shadow-2xl border">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Industry Management</h2>
           <button className="px-3 py-1 text-sm hover:bg-blue-500 hover:scale-105 transition-transform duration-200 bg-blue-600 text-white rounded flex items-center gap-1 focus:outline-none focus:ring-0">
              <Plus className="w-4 h-4" /> Add Industry 
            </button>
          </div>
          <div className="space-y-3">
            {[
              { name: "Finance", count: 12 },
              { name: "Technology", count: 15 },
              { name: "Marketing", count: 8 },
            ].map((industry, idx) => (
              <div
                key={idx}
                className="flex justify-between items-center border p-3 rounded"
              >
                <div>
                  <p className="font-medium">{industry.name}</p>
                  <p className="text-xs text-gray-500">
                    {industry.count} simulations
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <span className="text-xs bg-blue-500 text-blue-100 px-2 py-0.5 rounded">
                    Active
                  </span>
                  <Trash2 className="w-4 h-4 text-red-600 cursor-pointer" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
