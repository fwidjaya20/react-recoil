import {AUTH_STATE} from "@skeleton/domain/auth/states/auth.state";
import {selector} from "recoil";
import AuthApiClient from "@skeleton/domain/auth/https/api.client";
import Service from "@skeleton/core/service/service";
import LoginDto from "@skeleton/domain/auth/models/dtos/login.dto";
import PassportModel from "@skeleton/domain/auth/models/passport.model";

interface IAuthService {
    login(payload: LoginDto) : Promise<PassportModel>
}

class AuthService extends Service implements IAuthService {
    private client : AuthApiClient;

    constructor() {
        super();
        this.client = new AuthApiClient("http://localhost:8000/api/auth");
    }

    public async login(payload: LoginDto): Promise<PassportModel> {
        const res = await this.client.login(payload);
        return Promise.resolve(res);
    }
}

export default AuthService;