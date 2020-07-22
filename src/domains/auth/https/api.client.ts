import HttpClient from "@skeleton/core/http_client/client.http";
import LoginDto from "@skeleton/domain/auth/models/dtos/login.dto";
import PassportModel from "@skeleton/domain/auth/models/passport.model";

class AuthApiClient extends HttpClient {
    public async login(payload: LoginDto) : Promise<PassportModel> {
        return Promise.resolve<PassportModel>({
            name: "Dummy Target",
            email: "Dummy Email",
            role: "Dummy Role"
        });
    }
}

export default AuthApiClient;