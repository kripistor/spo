import RegistrationSection from "../registration_section/registration_section";
import './registration_manager.css';

function RegistrationManager() {
    return (
        <div className="task-list-registration">
            <p className="main-title-text-registration">To Do</p>
            <RegistrationSection />
        </div>
    );
}
export default RegistrationManager