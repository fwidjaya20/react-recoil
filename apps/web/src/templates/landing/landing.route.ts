import {Route} from "@skeleton/core/router/contracts/route.contract";
import {GuestGuard} from "@skeleton/domain/auth/guards/guest.guard";
import {AUTH_ROUTES} from "@skeleton/web/modules/auth/public/auth.route";

const routes: Route[] = [
    {
        path: "/landing/auth",
        canActivate: [GuestGuard],
        children: [
            ...AUTH_ROUTES
        ]
    }
];

export const LANDING_ROUTES: Route[] = routes;