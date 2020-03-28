import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import * as firebase from "firebase";
import { ThemeProvider } from "@material-ui/core/styles";

import firebaseConfig from "../../firebase.json";
import CodeNamesTheme from "../themes/codenameTheme";

import reducers from "../reducers";

import MainContainer from "./MainContainer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  undefined,
  composeEnhancers(applyMiddleware())
);

class App extends React.Component {
  componentDidMount() {
    /**
     * This code initialize the firebase server. Make
     * sure a firebase instance is created and that firebase.json
     * contains all the proper credentials
     */
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
    console.log("server: firebase initialized...");
  }
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={CodeNamesTheme}>
          <MainContainer />
        </ThemeProvider>
      </Provider>
    );
  }
}

export default App;
