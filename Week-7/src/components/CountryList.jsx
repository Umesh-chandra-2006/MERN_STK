import React from "react";
import CountryCard from "./CountryCard";

function CountryList({ countries }) {
  if (countries.length === 0) {
    return (
      <div className="bg-gray-100 p-6 text-center rounded">
        <p className="text-gray-600">No countries found.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {countries.map((country) => (
        <CountryCard key={country.name?.common} country={country} />
      ))}
    </div>
  );
}

export default CountryList;