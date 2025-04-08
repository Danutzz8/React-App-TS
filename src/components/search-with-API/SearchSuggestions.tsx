import React, { useEffect, useState } from "react";
import Suggestions from "./Suggestions";

export default function SearchSuggestions() {
  const [loading, setLoading] = useState<boolean>(false);
  const [users, setUsers] = useState<string[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [searchParam, setSearchParam] = useState<string>("");
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [filteredUsers, setFilteredUsers] = useState<string[]>([]);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const query = event.target.value.toLowerCase();
    setSearchParam(query);
    if (query.length > 1) {
      const filteredData =
        users && users.length
          ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : [];
      setFilteredUsers(filteredData);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  }

  function handleClick(event: React.MouseEvent<HTMLLIElement>) {
    setShowDropdown(false);
    setSearchParam(event.currentTarget.innerText);
    setFilteredUsers([]);
  }

  async function fetchListOfUsers() {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();

      if (data && data.users && data.users.length) {
        setUsers(data.users.map((userItem: { firstName: string }) => userItem.firstName));
        setLoading(false);
        setError(null);
      }
    } catch (error) {
      setLoading(false);
      console.error(error);
      setError(error as Error);
    }
  }

  useEffect(() => {
    fetchListOfUsers();
  }, []);

  return (
    <div className="search-autocomplete-container flex flex-col items-center justify-center mt-4">
      {loading ? (
        <h1>Loading Data! Please wait...</h1>
      ) : (
        <input
          className="p-2 border border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100"
          value={searchParam}
          name="search-users"
          placeholder="Search Users here..."
          onChange={handleChange}
        />
      )}

      {showDropdown && <Suggestions handleClick={handleClick} data={filteredUsers} />}
    </div>
  );
}