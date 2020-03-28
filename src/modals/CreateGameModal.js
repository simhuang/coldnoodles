import React from "react";
import PropTypes from "prop-types";

import Modal from "../components/Modal";

class CreateGameModal extends React.Component {
  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired
  };

  render() {
    const { isOpen, onClose } = this.props;
    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <div>This is the create game mODAL</div>
      </Modal>
    );
  }
}

export default CreateGameModal;
