import React,{useEffect,useRef} from 'react'
import {form} from 'react-bootstrap';
const Form = ({setInputText,setStatus,inputText,todos,setTodos}) => {


    const inputRef = useRef(null)

    useEffect(() =>{
        inputRef.current.focus()
    })

    const inputTextHandler = (e) =>{
        setInputText(e.target.value);
      };

      const submitTodoHandler = (e) =>{
        e.preventDefault();
        console.log(todos);
          setTodos([...todos, 
            {text: inputText, completed:false, id:Math.random()*1000}
        ]);
        setInputText("");
        console.log(inputText);
          
      };

      const statusHandler = (e) => {
          setStatus(e.target.value);
          console.log(setStatus);
      }
    return (
        <form>
            <input value={inputText} onChange={inputTextHandler} ref={inputRef} type="text" className="todo-input"/>
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    )
}

export default Form
