import PowerBICharts from "../components/powerBICharts/PowerBICharts";

export default function PowerBI() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">

      {/* Power BI Report Embed */}
      <div className="max-w-5xl mx-auto px-3 py-4">
        <div>
          <PowerBICharts />
        </div>
      </div>
    </div>
  );
}
