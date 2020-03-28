import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      width: 400
    }
  }
}));

const InputField = ({ value, onChange, placeholder }) => {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id="outlined-basic"
        value={value}
        onChange={onChange}
        label={placeholder}
        variant="outlined"
      />
    </form>
  );
};

export default InputField;
