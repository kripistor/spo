import './settings.css';
import profileicon from '../../assets/img/profile.svg';
import editIcon from '../../assets/img/edit.svg';
import logoutIcon from '../../assets/img/door.svg';
import deleteIcon from '../../assets/img/trashcan2.svg';
import okikon from '../../assets/img/mark.svg';
import React, {useEffect, useState} from "react";
import UserService from "../../api/UserService";
import TaskService from "../../api/TaskService";
import {Link, useNavigate} from "react-router-dom";

const SettingsComponent = () => {
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const data = await UserService.getUserData();
            setUserData(data);
        };
        fetchData();
    }, []);

    const handleLogout = async () => {
        UserService.logout();
        navigate('/login');
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
            </div>
            <button className="button-ok">
                <Link to="/cabinet">
                    <img src={okikon} alt=""/>
                </Link>
            </button>
        </>
    );
}

export default SettingsComponent;