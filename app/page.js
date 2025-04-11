"use client";

import { useState } from "react";

export default function Home() {
  const [endpoint, setEndpoint] = useState("/api/province");
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const baseUrl = "https://nepaldata.subarnaman.com.np";
  // Define an array of endpoints with descriptions
  const endpoints = [
    {
      label: "/api/province",
      value: "/api/province",
      description: "Fetches a list of all provinces in Nepal."
    },
    {
      label: "/api/province/1",
      value: "/api/province/1",
      description: "Fetches data for province 1 in Nepal."
    },
    {
      label: "/api/district",
      value: "/api/district",
      description: "Fetches a list of all districts in Nepal."
    },
    {
      label: "/api/district/106",
      value: "/api/district/106",
      description: "Fetches data for district 106 in Nepal."
    },
    {
      label: "/api/district/106/locallevel",
      value: "/api/district/106/locallevel",
      description: "Fetches local levels within district 106."
    },

  ];

  const handleFetch = async () => {
    setLoading(true);
    setResponse(null);
    try {
      const res = await fetch(baseUrl+endpoint);
      const data = await res.json();
      setResponse(data);
    } catch (error) {
      setResponse({ error: "Failed to fetch data. Check the endpoint." });
    } finally {
      setLoading(false);
    }
  };

  const handleEndpointClick = (endpoint) => {
    setEndpoint(endpoint); // Update the endpoint value when clicked
  };

  return (
    <>
      {/* Overview & Tool */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Endpoints Section */}
        <section className="bg-white border-l-4 border-[#DC143C] p-4 rounded shadow-sm">
          <h2 className="text-lg font-semibold text-[#DC143C] mb-3">📡 API Endpoints</h2>
        
            <ul className="space-y-2">
          {endpoints.map((endpoint) => (
            <li
              key={endpoint.value}
              onClick={() => handleEndpointClick(endpoint.value)}
              className="cursor-pointer hover:bg-[#f8d7da] hover:text-[#DC143C] transition px-4 py-2 rounded shadow-sm text-sm"
            >
              <strong>{endpoint.label}</strong>
              <p className="text-xs text-gray-600">{endpoint.description}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Tool Section */}
      <div className="bg-white border-l-4 border-[#003893] p-4 rounded shadow-sm">
        <h2 className="text-lg font-semibold text-[#003893] mb-3">🛠️ Try the API</h2>
          <div className="bg-gray-100 rounded px-4 py-2 mb-4">
            <p><strong>Base URL: <pre>{baseUrl}</pre></strong></p>
          </div>
        <input
          type="text"
          value={endpoint}
          onChange={(e) => setEndpoint(e.target.value)}
          className="w-full border border-gray-300 rounded px-4 py-2 mb-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#003893]"
          placeholder={`/api/province`}
        />
        <button
          onClick={handleFetch}
          className="bg-[#DC143C] text-white px-6 py-2 rounded text-sm hover:bg-[#b01030] transition w-full"
        >
          {loading ? "Loading..." : "Fetch Data"}
        </button>

        <div className="mt-4">
          <h3 className="text-sm font-medium text-[#003893] mb-2">📦 Response:</h3>
          <pre className="bg-gray-100 p-3 rounded text-xs overflow-x-auto max-h-48">
            {response ? JSON.stringify(response, null, 2) : "No data yet..."}
          </pre>
        </div>
      </div>
    </section >
    </>
  );
}
