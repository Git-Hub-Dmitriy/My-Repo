export default function getDateToString(date: Date | string | undefined) {
  const months: Array<string> = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  if (date && date instanceof Date) {
    return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
  } else {
    return date!.toString();
  }
}
