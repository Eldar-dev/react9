import React, { Component } from "react";
import { StarshipPage } from "../../sw-component/index";
import { withRouter } from "react-router-dom";

class StarshipsPages extends Component {
  render() {
    const { history } = this.props;
    return (
      <StarshipPage
        onSelectedItem={(id) => {
          history.push(`/starships/${id}`);
        }}
      />
    );
  }
}

export default withRouter(StarshipsPages);
