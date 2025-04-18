import React, { useState, useEffect } from "react";
import useLocalStorage from "../../components/custom-Hooks/useLocalStorage";
import "./starRating.scss";

type StarRatingProps = {
    numStars?: number; // Optional prop to specify the number of stars (default is 5)
  };

const StarRating: React.FC<StarRatingProps> = ({ numStars = 5 }) => {
  const [hoveredStar, setHoveredStar] = useState<number | null>(null); // Tracks the star being hovered
  const [selectedStar, setSelectedStar] = useLocalStorage<number | null>("selectedStar", null); // Custom hook to manage local storage

  const handleMouseEnter = (index: number) => {
    setHoveredStar(index); // Set the hovered star index
  };

  const handleMouseLeave = () => {
    setHoveredStar(null); // Reset hovered star when the mouse leaves
  };

  const handleClick = (index: number) => {
    setSelectedStar(index); // Set the selected star index
  };

   // Determine if a star should be filled
   const isStarFilled = (star: number): boolean => {
    if (hoveredStar !== null) {
      return star <= hoveredStar; // Prioritize hovered stars
    }
    return selectedStar !== null && star <= selectedStar; // Otherwise, use selected stars
  };

  return (
      <div className="star-rating-container">
        <div className="star-rating">
        {[...Array(numStars)].map((_, index) => {
            const star = index + 1; // Star index starts from 1
            return (
            <span
                key={star}
                className={`star ${isStarFilled(star) ? "filled" : ""}`}
                onMouseEnter={() => handleMouseEnter(star)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick(star)}
                >
                ★
            </span>
            );
        })}
        </div>
        <h3 className="rate-me">Rate Me</h3>
    </div>
  );
};

export default StarRating;