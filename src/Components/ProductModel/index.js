import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import { IoClose } from "react-icons/io5";

const ProductModel = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <>
      <Dialog open={isOpenModal} onClose={() => setIsOpenModal(false)}>
        <h4 className="mb-0">Choose your Delivery Location</h4>
        <p>Enter your address and we will specify the offer for your area.</p>
        <Button className="close_" onClick={() => setIsOpenModal(false)}>
          <IoClose />
        </Button>
      </Dialog>
    </>
  );
};

export default ProductModel;
