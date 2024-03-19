import axios from 'axios';
import Cookies from 'js-cookie';

let serverPath = "";

serverPath = "http://localhost:8000";
axios.defaults.withCredentials = true;

const token = Cookies.get('token');
if (token) {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
}
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
            withCredentials: true
        });
        if (response.status === 200) {
            Cookies.set('token', response.data.access_token);
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + Cookies.get('token');
        }
        return response;
    }

    static async getUserData() {
        if (!Cookies.get('token')) {
            return null;
        }
        const response = await axios.get(`${serverPath}/api/v1/users/me`);
        return response.data;
    }

    static logout() {
        Cookies.remove('token');
        delete axios.defaults.headers.common['Authorization'];
    }
}
