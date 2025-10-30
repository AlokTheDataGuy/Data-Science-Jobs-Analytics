import { useEffect, useState } from "react";
import { fetchFilteredCities } from "../../api";
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
import { MapPin, Maximize2 } from "lucide-react";
import Modal from "../Modal";

const COLORS = [
  "#6366f1",
  "#8b5cf6",
  "#ec4899",
  "#f59e0b",
  "#10b981",
  "#3b82f6",
];

export default function TopCitiesChart({ role = "all", state = "all" }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchFilteredCities(
      role === "all" ? null : role,
      state === "all" ? null : state
    )
      .then((res) => {
        const formatted = res.data.map((item) => ({
          city: item.city,
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
        <div className="bg-white px-4 py-3 rounded-lg shadow-xl border border-purple-200">
          <p className="font-semibold text-gray-800">
            {payload[0].payload.city}
          </p>
          <p className="text-purple-600 font-bold text-lg">
            {payload[0].value} jobs
          </p>
        </div>
      );
    }
    return null;
  };

  if (loading) {
    return (
      <div className="bg-white p-8 rounded-2xl shadow-lg animate-pulse">
        <div className="h-8 bg-gray-200 rounded w-1/2 mb-6"></div>
        <div className="h-80 bg-gray-100 rounded"></div>
      </div>
    );
  }

  const ChartBody = (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data} margin={{ left: 10, right: 20, top: 10, bottom: 30 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
        <XAxis
          dataKey="city"
          angle={-45}
          textAnchor="end"
          height={80}
          stroke="#64748b"
        />
        <YAxis stroke="#64748b" />
        <Tooltip
          content={<CustomTooltip />}
          cursor={{ fill: "rgba(139, 92, 246, 0.1)" }}
        />
        <Bar dataKey="count" radius={[8, 8, 0, 0]}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );

  return (
    <>
      <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-purple-100 rounded-lg">
              <MapPin className="text-purple-600" size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Top Cities</h2>
              <p className="text-gray-600 text-sm">
                {role !== "all" || state !== "all"
                  ? `Filtered: ${role !== "all" ? role : "All Roles"} • ${
                      state !== "all" ? state : "All States"
                    }`
                  : "Job distribution by location"}
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
        {ChartBody}
      </div>

      {/* Modal for full-screen view */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Top Cities - Job Distribution"
      >
        {ChartBody}
      </Modal>
    </>
  );
}
