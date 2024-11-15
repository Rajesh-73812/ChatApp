import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [priceData, setPriceData] = useState(null);
  const [error, setError] = useState(null);

  const handleFetchData = async () => {
    setError(null);
    setPriceData(null);
    
    try {
      // Request data from the backend, which calls the Gemini API
      const response = await axios.post('http://localhost:8081/api/chat', { inputChat: "fetch price" });
      
      // Assuming backend sends the last price as part of the response
      setPriceData(response.data.message);  // Extracts price message from response
    } catch (error) {
      setError("Failed to fetch price data.");
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">Gemini BTC/USD Price Fetcher</h1>
      
      <button 
        onClick={handleFetchData} 
        className="rounded-md bg-blue-600 p-2 text-white"
      >
        Fetch BTC/USD Price
      </button>

      {error && <p className="text-red-500 mt-4">{error}</p>}
      
      {priceData && (
        <div className="mt-6 p-4 bg-gray-100 rounded-md">
          <h2 className="text-xl font-semibold text-gray-950">Current BTC/USD Price:</h2>
          <p className="text-lg text-gray-950">{priceData}</p>
        </div>
      )}
    </div>
  );
};

export default App;
