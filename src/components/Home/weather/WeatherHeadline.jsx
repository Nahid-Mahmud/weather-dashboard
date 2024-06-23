import {
  PinIcon,
  CloudIcon,
  HazeIcon,
  SnowIcon,
  RainIcon,
  ThunderIcon,
  SunnyIcon,
  MistIcon,
} from "../../../assets/exportAllImages";
import { useWeatherContext } from "../../../hooks";
import { getFormattedDate } from "../../../utils/date_utils";

const WeatherHeadline = () => {
  const { weatherData, loading, error } = useWeatherContext();

  const { climate, location, time, temperature } = weatherData;

  // get weather icon dinamically
  const getWeatherIcon = (climate) => {
    if (climate === "Clear") return SunnyIcon;
    if (climate === "Clouds") return CloudIcon;
    if (climate === "Haze") return HazeIcon;
    if (climate === "Rain") return RainIcon;
    if (climate === "Snow") return SnowIcon;
    if (climate === "Thunderstorm") return ThunderIcon;
    if (climate === "Mist") return MistIcon;
    return SunnyIcon;
  };

  return (
    <div>
      <div className="max-md:flex items-center justify-between md:-mt-10">
        <img className="max-w-[35px]" src={getWeatherIcon(climate)} alt="cloud" />
        <div className="max-md:flex items-center max-md:space-x-4">
          <h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">
            {Math.round(Number(temperature))}°
          </h1>
          <div className="flex items-center space-x-4 md:mb-4">
            <img src={PinIcon} />
            <h2 className="text-2xl lg:text-[50px]">{location}</h2>
          </div>
        </div>
      </div>
      <p className="text-sm lg:text-lg">
        {getFormattedDate(time, "time", false)} - {getFormattedDate(time, "date", false)}
      </p>
    </div>
  );
};

export default WeatherHeadline;
