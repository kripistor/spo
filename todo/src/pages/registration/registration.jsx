import RegistrationManager from "../../components/registration_manager/registration_manager";
import nextImage from '../../assets/img/next.svg';
import './registration.css';
import {useState} from "react";
import UserService from "../../api/UserService";
import {useNavigate} from "react-router-dom";

const RegistrationPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    const handleRegister = async () => {
        try {
            const response = await UserService.register({email, password, username});
            if (response.status === 200) {
                navigate('/login');
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="task-list-container-registration">
            <div className="task-container-registration">
                <RegistrationManager
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
                    username={username}
                    setUsername={setUsername}
                    handleRegister={handleRegister}
                />
                <div className="task-image-container">
                    <img
                        src={nextImage}
                        className="image-container"
                        onClick={handleRegister}
                    />
                </div>
            </div>
        </div>
    );
}

export default RegistrationPage;