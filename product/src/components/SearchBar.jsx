import React, { useEffect, useRef } from "react";

function SearchBar({ onSearch, query }) {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="mb-6">
      <input
        ref={inputRef}
        type="text"
        value={query}
        onChange={(event) => onSearch(event.target.value)}
        placeholder="Search country by name..."
        className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
      />
    </div>
  );
}

export default SearchBar;