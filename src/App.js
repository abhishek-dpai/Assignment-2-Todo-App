import React, { useState, useEffect } from "react";
import "./App.css";
//importing components
import Form from "./components/Form";
import TodoList from "./components/TodoList";
function App() {
  //state

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [details, setDetails] = useState([]);
  // status is the filter for all todo, completed or not, sorted by priority(not implemented)
  const [filteredTodos, setFilteredTodos] = useState([]);
  useEffect(() => {
    getLocalTodos();
    getLocalDetails();
  }, []);
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
    saveLocalDetails();
  }, [todos, status, details]);

  //functions
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };
  //save to local
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };
  const saveLocalDetails = () => {
    localStorage.setItem("details", JSON.stringify(details));
    console.log("size of details=", details.length);
  };
  const getLocalDetails = () => {
    if (localStorage.getItem("details") === null) {
      localStorage.setItem("details", JSON.stringify([]));
    } else {
      let detailsLocal = JSON.parse(localStorage.getItem("details"));
      setDetails(detailsLocal);
    }
    console.log("size of details=", details.length);
  };


  return (
    <div className="App">
      <header>
        <h1> Abhishek's Todo App </h1>
      </header>
      <Form
        setStatus={setStatus}
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
        details={details}
        setDetails={setDetails}
      />
      <TodoList
        filteredTodos={filteredTodos}
        todos={todos}
        setTodos={setTodos}
        details={details}
      />
    </div>
  );
}

export default App;
