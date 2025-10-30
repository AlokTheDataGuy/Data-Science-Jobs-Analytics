import { useState, useEffect } from "react";
import TopSkillsChart from "../components/charts/TopSkillsChart";
import TopCitiesChart from "../components/charts/TopCitiesChart";
import TopCompaniesChart from "../components/charts/TopCompaniesChart";
import { fetchRoles, fetchStates } from "../api";

export default function Dashboard() {
  const [activeView, setActiveView] = useState("all");
  const [selectedRole, setSelectedRole] = useState("all");
  const [selectedState, setSelectedState] = useState("all");
  const [roles, setRoles] = useState([]);
  const [states, setStates] = useState([]);

  useEffect(() => {
    fetchRoles().then(res => setRoles(res.data));
    fetchStates().then(res => setStates(res.data));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      {/* Main Content */}
      <div className="max-w-8xl mx-auto px-6 py-4">
        {/* View Toggle */}
        {/* <div className="flex gap-3 mb-8">
          <button
            onClick={() => setActiveView("all")}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              activeView === "all"
                ? "bg-indigo-600 text-white shadow-lg"
                : "bg-white text-gray-300 hover:bg-gray-50 shadow"
            }`}
          >
            All Insights
          </button>
          <button
            onClick={() => setActiveView("skills")}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              activeView === "skills"
                ? "bg-indigo-600 text-white shadow-lg"
                : "bg-white text-gray-100 hover:bg-gray-50 shadow"
            }`}
          >
            Skills Focus
          </button>
          <button
            onClick={() => setActiveView("locations")}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              activeView === "locations"
                ? "bg-indigo-600 text-white shadow-lg"
                : "bg-white text-gray-100 hover:bg-gray-50 shadow"
            }`}
          >
            Locations & Companies
          </button>
        </div> */}

        {/* Content Section with Filters (Left) and Charts (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1 bg-white rounded-xl shadow-md p-6 border border-gray-200 h-fit">

            {/* Select Role */}
            <div className="flex flex-col mb-6">
              <label className="text-gray-700 font-medium mb-1">
                <h2 className="font-bold">
                  Select Role:</h2>
              </label>
              <select
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
                className="w-full px-4 text-black py-3 border-2 border-gray-300 rounded-lg focus:border-indigo-500 focus:outline-none"
              >
                <option value="all">All Roles</option>
                <option value="Data Analyst">Data Analyst</option>
                <option value="Data Scientist">Data Scientist</option>
                <option value="Data Engineer">Data Engineer</option>
                <option value="ML Engineer">ML Engineer</option>
                <option value="Business Analyst">Business Analyst</option>
                <option value="AI Engineer">AI Engineer</option>
                <option value="Other">Other Roles</option>
              </select>
            </div>

            {/* Select State */}
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-1">
                <h2 className="font-bold">
                  Select State:</h2>
              </label>
              <select
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="w-full px-4 text-black py-3 border-2 border-gray-300 rounded-lg focus:border-indigo-500 focus:outline-none"
              >
                <option value="all">All States</option>
                {states.map((state, index) => (
                  <option key={`${state.state}-${index}`} value={state.state}>
                    {state.state}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Charts Area */}
          <div className="lg:col-span-3 space-y-6">
            {(activeView === "all") && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <TopSkillsChart role={selectedRole} state={selectedState} />
                <TopCompaniesChart role={selectedRole} state={selectedState} />
                <TopCitiesChart role={selectedRole} state={selectedState} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
