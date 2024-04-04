import { ReportProblem } from "@mui/icons-material";
import { Box, Typography, styled } from "@mui/material";

type Props = {};

const CenteredDiv = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  gap: "30px",

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    gap: "30px",
  },
}));

const StyledTypography = styled(Typography)({
  width: "80%",
  maxWidth: "750px",
});

const StyledBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
});

export default function ErrorPage({}: Props) {
  return (
    <CenteredDiv>
      <StyledBox>
        <StyledTypography variant="h2" fontWeight={600}>
          ОШИБКА
        </StyledTypography>
        <StyledTypography variant="h5">
          Что-то пошло не так{". "}
        </StyledTypography>
      </StyledBox>
      <ReportProblem sx={{ width: "400px", height: "400px", fill: "white" }} />
    </CenteredDiv>
  );
}
