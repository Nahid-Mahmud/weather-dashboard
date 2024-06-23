import Home from "./components/Home/Home";
import { FavouriteProvider, LocationProvider, WeatherProvider } from "./provider";

function App() {
  return (
    <>
      <LocationProvider>
        <FavouriteProvider>
          <WeatherProvider>
            <Home />
          </WeatherProvider>
        </FavouriteProvider>
      </LocationProvider>
    </>
  );
}

export default App;
