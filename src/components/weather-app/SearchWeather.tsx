import React from "react";

interface SearchProps {
  search: string;
  setSearch: (value: string) => void;
  handleSearch: () => void;
}

const SearchWeather: React.FC<SearchProps> = ({ search, setSearch, handleSearch }) => {
  return (
    <div className="search-engine">
      <input
        type="text"
        placeholder="Enter City Name"
        name="search"
        value={search}
        onChange={(event) => setSearch(event.target.value)} // Update the search value
      />
      <button onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchWeather;