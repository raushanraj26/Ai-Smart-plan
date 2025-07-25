import React, { useState, useEffect } from 'react';

// ✅ Correct way to load the token
const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN;
//console.log('MAPBOX_TOKEN:', MAPBOX_TOKEN);


const Autocomplete = ({ onSelect }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);


    

  useEffect(() => {
    const fetchLocations = async () => {
      
      if (query.length < 2) return;

      if (query.trim() === '') {
    setResults([]); // hide suggestions when input is cleared
    return;
  }

      try {
        const res = await fetch(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
            query
          )}.json?access_token=${MAPBOX_TOKEN}`
        );

        if (!res.ok) throw new Error('Fetch failed: ' + res.status);
        const data = await res.json();
        setResults(data.features || []);
      } catch (err) {
        console.error('Mapbox fetch error:', err);
      }
    };

    const delay = setTimeout(fetchLocations, 300);
    return () => clearTimeout(delay);
  }, [query]);

  return (
    <div className="relative">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
        placeholder="Enter destination"
      />
      {results.length > 0 && (
        <ul className="absolute bg-white shadow border w-full mt-1 z-10 max-h-60 overflow-y-auto rounded">
          {results.map((place) => (
            <li
              key={place.id}
              onClick={() => {
                setQuery(place.place_name);
                onSelect(place);
                setResults([]);
              }}
              className="p-2 hover:bg-gray-100 cursor-pointer"
            >
              {place.place_name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Autocomplete;
