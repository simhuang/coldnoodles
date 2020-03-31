import React, { Fragment } from "react";
import PropTypes from "prop-types";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

class SpyMasterToggle extends React.Component {
  static propTypes = {
    checked: PropTypes.bool,
    onChange: PropTypes.func,
    disabled: PropTypes.bool
  };

  render() {
    const { checked, onChange, disabled } = this.props;
    return (
      <Fragment>
        <FormControlLabel
          control={
            <Checkbox
              checked={checked}
              disabled={disabled}
              onChange={onChange}
            />
          }
          label="I am the spy master"
        />
      </Fragment>
    );
  }
}

export default SpyMasterToggle;
