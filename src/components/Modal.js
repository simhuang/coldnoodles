import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";

import ModalRoot from "../components/ModalRoot";

import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";

const styles = theme => ({
  root: {
    padding: "20px",
    width: "396px",
    [theme.breakpoints.down("xs")]: {
      width: "auto"
    }
  }
});

class Modal extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    onClose: PropTypes.func
  };

  render() {
    const { classes, onClose, isOpen } = this.props;
    return (
      <ModalRoot>
        <Dialog
          variant="outlined"
          open={isOpen}
          onClose={onClose}
          aria-labelledby="oo-form-dialog"
        >
          <DialogContent classes={classes}>{this.props.children}</DialogContent>
        </Dialog>
      </ModalRoot>
    );
  }
}

export default withStyles(styles)(Modal);
