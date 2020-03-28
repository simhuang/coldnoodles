import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import * as firebase from "firebase";

import reducers from "../reducers";

import MainContainer from "./MainContainer";

// const store = createStore(reducers);

class App extends React.Component {
  componentDidMount() {
    console.log("hello");
    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyBFBxGwurpGs-YDkgNg1H2Y7W_uLHi8ZKc",
      authDomain: "coldnoodles-6a047.firebaseapp.com",
      databaseURL: "https://coldnoodles-6a047.firebaseio.com",
      projectId: "coldnoodles-6a047",
      storageBucket: "coldnoodles-6a047.appspot.com",
      messagingSenderId: "94617644493",
      appId: "1:94617644493:web:db069eabc511a351c46884",
      measurementId: "G-N771JYHSJC"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

    const firestore = firebase.firestore();
    firestore
      .collection("set")
      .doc("0")
      .set({ name: "hello" });
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
