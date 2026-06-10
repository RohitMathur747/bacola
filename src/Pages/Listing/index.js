import React from "react";
import Sidebar from "../../Components/Sidebar";

const Listing = () => {
  return (
    <>
      <section className="product_Listing_Page">
        <div className="container">
          <div className="productListing">
            <Sidebar />
            <div className="content_right">content right</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Listing;
