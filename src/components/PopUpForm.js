import React from "react";
import '../App.css';

const PopUpForm = (priority, setPriority, date, setDate, description, setDescription,todosDetails, setTodosDetails, id) => {
    const inputDescriptionHandler=(e)=>{
        setDescription(e.target.value);
    }
    const inputDateHandler=(e)=>{
        setDate(e.target.value);
    }
    const inputPriorityHandler=(e)=>{
        setPriority(e.target.value);
    }
    const submitDetailsHandler=(e)=>{
        console.log(e);
         setTodosDetails([...todosDetails, {description: description, date:date, priority:priority  }]);
    }
    
    return (

        <div className="model-bg-popup">
            <div className="model-popup">
                <h2>Pop-up form</h2>
                <label htmlFor="description">Description:</label>
                <input onChange={inputDescriptionHandler}  type="text" name="description"/>
                <br/>
                <label htmlFor="date">Date:</label>
                <input onChange={inputDateHandler} type="text" name="date"/>
                <br/>
                <label htmlFor="priority">Priority:</label>
                <input onChange={inputPriorityHandler} type="text" name="priority"/>
                <br/>
                <button onClick={submitDetailsHandler}>Submit</button>
                <span className="modal-close">X</span>
            </div>

        </div>    
    )
};
export default PopUpForm;