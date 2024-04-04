import * as yup from "yup";
import { InferType, ref } from "yup";

export const rateFormFieldsSchema = yup.object().shape({
  currency: yup.string().required("Необходимо указать валюту"),
  startDate: yup
    .date()
    .required("Необходимо указать дату начала")
    .max(ref("endDate"), "Стартовая дата должна быть меньше конечной"),
  endDate: yup.date().required("Необходимо указать конечную дата"),
});

export type RateFormFields = InferType<typeof rateFormFieldsSchema>;
