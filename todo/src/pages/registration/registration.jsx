import {useState} from "react";
import {useNavigate} from "react-router-dom";
import RegistrationManager from "../../components/registration_manager/registration_manager";
import okImage from '../../assets/img/okey.svg';
import './registration.css';
import UsersService from "../../api/UserService";

const RegistrationPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleRegister = async () => {
        try {
            const response = await UsersService.register({
                email: email,
                password: password,
                username: username
            });
            if (response.status === 201) {
                navigate('/login');
            }
        } catch (error) {
            console.error(error);
            if (error.response) {
                console.log('Статус ошибки:', error.response.status);
                if (error.response.status === 422) {
                    setError('введите корректный email и пароль');
                }else if (error.response.status === 400) {
                    setError('пользователь с таким email уже существует');
                }
            }
        }
    }

    return (
        <div className="task-list-container-registration">
            <div className="task-container-login">
                <RegistrationManager
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
                    username={username}
                    setUsername={setUsername}
                    handleRegister={handleRegister}
                />
                {error && <div className="error-message">{error}</div>}
                <div className="task-image-container">
                    <img
                        src={okImage}
                        className="image-container"
                        onClick={handleRegister}
                    />
                </div>
            </div>
        </div>
    );
}

export default RegistrationPage;