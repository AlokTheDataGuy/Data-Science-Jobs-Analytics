import { useEffect, useState } from "react";
import { fetchFilteredSkills } from "../../api";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Cell,
} from "recharts";
import { Code, Maximize2 } from "lucide-react";
import Modal from "../Modal";

const COLORS = [
  "#6366f1",
  "#8b5cf6",
  "#ec4899",
  "#f59e0b",
  "#10b981",
  "#3b82f6",
  "#ef4444",
  "#14b8a6",
];

export default function TopSkillsChart({ role = "all", state = "all" }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchFilteredSkills(role === "all" ? null : role, state === "all" ? null : state)
      .then((res) => {
        const formatted = res.data
          .filter((item) => item.skill.toLowerCase() !== "total")
          .map((item) => ({
            skill: item.skill.replace(/['"[\]]/g, "").trim(), // 🧹 Clean skill names
            count: item.count,
          }));
        setData(formatted);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [role, state]);

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white px-4 py-3 rounded-lg shadow-xl border border-indigo-200">
          <p className="font-semibold text-gray-800">{payload[0].payload.skill}</p>
          <p className="text-indigo-600 font-bold text-lg">{payload[0].value} jobs</p>
        </div>
      );
    }
    return null;
  };

  if (loading) {
    return (
      <div className="bg-white p-8 rounded-2xl shadow-lg animate-pulse">
        <div className="h-8 bg-gray-200 rounded w-1/3 mb-6"></div>
        <div className="h-96 bg-gray-100 rounded"></div>
      </div>
    );
  }

  const ChartBody = () => (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        data={data}
        layout="vertical"
        margin={{ left: 20, right: 30, top: 10, bottom: 10 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
        <XAxis type="number" stroke="#64748b" />
        <YAxis
          type="category"
          dataKey="skill"
          width={140}
          stroke="#64748b"
          tick={{ fontSize: 12 }}
        />
        <Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(99, 102, 241, 0.1)" }} />
        <Bar dataKey="count" radius={[0, 8, 8, 0]}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );

  return (
    <>
      <div className="bg-white p-5 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3 mb-1">
            <div className="p-3 bg-indigo-100 rounded-lg">
              <Code className="text-indigo-600" size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Top In-Demand Skills</h2>
              <p className="text-gray-600 text-sm">
                {role !== "all" || state !== "all"
                  ? `Filtered: ${role !== "all" ? role : "All Roles"} • ${state !== "all" ? state : "All States"
                  }`
                  : "Most requested technical skills"}
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 px-3 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            <Maximize2 size={18} />
          </button>
        </div>

        {/* Chart */}
        <div className="w-full overflow-hidden rounded-lg">
          <ChartBody />
        </div>
      </div>

      {/* Fullscreen Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Top In-Demand Skills"
      >
        <ChartBody />
      </Modal>

    </>
  );
}
