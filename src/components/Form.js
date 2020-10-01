import React, { useState } from "react";
const Form = ({ inputText, setInputText, todos, setTodos, setStatus }) => {
  //props
  const newId = Math.floor(Math.random() * 1000000); // there might be collision
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    console.log("newId=" + newId);
    e.preventDefault(); // stops browser from refreshing
    setTodos([...todos, { text: inputText, completed: false, id: newId }]);
    setInputText("");
  };
  const statusHandler = (e) => {
    setStatus(e.target.value);
  };
  return (
    <form>
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
      />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>

      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};
export default Form;
