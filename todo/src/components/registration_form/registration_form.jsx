import LoginInput from "../inputs/ login_input/login_input";
import PassInput from "../inputs/pass_input/pass_input";
import UserInput from "../inputs/user_input/user_input";
import './registration_form.css';

function RegistrationForm({email, setEmail, password, setPassword, username, setUsername}) {
    return (
        <div className="registration-form-container">
            <LoginInput value={email} onChange={e => setEmail(e.target.value)}/>
            <PassInput value={password} onChange={e => setPassword(e.target.value)}/>
            <UserInput value={username} onChange={e => setUsername(e.target.value)}/>
        </div>
    );
}

export default RegistrationForm