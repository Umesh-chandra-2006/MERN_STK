import React from "react";

function CountryCard({ country }) {
  return (
    <div className="bg-white rounded border border-gray-200 p-4 shadow-sm">
      <img
        src={country.flags?.png}
        alt={country.flags?.alt || `Flag of ${country.name?.common}`}
        className="w-full h-32 object-cover rounded mb-3"
      />
      <h3 className="text-lg font-bold mb-2">{country.name?.common}</h3>
      <p className="text-sm mb-1">
        <span className="font-semibold">Capital:</span>{" "}
        {country.capital?.[0] || "N/A"}
      </p>
      <p className="text-sm mb-1">
        <span className="font-semibold">Population:</span>{" "}
        {country.population?.toLocaleString() || "N/A"}
      </p>
      <p className="text-sm">
        <span className="font-semibold">Region:</span> {country.region || "N/A"}
      </p>
    </div>
  );
}

export default CountryCard;