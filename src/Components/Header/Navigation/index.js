import Button from "@mui/material/Button";
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <div className="container">
        <div className="row">
          <div className="col-sm-3 navPart1 d-flex align-items-center">
            <Button className="allCatTab d-flex align-items-center">
              <span className="icon1 mr-2 ml-2">
                <IoIosMenu />
              </span>
              <span className="text">ALL CATEGORIES</span>
              <span className="icon2 mr-2 ml-2">
                <FaAngleDown />
              </span>
            </Button>
          </div>
          <div className="col-sm-9 navPart2 d-flex align-items-center">
            <ul className="list list-inline">
              <li className="list-inline-item">
                <Link to="/">HOME</Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">FASHION</Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">ELECTRONIC</Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">BAKERY</Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">GROCERY</Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">BLOG</Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">CONTACT US</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
