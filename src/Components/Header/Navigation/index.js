import Button from "@mui/material/Button";
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const Navigation = () => {
  return (
    <nav>
      <div className="container">
        <div className="row">
          <div className="col-sm-2 navPart1 d-flex align-items-center">
            <Button className="allCatTab d-flex align-items-center">
              <span className="icon1">
                <IoIosMenu />
              </span>
              <span className="text">ALL CATEGORIES</span>
              <span className="icon2">
                <FaAngleDown />
              </span>
            </Button>
          </div>
          <div className="col-sm-10 navPart2 d-flex align-items-center">
            <ul className="list list-inline ml-auto mb-0">
              <li className="list-inline-item">
                <Link to="/">
                  <Button>
                    <FaHome />
                    &nbsp; HOME
                  </Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/fashion">
                  <Button>FASHION</Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/electronic">
                  <Button>ELECTRONIC</Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/bakery">
                  <Button>BAKERY</Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/grocery">
                  <Button>GROCERY</Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/mobiles">
                  <Button>MOBILES</Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/blog">
                  <Button>BLOG</Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/contact">
                  <Button>CONTACT US</Button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
