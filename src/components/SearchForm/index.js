import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <form className="search justify-content-center">
      <div className="form-group justify-content-center">
        <label htmlFor="language" className="justify-content-center">Search Employee:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="term"
          list="term"
          type="text"
          className="form-control"
          placeholder="Type in an employee name"
          id="term"
          justify-content-center
        />
      </div>
    </form>
  );
}

export default SearchForm;
