import ToDoList from "./components/ToDoList";
import "./components/style.css";
import Header from "./components/Header";
import Form from "./components/Form";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
const App = () => {
    const [todosList, setTodosList] = useState([]);
    const [filterTodos, setFilterTodos] = useState([]);
    const [status, setStatus] = useState("all");
    const filterHandler = () => {
        switch (status) {
            case "all":
                setFilterTodos(todosList);
                break;
            case "completed":
                setFilterTodos(todosList.filter((todo) => todo.completed));
                break;
            case "uncompleted":
                setFilterTodos(todosList.filter((todo) => !todo.completed));
                break;
            default:
                setFilterTodos(todosList);
                break;
        }
    };
    // Save Todos List in localStorage
    const saveLocalTodosList = () => {
        localStorage.setItem("todosList", JSON.stringify(todosList));
    };
    const getLocalTodosList = () => {
        if (localStorage.getItem("todosList")) {
            localStorage.setItem("todosList", JSON.stringify([]));
        } else {
            const localTodosList = JSON.parse(
                localStorage.getItem("todosList")
            );
            setTodosList(localTodosList);
        }
    };
    useEffect(() => {
        getLocalTodosList();
    }, []);

    useEffect(() => {
        filterHandler();
        saveLocalTodosList();
    }, [todosList, status]);
    return (
        <div className='container'>
            <Header setStatus={setStatus} />
            <Form setTodosList={setTodosList} todosList={todosList} />
            <ToDoList
                todosList={todosList}
                setTodosList={setTodosList}
                filterTodos={filterTodos}
            />
            <Footer />
        </div>
    );
};

export default App;
