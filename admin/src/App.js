import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SideBar from "./components/Sidebar";

const App = () => {
  const [sidebarExpanded, setSidebarExpanded] = useState(true);

  const toggleSidebar = () => setSidebarExpanded((v) => !v);

  return (
    <BrowserRouter>
      <Header sidebarExpanded={sidebarExpanded} toggleSidebar={toggleSidebar} />

      <div className="main d-flex">
        <SideBar
          sidebarExpanded={sidebarExpanded}
          toggleSidebar={toggleSidebar}
        />

        <div className="content">
          <Routes>
            <Route to={"/"} exact={true} element={<Dashboard />} />
            <Route to={"/dashboard"} exact={true} element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
