import { Button, styled } from "@mui/material";
import { CurrencyDto } from "app/statistics/types/currency.dto";
import { RateFormFields } from "app/statistics/validation-schemas/rate-form-fields.schema";
import DatePicker from "components/date-picker.comp";
import Select from "components/select.comp";
import React from "react";
import { FieldErrors, Control } from "react-hook-form";

type RateFormProps = {
  onSubmit: React.FormEventHandler;
  control: Control<RateFormFields, any>;
  validationErrors: FieldErrors<RateFormFields>;
  currencies: CurrencyDto[];
};

const StyledForm = styled("form")({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  width: "100%",
});

export default function RateForm({
  onSubmit,
  control,
  validationErrors,
  currencies,
}: RateFormProps) {
  return (
    <StyledForm noValidate onSubmit={onSubmit}>
      <Select
        selectValues={currencies.map(
          (currency) => currency.name + ", " + currency.abbreviation
        )}
        selectItemIds={currencies.map((currency) => currency.id)}
        control={control}
        error={!!validationErrors.currency}
        helperText={validationErrors.currency?.message!}
        label="Валюта"
        name="Currency"
      />
      <DatePicker
        control={control}
        slotProps={{
          textField: {
            error: !!validationErrors.startDate,
            helperText: validationErrors.startDate?.message,
          },
        }}
        disablePast={false}
        disableFuture={true}
        label="Дата от"
        name="Start Date"
      />
      <DatePicker
        control={control}
        slotProps={{
          textField: {
            error: !!validationErrors.endDate,
            helperText: validationErrors.endDate?.message,
          },
        }}
        disablePast={false}
        disableFuture={true}
        label="Дата по"
        name="End Date"
      />
      <Button type="submit" variant="contained" color="secondary">
        {" "}
        Получить данные
      </Button>
    </StyledForm>
  );
}
