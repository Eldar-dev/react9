import React, { Component } from "react";
import { PlanetDetails } from "../../sw-component/index";
import { withRouter } from "react-router-dom";

class PlanetsPage extends Component {
  render() {
    const { match } = this.props;
    const { id } = match.params.id;

    return <PlanetDetails itemId={Number(id)} />;
  }
}

export default withRouter(PlanetsPage);
