import React from "react";
import { HeartIcon } from "../../../assets/exportAllImages";

const Favourite = ({ onShowFavModal }) => {
  const handleToogleFavModal = () => {
    onShowFavModal((prev) => !prev);
  };
  return (
    <div
      onClick={handleToogleFavModal}
      className="p-2 hover:bg-black/30 cursor-pointer flex gap-2 items-center rounded-md transition-all text-white"
    >
      <img src={HeartIcon} alt="" />
      <span>Favourite Locations</span>
    </div>
  );
};

export default Favourite;
