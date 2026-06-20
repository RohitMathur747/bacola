import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route to={"/"} exact={true} element={<Dashboard />} />
        <Route to={"/dashboard"} exact={true} element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
