import React, { useState } from 'react';
import { FileSpreadsheet, Code, Database, ExternalLink, TrendingUp, Github, Users, MapPin, Award } from 'lucide-react';

export default function DSJobsDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const stats = [
    { icon: <TrendingUp className="w-5 h-5" />, label: "Total Jobs", value: "9K+" },
    { icon: <Users className="w-5 h-5" />, label: "Companies", value: "3K+" },
    { icon: <Award className="w-5 h-5" />, label: "Unique Skills", value: "229" },
    { icon: <MapPin className="w-5 h-5" />, label: "Top City", value: "Bengaluru" }
  ];

  const powerbiLink = 'https://app.powerbi.com/reportEmbed?reportId=56cb688a-f849-4303-b0ac-d5a741f6a8c4&autoAuth=true&ctid=56c1d497-700b-49cf-8f8d-3dd6b20d522f&navContentPaneEnabled=false&filterPaneEnabled=false'

  const resources = [
    {
      title: "Excel Analysis",
      description: "Pivot tables and data exploration workbook",
      icon: <FileSpreadsheet className="w-6 h-6" />,
      link: "https://1drv.ms/x/c/95ee147621726083/IQDVORJGQUrkQbswLLtx5PdaAT3gP2v_19vswh5cu6Qd10w?e=rd1cp5",
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "Jupyter Notebook",
      description: "Data cleaning and EDA with Python",
      icon: <Code className="w-6 h-6" />,
      link: "https://drive.google.com/file/d/1JkdulkPzQWrlChE3e4wyGG-jLZXQJ7Gp/view?usp=sharing",
      color: "from-orange-500 to-red-600"
    },
    {
      title: "GitHub Repository",
      description: "Complete source code, workbook and Power BI File",
      icon: <Github className="w-6 h-6" />,
      link: "https://github.com/AlokTheDataGuy/Data-Science-Jobs-Analytics",
      color: "from-gray-700 to-gray-800"
    }
  ];

  const keyInsights = [
    "Python is the #1 most demanded skill",
    "Python, SQL, ML, and AWS are core technical requirements",
    "Bengaluru, Hyderabad, and Pune dominate the market",
    "Mid-level experience (3-7 years) most commonly required",
    "Masters degree preferred for senior roles"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="bg-black/30 backdrop-blur-md border-b border-purple-500/30">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white">Data Science Jobs Market Analysis</h1>
              <p className="text-purple-300 text-sm mt-1">India • 2025</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setActiveTab('dashboard')}
                className={`px-4 py-2 rounded-lg transition-all ${
                  activeTab === 'dashboard'
                    ? 'bg-purple-600 text-white'
                    : 'bg-white/10 text-purple-200 hover:bg-white/20'
                }`}
              >
                Dashboard
              </button>
              <button
                onClick={() => setActiveTab('resources')}
                className={`px-4 py-2 rounded-lg transition-all ${
                  activeTab === 'resources'
                    ? 'bg-purple-600 text-white'
                    : 'bg-white/10 text-purple-200 hover:bg-white/20'
                }`}
              >
                Resources
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Stats Bar */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-purple-500/30">
              <div className="flex items-center gap-3">
                <div className="bg-purple-600/30 p-3 rounded-lg text-purple-300">
                  {stat.icon}
                </div>
                <div>
                  <p className="text-purple-300 text-sm">{stat.label}</p>
                  <p className="text-white text-xl font-bold">{stat.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 pb-12">
        {activeTab === 'dashboard' && (
          <div className="space-y-6">
            {/* Dashboard Embed */}
            <div className="bg-slate-800/40 backdrop-blur-md rounded-2xl p-6 border border-teal-500/30">
              <div className="mb-4">
                <h2 className="text-2xl font-bold text-white mb-2">Power BI Analytics Dashboard</h2>
                <p className="text-slate-300 text-sm">
                  Explore job market trends, top hiring companies, in-demand skills, and location insights with interactive filters
                </p>
              </div>
              <div>
                <div className="bg-white/10 backdrop-blur-md  rounded-lg shadow-inner border-2 border-gray-600">
                  <div className="w-full">
                  <iframe
                  title="Data Science Jobs Analysis"
                  src={powerbiLink}
                  frameBorder="0"
                  allowFullScreen={true}
                  className="w-full"
                  style={{
                    height: 'calc(110vh - 100px)',
                    maxHeight: '663px',
                    minHeight: '500px'
                  }}
                />
                </div>
                </div>
              </div>
            </div>

            {/* Key Insights */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-purple-500/30">
              <h3 className="text-lg font-bold text-white mb-4">Key Insights</h3>
              <div className="space-y-3">
                {keyInsights.map((insight, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="bg-purple-600 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">{idx + 1}</span>
                    </div>
                    <p className="text-purple-100">{insight}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'resources' && (
          <div className="space-y-6">
            {/* Resource Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {resources.map((resource, idx) => (
                <a
                  key={idx}
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-purple-500/30 hover:border-purple-400/60 transition-all hover:scale-105"
                >
                  <div className={`bg-gradient-to-br ${resource.color} w-12 h-12 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                    {resource.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{resource.title}</h3>
                  <p className="text-purple-300 text-sm mb-4">{resource.description}</p>
                  <div className="flex items-center text-purple-400 text-sm font-medium">
                    <span>Open Resource</span>
                    <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
              ))}
            </div>

            {/* Methodology */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-purple-500/30">
              <h3 className="text-lg font-bold text-white mb-4">Methodology</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="text-purple-300 font-semibold mb-2">1. Data Collection</h4>
                  <p className="text-purple-200 text-sm">Custom Python scraper using JobSpy Docker API to extract 9K+ job postings</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="text-purple-300 font-semibold mb-2">2. Data Cleaning</h4>
                  <p className="text-purple-200 text-sm">Jupyter notebook for EDA, deduplication, and feature engineering</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="text-purple-300 font-semibold mb-2">3. Excel Analysis</h4>
                  <p className="text-purple-200 text-sm">Pivot tables for validation and dimension table creation</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="text-purple-300 font-semibold mb-2">4. Power BI Dashboard</h4>
                  <p className="text-purple-200 text-sm">Star schema data modeling with interactive visualizations</p>
                </div>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-purple-500/30">
              <h3 className="text-lg font-bold text-white mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {['Python', 'Pandas', 'Jupyter', 'Excel', 'Power Query', 'Power BI', 'DAX', 'JobSpy API', 'Docker'].map((tech) => (
                  <span key={tech} className="bg-purple-600/30 text-purple-200 px-4 py-2 rounded-full text-sm border border-purple-500/30">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}