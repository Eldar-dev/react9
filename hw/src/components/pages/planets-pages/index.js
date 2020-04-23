import React, { Component } from "react";
import { PlanetPage } from "../../sw-component/index";
import { withRouter } from "react-router-dom";

class PlanetsPages extends Component {
  render() {
    const { history } = this.props;
    return (
      <PlanetPage
        onSelectedItem={(id) => {
          history.push(`/planets/${id}`);
        }}
      />
    );
  }
}

export default withRouter(PlanetsPages);
