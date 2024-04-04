import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useStatisticsStore } from "../store/statistics.store";
import { useQuery } from "@tanstack/react-query";
import { axiosClient } from "app/api/axios.client";
import CenteredCircularProgress from "components/centered-circular-progress.comp";

import { Typography, styled } from "@mui/material";
import { enqueueSnackbar } from "notistack";
import { isAxiosError } from "axios";
import ErrorPage from "components/error.page";
import RateForm from "./forms/rate.form";
import {
  RateFormFields,
  rateFormFieldsSchema,
} from "../validation-schemas/rate-form-fields.schema";
import { LineChart } from "@mui/x-charts/LineChart";
import { CurrencyDto } from "../types/currency.dto";
import { NbrbCurrenciesResponse } from "../types/api-responses/nbrb-currencies.response";
import { RateDto } from "../types/rate.dto";
import dayjs from "dayjs";

type Props = {};

const StyledDiv = styled("div")({
  display: "flex",
  flexDirection: "column",
  padding: "20px",
  background: "#ffffff20",
  borderRadius: "10px",
  gap: "20px",
});

export default function RateTab({}: Props) {
  const { rates, setRates } = useStatisticsStore();
  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<RateFormFields>({
    resolver: yupResolver(rateFormFieldsSchema),
    mode: "onSubmit",
    defaultValues: {
      currency: "",
    },
  });
  const currencyResponse = useQuery({
    queryKey: ["currencies"],
    queryFn: async () => {
      try {
        const response = await axiosClient.get(
          "https://api.nbrb.by/exrates/currencies"
        );
        const data = response.data as NbrbCurrenciesResponse[];
        const filtered = data.filter(
          (currency) => dayjs(currency.Cur_DateEnd) > dayjs()
        );
        return filtered;
      } catch (e) {
        return null;
      }
    },
  });
  const { error, refetch } = useQuery({
    queryKey: ["rates", getValues("startDate"), getValues("endDate")],
    queryFn: async () => {
      try {
        const startDate = dayjs(getValues("startDate")).format("YYYY-MM-DD");
        const endDate = dayjs(getValues("endDate")).format("YYYY-MM-DD");
        const curId = currencyResponse?.data?.find(
          (currency) =>
            currency.Cur_Abbreviation == getValues("currency").split(", ")[1]
        );
        const response = await axiosClient.get(
          ` https://api.nbrb.by/ExRates/Rates/Dynamics/${curId?.Cur_ID}`,
          {
            params: {
              startDate,
              endDate,
            },
          }
        );
        const data = response.data as RateDto[];
        setRates(data);
        return data;
      } catch (e) {
        console.log(e);
        if (isAxiosError(e)) {
          enqueueSnackbar(e.response?.data.message, { variant: "error" });
        }
        return e;
      }
    },
    enabled: false,
  });

  const onSubmit = () => {
    refetch();
  };

  if (error || currencyResponse.error) {
    return <ErrorPage />;
  }

  if (!currencyResponse.data) {
    return <CenteredCircularProgress />;
  }

  return (
    <StyledDiv>
      <RateForm
        control={control}
        onSubmit={handleSubmit(onSubmit)}
        validationErrors={errors}
        currencies={currencyResponse.data?.map((currency) => {
          const newCurrency: CurrencyDto = {
            id: currency.Cur_ID,
            name: currency.Cur_Name,
            abbreviation: currency.Cur_Abbreviation,
          };
          return newCurrency;
        })}
      />
      {rates ? (
        rates.length > 0 ? (
          <LineChart
            sx={{
              overflowY: "auto",
            }}
            xAxis={[
              {
                data: rates.map((rate) =>
                  dayjs(rate.Date).locale("ru").format("dddd, MMMM D, YYYY")
                ),
                scaleType: "band",
              },
            ]}
            series={[
              {
                data: rates.map((rate) => rate.Cur_OfficialRate),
              },
            ]}
            height={300}
          />
        ) : (
          <Typography variant="h4">Нет данных</Typography>
        )
      ) : null}
    </StyledDiv>
  );
}
