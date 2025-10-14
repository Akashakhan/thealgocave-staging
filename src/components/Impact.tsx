'use client';

export default function Impact() {
  const metrics = [
    { value: "10B SEK", label: "Savings delivered across projects" },
    { value: "12 ms", label: "Average latency reduction" },
    { value: "250 mm", label: "Queries served monthly" }
  ];

  const clients = [
    "Quicken", "byte", "hint", "Capital One", 
    "The Home Depot", "Lowe's", "Merriam-Webster", "Roblox"
  ];

  return (
    <section className="bg-gray-800 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight max-w-4xl mx-auto">
            We go beyond data and AI consulting turning strategy into execution that delivers measurable impact
          </h2>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-blue-400 mb-2">
                {metric.value}
              </div>
              <div className="text-lg text-gray-300">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Client Logos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {clients.map((client, index) => (
            <div key={index} className="flex items-center justify-center p-6 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
              <span className="text-white font-semibold text-lg">{client}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
