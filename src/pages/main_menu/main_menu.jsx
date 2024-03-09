import './main_menu.css';
import { Link } from 'react-router-dom';
import arrowImage from '../../assets/img/arrow.svg';


function MainMenuComponent() {
    return (
        <div className="todo-container">
            <div className="task-container">
                <p className="task-title">To Do</p>
                <div className="task-card">
                    <Link to="/login">
                        <img
                            src={arrowImage}
                            className="boxy-image"
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default MainMenuComponent