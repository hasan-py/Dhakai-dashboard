import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RootState } from "../redux/store";
import { tokenExpr } from "../_master/utilsFunc";

const Dashboard = React.lazy(() => import("./dashboard"));
const Signin = React.lazy(() => import("./signin"));

axios.defaults.baseURL = "https://devapi.dhakai.com";

function RootRoutes() {
  const authSlice = useSelector((state: RootState) => state.authSlice);
  axios.defaults.headers.common["Authorization"] = authSlice?.token;

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            !authSlice?.token ||
            (authSlice?.token && tokenExpr(authSlice?.expiresAt)) ? (
              <Signin />
            ) : (
              <Dashboard />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default RootRoutes;
