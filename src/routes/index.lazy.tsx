import React from "react";
import { createLazyFileRoute, Link } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div >
      <div className="index-brand">
        <h1 className="projects-title">React Projects</h1>
        <p>Ultimate React/TypeScript Projects</p>
      </div>
      <ul className="index px-4 lg:px-0">
        <li>
          <Link to="/nametag">Nametag & optional Props</Link>
        </li>
        <li>
          <Link to="/childrenWithStyling">Children with Styling</Link>
        </li>
        <li>
          <Link to="/quizz">Quizz</Link>
        </li>
        <li>
          <Link to="/caracterCard">Character Card</Link>
        </li>
        <li>
          <Link to="/counter">Counter</Link>
        </li>
        <li>
          <Link to="/dogFacts">Dog Facts</Link>
        </li>
        <li>
          <Link to="/pizzaCalculator">Pizza Calculator</Link>
        </li>
        <li>
          <Link to="/rgbColor">RGB Color</Link>
        </li>
        <li>
          <Link to="/buttons">Buttons</Link>
        </li>
        <li>
          <Link to="/textAs">Text As</Link>
        </li>
        <li>
          <Link to="/accordionText">Accordion text</Link>
        </li>
        <li>
          <Link to="/starRating">Star Rating</Link>
        </li>
        <li>
          <Link to="/imageSlider">Image Slider</Link>
        </li>
        <li>
          <Link to="/loadMore">Load More</Link>
        </li>
        <li>
          <Link to="/treeViewMenu">Tree View Menu</Link>
        </li>
        <li>
          <Link to="/qrCodeGenerator">QR Code Generator</Link>
        </li>
        <li>
          <Link to="/scrollBarIndicator">Scroll Bar Indicator</Link>
        </li>
        <li>
          <Link to="/truncateText">Truncate text</Link>
        </li>
        <li>
          <Link to="/customTabs">Custom Tabs</Link>
        </li>
        <li>
          <Link to="/customModal">Custom Modal</Link>
        </li>
        <li>
          <Link to="/gitHubProfile">Git-hub Profile</Link>
        </li>
        <li>
          <Link to="/searchSuggestions">Search Suggestions</Link>
        </li>
        <li>
          <Link to="/ticTactToe">X & O</Link>
        </li>
        <li>
          <Link to="/customHooks">Custom Hooks</Link>
        </li>
        <li>
          <Link to="/weatherApp">Weather App</Link>
        </li>
        <li>
          <Link to="/testFile">NExt</Link>
        </li>
      </ul>
    </div>
  );
}
