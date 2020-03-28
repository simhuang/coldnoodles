import { createMuiTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";

export const SALMON = "#FA8072";
export const WHITE = "#000";

const theme = createMuiTheme({
  palette: {
    primary: { main: SALMON, contrastText: WHITE },
    secondary: green
  },
  status: {
    danger: "orange"
  },
  typography: {
    h1: {
      fontSize: 24,
      color: SALMON
    },
    h2: {}
  }
});

export default theme;
