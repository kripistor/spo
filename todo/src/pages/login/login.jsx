import LoginManager from "../../components/login_manager/login_manager";
import nextImage from '../../assets/img/next.svg';
import './login.css';
import {useState} from "react";
import UserService from "../../api/UserService";
import {useNavigate} from "react-router-dom";

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleLogin = async () => {
        try {
            const response = await UserService.login({email, password});
            console.log(response);
            if (response.status === 204) {
                navigate('/cabinet');


            }
        } catch (error) {
            console.error(error);

        }
    };
    return (
        <div className="task-list-container-login">
            <div className="task-container-login">
                <LoginManager
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
                    handleRegister={handleLogin}
                />
                <div className="task-image-container">
                    <img
                        src={nextImage}
                        className="image-container"
                        onClick={handleLogin}
                    />
                </div>
            </div>
        </div>
    );
}

export default LoginPage;