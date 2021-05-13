import './App.css';
import {useState,useEffect} from 'react';
import Form from './component/form';
import TodoList from './component/TodoList';

function App() {
  const [inputText,setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filterdTodos, setFilterdTodos] = useState([]);


  useEffect(() =>{
    getLocalTodos();
  }, [])

  useEffect(() =>{
    filterHandler();  
    saveLocalTodos();
  },[todos,status]);


  const filterHandler = () =>{
    switch(status){
      case "completed":
        setFilterdTodos(todos.filter((todos) => todos.completed===true));
        break;
      case "uncompleted":
        setFilterdTodos(todos.filter((todos) => todos.completed===false));
        break;
      default:
        setFilterdTodos(todos);
        break;
      }
  }


  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () =>{
    if(localStorage.getItem("todos") ===null)
    {localStorage.setItem("todos", JSON.stringify([]));
  }
  else{
    let todoLocal = JSON.parse(localStorage.getItem("todos"))
    setTodos(todoLocal);
  }
}



  return (
    <div>
    <header>
      <h1>To-Do List</h1>
    </header>
    <Form 
      setInputText={setInputText} 
      todos={todos} 
      setTodos={setTodos} 
      inputText={inputText}
      setStatus={setStatus}
      />
      
    <TodoList 
      todos={todos} 
      setTodos={setTodos} 
      filterdTodos={filterdTodos}/>
    </div>
  );
}

export default App;
