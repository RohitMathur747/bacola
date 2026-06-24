import React, { createContext, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Header from "./components/Header";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SideBar from "./components/Sidebar";

const MyContext = createContext();

function AppLayout() {
  const location = useLocation();
  const isLoginRoute = location.pathname === "/login";

  // read context values from provider in parent
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { sidebarExpanded, setIsLogin, setSidebarExpanded, isLogin } =
    React.useContext(MyContext);

  return (
    <>
      {!isLoginRoute && (
        <Header
          sidebarExpanded={sidebarExpanded}
          toggleSidebar={() => setSidebarExpanded((v) => !v)}
        />
      )}

      {!isLoginRoute ? (
        <div className="main d-flex">
          <SideBar
            sidebarExpanded={sidebarExpanded}
            toggleSidebar={() => setSidebarExpanded((v) => !v)}
          />
          <div className="content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </div>
      ) : (
        <div className="content" style={{ padding: 0 }}>
          <Routes>
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      )}
    </>
  );
}

const App = () => {
  const [sidebarExpanded, setSidebarExpanded] = useState(true);
  const [isLogin, setIsLogin] = useState(false);

  const values = {
    isLogin,
    setIsLogin,
    sidebarExpanded,
    setSidebarExpanded,
  };

  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
        <AppLayout />
      </MyContext.Provider>
    </BrowserRouter>
  );
};

export default App;
export { MyContext };
