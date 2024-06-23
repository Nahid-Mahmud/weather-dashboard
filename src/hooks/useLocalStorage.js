// Import necessary hooks from React library
import { useEffect, useState } from "react";

const useLocalStorage = (storageKey, defaultValue) => {
  const [storageValue, setStorageValue] = useState(JSON.parse(localStorage.getItem(storageKey)) ?? defaultValue);

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(storageValue));
  }, [storageKey, storageValue]); // Dependencies array, effect runs when these values change

  return [storageValue, setStorageValue];
};

// Export the custom hook for use in other components
export default useLocalStorage;
