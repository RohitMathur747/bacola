import React, { useState, useEffect, useContext } from "react";
import Button from "@mui/material/Button";
import { FaAngleDown } from "react-icons/fa6";
import Dialog from "@mui/material/Dialog";
import { IoSearchSharp } from "react-icons/io5";
//import { IoIosClose } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import Slide from "@mui/material/Slide";
import { MyContext } from "../../App";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CountryDropdown = ({ countries, selectedCountry, onCountryChange }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selected, setSelected] = useState("India");
  const [searchTerm, setSearchTerm] = useState("");
  const [countryList, setCountryList] = useState([]);

  const context = useContext(MyContext);

  const selectCountry = (countryName) => {
    setSelected(countryName);
    setIsOpenModal(false);
  };

  useEffect(() => {
    setCountryList(context.countryList || []);
  }, [context.countryList]);

  const filterList = (e) => {
    const keyword = e.target.value.toLowerCase().trim();
    setSearchTerm(e.target.value);

    if (keyword !== "") {
      const list = (context.countryList || []).filter((item) =>
        item.country.toLowerCase().includes(keyword),
      );
      setCountryList(list);
    } else {
      setCountryList(context.countryList || []);
    }
  };

  return (
    <>
      <Button className="countryDrop" onClick={() => setIsOpenModal(true)}>
        <div className="info d-flex flex-column">
          <span className="label">Your Location</span>
          <span className="name">{selected}</span>
        </div>
        <span className="ml-auto">
          <FaAngleDown />
        </span>
      </Button>

      <Dialog
        open={isOpenModal}
        onClose={() => setIsOpenModal(false)}
        className="locationModel"
        TransitionComponent={Transition}
      >
        <h4 className="mb-0">Choose your Delivery Location</h4>
        <p>Enter your address and we will specify the offer for your area.</p>
        <Button className="close_" onClick={() => setIsOpenModal(false)}>
          <IoClose />
        </Button>
        <div className="headerSearch w-100">
          <input
            type="text"
            className="searchInput"
            placeholder="Search Your area..."
            value={searchTerm}
            onChange={filterList}
          />
          <button className="searchBtn">
            <IoSearchSharp />
          </button>
        </div>

        <ul className="countryList mt-3">
          {countryList?.length !== 0 &&
            countryList?.map((item) => {
              return (
                <li key={item.country}>
                  <Button
                    className={`${selected === item.country ? "active" : ""}`}
                    onClick={() => selectCountry(item.country)}
                  >
                    {item.country}
                  </Button>
                </li>
              );
            })}
        </ul>
      </Dialog>
    </>
  );
};

export default CountryDropdown;
