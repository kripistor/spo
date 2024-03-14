import {Input} from '@mui/base';
import './login_input.css';

function LoginInput({value, onChange}) {
    return (
        <div className="login-input">
            <Input
                value={value}
                onChange={onChange}
                slotProps={{
                    root: {className: "rounded-input-container"},
                    input: {
                        className: "transparent-input-style transparent-input-style::placeholder",
                        placeholder: "Введите логин/email",
                        type: "text"
                    },
                }}
            />
        </div>
    );
}

export default LoginInput