import Todo from "./Todo";
const ToDoList = ({ todosList, setTodosList, filterTodos }) => {
    return (
        <ul className='list-container center'>
            {filterTodos.map((todo, id) => {
                return (
                    <Todo
                        key={id}
                        todo={todo}
                        id={id}
                        todosList={todosList}
                        setTodosList={setTodosList}
                    />
                );
            })}
        </ul>
    );
};

export default ToDoList;
