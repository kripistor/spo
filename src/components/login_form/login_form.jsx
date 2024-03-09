import LoginInput from "../inputs/ login_input/login_input";
import PassInput from "../inputs/pass_input/pass_input";
import { Link } from 'react-router-dom';
import './login_form.css';

function LoginForm() {
    return (
        <div className="login-form-container">
            <LoginInput />
            <PassInput />
            <Link to="/registration" className="login-heading">Зарегистрироваться</Link>
        </div>
    );
}
export default LoginForm