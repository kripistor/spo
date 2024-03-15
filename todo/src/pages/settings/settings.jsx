import './settings.css';
import profileicon from '../../assets/img/profile.svg';
import editIcon from '../../assets/img/edit.svg';
import logoutIcon from '../../assets/img/door.svg';
import deleteIcon from '../../assets/img/trashcan2.svg';
import okikon from '../../assets/img/mark.svg';
import React, {useEffect, useState} from "react";
import UserService from "../../api/UserService";
import TaskService from "../../api/TaskService";
import {useNavigate} from "react-router-dom";

function SettingsComponent() {
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchData = async () => {
            const data = await UserService.getUserData();
            setUserData(data);
        };
        fetchData();
    }, []);
    const handleEditProfile = () => {
        // Здесь будет код для редактирования профиля
    };

    const handleLogout = async () => {
        try {
            await UserService.logout();
            navigate('/login');
        } catch (error) {
            console.error('Error during logout:', error);
        }
    };

    const handleDeleteProfile = () => {
        // Здесь будет код для удаления профиля
    };

    const handleOk = () => {
        // Здесь будет код для обработки нажатия на кнопку "ОК"
    };
    if (!userData) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className="header">
                <div className="icon">
                    <img src={profileicon} alt=""/>
                </div>
                <div className="info">
                    <h1>{userData.username}</h1>
                    <a href={`mailto:${userData.email}`}>{userData.email}</a>
                </div>
            </div>
            <div className="button-list">

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