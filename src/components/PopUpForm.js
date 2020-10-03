import React, { Component, useState } from "react";

function PopUpForm(props) {
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [priority, setPriority] = useState("");

  const handleDescriptionChange = (event) => {
    const { name, value } = event.target;
    setDescription(value);
  };
  const handleDateChange = (event) => {
    const { name, value } = event.target;
    setDate(value);
  };
  const handlePriorityChange = (event) => {
    const { name, value } = event.target;
    setPriority(value);
  };

  return (
    <main className="todo-popup-container">
      <form className="popup-form">
        <input
          name="description"
          value={description}
          onChange={handleDescriptionChange}
          placeholder="Description"
        />
        <br />
        <input
          name="date"
          value={date}
          onChange={handleDateChange}
          placeholder="Date"
        />

        <br />
        <select
          value={priority}
          name="priority"
          onChange={handlePriorityChange}
        >
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
    </main>
  );
}

export default PopUpForm;
