import React, { useState } from "react";
import Search from "./SearchWeather";
import useFetch from "../../components/custom-Hooks/useFetch";
import "./index.scss";

interface WeatherData {
  name: string;
  sys: {
    country: string;
  };
  main: {
    temp: number;
    humidity: number;
  };
  weather: {
    description: string;
  }[];
  wind: {
    speed: number;
  };
}

const WeatherCard: React.FC = () => {
  const [search, setSearch] = useState<string>(""); // Default city
  const [query, setQuery] = useState<string>("london"); // Value used for fetching
  const { data: weatherData, loading, error, refetch } = useFetch<WeatherData>(
    `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=e34b4c51d8c2b7bf48d5217fe52ff79e&units=metric`
  );

  const handleSearch = (): void => {
    if (search.trim()) {
      setQuery(search); // Update the query state to trigger refetch
      refetch(); // Trigger a refetch with the updated query
    }
  };

  const getCurrentDate = (): string => {
    return new Date().toLocaleDateString("en-us", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="weather-app">
        <p className="text-2xl font-bold">Weather app</p>
      <Search search={search} setSearch={setSearch} handleSearch={handleSearch} />
      {loading ? (
        <div className="loading">Loading...</div>
      ) : error ? (
        <div className="error">Error: {error}</div>
      ) : (
        weatherData && (
          <div>
            <div className="city-name">
              <h2>
                {weatherData.name}, <span>{weatherData.sys.country}</span>
              </h2>
            </div>
            <div className="date">
              <span>{getCurrentDate()}</span>
            </div>
            <div className="temp">{weatherData.main.temp}°C</div>
            <p className="description">
              {weatherData.weather?.[0]?.description || ""}
            </p>
            <div className="weather-info">
              <div className="column">
                <div>
                  <p className="wind p-8">{weatherData.wind.speed} m/s</p>
                  <p>Wind Speed</p>
                </div>
              </div>
              <div className="column">
                <div>
                  <p className="humidity p-8">{weatherData.main.humidity}%</p>
                  <p>Humidity</p>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default WeatherCard;