
import React, { useState } from "react";
import { useFlightContext } from "../context/FlightContext";

const FlightSearch = () => {
  const [airline, setAirline] = useState("");
  const { searchFlights, loading } = useFlightContext();

  const handleSearch = () => {
    if (!airline) {
      alert("Please enter an airline name!");
      return;
    }
    searchFlights({ airline_name: airline });
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Search Flights</h2>
      <div className="flex space-x-3">
        <input
          type="text"
          placeholder="Enter Airline (e.g. Delta, Emirates)"
          value={airline}
          onChange={(e) => setAirline(e.target.value)}
          className="p-2 border rounded w-full"
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
