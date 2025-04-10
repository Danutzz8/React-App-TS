import { useState, useEffect } from "react";

function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;

//use case

// const SearchInput: React.FC = () => {
//     const [searchTerm, setSearchTerm] = useState("");
//     const debouncedSearchTerm = useDebounce(searchTerm, 500);
  
//     useEffect(() => {
//       if (debouncedSearchTerm) {
//         console.log("Search API call with:", debouncedSearchTerm);
//       }
//     }, [debouncedSearchTerm]);
  
//     return (
//       <input
//         type="text"
//         placeholder="Search..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//     );
//   };