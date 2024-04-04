import { Button, styled } from "@mui/material";
import { UnpFormFields } from "app/statistics/validation-schemas/unp-form-fields.schema";
import TextField from "components/text-field.comp";
import React from "react";
import { FieldErrors, Control } from "react-hook-form";

type UnpFormProps = {
  onSubmit: React.FormEventHandler;
  control: Control<UnpFormFields, any>;
  validationErrors: FieldErrors<UnpFormFields>;
};

const StyledForm = styled("form")({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
});

export default function UnpForm({
  onSubmit,
  control,
  validationErrors,
}: UnpFormProps) {
  return (
    <StyledForm noValidate onSubmit={onSubmit}>
      <TextField
        control={control}
        name={"UnpInput"}
        label={"УНП"}
        error={!!validationErrors.unpInput}
        helperText={validationErrors?.unpInput?.message}
      />
      <Button type="submit" variant="contained" color="secondary">
        {" "}
        Получить данные
      </Button>
    </StyledForm>
  );
}
