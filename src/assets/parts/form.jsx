// components/FormWithLocation.jsx
import { useState } from "react";
import LocationSearchInput from "./formLocationSearch";
// import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client
// const supabase = createClient(
//   import.meta.env.VITE_SUPABASE_URL,
//   import.meta.env.VITE_SUPABASE_ANON_KEY
// );

export default function FormWithLocation() {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!location) return alert("Please select a location");

    setLoading(true);

    // const { error } = await supabase.from("locations").insert([
    //   {
    //     address: location.address,
    //     latitude: location.lat,
    //     longitude: location.lng,
    //   },
    // ]);

    setLoading(false);

    if (error) {
      console.error("Error inserting into Supabase:", error);
      alert("Failed to save location");
    } else {
      alert("Location saved!");
      setLocation(null);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4 max-w-md mx-auto">
      <LocationSearchInput onSelectLocation={setLocation} />
      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 text-white p-2 rounded w-full"
      >
        {loading ? "Saving..." : "Submit"}
      </button>
    </form>
  );
}
