import React, { useEffect, useState } from "react";
import { Header } from "./header/Header";
import WeatherBoard from "./weather/WeatherBoard";
import { useWeatherContext } from "../../hooks";
import PageLoader from "../Loader/PageLoader";
import {
  ClearSkyImage,
  FewCloudsImage,
  MistImage,
  RainyDayImage,
  ScatterdCloudsImage,
  SnowImage,
  ThunderStormImage,
  WinterImage,
} from "../../assets/exportAllImages";

const Home = () => {
  const { loading, error, weatherData } = useWeatherContext();

  const [climateImage, seClimateImage] = useState(null);

  const getBackgroundImage = (climate) => {
    if (climate === "Clear") {
      seClimateImage(ClearSkyImage);
    } else if (climate === "Clouds") {
      seClimateImage(FewCloudsImage);
    } else if (climate === "Mist") {
      seClimateImage(MistImage);
    } else if (climate === "Rain") {
      seClimateImage(RainyDayImage);
    } else if (climate === "Drizzle") {
      seClimateImage(RainyDayImage);
    } else if (climate === "Snow") {
      seClimateImage(SnowImage);
    } else if (climate === "Thunderstorm") {
      seClimateImage(ThunderStormImage);
    } else if (climate === "Haze") {
      seClimateImage(ScatterdCloudsImage);
    } else {
      seClimateImage(ClearSkyImage);
    }
  };

  useEffect(() => {
    getBackgroundImage(weatherData?.climate);
  }, [weatherData?.climate]);

  return (
    <div
      style={{
        backgroundImage: `url(${climateImage})`,
      }}
      className="flex items-center justify-center h-screen bg-no-repeat bg-cover"
    >
      <Header />
      {/* Begin Wheather */}
      <section className="">{loading?.state ? <PageLoader /> : <WeatherBoard />}</section>
      {/* End Wheather */}
    </div>
  );
};

export default Home;
