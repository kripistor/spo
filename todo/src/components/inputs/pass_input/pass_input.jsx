import {Input} from '@mui/base';
import './pass_input.css';

function PassInput({ value, onChange }) {
    return (
        <div className="pass-input">
            <Input
                value={value}
                onChange={onChange}
                slotProps={{
                    root: {className: "rounded-input-container"},
                    input: {
                        className: "transparent-input-style transparent-input-style::placeholder",
                        placeholder: "Введите пароль",
                        type: "password"
                    },
                }}
            />
        </div>
    );
}

export default PassInput