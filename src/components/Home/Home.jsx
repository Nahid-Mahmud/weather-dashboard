import React from "react";
import { Header } from "./header/Header";
import WeatherBoard from "./weather/WeatherBoard";

const Home = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Header />
      {/* Begin Wheather */}
      <section className="">
        <WeatherBoard />
      </section>
      {/* End Wheather */}
    </div>
  );
};

export default Home;
