import React from "react";

function Display ({text, todos, setTodos, todo}) {

    //events
    const deleteBtn = () =>{
        //filter all input value with their id and if it (element) match then it will delete
        setTodos(todos.filter(el => el.id !== todo.id))
        console.log(todo)

    }
    return (
        <div className="delete">
            <li className="todo-item-list">{text}</li>
            <button onClick={deleteBtn} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>


    )
}

export default Display