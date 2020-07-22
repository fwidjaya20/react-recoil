import React, {Fragment, createRef, RefObject} from "react";
import LoginForm from "@skeleton/web/modules/auth/components/login.form";
import FormValue from "@skeleton/core/form/contracts/form-value.contract";
import LoginDto from "@skeleton/domain/auth/models/dtos/login.dto";
import { withRouter } from 'react-router-dom';
import {useRecoilState} from "recoil";
import {AUTH_STATE, AuthState} from "@skeleton/domain/auth/states/auth.state";
import AuthService from "@skeleton/domain/auth/services/auth.service";
import PassportModel from "@skeleton/domain/auth/models/passport.model";

const LoginFormContainer = (props: any) => {
    const loginForm: RefObject<any> = createRef<any>();
    const [state, setState] = useRecoilState<AuthState>(AUTH_STATE);
    const service = new AuthService();

    const handleOnSignUp = async () => {
        const result: FormValue<LoginDto> = loginForm.current.submit();

        if (result.status) {
            setState((state) => {
                return {
                    ...state,
                    isLoading: true
                }
            })

            await setTimeout(async () => {
                const res : PassportModel = await service.login(result.data);

                setState((state) => {
                    return {
                        ...state,
                        loginFormValue: null,
                        authUser: res,
                        isLoading: false
                    }
                })

                props.history.replace("/");
            }, 3000)
        }
    }

    return (
        <Fragment>
            <LoginForm formRef={loginForm} />

            <div>
                <button
                    className="w-full btn-primary font-bold py-2 px-4 rounded"
                    type="button"
                    disabled={state.isLoading}
                    onClick={handleOnSignUp}>
                    { state.isLoading ? "Loading" : "Sign Up" }
                </button>
            </div>
        </Fragment>
    );
}

export default withRouter(LoginFormContainer);