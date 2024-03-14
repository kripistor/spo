import axios from 'axios';

let serverPath = "";

serverPath = "http://localhost:8000"

export default class UserService {
    static async register(data) {
        const payload = {
            email: data.email,
            password: data.password,
            is_active: true,
            is_superuser: false,
            is_verified: false
        };
        console.log(payload)
        return await axios.post(`${serverPath}/api/v1/auth/register`, payload);
    }

    static async login(data) {
        const params = new URLSearchParams();
        params.append('username', data.email);
        params.append('password', data.password);

        const response = await axios.post(`${serverPath}/api/v1/auth/jwt/login`, params, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });

        console.log(response)
        if (response.status === 200 || response.status === 204) {
            console.log('User successfully logged in');
            // Сохраняем токен в куки
            document.cookie = `access_token=${response.data.access_token}; path=/`;
        } else {
            console.log('Failed to log in');
        }

        return response;
    }
}