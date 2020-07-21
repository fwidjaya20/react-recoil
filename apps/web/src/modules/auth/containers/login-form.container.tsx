import React, {PureComponent, Fragment, createRef, RefObject} from "react";
import LoginForm from "@skeleton/web/modules/auth/components/login.form";
import FormValue from "@skeleton/core/form/contracts/form-value.contract";
import LoginDto from "@skeleton/domain/auth/models/dtos/login.dto";
import { withRouter } from 'react-router-dom';

class LoginFormContainer extends PureComponent<any, any> {
    private readonly loginForm: RefObject<any>;

    constructor(props) {
        super(props);
        this.loginForm = createRef<any>();
    }

    render() {
        return (
            <Fragment>
                <LoginForm formRef={this.loginForm} />

                <div>
                    <button
                        className="w-full btn-primary font-bold py-2 px-4 rounded"
                        type="button"
                        onClick={this.handleOnSignUp}>
                        Sign Up
                    </button>
                </div>
            </Fragment>
        )
    }

    handleOnSignUp = () => {
        const result: FormValue<LoginDto> = this.loginForm.current.submit();

        if (result.status) {
            /**
             * TODO :
             * 1. Simulate Hit API
             * 2. Save API response to Recoil State Management
             */
            this.props.history.replace("/");
        }
    }
}

export default withRouter(LoginFormContainer);