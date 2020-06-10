import React from "react";
import PropTypes from "prop-types";

const App = ({ message }) => {
  return <div>{message}</div>;
};

App.propTypes = {
  message: PropTypes.string
};

App.defaultProps = {
  message: "Hello"
};

export default App;
