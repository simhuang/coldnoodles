import React from "react";

import Modal from "../components/Modal";

class JoinGameModal extends React.Component {
  render() {
    const { onClose } = this.props;
    return (
      <Modal onClose={onClose}>
        <div>hello world</div>
      </Modal>
    );
  }
}

export default JoinGameModal;
