import React, {Fragment, createRef, RefObject} from "react";
import LoginForm from "@skeleton/web/modules/auth/components/login.form";
import FormValue from "@skeleton/core/form/contracts/form-value.contract";
import LoginDto from "@skeleton/domain/auth/models/dtos/login.dto";
import { withRouter } from 'react-router-dom';
import {AuthLoginService} from "@skeleton/domain/auth/services/auth.service";

const LoginFormContainer = (props: any) => {
    const loginForm: RefObject<any> = createRef<any>();

    const handleOnSignUp = async () => {
        const result: FormValue<LoginDto> = loginForm.current.submit();

        const res = await AuthLoginService(result.data);

        console.log(result, res);
    }

    return (
        <Fragment>
            <LoginForm formRef={loginForm} />

            <div>
                <button
                    className="w-full btn-primary font-bold py-2 px-4 rounded"
                    type="button"
                    onClick={handleOnSignUp}>
                    Sign Up
                </button>
            </div>
        </Fragment>
    );
}

export default withRouter(LoginFormContainer);