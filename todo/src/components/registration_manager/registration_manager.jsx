import RegistrationSection from "../registration_section/registration_section";
import './registration_manager.css';

function RegistrationManager({email, setEmail, password, setPassword}) {
    return (
        <div className="task-list-registration">
            <p className="main-title-text-registration">To Do</p>
            <RegistrationSection
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
            />
        </div>
    );
}
export default RegistrationManager