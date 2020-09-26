import React from "react";
const Todo = ({ id, text, todo, todos, setTodos }) => {
    //events
    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id))
    }
    const completeHandler = () => {
        //check whether you can do this with Map()
        const completedTodos = todos.map((item) => {
            if (item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                };
            }
            return item
        }) // intermediate result helps in debugging, if you computing the result in param will cause problems while debugging.
        setTodos(
            completedTodos
        );
    }

    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
                {text}
            </li>
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"> </i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"> </i>
            </button>
        </div>
    )
}
export default Todo;