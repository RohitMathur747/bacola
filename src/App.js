import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header/index";
import "./App.css";
import { createContext } from "react";
import axios from "axios";
import Footer from "./Components/Footer";
import Listing from "./Pages/Listing";
import ProductDetails from "./Pages/ProductDetails";

export const MyContext = createContext();

const App = () => {
  const [countryList, setCountryList] = useState([]);

  useEffect(() => {
    getCountry("https://countriesnow.space/api/v0.1/countries/");
  }, []);

  const getCountry = async (url) => {
    try {
      const res = await axios.get(url);
      setCountryList(res.data.data);
      console.log(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const values = {
    countryList,
    setCountryList,
  };

  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
        <Header />
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
          <Route path="/cat/:id" exact={true} element={<Listing />} />
          <Route
            path="/product/:id"
            exact={true}
            element={<ProductDetails />}
          />
        </Routes>
        <Footer />
      </MyContext.Provider>
    </BrowserRouter>
  );
};

export default App;
