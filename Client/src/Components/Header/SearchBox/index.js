import { IoSearchSharp } from "react-icons/io5";
const SearchBox = () => {
  return (
    <div className="headerSearch ml-3 mr-3">
      <input
        type="text"
        className="searchInput"
        placeholder="Search for Products ..."
      />
      <button className="searchBtn">
        <IoSearchSharp />
      </button>
    </div>
  );
};

export default SearchBox;
