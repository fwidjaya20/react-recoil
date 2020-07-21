import React, { PureComponent } from "react";
import { NavLink } from "react-router-dom";
import "@skeleton/web/modules/auth/public/pages/style.scss";
import LoginFormContainer from "@skeleton/web/modules/auth/containers/login-form.container";

class LoginPage extends PureComponent<any, any> {

    render() {
        return (
            <section className="container mx-auto">
                <div className="landing-form landing-box">
                    <div className="landing-box logo">
                        <i className="fa fa-lock" />
                    </div>

                    <h2 className="text-center text-xl"> Login </h2>

                    <LoginFormContainer />
                </div>

                <div className="text-center">
                    Doesn't have an account ?{' '}
                    <NavLink to="/landing/auth/register"> Register Here. </NavLink>
                </div>
            </section>
        );
    }
}

export default LoginPage;