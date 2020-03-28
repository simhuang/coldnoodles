import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";

import Modal from "../components/Modal";
import InputField from "../ui_components/InputField";
import PrimaryButton from "../ui_components/PrimaryButton";

class CreateGameModal extends React.Component {
  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired
  };

  state = {
    gameName: ""
  };

  onChange = e => {
    this.setState({ gameName: e.target.value });
  };

  handleOnClick = () => {
    console.log(`created new game ${this.state.gameName}`);
    this.props.createGame(this.state.gameName);
    this.props.onClose();
    this.setState({ gameName: "" });
  };

  render() {
    const { isOpen, onClose } = this.props;
    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <Typography variant="h1">Create New Game</Typography>
        <InputField
          placeholder="Enter a game name"
          value={this.state.gameName}
          onChange={this.onChange}
        />
        <PrimaryButton
          label="Create Game"
          onClick={this.handleOnClick}
          disabled={this.state.gameName === ""}
          fullWidth
        />
      </Modal>
    );
  }
}

export default CreateGameModal;
