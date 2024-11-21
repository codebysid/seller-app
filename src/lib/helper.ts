import { countryStat } from "./constants";

export function getStatOfCountry(countryName: string) {
  const countryData = countryStat.filter(
    (country) =>
      country.countryName.toLocaleLowerCase() == countryName.toLowerCase()
  );
  return countryData[0].stats;
}

export function convertToDollar(amount: number) {
  return new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "USD",
  }).format(amount);
}
