import { styled } from "@mui/material";
import {
  DatePicker as MuiDatePicker,
  DatePickerProps as MuiDatePickerProps,
} from "@mui/x-date-pickers";
import { Dayjs } from "dayjs";
import { FC } from "react";
import { Control, useController } from "react-hook-form";
import { camelize } from "utils/camelize";

interface DatePickerProps extends MuiDatePickerProps<Dayjs, boolean> {
  control: Control<any, any>;
  name: string;
}

const StyledDatePicker = styled(MuiDatePicker)(() => ({
  minWidth: 170,
  flexGrow: 1,
}));

const DatePicker: FC<DatePickerProps> = ({ name, control, ...props }) => {
  const { field } = useController({
    name: camelize(name),
    control,
    rules: { required: true },
  });
  return (
    <StyledDatePicker
      {...field}
      label={name}
      {...props}
      value={field.value ? field.value : null}
    />
  );
};

export default DatePicker;
