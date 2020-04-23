import React, { Component } from "react";
import { PersonPage } from "../../sw-component/index";
import { withRouter } from "react-router-dom";

class PeoplePage extends Component {
  render() {
    const { history } = this.props;

    return (
      <PersonPage
        onSelectedItem={(id) => {
          history.push(`/people/${id}`);
        }}
      />
    );
  }
}

export default withRouter(PeoplePage);
