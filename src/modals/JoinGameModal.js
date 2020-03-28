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
    this.props.joinGame(this.state.gameName);
    this.props.onClose();
  };

  render() {
    const { isOpen, onClose } = this.props;
    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <Typography variant="h1">Create New Game</Typography>
        <InputField
          placeholder="Enter a name"
          value={this.state.nickName}
          onChange={this.onChange}
        />
        <PrimaryButton
          label="Join Game"
          onClick={this.handleOnClick}
          disabled={this.state.gameName === ""}
          fullWidth
        />
      </Modal>
    );
  }
}

export default JoinGameModal;
