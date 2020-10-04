import React, { useState } from "react";
import DetailsForm from './DetailsForm'
const Todo = (props) => {
  console.log("props are",props)

  const {  text, todo: {id, ...todo}, todos, setTodos, details } = props; //id,
  const [showDetails, setShowDetails] = useState(null)
  //events
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };
  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }

        return item;
      })
    );
  };

  const detailHandler = () => {
    console.log("called detail handler",id)
    if(showDetails === id){
      setShowDetails(null)
    }else if(id){
      setShowDetails(id)
    }
    // return <detailForm id={id} details="details" />;
  };

  return (
    <>
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
      <button onClick={detailHandler} className="detail-handler">
        Details
      </button>
    </div>
    {
      showDetails ? <DetailsForm id={id} details={todo} /> : null
    }
    </>
  );
};
export default Todo;
