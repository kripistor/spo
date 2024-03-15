import axios from 'axios';
import Cookies from 'js-cookie';

let serverPath = "";

serverPath = "http://localhost:8000"
axios.defaults.withCredentials = true;

export default class UserService {
    static async register(data) {
        const payload = {
            email: data.email,
            password: data.password,
            is_active: true,
            is_superuser: false,
            is_verified: false,
            username: data.username
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
            },
            withCredentials: true
        });
        return response;
    }

    static async getUserData() {
        if (!Cookies.get('fastapiusersauth')) {
            return null;
        }
        const response = await axios.get(`${serverPath}/api/v1/users/me`, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    }


}