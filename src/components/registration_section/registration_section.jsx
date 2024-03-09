import RegistrationForm from "../registration_form/registration_form";
import './registration_section.css';

function RegistrationSection() {
    return (
        <div className="registration-section">
            <p className="registration-heading-text-style">Регистрация</p>
            <RegistrationForm />
        </div>
    );
}
export default RegistrationSection