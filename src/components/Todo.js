import React, { useEffect, useState } from "react";
import DetailsForm from "./DetailsForm";
const Todo = (props) => {
  // console.log("props are", props);

  const { text, todo, todos, setTodos, details } = props; //id,

  const { id : todoId } = todo||{}

  console.log("Todo details in props are",details, "props are",props)
  const [showDetails, setShowDetails] = useState(null);
  const [currentDetail,setCurrentDetail] = useState({})
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

  useEffect(()=>{
    console.log("details in useEffect is",details, todoId)
    const detail = details.find((item)=>{
      // console.log("todoId is",todoId,"item is",item)
      return item.id === todoId
    })
    // console.log("detail in useEffect is",detail)
    setCurrentDetail(detail)
  },[todoId, details])

  const detailHandler = () => {
    // console.log("called detail handler", todo.id);

    setShowDetails(true);

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
      {showDetails ? <DetailsForm id={todo.id} detail={currentDetail} /> : null}
    </>
  );
};
export default Todo;
