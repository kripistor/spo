import LoginManager from "../../components/login_manager/login_manager";
import nextImage from '../../assets/img/next.svg';
import './login.css';

const LoginPage = () => {
    return (
        <div className="task-list-container-login">
            <div className="task-container-login">
                <LoginManager/>
                <div className="task-image-container">
                    <img
                        src={nextImage}
                        className="image-container"
                    />
                </div>
            </div>
        </div>
    );
}

export default LoginPage;