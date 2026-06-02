import React, { useState } from "react";
import Button from "@mui/material/Button";
import { FaAngleDown } from "react-icons/fa6";
import Dialog from "@mui/material/Dialog";
import { IoSearchSharp } from "react-icons/io5";
//import { IoIosClose } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CountryDropdown = ({ countries, selectedCountry, onCountryChange }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <>
      <Button className="countryDrop" onClick={() => setIsOpenModal(true)}>
        <div className="info d-flex flex-column">
          <span className="label">Your Location</span>
          <span className="name">India</span>
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
          />
          <button className="searchBtn">
            <IoSearchSharp />
          </button>
        </div>

        <ul className="countryList">
          <li>
            <Button onClick={() => setIsOpenModal(false)}>India</Button>
          </li>
          <li>
            <Button onClick={() => setIsOpenModal(false)}>United States</Button>
          </li>
          <li>
            <Button onClick={() => setIsOpenModal(false)}>
              United Kingdom
            </Button>
          </li>
          <li>
            <Button onClick={() => setIsOpenModal(false)}>Australia</Button>
          </li>
          <li>
            <Button onClick={() => setIsOpenModal(false)}>Canada</Button>
          </li>
          <li>
            <Button onClick={() => setIsOpenModal(false)}>SriLanka</Button>
          </li>
          <li>
            <Button onClick={() => setIsOpenModal(false)}>Bangladesh</Button>
          </li>
          <li>
            <Button onClick={() => setIsOpenModal(false)}>Pakistan</Button>
          </li>
          <li>
            <Button onClick={() => setIsOpenModal(false)}>Bhutan</Button>
          </li>
          <li>
            <Button onClick={() => setIsOpenModal(false)}>Nepal</Button>
          </li>
          <li>
            <Button onClick={() => setIsOpenModal(false)}>Maldives</Button>
          </li>
          <li>
            <Button onClick={() => setIsOpenModal(false)}>Afghanistan</Button>
          </li>
          <li>
            <Button onClick={() => setIsOpenModal(false)}>Myanmar</Button>
          </li>
          <li>
            <Button onClick={() => setIsOpenModal(false)}>Thailand</Button>
          </li>
          <li>
            <Button onClick={() => setIsOpenModal(false)}>Vietnam</Button>
          </li>
          <li>
            <Button onClick={() => setIsOpenModal(false)}>Indonesia</Button>
          </li>
        </ul>
      </Dialog>
    </>
  );
};

export default CountryDropdown;
