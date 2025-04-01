import React from "react";
import { createLazyFileRoute } from "@tanstack/react-router";
import ColorSwatch from "../components/RGB-color/ColorSwatch";
import { ColorAdjustment } from "../components/RGB-color/ColorAdjustment";
import { ColorInput } from "../components/RGB-color/ColorInput";
import { ColorSlider } from "../components/RGB-color/ColorSlider";
import { ThemeProvider } from "../context/RGB-theme-context";
import { RGBContextProvider } from "../context/RGB-context";

import { ThemeContext } from "../context/RGB-theme-context";

export const Route = createLazyFileRoute("/rgbColor")({
  component: RouteComponent,
});

function ShowRGBComponent() {
  const { theme, toggleTheme, themes } = React.useContext(ThemeContext);

  const handleThemeChange = () => {
    toggleTheme(); // Toggle the theme when the switch is clicked
  };

  return (
    <div className="rgb-component">
      <main
        style={{
          ...themes[theme],
        }}
      >
        <div className="theme-toggle mb-4">
          <label className="toggle-switch">
            <input
              type="checkbox"
              checked={theme === "dark"} // Checked when the theme is "dark"
              onChange={handleThemeChange}
            />
            <span className="slider"></span>
          </label>
          <span className={`theme-label ${theme === "dark" ? "dark" : ""}`}>{theme === "dark" ? "Dark Theme" : "Light Theme"}</span>
        </div>
        <ColorSwatch />
        <ColorAdjustment Adjustment={ColorInput} />
        <ColorAdjustment Adjustment={ColorSlider} />
      </main>
    </div>
  );
}

function RouteComponent() {
  return (
    <ThemeProvider>
      <RGBContextProvider>
        <ShowRGBComponent />
      </RGBContextProvider>
    </ThemeProvider>
  );
}
