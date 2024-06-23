import { useState } from "react";
import { SearchIcon } from "../../../assets/exportAllImages";
import useLocation from "../../../hooks/useLocation";
import { getLocationByName } from "../../../data/location-dada";

const Search = () => {
  const [search, setSearch] = useState("");
  const { setSelectedLocation } = useLocation();
  // console.log(selectedLocation);

  const handleSubmit = (e) => {
    e.preventDefault();
    const locationData = getLocationByName(search);
    console.log(locationData);
    setSelectedLocation({ ...locationData });
  };

  return (
    <form action="#" onSubmit={handleSubmit}>
      <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
        <input
          className="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
          type="search"
          placeholder="Search Location"
          required=""
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">
          <img src={SearchIcon} />
        </button>
      </div>
    </form>
  );
};

export default Search;
