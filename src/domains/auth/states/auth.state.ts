import {atom} from "recoil/dist";
import PassportModel from "@skeleton/domain/auth/models/passport.model";
import LoginDto from "@skeleton/domain/auth/models/dtos/login.dto";

export interface AuthState {
    authUser: PassportModel | null;
    loginFormValue: LoginDto | null;
    isLoading: boolean;
}

export const AUTH_STATE = atom<AuthState>({
    key: "AUTH_STATE",
    default: {
        authUser: null,
        loginFormValue: null,
        isLoading: false
    }
})