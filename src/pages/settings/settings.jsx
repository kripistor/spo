import './settings.css';
import profileicon from '../../assets/img/profile.svg';
import editIcon from '../../assets/img/edit.svg';
import logoutIcon from '../../assets/img/door.svg';
import deleteIcon from '../../assets/img/trashcan2.svg';
import okikon from '../../assets/img/mark.svg';

function SettingsComponent() {
    const handleEditProfile = () => {
        // Здесь будет код для редактирования профиля
    };

    const handleLogout = () => {
        // Здесь будет код для выхода из профиля
    };

    const handleDeleteProfile = () => {
        // Здесь будет код для удаления профиля
    };

    const handleOk = () => {
        // Здесь будет код для обработки нажатия на кнопку "ОК"
    };

    return (
        <>
            <div className="header">
                <div className="icon">
                    <img src={profileicon} alt=""/>
                </div>
                <div className="info">
                    <h1>Bob Smith</h1>
                    <a href="mailto:bob_smith@gmail.com">bob_smith@gmail.com</a>
                </div>
            </div>
            <div className="button-list">
                <button onClick={handleEditProfile}><img src={editIcon} alt=""/> Редактировать профиль</button>
                <button onClick={handleLogout}><img src={logoutIcon} alt=""/> Выйти из профиля</button>
                <button onClick={handleDeleteProfile}><img src={deleteIcon} alt=""/> Удалить профиль</button>
            </div>
            <button className="button-ok" onClick={handleOk}>
                <img src={okikon} alt=""/>
            </button>
        </>
    );
}

export default SettingsComponent;