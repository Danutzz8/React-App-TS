import React from 'react';
import { Link } from "@tanstack/react-router";

const ThankYou = () => {
    const handleReload = () => {
        window.location.reload(); // Reload the current page
    };
    
    return (
      <div className="thank-you">
        <h1>Thank You!</h1>
        <p>Your submission has been received.</p>
        <button 
            onClick={handleReload} 
            className="bg-blue-500 text-white px-4 py-2 rounded"
        >
            Back to Counter
        </button>
      </div>
    );
  };

export default ThankYou;