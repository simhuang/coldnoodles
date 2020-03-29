import React from "react";

import Typography from "@material-ui/core/Typography";

import Modal from "../components/Modal";
import InputField from "../ui_components/InputField";
import PrimaryButton from "../ui_components/PrimaryButton";

class JoinGameModal extends React.Component {
  state = {
    nickName: ""
  };

  onChange = e => {
    this.setState({ nickName: e.target.value });
  };

  handleOnClick = () => {
    this.props.joinGame();
    this.props.onClose();
  };

  render() {
    const { isOpen, onClose } = this.props;
    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <Typography variant="h1">Join Game</Typography>
        <InputField
          placeholder="Choose Your Name"
          value={this.state.nickName}
          onChange={this.onChange}
        />
        <PrimaryButton
          label="Join Game"
          onClick={this.handleOnClick}
          disabled={this.state.nickName === ""}
          fullWidth
        />
      </Modal>
    );
  }
}

export default JoinGameModal;
