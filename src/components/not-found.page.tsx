import { Box, Typography, styled } from "@mui/material";
import { NotFound } from "app/assets/icons/not-found.icon";
import { useNavigate } from "react-router-dom";

type Props = {};

const CenteredDiv = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",

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

const StyledLink = styled("a")({
  textDecoration: "underline",
  cursor: "pointer",
  color: "#fff",
});

export default function NotFoundPage({}: Props) {
  const navigate = useNavigate();

  const handleBackButtonClicked = () => {
    navigate(-1);
  };

  const handleHomeButtonClicked = () => {
    navigate("/");
  };

  return (
    <CenteredDiv>
      <StyledBox>
        <StyledTypography variant="h2" fontWeight={600}>
          404
        </StyledTypography>
        <StyledTypography variant="h5">
          У нас нет такой страницы. Возможно вам стоит{" "}
          <StyledLink onClick={handleBackButtonClicked}>вернуться</StyledLink>{" "}
          или{" "}
          <StyledLink onClick={handleHomeButtonClicked}>
            перейти на домашнюю страницу
          </StyledLink>
        </StyledTypography>
      </StyledBox>
      <NotFound sx={{ width: "400px", height: "400px", fill: "white" }} />
    </CenteredDiv>
  );
}
