function isEmailValid(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function getMonthYearFromTimestamp(timestamp: string): string {
  console.log(timestamp);
  const date = new Date(Number(timestamp));
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
  };
  return date.toLocaleDateString("en-US", options);
}

export { isEmailValid, getMonthYearFromTimestamp };
