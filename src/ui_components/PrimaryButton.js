import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";

const PrimaryButton = ({ onClick, label, disabled }) => {
  return (
    <Button
      size="large"
      variant="contained"
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </Button>
  );
};

PrimaryButton.propTypes = {
  onClick: PropTypes.func,
  label: PropTypes.string,
  disabled: PropTypes.bool
};

export default PrimaryButton;
