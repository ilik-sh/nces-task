import UnpForm from "./forms/unp.form";
import {
  UnpFormFields,
  unpFormFieldsSchema,
} from "../validation-schemas/unp-form-fields.schema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useStatisticsStore } from "../store/statistics.store";
import { useQuery } from "@tanstack/react-query";
import { axiosClient } from "app/api/axios.client";
import { UnpDto } from "../types/unp.dto";
import UnpCard from "./unp-card.comp";
import { styled } from "@mui/material";
import { enqueueSnackbar } from "notistack";
import { isAxiosError } from "axios";
import ErrorPage from "components/error.page";

type Props = {};

const StyledDiv = styled("div")({
  display: "flex",
  flexDirection: "column",
  padding: "20px",
  background: "#ffffff20",
  borderRadius: "10px",
  gap: "20px",
});

export default function UnpTab({}: Props) {
  const { unp, setUnp } = useStatisticsStore();
  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<UnpFormFields>({
    resolver: yupResolver(unpFormFieldsSchema),
    mode: "onSubmit",
    defaultValues: {
      unpInput: "",
    },
  });

  const { error, refetch } = useQuery({
    queryKey: ["unp", getValues("unpInput")],
    queryFn: async () => {
      try {
        const { data } = await axiosClient.get(
          `http://grp.nalog.gov.by/api/grp-public/data`,
          { params: { unp: getValues("unpInput") } }
        );
        const unp = data.row;
        const newUnp: UnpDto = {
          fullName: unp.vnaimp,
          adress: unp.vpadres,
          dateOfRegistry: unp.dreg,
          status: unp.vkods,
        };
        setUnp(newUnp);
        return data;
      } catch (e) {
        setUnp(null);
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

  if (error) {
    <ErrorPage />;
  }

  return (
    <StyledDiv>
      <UnpForm
        control={control}
        onSubmit={handleSubmit(onSubmit)}
        validationErrors={errors}
      />
      <UnpCard unp={unp} />
    </StyledDiv>
  );
}
