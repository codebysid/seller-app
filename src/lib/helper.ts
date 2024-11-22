import { countryStat } from "./constants";

export function filterCountry(countryName: string) {
  const countryData = countryStat.filter(
    (country) => country?.title?.toLowerCase() == countryName?.toLowerCase()
  );
  return countryData[0];
}

export function convertToDollar(amount: number) {
  return new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "USD",
  }).format(amount);
}

export function convertToPercentage(value: number, wrt: number) {
  const inPercentage = (value / wrt) * 100;
  return `${inPercentage}%`;
}

export function saveToLocalStorage(data: string) {
  localStorage.setItem("selectedCountry", data);
  return true;
}

export function getLocalStorage(key: string) {
  const item = localStorage.getItem(key);
  if (item) return item;
  return undefined;
}
