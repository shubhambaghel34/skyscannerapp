
import React from "react";
import FlightCard from "./FlightCard";
import { useFlightContext } from "../context/FlightContext";

const FlightList = () => {
  const { flights, error } = useFlightContext();

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold">Available Flights</h2>
      {flights.length === 0 ? (
        <p>No flights found. Try adjusting your search.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {flights.map((flight, index) => (
            <FlightCard key={index} flight={flight} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FlightList;
