import React, { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SideBar from "./components/Sidebar";

const MyContext = createContext();

const App = () => {
  const values = {};

  const [sidebarExpanded, setSidebarExpanded] = useState(true);

  const toggleSidebar = () => setSidebarExpanded((v) => !v);

  return (
    <BrowserRouter>
      <MyContext.Provider values={values}>
        <Header
          sidebarExpanded={sidebarExpanded}
          toggleSidebar={toggleSidebar}
        />

        <div className="main d-flex">
          <SideBar
            sidebarExpanded={sidebarExpanded}
            toggleSidebar={toggleSidebar}
          />

          <div className="content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </div>
        </div>
      </MyContext.Provider>
    </BrowserRouter>
  );
};

export default App;
export { MyContext };
