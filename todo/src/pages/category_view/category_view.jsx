import React, { useState } from 'react';
import './category_view.css';
import importantIcon from '../../assets/img/importantcb.svg';
import emptyIcon from '../../assets/img/emptycb.svg';
import completeIcon from '../../assets/img/completecb.svg';
import addIcon from '../../assets/img/add.svg';

const categories = ['Homework', 'Products', 'Gift', 'Passwords'];

const CategoryView = () => {
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);
    const [notes, setNotes] = useState([
        { id: 1, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', important: false, completed: false },
        { id: 2, text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', important: true, completed: false },
        { id: 3, text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', important: false, completed: true },
        // add more notes here if needed
    ]);

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        // add code here to fetch notes for the selected category
    };

    const handleCheckboxChange = (id) => {
        setNotes(notes.map(note => note.id === id ? { ...note, completed: !note.completed } : note));
    };

    const handleRightClick = (event, id) => {
        event.preventDefault();
        setNotes(notes.map(note => note.id === id ? { ...note, important: !note.important } : note));
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
                            src={note.important ? importantIcon : note.completed ? completeIcon : emptyIcon}
                            className="note-checkbox"
                            onClick={() => handleCheckboxChange(note.id)}
                            onContextMenu={(event) => handleRightClick(event, note.id)}
                        />
                        <p className="note-text">{note.text}</p>
                    </div>
                ))}
            </div>
            <button className="add-button">
                <img src={addIcon} alt="Add"/>
            </button>
        </div>
    );
};

export default CategoryView;