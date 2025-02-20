import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FlightProvider } from "./context/FlightContext"; // Ensure correct path
import Home from "./pages/home"; // Ensure correct path

function App() {
  return (
    // <FlightProvider>
    //   <Router>
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //     </Routes>
    //   </Router>
    // </FlightProvider>
    <div>Hello Skyscanner</div>
  );
}

export default App;
