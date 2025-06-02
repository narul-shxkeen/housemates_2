// components/LocationSearchInput.jsx
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import { useState } from "react";

export default function LocationSearchInput({ onSelectLocation }) {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({ debounce: 300 });

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();

    try {
      const results = await getGeocode({ address });
      const { lat, lng } = await getLatLng(results[0]);

      onSelectLocation({ address, lat, lng });
    } catch (error) {
      console.error("Geocoding error:", error);
    }
  };

  return (
    <div className="relative">
      <input
        value={value}
        onChange={handleInput}
        disabled={!ready}
        placeholder="Enter your location"
        className="border border-gray-300 p-2 rounded w-full"
      />
      {status === "OK" && (
        <ul className="absolute bg-white border w-full z-10 max-h-60 overflow-y-auto">
          {data.map(({ description }, index) => (
            <li
              key={index}
              onClick={() => handleSelect(description)}
              className="p-2 hover:bg-gray-100 cursor-pointer"
            >
              {description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
