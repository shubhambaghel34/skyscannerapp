// src/services/flightApi.js
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const API_URL = "http://api.aviationstack.com/v1/flights";
const API_KEY = process.env.AVIATIONSTACK_API_KEY;

export const getFlights = async (params = {}) => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        access_key: API_KEY,
        limit: 10, // Fetch 10 flights by default
        ...params,
      },
    });

    return response.data.data; // Returns only flight data
  } catch (error) {
    console.error("Error fetching flights:", error.message);
    throw error;
  }
};
