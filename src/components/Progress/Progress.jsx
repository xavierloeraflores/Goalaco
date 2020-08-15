import React from "react";
import styles from "./Progress.module.css";
import PropTypes from "prop-types";

const Progress = ({ value, max }) => {
  return <progress value={value} max={max} />;
};

Progress.propTypes = {
  value: PropTypes.number.isRequired,
  max: PropTypes.number,
};

Progress.defaultProps = {
  max: 100,
};
export default Progress;
