import { useContext } from "react";
import { LocationContext } from "../context";

const useLocation = () => {
  return useContext(LocationContext);
};

export default useLocation;
