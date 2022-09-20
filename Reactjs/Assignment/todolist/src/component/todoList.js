import React from "react";
import Display from "./displayInput";

function ToDoList ({todos, setTodos}) {
  console.log(todos)
    return (
    <div className="todo-container">
      <ul className="todo-list">

        {/* this save the input in every submit */}
      {todos.map((todo) => (
        <Display 
          setTodos={setTodos}
          todos={todos}
          text={todo.text} 
          key={todo.id}
          //filtered to work
          todo={todo}
          />
      ))}
      </ul>
    </div>
    
    )

}
// const counter =+ 1
// console.log(counter)


export default ToDoList;

//id is required in react to render list, we must put the id to know what to delte or id