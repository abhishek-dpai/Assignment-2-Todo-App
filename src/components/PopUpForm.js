import React, { useState } from "react";

function PopUpForm(props) {
  const {
    id,
    details,
    setDetails,
    priorityNum,
    setPrioriyNum,
    todos,
    setTodos,
  } = props;
  console.log("props in popup form are", props);
  const [description, setDescription] = useState("");
  const [date, setTheDate] = useState("");
  const [priority, setPriority] = useState("");
  console.log("details in popUpForm=", details);
  const handleDescriptionChange = (event) => {
    const { value } = event.target;
    setDescription(value);
  };
  const handleDateChange = (event) => {
    const { value } = event.target;
    setTheDate(value);
  };
  const handlePriorityChange = (event) => {
    const { value } = event.target;
    setPriority(value);
    switch (value) {
      case "low":
        setPrioriyNum(3);
        break;
      case "medium":
        setPrioriyNum(2);
        break;
      case "high":
        setPrioriyNum(1);
        break;
      default:
        console.log(" default case reached in setPriority");
        break;
    }
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, priorityNum: priorityNum };
        }
      })
    );
  };
  const handleSubmit = () => {
    setDetails([
      ...details,
      { id: id, description: description, date: date, priority: priority },
    ]);
  };

  return (
    <main className="todo-popup-container">
      <form className="popup-form" onSubmit={handleSubmit}>
        <input
          value={description}
          onChange={handleDescriptionChange}
          placeholder="Description"
        />
        <br />
        <input value={date} onChange={handleDateChange} placeholder="Date" />

        <br />
        <select value={priority} onChange={handlePriorityChange}>
          <option value="">-- Please Choose a Priority --</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>

        <br />
        <button>Submit</button>
      </form>
      <hr />
      <h2>Entered information:</h2>
      <p>Entered Description: {description}</p>
      <p>Entered Date: {date}</p>
      <p>Choosed Priority: {priority}</p>
      {/* <p>Details: {details}</p> */}
    </main>
  );
}

export default PopUpForm;
