import React, { useEffect, useState } from "react";
import UserService from "../../api/UserService";
import './cabinet.css';
import profileicon from '../../assets/img/profile.svg';
import homeicon from '../../assets/img/home.svg';
import carticon from '../../assets/img/cart.svg';
import gifticon from '../../assets/img/gift.svg';
import profile_lockicon from '../../assets/img/profile_lock.svg';
import Category from '../../components/Category/Category';
import List from '../../components/List/List';

function CabinetComponent() {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await UserService.getUserData();
            setUserData(data);
        };
        fetchData();
    }, []);

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
                    <h1>{userData.email}</h1>
                    <a href={`mailto:${userData.email}`}>{userData.email}</a>
                </div>
            </div>
            <hr/>
            <div>
                <Category>
                    <li><img src={homeicon} alt=""/> Homework</li>
                    <li><img src={carticon} alt=""/> Products</li>
                    <li><img src={gifticon} alt=""/> Gift</li>
                    <li><img src={profile_lockicon} alt=""/> Passwords</li>
                </Category>
                <hr/>
                <List>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore...</p>
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo...</p>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur.</p>
                    <p>Excepteur sint occaecat cupidatat non proident.</p>
                </List>
                <button className="create-list-button">+ Создать новый список</button>
            </div>
        </>
    );
}

export default CabinetComponent;