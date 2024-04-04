import {
  FormControl,
  InputLabel,
  MenuItem,
  Select as MuiSelect,
  SelectProps as MuiSelectProps,
  styled,
} from "@mui/material";
import FormHelperText from "@mui/material/FormHelperText";
import { FC } from "react";
import { Control } from "react-hook-form";
import { camelize } from "utils/camelize";
import { useController } from "react-hook-form";

type SelectProps = MuiSelectProps & {
  selectValues: string[];
  selectItemIds: string[] | number[];
  control: Control<any, any>;
  name: string;
  error: boolean;
  label: string;
  helperText: string;
};

const StyledFormControl = styled(FormControl)(() => ({
  minWidth: 170,
  flex: "1 1 20%",
}));

const Select: FC<SelectProps> = ({
  selectValues,
  selectItemIds = [],
  control,
  name,
  label,
  helperText,
  error,
  ...props
}) => {
  const { field } = useController({
    name: camelize(name),
    control,
    rules: { required: true },
  });

  return (
    <StyledFormControl>
      <InputLabel id={camelize(name)} error={error}>
        {label}
      </InputLabel>
      <MuiSelect {...props} variant={"outlined"} {...field} error={error}>
        {selectValues.map((value, ind) => (
          <MenuItem value={value} key={selectItemIds[ind]}>
            {value}
          </MenuItem>
        ))}
      </MuiSelect>
      <FormHelperText error={error}>{helperText}</FormHelperText>
    </StyledFormControl>
  );
};

export default Select;
