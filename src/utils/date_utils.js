// Define a function to format a given date value based on specified types and whether the input is in milliseconds.
export const getFormattedDate = (value, types, inMS) => {
  // If no types are specified, return the original value without formatting.
  if (!types) return value;

  // If the input value is not in milliseconds, convert it to milliseconds by multiplying by 1000.
  if (!inMS) {
    value = value * 1000;
  }

  // Create a new Date object with the (now ensured) milliseconds value.
  const date = new Date(value);

  // Declare a variable to hold the options for date formatting.
  let options;

  // If the types argument is "date", set the options to format the date as year, month, and day.
  if (types === "date") {
    options = {
      year: "numeric", // Typo here: should be "numeric"
      month: "long",
      day: "numeric",
    };
  } else if (types === "time") {
    // If the types argument is "time", set the options to format the time as hour and minute.
    options = {
      hour: "numeric",
      minute: "numeric",
    };
  }

  // Return the formatted date string based on the specified options, using the "en-us" locale.
  return new Intl.DateTimeFormat("en-us", options).format(date);
};
