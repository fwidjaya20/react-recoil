import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AppTemplate from "@skeleton/web/templates/app/app.template"
import LandingTemplate from "@skeleton/web/templates/landing/landing.template";
import WebTemplate from "@skeleton/web/templates/web/web.template";
import "@skeleton/web/style.scss";

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