import { Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

type DataLabelProps = {
  name: string;
  data?: string;
};

export default function DataLabel({ name, data }: DataLabelProps) {
  return (
    <div>
      <Typography variant="h4" fontWeight={600}>
        {name}
      </Typography>
      <Typography variant="h6" color={grey[300]}>
        {data ? data : " "}
      </Typography>
    </div>
  );
}
