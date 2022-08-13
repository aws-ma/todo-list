import React from "react";

import { useRef } from "react";
const Form = ({ setTodosList, todosList }) => {
    const val = useRef("");
    const handleTodos = (e) => {
        if (val.current.value) {
            const id = Math.floor(Math.random() * 10000);
            setTodosList([
                ...todosList,
                { todo: val.current.value, id: id, completed: false },
            ]);
            val.current.value = "";
        }
        e.preventDefault();
    };
    return (
        <form onSubmit={(e) => handleTodos(e)}>
            <input
                ref={val}
                className='input'
                type='text'
                placeholder='Please Enter your task ...'
            />
            <button className='add-btn' type='submit'>
                Add
            </button>
        </form>
    );
};

export default Form;
