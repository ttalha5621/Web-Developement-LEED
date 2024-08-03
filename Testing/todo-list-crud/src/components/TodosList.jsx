import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons/faEdit";
import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function TodosList({ todos, setTodos, setEditTodo }) {
    const handleComplete = (todo) => {
        setTodos(
            todos.map((item) => {
                if (item.id === todo.id) {
                    return { ...item, completed: !item.completed };
                }
                return item;
            })
        );
    };

    const handleEdit = ({ id }) => {
        const findTodo = todos.find((todo) => todo.id === id)
        setEditTodo(findTodo);
    };


    const handleDelete = ({ id }) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };
    return (
        <div>
            {todos.map((todo) => (
                <li className="list-item" key={todo.id}>
                    <input
                        type="text"
                        value={todo.title}
                        className={`list ${todo.completed ? 'complete': ''}`}
                        onChange={(event) => event.preventDefault()}
                    />
                    <button
                        className="button-complete task-button"
                        onClick={() => handleComplete(todo)}
                    >
                        <FontAwesomeIcon icon={faCheckCircle} />
                    </button>
                    <button
                        className="button-edit task-button"
                        onClick={() => handleEdit(todo)}
                    >
                        <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <button
                        className="button-delete task-button"
                        onClick={() => handleDelete(todo)}
                    >
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                </li>
            ))}
        </div>
    );
}

export default TodosList;
