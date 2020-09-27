import React, { useState, useEffect } from 'react';
import { COMPLETED } from './constants'
import './App.css';
//importing components
import Form from "./components/Form"
import TodoList from "./components/TodoList"
function App() {
  //state
  //keep only combined results in parent and move unit details to respective functions
  // ex: keep all todos in App
  // and move input text to form

  const [inputText, setInputText] = useState("");//you can keep it as empty string rather than adding space between quotes
  const [description, setDescription] = useState(" ");
  const [date, setDate] = useState(" ");
  const [priority, setPriority] = useState(" ");
  const [todos, setTodos] = useState([]);
  const [todosDetails, setTodosDetails] = useState([]);
  const [status, setStatus] = useState("all");
  // status is the filter for all todo, competed or not, sorted by priority 
  const [filteredTodos, setFilteredTodos] = useState([]);
  useEffect(() => {
    getLocalTodos();
  }, [])
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status])
  //functions

  const filterHandler = () => {
    switch (status) {
      case COMPLETED:// create a constants file where all such strings will be present.
        setFilteredTodos(todos.filter((todo) => todo.completed === true))
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false))
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }
  //save to local
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos))

  }
  const getLocalTodos = () => {
    // you can first create without usage of local storage, 
    // once all functionalities work then work on persisiting data
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    }
    else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"))
      setTodos(todoLocal);

    }
  }
  return (
    <div className="App">
      <header>
        <h1> Abhishek's Todo App </h1>
      </header>
      {/* move the functions for setting data inside form component*/}
      {/* pass only data ex: description, date, priority, etc. */}
      <Form 
        description={description}
        setDescription={setDescription}
        date={date}
        setDate={setDate}
        priority={priority}
        setPriority={setPriority}
        setStatus={setStatus}
        todosDetails={todosDetails}
        setTodosDetails={setTodosDetails} 
        todos={todos} 
        setTodos={setTodos} 
        inputText={inputText} 
        setInputText={setInputText} 
        />
      <TodoList 
        filteredTodos={filteredTodos} 
        todos={todos} 
        setTodos={setTodos} />
    </div>
  );
}

export default App;
