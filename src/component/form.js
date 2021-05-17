import React, { useEffect, useRef } from 'react'
import { form } from 'react-bootstrap';
const Form = ({ setInputText, setStatus, inputText, todos, setTodos }) => {


    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };

    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([...todos,
        { text: inputText, completed: false, id: Math.random() * 1000 }
        ]);
        setInputText("");


    };

    const statusHandler = (e) => {
        setStatus(e.target.value);
    }
    return (
        <form className="media">

            <div class="inputbox">
                <input value={inputText} onChange={inputTextHandler} ref={inputRef} type="text" />
                <button onClick={submitTodoHandler} type="submit">
                    <i className="fas fa-plus-square"></i>
                </button>
            </div>
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
