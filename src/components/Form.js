import React,{useState} from "react";
import PopUpForm from "./PopUpForm";
const Form = ({ priority, setPriority,  date, setDate, description, setDescription,inputText, setInputText, todosDetails, 
              setTodosDetails, todos, setTodos ,setStatus}) => {
  //props

  //if not sure on id then use UUID or increamental number, 
  //you can store the newest number in localstorage for you case to increase accordingly next time
  const newId=Math.floor(Math.random() * 1000000); // there might be collision
  
  const [clickedCounter,setClickedCounter]=useState(0);
  
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    console.log("newId=",newId);//use comma, it logs the actual data structure, with + it logs as string.
    console.log("clickedCounter= "+clickedCounter);
    e.preventDefault(); // stops browser from refreshing
    setTodos([...todos,
    { text: inputText, completed: false, id: newId }
    ]);
    setClickedCounter(clickedCounter+1);
    setInputText("");
  };
  const statusHandler=(e)=>{
    setStatus(e.target.value)
  }
  return (
    <form>
      <input 
        value={inputText} 
        onChange={inputTextHandler} 
        type="text" 
        className="todo-input" />
      <button 
        onClick={submitTodoHandler}
        className="todo-button" 
        type="submit"> 
           <i className="fas fa-plus-square"></i>
      </button>
      {
        // clickedCounter!==0?<PopUpForm 
        clickedCounter ? <PopUpForm 

                                    description={description}
                                    setDescription={setDescription}
                                    date={date}
                                    setDate={setDate}
                                    priority={priority}
                                    setPriority={setPriority}
                                    todosDetails={todosDetails} 
                                    setTodosDetails={setTodosDetails}
                                     id={newId} />: null
    
      }
      
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};
export default Form;