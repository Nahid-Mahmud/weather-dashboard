// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}&units=metric

import { useEffect, useState } from "react";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export const useWeather = () => {
  const [weatherData, setWeatherData] = useState({
    location: "",
    climate: "",
    temperature: "",
    maxTemperature: "",
    minTemperature: "",
    humidity: "",
    cloudPercentage: "",
    wind: "",
    time: "",
    longitude: "",
    latitude: "",
  });
  const [loading, setLoading] = useState({
    state: true,
    message: "",
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading((prev) => {
      return {
        ...prev,
        state: true,
        message: "Loading weather data...",
      };
    });
    const fetchData = async (latitude, longitude) => {
      try {
        setLoading((prev) => {
          return {
            ...prev,
            state: true,
            message: "Loading weather data...",
          };
        });
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
        );
        const data = await response.json();
        setWeatherData((prev) => {
          return {
            ...prev,
            location: data?.name,
            climate: data?.weather[0]?.main,
            temperature: data?.main?.temp,
            maxTemperature: data?.main?.temp_max,
            minTemperature: data?.main?.temp_min,
            humidity: data?.main?.humidity,
            cloudPercentage: data?.clouds?.all,
            wind: data?.wind?.speed,
            time: data?.dt,
            latitude,
            longitude,
          };
        });
        setLoading((prev) => {
          return {
            ...prev,
            state: false,
            message: "",
          };
        });
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading((prev) => {
          return {
            ...prev,
            state: false,
            message: "",
          };
        });
      }
    };
    // get geolocation form navigator
    navigator.geolocation.getCurrentPosition((position) => {
      // console.log(position.coords.latitude, position.coords.longitude);
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      fetchData(latitude, longitude);
    });
  }, []);

  return { weatherData, loading, error };
};
