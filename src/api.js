import axios from "axios";

const API_BASE_URL = "https://convo-api-71nw.onrender.com";

export const processUrls = async (urls) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/process-urls`, { urls });
    return response.data;
  } catch (error) {
    console.error("Error processing URLs:", error);
    // Optional: Show a user-friendly error message
    throw new Error("Failed to process URLs. Please try again.");
  }
};

export const queryDocs = async (query) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/query`, { query });
    return response.data;
  } catch (error) {
    console.error("Error querying documents:", error);
    throw new Error("Failed to fetch answer. Please try again.");
  }
};
