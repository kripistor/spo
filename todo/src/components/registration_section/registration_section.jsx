import RegistrationForm from "../registration_form/registration_form";
import './registration_section.css';

function RegistrationSection({email, setEmail, password, setPassword}) {
    return (
        <div className="registration-section">
            <p className="registration-heading-text-style">Регистрация</p>
            <RegistrationForm
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
            />
        </div>
    );
}
export default RegistrationSection