import { Input } from '@mui/base';
import './user_input.css';

function UserInput() {
    return (
        <div className="hierarchical-text-container">
            <Input
                slotProps={{ root: { className: "rounded-input-with-text" }, input: { className: "transparent-input-style transparent-input-style::placeholder", placeholder: "Введите имя", type: "text" } }}
            />
        </div>
    );
}
export default UserInput