/* eslint-disable react/prop-types */
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

//A Search component for handling user queries
const Search = (props) => {
  const searchText = useRef(null); //the initial property of searchText is set to null
  const navigate = useNavigate();

  //handleSubmit event when user inputs new text for search
  const handleSubmit = (e) => {
    e.preventDefault();
    props.changeQuery(searchText.current.value); //here it wll change the initial property to the value of what was inputted by user
    navigate(`/search/${searchText.current.value}`);
    e.currentTarget.reset();
  };

  return (
    <form className="search-form" onSubmit={(e) => handleSubmit(e)}>
      <input
        type="search"
        name="search"
        placeholder="Search"
        required
        ref={searchText}
      />
      <button type="submit" className="search-button" id="submit">
        <svg
          fill="#fff"
          height="24"
          viewBox="0 0 23 23"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
          <path d="M0 0h24v24H0z" fill="none" />
        </svg>
      </button>
    </form>
  );
};

export default Search;
