import { countryStat } from "./constants";

function filterCountry(countryName: string) {
  const countryData = countryStat.filter(
    (country) =>
      country.countryName.toLocaleLowerCase() == countryName.toLowerCase()
  );
  return countryData;
}

export function getStatOfCountry(countryName: string) {
  const countryData = filterCountry(countryName);
  return countryData[0].stats;
}

export function getDataOfCountry(countryName: string) {
  const countryData = filterCountry(countryName);
  return countryData[0].data;
}

export function convertToDollar(amount: number) {
  return new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "USD",
  }).format(amount);
}
