import React, { Component } from "react";

class PopUpForm extends Component {
  constructor() {
    super();
    this.state = {
      description: "",
      date: "",
      priority: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <main className="todo-popup-container">
        <form className="popup-form">
          <input
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
            placeholder="Description"
          />
          <br />
          <input
            name="date"
            value={this.state.date}
            onChange={this.handleChange}
            placeholder="Date"
          />

          <br />
          <select
            value={this.state.priority}
            name="priority"
            onChange={this.handleChange}
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
        <p>Entered Description: {this.state.description}</p>
        <p>Entered Date: {this.state.date}</p>
        <p>Choosed Priority: {this.state.priority}</p>
      </main>
    );
  }
}

export default PopUpForm;
