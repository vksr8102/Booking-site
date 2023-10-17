import React, { useState } from 'react';

const CityCountrySearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://your-api-endpoint.com/search?q=${searchQuery}`);
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="p-4">
      <input
        className="border rounded px-2 py-1"
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search for a city or country"
      />
      <button
        className="bg-blue-500 text-white px-4 py-1 ml-2 rounded"
        onClick={handleSearch}
      >
        Search
      </button>

      <div className="mt-4">
        {searchResults.map((result) => (
          <div key={result.id} className="mb-2 border p-2 rounded">
            <p>City: {result.city}</p>
            <p>Country: {result.country}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CityCountrySearch;
