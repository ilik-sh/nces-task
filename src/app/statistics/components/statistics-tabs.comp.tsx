import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import UnpTab from "./unp.tab";
import RateTab from "./rate.tab";

export default function StatisticsTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    event.preventDefault();
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="УНП" value="1" />
            <Tab label="Курс" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <UnpTab />
        </TabPanel>
        <TabPanel value="2">
          <RateTab />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
