import React, { memo } from "react";
import { Switch, Route as ReactRoute } from "react-router-dom";
import { Route } from "@skeleton/core/router/contracts/route.contract";
import AsyncComponent from "@skeleton/shared/async-page/async.page";
import {routeFactory} from "@skeleton/core/router/utils/factory";

interface OutletProps {
    routes: Route[];
}

const Outlet = (props: OutletProps) => {
    return (
        <Switch>
            {routeFactory(props.routes)}
            <ReactRoute
                component={AsyncComponent(
                    () => import('@skeleton/shared/pages/not-found.page'),
                    [],
                )}
            />
        </Switch>
    );
};

export const RouterOutlet = memo(Outlet);