import { Box, Button, Container, Typography, styled } from "@mui/material";
import ResponsiveAppBar from "components/responsive-app-bar.comp";
import { useNavigate } from "react-router-dom";

type Props = {};

const StyledContainer = styled(Container)({
  display: "flex",
  flexDirection: "column",
  gap: "40px",
});

const StyledButton = styled(Button)(({ theme }) => ({
  padding: "10px",
  fontWeight: "600",
  fontSize: "20px",
  maxWidth: "30%",

  [theme.breakpoints.down("md")]: {
    maxWidth: "100%",
  },
}));

const StyledTypography = styled(Typography)({
  width: "80%",
  maxWidth: "750px",
});

const StyledBox = styled(Box)({
  height: "100%",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  background: "transparent",
  backgroundRepeat: "no-repeat",
});

export default function LandingPage({}: Props) {
  const navigate = useNavigate();

  const handleTryButtonClicked = () => {
    navigate("/statistics");
  };

  return (
    <>
      <ResponsiveAppBar />
      <StyledBox>
        <StyledContainer>
          <StyledTypography variant="h3" fontWeight={600}>
            Ваш надежный инструмент для сбора статистики
          </StyledTypography>
          <StyledTypography variant="h5">
            С Statistics вы можете получить важные и нужные данные в мгновение
            ока
          </StyledTypography>
          <StyledButton
            variant="contained"
            color="secondary"
            onClick={handleTryButtonClicked}
          >
            Попробовать
          </StyledButton>
        </StyledContainer>
      </StyledBox>
    </>
  );
}
