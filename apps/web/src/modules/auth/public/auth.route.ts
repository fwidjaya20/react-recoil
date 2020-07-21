import {Route} from "@skeleton/core/router/contracts/route.contract";

const routes: Route[] = [
    {
        path: "/login",
        component: "modules/auth/public/pages/login.page"
    },
    {
        path: "/register",
        component: "modules/auth/public/pages/register.page"
    }
];

export const AUTH_ROUTES: Route[] = routes;