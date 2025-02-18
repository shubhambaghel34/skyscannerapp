import React, { useState } from "react";
import { useFlightContext } from "../context/FlightContext";

const FlightSearch = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const { searchFlights, loading } = useFlightContext();

  const handleSearch = () => {
    if (!from || !to || !date) {
      alert("Please fill in all fields!");
      return;
    }
    searchFlights({ origin: from, destination: to, date });
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Search Flights</h2>
      <div className="flex space-x-3">
        <input
          type="text"
          placeholder="From (e.g. JFK)"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          className="p-2 border rounded w-1/3"
        />
        <input
          type="text"
          placeholder="To (e.g. LAX)"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          className="p-2 border rounded w-1/3"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="p-2 border rounded w-1/3"
        />
      </div>
      <button
        onClick={handleSearch}
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        disabled={loading}
      >
        {loading ? "Searching..." : "Search"}
      </button>
    </div>
  );
};

export default FlightSearch;
