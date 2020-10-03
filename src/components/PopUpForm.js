import React, { useState } from "react";

function PopUpForm(props) {
  const { id, details, setDetails } = props;
  const [description, setDescription] = useState("");
  const [date, setTheDate] = useState("");
  const [priority, setPriority] = useState("");

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
  };
  const handleSubmit = () => {
    setDetails([
      ...details,
      { id: id, description: description, date: date, priority: priority },
    ]);
  };

  return (
    <main className="todo-popup-container">
      <form className="popup-form">
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
        <button onClick={handleSubmit}>Submit</button>
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
