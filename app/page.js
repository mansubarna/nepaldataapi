"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [endpoint, setEndpoint] = useState("/api/province");
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

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
      const res = await fetch(endpoint);
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
    <main className="min-h-screen bg-gradient-to-b from-[#f7f7f7] to-[#e2e8f0] text-gray-800 p-4">
      <div className="max-w-screen-lg mx-auto"> {/* Custom container with max width */}
        {/* Header */}
        <header className="mb-6 text-center py-6 pb-4">
          <h1 className="text-4xl font-bold  mb-2">
           <span className="text-[#DC143C]">Nepali</span> Administrative Data <span className="text-[#DC143C]">API</span>
          </h1>
          <p className="text-base text-gray-700 max-w-2xl mx-auto">
            Explore Nepal’s province, district, and local level data via API.
            Start exploring and contribute to this open-source project!
          </p>
          <p className="text-xs mt-1 text-[#003893]">
            Source:{" "}
            <a
              href="https://nationaldata.gov.np/"
              target="_blank"
              rel="noreferrer"
              className="underline hover:text-[#DC143C]"
            >
              nationaldata.gov.np
            </a>
          </p>
        </header>

        {/* Overview */}
        <div className="bg-[#F0F8FF] border-l-4 border-[#003893] p-4 rounded shadow-sm mb-6">
          <h2 className="text-lg font-semibold text-[#003893] mb-2">📘 Overview</h2>
          <p className="text-sm text-gray-700">
            This project lets you fetch real-time data for Nepal's administrative levels, such as provinces, districts, local levels, and wards.
          </p>
        </div>

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
            <input
              type="text"
              value={endpoint}
              onChange={(e) => setEndpoint(e.target.value)}
              className="w-full border border-gray-300 rounded px-4 py-2 mb-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#003893]"
              placeholder="/api/province"
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
        </section>

        {/* GitHub Section */}
        <section
          className="text-center 
        mt-6 p-6 gap-4 bg-white rounded shadow-lg
         flex flex-col md:flex-row items-center justify-between">
          {/* Text Column */}
          <div className="text-left flex-1">
            <h2 className="text-lg font-semibold mb-4 text-[#333]">🚀 Contribute to the Project</h2>
            <p className=" text-sm text-gray-600">
              This project is open-source, and we'd love for you to contribute!
              Whether it's improving the API, fixing bugs, or adding new features,
              your contributions make a difference.
            </p>
          </div>
          {/* GitHub Button Column */}
          <div className="text-center md:text-right">
            <a
              href="https://github.com/your-username/your-repo" // Replace with your actual GitHub link
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center bg-[#333]
               text-white px-2 py-2 rounded
               text-xs font-semibold hover:bg-[#1a1a1a] transition"
            >
              {/* GitHub Logo */}
              <svg height="24"
                aria-hidden="true"
                viewBox="0 0 24 24"
                version="1.1"
                width="24"
                data-view-component="true"
                className="mr-2">
                <path fill="white" d="M12 1C5.9225 1 1 5.9225 1 12C1 16.8675 4.14875 20.9787 8.52125 22.4362C9.07125 22.5325 9.2775 22.2025 9.2775 21.9137C9.2775 21.6525 9.26375 20.7862 9.26375 19.865C6.5 20.3737 5.785 19.1912 5.565 18.5725C5.44125 18.2562 4.905 17.28 4.4375 17.0187C4.0525 16.8125 3.5025 16.3037 4.42375 16.29C5.29 16.2762 5.90875 17.0875 6.115 17.4175C7.105 19.0812 8.68625 18.6137 9.31875 18.325C9.415 17.61 9.70375 17.1287 10.02 16.8537C7.5725 16.5787 5.015 15.63 5.015 11.4225C5.015 10.2262 5.44125 9.23625 6.1425 8.46625C6.0325 8.19125 5.6475 7.06375 6.2525 5.55125C6.2525 5.55125 7.17375 5.2625 9.2775 6.67875C10.1575 6.43125 11.0925 6.3075 12.0275 6.3075C12.9625 6.3075 13.8975 6.43125 14.7775 6.67875C16.8813 5.24875 17.8025 5.55125 17.8025 5.55125C18.4075 7.06375 18.0225 8.19125 17.9125 8.46625C18.6138 9.23625 19.04 10.2125 19.04 11.4225C19.04 15.6437 16.4688 16.5787 14.0213 16.8537C14.42 17.1975 14.7638 17.8575 14.7638 18.8887C14.7638 20.36 14.75 21.5425 14.75 21.9137C14.75 22.2025 14.9563 22.5462 15.5063 22.4362C19.8513 20.9787 23 16.8537 23 12C23 5.9225 18.0775 1 12 1Z"></path>
              </svg>
              Check It Out on GitHub
            </a>
          </div>
        </section>


        {/* Footer */}
        <footer className="text-center mt-6 text-xs text-gray-500">
          Made with ❤️ by <Link href="http://www.subarnaman.com.np">Subarna Man Maharjan</Link>
        </footer>
      </div>
    </main>
  );
}
