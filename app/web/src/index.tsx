import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AppTemplate from "./templates/app/app.template"
import LandingTemplate from "./templates/landing/landing.template";
import WebTemplate from "./templates/web/web.template";
import "./style.scss";

ReactDOM.render(
    <BrowserRouter basename="/">
        <Switch>
            <Route path="/apps" component={AppTemplate} />
            <Route path="/landing" component={LandingTemplate} />
            <Route path="/" component={WebTemplate} />
        </Switch>
    </BrowserRouter>,
    document.getElementById("root")
);