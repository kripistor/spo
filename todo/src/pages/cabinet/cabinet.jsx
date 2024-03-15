import React, {useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';
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
            const data = await UserService.getUserData();
            setUserData(data);
        };
        const fetchTasks = async () => {
            const data = await TaskService.getUserTasks();
            if (data) {
                setTasks(data);
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