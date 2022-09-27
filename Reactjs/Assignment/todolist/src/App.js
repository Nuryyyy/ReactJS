import React, {useState} from 'react';
import './App.css';
//import the component
import Form from './component/inputTextBox';
import ToDoList from './component/todoList';

function App() {
  const [inputText, setInputText] = useState("");
  //we use array for todos because it's gonna be a list
  const [todos, setTodos] = useState([]);
  // setInputText update our text
  return (
    <div className="App"> 
       <header>
      <h1>Todo List</h1>
    </header>
    <Form inputText={inputText}todos={todos} setTodos={setTodos} setInputText={setInputText}/> 
    <ToDoList setTodos={setTodos} todos={todos}/>
    </div>
  );
}

export default App;


// we can really use class

