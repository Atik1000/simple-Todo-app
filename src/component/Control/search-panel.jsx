import React from "react";
import PropTypes from "prop-types";
import { Button, Input } from "reactstrap";

const searchPanel = ({term,handleSearch,toggleForm}) => {
  return (
    <div className="d-flex">
      <Input
        placeholder="Enter search Term"
        className="mr-3"
        value={term}
        onChange={(e) => handleSearch(e.target.value)}
      ></Input>
      <Button color='success' onClick={toggleForm}></Button>
    </div>
  );
};

searchPanel.propTypes = {
    term:PropTypes.string.isRequired,
    handleSearch: PropTypes.func.isRequired,
    toggleForm:PropTypes.func.isRequired,
}

export default searchPanel;
