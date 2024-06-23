import { FavouriteContext } from "../context";
import { useLocalStorage } from "../hooks";

const FavouriteProvider = ({ children }) => {
  const [favourites, setFavourites] = useLocalStorage("favourites", []);

  // add to favourite function
  const addToFavourite = (latitude, longitude, location) => {
    setFavourites((prev) => {
      return [...prev, { latitude, longitude, location }];
    });
  };

  // reove from favourite function
  const removeFromFavourite = (location) => {
    const newFavourites = favourites?.filter((item) => item.location !== location);

    setFavourites(newFavourites);
  };

  return (
    <FavouriteContext.Provider
      value={{
        favourites,
        addToFavourite,
        removeFromFavourite,
      }}
    >
      {children}
    </FavouriteContext.Provider>
  );
};

export default FavouriteProvider;
