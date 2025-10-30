import { X } from "lucide-react";

export default function Modal({
  isOpen,
  onClose,
  title,
  embedUrl,
  width = "100%",
  height = "100%",
  children,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div
        className="relative bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        style={{ width: "90%", height: "90%" }}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200 bg-gray-50">
          <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-900 transition"
          >
            <X size={22} />
          </button>
        </div>

        {/* Content area */}
        <div className="flex-grow bg-white">
          {children ? (
            // Render chart or any React component
            <div className="w-full h-full">{children}</div>
          ) : embedUrl ? (
            // Render Power BI iframe if embedUrl is provided
            <iframe
              title={title}
              src={embedUrl}
              width={width}
              height={height}
              frameBorder="0"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          ) : (
            // Fallback if nothing is passed
            <div className="flex items-center justify-center h-full text-gray-500">
              No content available
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
