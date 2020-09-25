import React from "react";
import '../App.css';

const PopUpForm = (todosDetails, setTodosDetails, id) => {
    const submitDetailsHandler=(e)=>{
        console.log(e);
        // setTodosDetails([...todosDetails, {description: }]);
    }
    
    return (

        <div className="model-bg-popup">
            <div className="model-popup">
                <h2>Pop-up form</h2>
                <label htmlFor="description">Description:</label>
                <input type="text" name="description"/>
                <br/>
                <label htmlFor="date">Date:</label>
                <input type="text" name="date"/>
                <br/>
                <label htmlFor="priority">Priority:</label>
                <input type="text" name="priority"/>
                <br/>
                <button onClick={submitDetailsHandler}>Submit</button>
                <span className="modal-close">X</span>
            </div>

        </div>    
    )
};
export default PopUpForm;