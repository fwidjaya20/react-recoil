import React, {ReactNode, useState} from "react";
import FormComponent from "@skeleton/core/form/components/form.component";
import LoginDto from "@skeleton/domain/auth/models/dtos/login.dto";
import FormValue from "@skeleton/core/form/contracts/form-value.contract";

class LoginForm extends FormComponent<LoginDto> {

    render() {
        const { state, handleChange } = this.props;
        return (
            <form noValidate={true}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="form-field appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight"
                        id="email"
                        type="text"
                        value={state.email}
                        onChange={handleChange}
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
                        value={state.password}
                        onChange={handleChange}
                        placeholder="******************" />
                </div>
            </form>
        );
    }
}

function withLoginFormHook(Component) {
    return function(props) {
        const [state, setState] = useState<LoginDto>({
            email: "",
            password: ""
        });
        const handleChange = (e) => {
            const {id , value} = e.target
            setState(prevState => ({
                ...prevState,
                [id] : value
            }))
        }
        return <Component ref={props.formRef} {...{state, handleChange}} />
    }
}

export default withLoginFormHook(LoginForm);