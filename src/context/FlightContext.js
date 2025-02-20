// src/context/FlightContext.js
import React, { createContext, useState, useContext } from "react";
import { getFlights } from "../services/flightApi";

const FlightContext = createContext();

export const useFlightContext = () => useContext(FlightContext);

export const FlightProvider = ({ children }) => {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchFlights = async (params) => {
    setLoading(true);
    try {
      const data = await getFlights(params);
      setFlights(data.data || []);
    } catch (err) {
      setError("Failed to fetch flights");
    } finally {
      setLoading(false);
    }
  };

  return (
    <FlightContext.Provider value={{ flights, searchFlights, loading, error }}>
      {children}
    </FlightContext.Provider>
  );
};
