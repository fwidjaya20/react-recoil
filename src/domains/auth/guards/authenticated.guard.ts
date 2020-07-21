export async function AuthenticateGuard(): Promise<boolean | string> {
    const token = localStorage.getItem('_token');

    if (!token) {
        return '/landing/auth/login';
    }

    return true;
}