
import React from "react";

function Form({setInputText, todos, setTodos, inputText}) {
    //Js code and function that handles the input 

    const inputHandler = (textValue) => {
        //print out the inputted textValues
        console.log(textValue.target.value)
        setInputText(textValue.target.value)
    }
    const submitHandler = (textValue) => {
        //this won't automatically reset/refresh the textbox where we type our input/s after clicking button
        textValue.preventDefault();
        console.log("submit")
        setTodos([...todos,{text: inputText, id: Math.random()*1000}]);

        //reset the value of array only, not refresh 
        //ERROR
        setInputText("");
    };
    return (
        <form>
            <input 
                value={inputText}
                onChange = {inputHandler} 
                type="text" 
                className="todo-input" />
                <button onClick={submitHandler} className="todo-button" type="submit">
                    <i className="fas fa-plus-square"></i>
                </button>
        </form>
      );
}
//put the name of the function you named
export default Form;