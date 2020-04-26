import React, { Component } from "react";
import { PersonDetails } from "../../sw-component/index";
import { withRouter } from "react-router-dom";

class PersonsPage extends Component {
  render() {
    const { match } = this.props;
    const { id } = match.params.id;

    return <PersonDetails itemId={Number(id)} />;
  }
}

export default withRouter(PersonsPage);
