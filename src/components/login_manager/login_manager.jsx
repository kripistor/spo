import LoginSection from "../login_section/login_section";
import './login_manager.css';

function LoginManager() {
    return (
        <div className="task-list-login">
            <p className="main-title-text-login">To Do</p>
            <LoginSection />
        </div>
    );
}
export default LoginManager