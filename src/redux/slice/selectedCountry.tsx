import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInitialState {
  title: string;
  stats: { title: string; value: string; lastMonthChange: string }[];
  salesOverviewData: { month: string; revenue: number; target: number }[];
  salesDataByRegion: { region: string; value: number }[];
  registeredUserData: {
    totalUsers: number;
    premiumUsers: number;
    basicUsers: number;
  };
  integrations: {
    id: number;
    title: string;
    rate: string;
    profit: string;
    type: string;
  }[];
}

const initialState: IInitialState = {
  title: "usa",
  stats: [
    {
      title: "Total Income",
      value: "33328.12",
      lastMonthChange: "12.24%",
    },
    {
      title: "Profit",
      value: "8583.09",
      lastMonthChange: "2.63",
    },
    {
      title: "Total Views",
      value: "52.234.32",
      lastMonthChange: "1.46%",
    },
    {
      title: "Conversion Rate",
      value: "6.12%",
      lastMonthChange: "8.75",
    },
  ],
  salesOverviewData: [
    { month: "Apr 2023", revenue: 15000, target: 18000 },
    { month: "May 2023", revenue: 17000, target: 20000 },
    { month: "Jun 2023", revenue: 16000, target: 21000 },
    { month: "Jul 2023", revenue: 18000, target: 19000 },
    { month: "Aug 2023", revenue: 17000, target: 18000 },
    { month: "Sep 2023", revenue: 14000, target: 20000 },
    { month: "Oct 2023", revenue: 15000, target: 22000 },
    { month: "Nov 2023", revenue: 15780, target: 20000 },
    { month: "Dec 2023", revenue: 17000, target: 18000 },
    { month: "Jan 2024", revenue: 19000, target: 22000 },
  ],
  salesDataByRegion: [
    {
      region: "Asia",
      value: 2201,
    },
    {
      region: "Europe",
      value: 2865,
    },
    {
      region: "Pacific",
      value: 2475,
    },
    {
      region: "Americans",
      value: 1762,
    },
    {
      region: "Middle Est",
      value: 1749,
    },
    {
      region: "Africa",
      value: 1591,
    },
  ],
  registeredUserData: {
    totalUsers: 3201,
    premiumUsers: 2804,
    basicUsers: 397,
  },
  integrations: [
    {
      id: 1,
      title: "Stripe",
      type: "Finance",
      rate: "33%",
      profit: "10998.28",
    },
    {
      id: 2,
      title: "Zapier",
      type: "CRM",
      rate: "27%",
      profit: "8998.59",
    },
    {
      id: 3,
      title: "Shopify",
      type: "Marketplace",
      rate: "40%",
      profit: "13331.24",
    },
  ],
};

export const selectedCountrySlice = createSlice({
  name: "selectedCountry",
  initialState,
  reducers: {
    updateSelectedCountry: (
      state,
      action: PayloadAction<{ title: string }>
    ) => {
      state.title = action.payload.title;
    },
    updateSelectedCountryData: (
      state,
      action: PayloadAction<IInitialState>
    ) => {
      const {
        stats,
        salesDataByRegion,
        salesOverviewData,
        registeredUserData,
        integrations,
      } = action.payload;
      if (stats) state.stats = stats;
      if (salesOverviewData) state.salesOverviewData = salesOverviewData;
      if (salesDataByRegion) state.salesDataByRegion = salesDataByRegion;
      if (registeredUserData) state.registeredUserData = registeredUserData;
      if (integrations) state.integrations = integrations;
    },
  },
});
export const { updateSelectedCountry, updateSelectedCountryData } =
  selectedCountrySlice.actions;

export default selectedCountrySlice.reducer;
