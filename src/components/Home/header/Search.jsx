import { useEffect, useState } from "react";
import { SearchIcon } from "../../../assets/exportAllImages";
import useLocation from "../../../hooks/useLocation";
import { getLocationByName, getLocations } from "../../../data/location-dada";

const allLocations = getLocations();

const Search = () => {
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]); // [{}
  const { setSelectedLocation } = useLocation();

  // console.log(selectedLocation);

  const handleSubmit = (e) => {
    e.preventDefault();
    const locationData = getLocationByName(search);
    console.log(locationData);
    setSelectedLocation({ ...locationData });
  };

  const handleOnchange = (e) => {
    setSearch(e.target.value);
  };
  // console.log(suggestions);

  useEffect(() => {
    let subsCription = false;

    if (!subsCription && search.length > 0) {
      const filterdSuggestions = allLocations
        ?.filter((item) => item.location.toLowerCase().includes(search.toLowerCase()))
        .slice(0, 5);
      setSuggestions(filterdSuggestions);
    }

    return () => {
      subsCription = true;
    };
  }, [search]);

  return (
    <form action="#" onSubmit={handleSubmit} className="relative">
      <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
        <input
          className="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
          type="search"
          placeholder="Search Location"
          required={true}
          value={search}
          onChange={handleOnchange}
        />
        <button type="submit">
          <img src={SearchIcon} />
        </button>
      </div>
      {search.length >= 2 && (
        <ul className="fixed top-20 bg-white rounded">
          {suggestions?.map((item) => (
            <li
              onClick={() => {
                setSelectedLocation({ ...item });
                setSearch("");
              }}
              key={item?.location}
              className="py-2 px-3 hover:bg-black/30 cursor-pointer"
            >
              {item?.location}
            </li>
          ))}
        </ul>
      )}
    </form>
  );
};

export default Search;
