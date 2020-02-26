import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./routes";
import "./App.css";
import "./assets/themekit/css/bootstrap-grid.css";
import "./assets/themekit/css/style.css";
import "./assets/themekit/css/glide.css";
import "./assets/themekit/css/magnific-popup.css";
import "./assets/themekit/css/content-box.css";
import "./assets/themekit/css/contact-form.css";
import "./assets/themekit/css/media-box.css";

export default function App() {
  return (
    <Fragment>
        <Router>
          <Switch>
            {routes.map(route => {
              return (
                <Route
                  exact
                  key={route.path}
                  path={route.path}
                  component={route.component}
                />
              );
            })}
          </Switch>
        </Router>
    </Fragment>
  );
}
