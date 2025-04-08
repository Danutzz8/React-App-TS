import React from "react";

interface SuggestionsProps {
  data: string[]; // Array of strings for the suggestions
  handleClick: (event: React.MouseEvent<HTMLLIElement>) => void; // Function to handle clicks on list items
}

const Suggestions: React.FC<SuggestionsProps> = ({ data, handleClick }) => {
  return (
    <ul className="mt-4 flex flex-col items-center justify-center w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
      {data && data.length > 0
        ? data.map((item, index) => (
            <li onClick={handleClick} key={index}>
              {item}
            </li>
          ))
        : null}
    </ul>
  );
};

export default Suggestions;