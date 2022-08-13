import React from "react";
import { BsTrashFill, BsCheckLg } from "react-icons/bs";
const List = ({ todo, id, todosList, setTodosList }) => {
    const completed = () => {
        setTodosList(
            todosList.map((element) => {
                if (element.id === todo.id) {
                    console.log('first')
                    return { ...element, completed: !element.completed };
                } else {
                    return element;
                }
            })
        );
    };
    const deleteTodo = () => {
        setTodosList(
            todosList.filter((element) => {
                return element.id !== todo.id;
            })
        );
    };
       return (
        <li
        style={{ backgroundColor: id % 2 === 0 ? "" : "#333333" }}
            className={`task center ${todo.completed? 'completed':''}`}>
            <span
                style={{ color: id % 2 === 0 ? "" : "#fff" }}
                className=  {`text`}>
                {todo.todo}
            </span>
            <span className='icon'>
                <BsCheckLg className='check' onClick={completed}/>
                <BsTrashFill
                    className='delete'
                    onClick={deleteTodo}
                />
            </span>
        </li>
    );
};

export default List;
