import LoginDto from "@skeleton/domain/auth/models/dtos/login.dto";
import PassportModel from "@skeleton/domain/auth/models/passport.model";
import {AUTH_STATE, AuthState} from "@skeleton/domain/auth/states/auth.state";
import {selector, useRecoilValue, useSetRecoilState} from "recoil/dist";
import AuthApiClient from "@skeleton/domain/auth/https/api.client";

export function AuthLoginService(payload: LoginDto) {
    const setState = useSetRecoilState<AuthState>(AUTH_STATE);

    return function () {
        setState((state) => {
            return {
                ...state,
                isLoading: true
            }
        })
        console.log("Hore hing")
    }
}

export const FooSvc = async function (payload: LoginDto): Promise<PassportModel> {
    const client : AuthApiClient = new AuthApiClient("http://localhost:8000/api/auth");

    const setState = useSetRecoilState<AuthState>(AUTH_STATE);
    setState((state) => {
        return {
            ...state,
            isLoading: true
        }
    })

    let result : PassportModel;

    const loginSelector = selector({
        key: "LOGIN_SELECTOR",
        get: async ({get}) => {
            return await client.login(payload);
        }
    })

    const loginResult = useRecoilValue(loginSelector)
    console.log(loginResult);

    setState((state) => {
        return {
            ...state,
            isLoading: false
        }
    })

    return result;
}