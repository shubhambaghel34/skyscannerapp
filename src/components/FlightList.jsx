// src/components/FlightList.jsx
import React from "react";
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
            <div key={index} className="p-4 border rounded shadow-lg">
              <h3 className="text-lg font-semibold">{flight.airline.name}</h3>
              <p>Flight Number: {flight.flight.number}</p>
              <p>Departure: {flight.departure.airport} ({flight.departure.iata})</p>
              <p>Arrival: {flight.arrival.airport} ({flight.arrival.iata})</p>
              <p>Status: {flight.flight_status}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FlightList;
