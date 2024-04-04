import { create } from "zustand";
import { StatisticsState } from "../types/statistics.state";
import { UnpDto } from "../types/unp.dto";
import { RateDto } from "../types/rate.dto";

export const useStatisticsStore = create<StatisticsState>((set) => ({
  unp: null,
  rates: null,
  setUnp: (unp: UnpDto | null) => set({ unp }),
  setRates: (rates: RateDto[]) => set({ rates }),
}));
