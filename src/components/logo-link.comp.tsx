import { Box, Typography, styled } from "@mui/material";
import React from "react";

type LogoLinkProps = {
  text?: string;
  Icon: React.ElementType;
  onClick: () => void;
};

const StyledTypography = styled(Typography)({
  fontWeight: 500,
  letterSpacing: ".3rem",
  color: "inherit",
  textDecoration: "none",
});

const StyledBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
  cursor: "pointer",
});

export default function LogoLink({ text, Icon, onClick }: LogoLinkProps) {
  return (
    <StyledBox onClick={onClick}>
      <Icon sx={{ height: "44px", width: "44px" }} />
      <StyledTypography variant="h4" noWrap>
        {text}
      </StyledTypography>
    </StyledBox>
  );
}
