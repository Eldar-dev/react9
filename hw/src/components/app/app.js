import React, { Component } from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorButton from "../error-button";
import ErrorIndicator from "../error-indicator";
import SwapiService from "../../services/swapi-service";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { SwapiServiceProvider } from "../../context";
import PeoplePage from "../pages/people-page";
import PersonsPage from "../pages/persons-page";
import PlanetsPages from "../pages/planets-pages";
import PlanetsPage from "../pages/planets-page";
import StarshipsPages from "../pages/starships-pages";
import StarshipsPage from "../pages/starships-page";
import SecretPage from "../pages/secret-page";

import "./app.css";

export default class App extends Component {
  swapiService = new SwapiService();

  state = {
    showRandomPlanet: true,
    error: false,
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet,
      };
    });
  };

  componentDidCatch() {
    this.setState({
      error: true,
    });
  }

  render() {
    if (this.state.error) {
      return <ErrorIndicator />;
    }

    const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;

    return (
      <SwapiServiceProvider value={this.swapiService}>
        <Router>
          <React.Fragment>
            <Header />
            {planet}
            <button
              className="toggle-planet btn btn-warning btn-lg"
              onClick={this.toggleRandomPlanet}
            >
              Toggle Random Planet
            </button>
            <ErrorButton />
            <Switch>
              <Route path="/star" render={() => <h1>Welcome!</h1>} exact />
              <Route path="/people" component={PeoplePage} exact />
              <Route path="/people/:id?" component={PersonsPage} />
              <Route path="/planets" component={PlanetsPages} exact />
              <Route path="/planets/:id?" component={PlanetsPage} />
              <Route path="/starships" component={StarshipsPages} exact />
              <Route path="/starships/:id?" component={StarshipsPage} />
              <Route path="/secret" component={SecretPage} />
              <Route render={() => <h1>Page not found!</h1>} />
            </Switch>
          </React.Fragment>
        </Router>
      </SwapiServiceProvider>
    );
  }
}
