import React, {PureComponent, Fragment} from "react";
import { NavLink } from 'react-router-dom';
import {RouterOutlet} from "@skeleton/core/router/outlet";
import {LANDING_ROUTES} from "@skeleton/web/templates/landing/landing.route";
import "@skeleton/web/templates/landing/landing.template.scss";

class LandingTemplate extends PureComponent<any, any> {
    render() {
        return (
            <Fragment>
                <section className="landing-top-bar flex justify-center items-center">
                    <NavLink to="/" className="logo">
                        <img
                            src="../../../../../public/images/logo-light.png"
                            alt="Skeleton Logo"
                        />
                    </NavLink>
                </section>

                <RouterOutlet routes={LANDING_ROUTES} />
            </Fragment>
        );
    }
}

export default LandingTemplate;