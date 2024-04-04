import {
  FormControl,
  FormHelperText,
  Autocomplete as MuiAutocomplete,
  AutocompleteProps as MuiAutocompleteProps,
  styled,
} from "@mui/material";
import { camelize } from "utils/camelize";
import { Control, useController } from "react-hook-form";
import { AutocompleteOption } from "app/types/autocomplete-option";

interface AutocompleteProps
  extends MuiAutocompleteProps<AutocompleteOption, boolean, boolean, boolean> {
  control: Control<any, any>;
  name: string;
  error: boolean;
  label: string;
  helperText: string;
}

const StyledFormControl = styled(FormControl)(() => ({
  minWidth: 170,
  flex: "1 1 20%",
}));

export default function Autocomplete({
  control,
  name,
  label,
  helperText,
  error,
  ...props
}: AutocompleteProps) {
  const { field } = useController({
    name: camelize(name),
    control,
    rules: { required: true },
  });

  return (
    <StyledFormControl>
      <MuiAutocomplete
        {...props}
        {...field}
        isOptionEqualToValue={(option, value) => option.id === value.id}
      ></MuiAutocomplete>
      <FormHelperText error={error}>{helperText}</FormHelperText>
    </StyledFormControl>
  );
}
