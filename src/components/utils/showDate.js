export function showDate(date) {
  // Prüfen, ob das übergebene Datum gültig ist
  const parsedDate = new Date(date);
  if (isNaN(parsedDate)) {
    throw new Error("Invalid date");
  }

  const options = {
    day: "numeric",
    month: "short",
    year: "numeric",
  };

  // Datum im deutschen Format anzeigen
  return new Intl.DateTimeFormat("de-DE", options).format(parsedDate);
}
