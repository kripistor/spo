import LoginInput from "../inputs/ login_input/login_input";
import PassInput from "../inputs/pass_input/pass_input";
import UserInput from "../inputs/user_input/user_input";
import './registration_form.css';

function RegistrationForm() {
    return (
        <div className="registration-form-container">
            <LoginInput />
            <PassInput />
            <UserInput />
        </div>
    );
}
export default RegistrationForm