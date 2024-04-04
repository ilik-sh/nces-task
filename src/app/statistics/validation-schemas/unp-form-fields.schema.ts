import * as yup from "yup";
import { InferType } from "yup";

export const unpFormFieldsSchema = yup.object().shape({
  unpInput: yup
    .string()
    .required("Необходимо указать УНП")
    .length(9, "УНП должен состоять из 9 символов"),
});

export type UnpFormFields = InferType<typeof unpFormFieldsSchema>;
