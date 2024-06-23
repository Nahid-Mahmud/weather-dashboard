import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import WeatherProvider from "./provider/WeatherProvider.jsx";
import FavouriteProvider from "./provider/FavouriteProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FavouriteProvider>
      <WeatherProvider>
        <App />
      </WeatherProvider>
    </FavouriteProvider>
  </React.StrictMode>
);
