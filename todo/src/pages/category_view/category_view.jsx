import React, {useState, useEffect} from 'react';
import './category_view.css';
import {useNavigate, useParams} from 'react-router-dom';
import importantIcon from '../../assets/img/importantcb.svg';
import emptyIcon from '../../assets/img/emptycb.svg';
import completeIcon from '../../assets/img/completecb.svg';
import addIcon from '../../assets/img/add.svg';
import Modal from 'react-modal';
import TaskService from "../../api/TaskService";
import {jwtDecode} from 'jwt-decode';
import Cookies from "js-cookie";
import trashIcon from '../../assets/img/trashcan.svg';
import UserService from "../../api/UserService";

const token = Cookies.get('token');

let userId = null;

if (token && typeof token === 'string') {
    // Decode the token
    const decodedToken = jwtDecode(token);

    // Get user_id from the decoded token
    userId = decodedToken ? decodedToken.sub : null;
}
const categories = ['Homework', 'Products', 'Gift', 'Passwords'];

const CategoryView = () => {
    const {category} = useParams();
    const [selectedCategory, setSelectedCategory] = useState(category || categories[0]);
    const [notes, setNotes] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newTaskText, setNewTaskText] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const data = await UserService.getUserData();
            if (!data) {
                navigate('/login');
            } else {
                const fetchTasks = async () => {
                    const categoryId = categories.indexOf(selectedCategory) + 1;
                    const tasks = await TaskService.getTasksByCategory(categoryId);
                    setNotes(tasks);
                };
                fetchTasks();
            }
        };
        fetchData();
    }, [selectedCategory]);

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const handleCheckboxChange = async (id) => {
        const task = notes.find(note => note.id === id);
        if (task) {
            const updatedTask = {
                ...task,
                is_completed: !task.is_completed,
                important: task.is_completed ? task.important : false
            };
            const response = await TaskService.updateTask(id, updatedTask);
            if (response) {
                setNotes(notes.map(note => note.id === id ? updatedTask : note));
            }
        }
    };

    const handleRightClick = (event, id) => {
        event.preventDefault();
        setNotes(notes.map(note => note.id === id ? {...note, important: !note.important} : note));
    };

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleAddTask = async () => {
        if (newTaskText.trim() !== '') {
            const categoryId = categories.indexOf(selectedCategory) + 1;
            const newTask = {
                text: newTaskText,
                user_id: userId,
                category_id: categoryId,
                is_completed: false,
            };
            console.log(newTask);
            const response = await TaskService.createTask(newTask);
            if (response) {
                setNotes([...notes, response]);
                setNewTaskText('');
            }
        }
        handleCloseModal();
    };
    const handleDeleteTask = async (id) => {
        await TaskService.deleteTask(id);
        setNotes(notes.filter(note => note.id !== id));
    };

    return (
        <div className="category-view">
            <div className="category-selection">
                {categories.map((category) => (
                    <button
                        key={category}
                        className={`category-button ${category} ${selectedCategory === category ? 'selected' : ''}`}
                        onClick={() => handleCategoryChange(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>
            <hr/>
            <div className="notes-section">
                {notes.map((note) => (
                    <div key={note.id} className="note">
                        <img
                            src={note.important ? importantIcon : note.is_completed ? completeIcon : emptyIcon}
                            className="note-checkbox"
                            onClick={() => handleCheckboxChange(note.id)}
                            onContextMenu={(event) => handleRightClick(event, note.id)}
                        />
                        <p className="note-text">{note.text}</p>
                        <img
                            src={trashIcon}
                            className="note-delete"
                            onClick={() => handleDeleteTask(note.id)}
                        />
                    </div>
                ))}
            </div>
            <button className="add-button" onClick={handleOpenModal}>
                <img src={addIcon} alt="Add"/>
            </button>
            <Modal
                isOpen={isModalOpen}
                onRequestClose={handleCloseModal}
                contentLabel="Add Task"
                className="modal-content"
            >
                <h2>Add Task</h2>
                <input
                    type="text"
                    value={newTaskText}
                    onChange={(e) => setNewTaskText(e.target.value)}
                    className="modal-input"
                />
                <button onClick={handleAddTask} className="modal-button">Add</button>
            </Modal>
        </div>
    );
};

export default CategoryView;