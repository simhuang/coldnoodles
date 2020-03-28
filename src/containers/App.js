import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import * as firebase from "firebase";
import firebaseConfig from "../../firebase.json";

import reducers from "../reducers";

import MainContainer from "./MainContainer";

// const store = createStore(reducers);

class App extends React.Component {
  componentDidMount() {
    /**
     * This code initialize the firebase server. Make
     * sure a firebase instance is created and that firebase.json
     * contains all the proper credentials
     */
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  }
  render() {
    return (
      // <Provider store={store}>
      <MainContainer />
      // </Provider>
    );
  }
}

export default App;
