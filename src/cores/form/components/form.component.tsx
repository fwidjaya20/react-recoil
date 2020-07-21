import {PureComponent, Ref} from "react";
import FormValue from "@skeleton/core/form/contracts/form-value.contract";

interface FormComponentProps {
    formRef: Ref<FormValue<any>>
    state: any;
    handleChange: any;
}

abstract class FormComponent<T> extends PureComponent<FormComponentProps, any> {
    submit(): FormValue<T> {
        return {
            data: this.props.state,
            status: true
        };
    }
}

export default FormComponent;