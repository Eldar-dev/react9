import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class SecretPage extends Component {
  state = {
    isLoggedIn: false,
  };
  render() {
    if (!this.state.isLoggedIn) {
      return <Redirect to="/Star" />;
    }

    return <h1>Secret Page</h1>;
  }
}

export default SecretPage;
