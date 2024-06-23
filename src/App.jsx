import { useWeather } from "./hooks/useWeather";

function App() {
  const { weatherData, loading } = useWeather();
  console.log(weatherData);
  console.log(loading);
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  );
}

export default App;
