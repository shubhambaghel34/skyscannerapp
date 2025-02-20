// src/pages/Home.jsx

import React from "react";
import FlightSearch from "../components/FlightSearch";
import FlightList from "../components/FlightList";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <FlightSearch />
      <FlightList />
    </div>
  );
};

export default Home;
