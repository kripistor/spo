import RegistrationManager from "../../components/registration_manager/registration_manager";
import okImage from '../../assets/img/okey.svg';
import './registration.css';

const RegistrationPage = () => {
    return (
        <div className="task-list-container-registration">
            <div className="task-container-login">
                <RegistrationManager/>
                <div className="task-image-container">
                    <img
                        src={okImage}
                        className="image-container"
                    />
                </div>
            </div>
        </div>
    );
}

export default RegistrationPage;