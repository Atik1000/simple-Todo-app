import React from "react";
import searchPanel from "./search-panel";
import PropTypes from "prop-types";

const Controller = ({ term, handleSearch, toggleForm }) => {
  return (
    <div>
      <searchPanel
        term={term}
        handleSearch={handleSearch}
        toggleForm={toggleForm}
      ></searchPanel>
    </div>
  );
};
Controller.propTypes = {
  term: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
  toggleForm: PropTypes.func.isRequired,
};
export default Controller;
