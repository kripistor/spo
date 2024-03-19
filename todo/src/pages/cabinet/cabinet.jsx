import React, {useEffect, useState} from "react";
import {Link, useNavigate} from 'react-router-dom';
import UserService from "../../api/UserService";
import './cabinet.css';
import profileicon from '../../assets/img/profile.svg';
import homeicon from '../../assets/img/home.svg';
import carticon from '../../assets/img/cart.svg';
import gifticon from '../../assets/img/gift.svg';
import profile_lockicon from '../../assets/img/profile_lock.svg';
import Category from '../../components/Category/Category';
import List from '../../components/List/List';
import TaskService from "../../api/TaskService";

function CabinetComponent() {
    const [userData, setUserData] = useState(null);
    const [tasks, setTasks] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await UserService.getUserData();
                if (!data) {
                    navigate('/login');
                } else {
                    setUserData(data);
                }
            } catch (error) {
                if (error.response && error.response.status === 401) {
                    navigate('/login');
                } else {
                    console.error(error);
                }
            }
        };

        const fetchTasks = async () => {
            try {
                const data = await TaskService.getUserTasks();
                if (data) {
                    setTasks(data);
                }
            } catch (error) {
                if (error.response && error.response.status === 401) {
                    navigate('/login');
                } else {
                    console.error(error);
                }
            }
        };

        fetchTasks();
        fetchData();
    }, []);

    const handleDelete = async (taskId) => {
        console.log(taskId);
        await TaskService.deleteTask(taskId);
        setTasks(tasks.filter(task => task.id !== taskId));
    };

    const handleCategoryClick = (category) => {
        navigate(`/category_view/${category}`);
    };

    return (
        <>
            <div className="header">
                <div className="icon">
                    <img src={profileicon} alt=""/>
                </div>
                <div className="info">
                    <Link to="/settings">
                        <h1>{userData ? userData.username : 'Loading...'}</h1>
                    </Link>
                    <a href={`mailto:${userData ? userData.email : ''}`}>{userData ? userData.email : 'Loading...'}</a>
                </div>
            </div>
            <hr/>
            <div>
                <Category>
                    <li onClick={() => handleCategoryClick('Homework')}><img src={homeicon} alt=""/> Homework</li>
                    <li onClick={() => handleCategoryClick('Products')}><img src={carticon} alt=""/> Products</li>
                    <li onClick={() => handleCategoryClick('Gift')}><img src={gifticon} alt=""/> Gift</li>
                    <li onClick={() => handleCategoryClick('Passwords')}><img src={profile_lockicon} alt=""/> Passwords
                    </li>
                </Category>
                <hr/>
                <List onDelete={handleDelete}>
                    {tasks.map(task => (
                        <p key={task.id} task={task}>{task.text}</p>
                    ))}
                </List>
            </div>
        </>
    );
}

export default CabinetComponent;