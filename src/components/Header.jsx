import React from "react";

const Header = ({ setStatus }) => {
    const statusHandler = (e) => {
        setStatus(e.target.value);
    };
    return (
        <header className='header center'>
            <span>To-Do List</span>
            <select
                className='menu'
                onChange={statusHandler}>
                <option value='all'>All</option>
                <option value='completed'>Completed</option>
                <option value='uncompleted'>Uncompleted</option>
            </select>
        </header>
    );
};

export default Header;
