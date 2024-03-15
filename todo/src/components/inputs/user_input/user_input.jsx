import { Input } from '@mui/base';
import './user_input.css';

function UserInput({ value, onChange}) {
    return (
        <div className="hierarchical-text-container">
            <Input
                value={value}
                onChange={onChange}
                slotProps={{ root: { className: "rounded-input-with-text" }, input: { className: "transparent-input-style transparent-input-style::placeholder", placeholder: "Введите имя", type: "text" } }}
            />
        </div>
    );
}
export default UserInput