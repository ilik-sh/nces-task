import Suspend from "components/suspend.comp";
import React from "react";

import { Route, Routes } from "react-router-dom";

const StatisticsPage = React.lazy(
  () => import("app/statistics/statistics.page")
);
const LandingPage = React.lazy(() => import("app/landing/landing.page"));
const NotFoundPage = React.lazy(() => import("components/not-found.page"));

export const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path={"/statistics"}
        element={<Suspend element={StatisticsPage} />}
      ></Route>
      <Route path={"/"} element={<Suspend element={LandingPage} />}></Route>
      <Route path={"/*"} element={<Suspend element={NotFoundPage} />}></Route>
    </Routes>
  );
};

export default AppRoutes;
