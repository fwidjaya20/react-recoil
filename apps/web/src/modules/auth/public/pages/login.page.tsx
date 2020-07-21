import React, { PureComponent } from "react";
import { NavLink } from "react-router-dom";
import "@skeleton/web/modules/auth/public/pages/style.scss";

class LoginPage extends PureComponent<any, any> {
    render() {
        return (
            <section className="container mx-auto">
                <div className="landing-form landing-box">
                    <div className="landing-box logo">
                        <i className="fa fa-lock" />
                    </div>

                    <h2 className="text-center text-xl"> Login </h2>

                    <form noValidate={true}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="form-field appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight"
                                id="email"
                                type="text"
                                placeholder="eg. john@hotmail.com" />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input
                                className="form-field appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight"
                                id="password"
                                type="password"
                                placeholder="******************" />
                        </div>
                    </form>
                    <div>
                        <button
                            className="w-full btn-primary font-bold py-2 px-4 rounded"
                            type="button">
                            Sign Up
                        </button>
                    </div>
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