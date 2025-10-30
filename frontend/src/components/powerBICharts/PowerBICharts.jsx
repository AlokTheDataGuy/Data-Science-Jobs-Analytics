import { useState } from "react";
import { Maximize2, ChartColumnIncreasing } from "lucide-react";
import Modal from "../Modal";

export default function PowerBICharts() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const embedUrl =
    "https://app.powerbi.com/reportEmbed?reportId=6798554a-2e19-4045-8f91-032c99c88b93&autoAuth=true&ctid=56c1d497-700b-49cf-8f8d-3dd6b20d522f";

  return (
    <>
      <div className="bg-white p-5 rounded-2xl shadow-lg hover:shadow-xl transition-shadow w-full max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          
           <div className="flex items-center gap-3 mb-1">
        <div className="p-3 bg-pink-100 rounded-lg">
          <ChartColumnIncreasing className="text-pink-600" size={24} />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Power BI Analytics</h2>
          <p className="text-gray-600 text-sm">Job Count Choropleth Map</p>
        </div>
      </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            <Maximize2 size={18} />
          </button>
        </div>

        {/* Power BI Embed (Fixed Width + Responsive Height) */}
        <div className="relative w-full overflow-hidden rounded-lg shadow-md aspect-[16/9]">
          <iframe
            title="Power BI Analytics"
            src={embedUrl}
            frameBorder="0"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
          />
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Power BI Analytics - Job Count Choropleth Map"
        embedUrl={embedUrl}
      />
    </>
  );
}
