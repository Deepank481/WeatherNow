export function epocToDateFormat(input) {
  const date = new Date(input.replace(" ", "T"));
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(date);
  const timeOptions = {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  };

  // Format and log
  const formattedTime = new Intl.DateTimeFormat("en-US", timeOptions).format(
    date
  );
  return { formattedDate, formattedTime };
}
