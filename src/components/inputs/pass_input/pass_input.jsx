import {Input} from '@mui/base';
import './pass_input.css';

function PassInput() {
    return (
        <div className="pass-input">
            <Input
                slotProps={{
                    root: {className: "rounded-input-container"},
                    input: {
                        className: "transparent-input-style transparent-input-style::placeholder",
                        placeholder: "Введите пароль",
                        type: "text"
                    },
                }}
            />
        </div>
    );
}

export default PassInput