import React, { useEffect, useState } from "react";
import { HeartIcon, RedHeartIcon } from "../../../assets/exportAllImages";
import useFavourite from "../../../hooks/useFavourite";
import { useWeather } from "../../../hooks";

const AddToFavourite = () => {
  const { favourites, addToFavourite, removeFromFavourite } = useFavourite();
  const { weatherData, loading, error } = useWeather();
  const [isToggleFavourite, setIsToggleFavourite] = useState(false);
  // console.log(favourites, addToFavourite, removeFromFavourite);
  const { latitude, longitude, location } = weatherData;
  // console.log(weatherData);

  // useEffect for toggle fav image

  useEffect(() => {
    const isExistFavourite = favourites?.find((item) => item?.location === location);
    if (isExistFavourite) {
      setIsToggleFavourite(!!isExistFavourite);
    }
  }, [favourites, location]);

  const handleToggleFavourite = () => {
    const isExistFavourite = favourites?.find((item) => item?.location === location);

    if (isExistFavourite) {
      removeFromFavourite(location);
    } else {
      addToFavourite(latitude, longitude, location);
    }

    setIsToggleFavourite((prev) => !prev);
  };
  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button
          onClick={handleToggleFavourite}
          className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
        >
          <span>Add to Favourite</span>
          <img src={isToggleFavourite ? RedHeartIcon : HeartIcon} alt="" />
        </button>
      </div>
    </div>
  );
};

export default AddToFavourite;
