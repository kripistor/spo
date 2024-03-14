import LoginSection from "../login_section/login_section";
import './login_manager.css';

function LoginManager({email, setEmail, password, setPassword}) {
    return (
        <div className="task-list-login">
            <p className="main-title-text-login">To Do</p>
            <LoginSection
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
            />
        </div>
    );
}
export default LoginManager