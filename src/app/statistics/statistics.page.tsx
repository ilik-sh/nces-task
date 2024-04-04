import ResponsiveAppBar from "components/responsive-app-bar.comp";
import StatisticsTabs from "./components/statistics-tabs.comp";
import { Container } from "@mui/material";

type Props = {};

export default function StatisticsPage({}: Props) {
  return (
    <>
      <ResponsiveAppBar />
      <Container>
        <StatisticsTabs />
      </Container>
    </>
  );
}
