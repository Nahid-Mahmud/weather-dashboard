import React from "react";
import useFavourite from "../../../hooks/useFavourite";

const FavouriteListModal = () => {
  const { favourites } = useFavourite();
  console.log(favourites);

  return (
    <div className="max-w-xs py-4 bg-white rounded-md border-gray-500 absolute right-0 top-16 text-black shadow-lg ">
      <h3 className="text-lg font-bold px-4">Favourite Locations</h3>
      <ul className="space-y-2 mt-4 *:py-2 *:px-4 *:cursor-pointer">
        {favourites?.length > 0 ? (
          favourites?.map((item) => (
            <li key={item?.location} className="hover:bg-gray-200">
              {item.location}
            </li>
          ))
        ) : (
          <p className="px-4">No Favourite Location</p>
        )}
      </ul>
    </div>
  );
};

export default FavouriteListModal;
