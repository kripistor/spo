import LoginForm from '../login_form/login_form';
import './login_section.css';

function LoginSection() {
    return (
        <div className="login-section">
            <p className="login-heading-text-style">Войти</p>
            <LoginForm />
        </div>
    );
}
export default LoginSection