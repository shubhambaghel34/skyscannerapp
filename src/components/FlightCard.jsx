import React from "react";

const FlightCard = ({ flight }) => {
  return (
    <div className="p-4 border rounded shadow-lg">
      <h3 className="text-lg font-semibold">{flight.CarrierName}</h3>
      <p>Price: ${flight.MinPrice}</p>
      <p>Departure: {flight.QuoteDateTime}</p>
    </div>
  );
};

export default FlightCard;
