import React from "react";
import Todo from "./Todo";
const TodoList = (props) => {
  const { todos, setTodos, filteredTodos, details } = props;
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo
            todo={todo}
            todos={todos}
            setTodos={setTodos}
            key={todo.id}
            text={todo.text}
            details={details}
          />
        ))}
      </ul>
    </div>
  );
};
export default TodoList;
