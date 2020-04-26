import React, { Component } from "react";
import { StarshipsDetails } from "../../sw-component/index";
import { withRouter } from "react-router-dom";

class StarshipsPage extends Component {
  render() {
    const { match } = this.props;
    const { id } = match.params.id;

    return <StarshipsDetails itemId={Number(id)} />;
  }
}

export default withRouter(StarshipsPage);
