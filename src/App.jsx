import Home from "./components/Home/Home";
import { useWeather } from "./hooks/useWeather";

function App() {
  const { weatherData, loading } = useWeather();
  console.log(weatherData);
  console.log(loading);
  return (
    <>
      <Home />
    </>
  );
}

export default App;
