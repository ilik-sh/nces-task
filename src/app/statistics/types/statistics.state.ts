import { RateDto } from "./rate.dto";
import { UnpDto } from "./unp.dto";

export interface StatisticsState {
  unp: UnpDto | null;
  rates: RateDto[] | null;
  setUnp: (unp: UnpDto | null) => void;
  setRates: (rates: RateDto[]) => void;
}
