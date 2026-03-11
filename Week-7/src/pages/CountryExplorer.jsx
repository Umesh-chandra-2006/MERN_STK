import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import SearchBar from "../components/SearchBar";
import CountryList from "../components/CountryList";

function CountryExplorer() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");
  const [view, setView] = useState("grid");

  const debounceRef = useRef(null);

  useEffect(() => {
    fetchCountries("all");
  }, []);

  const fetchCountries = async (searchTerm) => {
    setLoading(true);
    setError("");

    let url =
      "https://restcountries.com/v3.1/all?fields=name,capital,population,region,currencies,flags";

    if (searchTerm && searchTerm !== "all") {
      url = `https://restcountries.com/v3.1/name/${searchTerm}`;
    }

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Failed to fetch countries");
      }

      const data = await response.json();
      setCountries(data);
    } catch (fetchError) {
      setError(fetchError.message || "Something went wrong");
      setCountries([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (value) => {
    setQuery(value);

    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(() => {
      const trimmedValue = value.trim();
      fetchCountries(trimmedValue ? trimmedValue : "all");
    }, 500);
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <h1 className="text-3xl font-bold">Country Explorer</h1>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setView("grid")}
            className={`px-3 py-2 rounded ${
              view === "grid" ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
          >
            Grid
          </button>
          <button
            onClick={() => setView("table")}
            className={`px-3 py-2 rounded ${
              view === "table" ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
          >
            Table
          </button>
          <Link to="/" className="bg-gray-800 text-white px-4 py-2 rounded">
            Back Home
          </Link>
        </div>
      </div>

      <SearchBar onSearch={handleSearch} query={query} />

      {loading && (
        <div className="bg-blue-50 border border-blue-200 rounded p-4 mb-4">
          <p className="text-blue-700">Loading countries...</p>
        </div>
      )}

      {error && (
        <div className="bg-red-50 border border-red-200 rounded p-4 mb-4">
          <p className="text-red-700">{error}</p>
        </div>
      )}

      {!loading && !error && view === "grid" && <CountryList countries={countries} />}

      {!loading && !error && view === "table" && (
        <div className="overflow-x-auto bg-white border border-gray-200 rounded">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left px-4 py-2">Flag</th>
                <th className="text-left px-4 py-2">Name</th>
                <th className="text-left px-4 py-2">Capital</th>
                <th className="text-left px-4 py-2">Population</th>
                <th className="text-left px-4 py-2">Region</th>
              </tr>
            </thead>
            <tbody>
              {countries.map((country) => (
                <tr key={country.name?.common} className="border-t border-gray-100">
                  <td className="px-4 py-2">
                    <img
                      src={country.flags?.png}
                      alt={country.flags?.alt || `Flag of ${country.name?.common}`}
                      className="w-10 h-7 object-cover"
                    />
                  </td>
                  <td className="px-4 py-2">{country.name?.common}</td>
                  <td className="px-4 py-2">{country.capital?.[0] || "N/A"}</td>
                  <td className="px-4 py-2">
                    {country.population?.toLocaleString() || "N/A"}
                  </td>
                  <td className="px-4 py-2">{country.region || "N/A"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default CountryExplorer;