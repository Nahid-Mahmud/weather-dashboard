import React, { useContext } from "react";
import { FavouriteContext } from "../context";

const useFavourite = () => {
  return useContext(FavouriteContext);
};

export default useFavourite;
