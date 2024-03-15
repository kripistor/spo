// List.jsx
import React from "react";
import listicon from '../../assets/img/list.svg';
import trashcanicon from '../../assets/img/trashcan.svg';

function List({ children, onDelete }) {
    return (
        <div className="list">
            {React.Children.map(children, child => (
                <div className="list-item">
                    <img src={listicon} alt=""/>
                    <p className="list-text">{child}</p>
                    <img src={trashcanicon} alt="" onClick={() => onDelete(child.props.task.id)}/>
                </div>
            ))}
        </div>
    );
}

export default List;