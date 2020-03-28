import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import * as firebase from "firebase";
import thunk from "redux-thunk";
import { ThemeProvider } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import firebaseConfig from "../../firebase.json";
import CodeNamesTheme from "../themes/codenameTheme";

import reducers from "../reducers";

import MainContainer from "./MainContainer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  undefined,
  composeEnhancers(applyMiddleware(thunk))
);

class App extends React.Component {
  state = {
    ready: false
  };

  componentDidMount() {
    /**
     * This code initialize the firebase server. Make
     * sure a firebase instance is created and that firebase.json
     * contains all the proper credentials
     */
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
    console.log("server: firebase initialized...");
    this.setState({ ready: true });
  }
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={CodeNamesTheme}>
          {this.state.ready ? (
            <MainContainer />
          ) : (
            <Typography variant="h1">Loading...</Typography>
          )}
        </ThemeProvider>
      </Provider>
    );
  }
}

export default App;
