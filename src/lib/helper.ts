import { countryStat } from "./constants";

export function filterCountry(countryName: string) {
  const countryData = countryStat.filter(
    (country) => country.countryName.toLowerCase() == countryName.toLowerCase()
  );
  return countryData[0];
}

export function convertToDollar(amount: number) {
  return new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "USD",
  }).format(amount);
}
