import React, { createContext, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import ProductsList from "./pages/ProductsList";
import ProductsUpload from "./pages/ProductsUpload";
import ProductsView from "./pages/ProductsView";
import Header from "./components/Header";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SideBar from "./components/Sidebar";
import Register from "./pages/Register";

const MyContext = createContext();

function AppLayout() {
  const location = useLocation();
  const isLoginRoute = location.pathname === "/login";
  const isRegisterRoute = location.pathname === "/register";
  const noChromeRoute = isLoginRoute || isRegisterRoute;

  // read context values from provider in parent
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { sidebarExpanded, setIsLogin, setSidebarExpanded, isLogin } =
    React.useContext(MyContext);

  return (
    <>
      {!noChromeRoute && (
        <Header
          sidebarExpanded={sidebarExpanded}
          toggleSidebar={() => setSidebarExpanded((v) => !v)}
        />
      )}

      {!noChromeRoute ? (
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

              {/* Products */}
              <Route path="/products/list" element={<ProductsList />} />
              <Route path="/products/order" element={<ProductsUpload />} />
              <Route path="/products/view" element={<ProductsView />} />
            </Routes>
          </div>
        </div>
      ) : (
        <div className="content" style={{ padding: 0 }}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
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
