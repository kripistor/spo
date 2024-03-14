import LoginForm from '../login_form/login_form';
import './login_section.css';

function LoginSection({email, setEmail, password, setPassword}) {
    return (
        <div className="login-section">
            <p className="login-heading-text-style">Войти</p>
            <LoginForm
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}/>
        </div>
    );
}

export default LoginSection