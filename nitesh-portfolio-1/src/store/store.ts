import { create } from "zustand";
import { portfolioData } from "../constants/portfolio";

interface Store {
  data: typeof portfolioData;
}

export const usePortfolioStore = create<Store>(() => ({
  data: portfolioData,
}));
