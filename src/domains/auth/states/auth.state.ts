import {atom} from "recoil/dist";
import PassportModel from "@skeleton/domain/auth/models/passport.model";

export interface AuthState {
    authUser: PassportModel | null;
    isLoading: boolean;
}

export const AUTH_STATE = atom<AuthState>({
    key: "AUTH_STATE",
    default: {
        authUser: null,
        isLoading: false
    }
})