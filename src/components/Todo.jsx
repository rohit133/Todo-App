import React, { useState } from "react";

function Todo() {
  // Saving the state of the Input box
  const [item, setItems] = useState("");
  const [listItem, setListItem] = useState([]);

  // Handleing the input state on the Todo Input
  function handleTextInput(event) {
    const inputItem = event.target.value;
    return setItems(inputItem);
  }

  // Handleing the submit button
  function handleSubmit() {
    setListItem((prevValue) => {
      return [...prevValue, item];
    });
    setItems("");
  }


  return (
    <div>
      <div className="form">
        <input onChange={handleTextInput} type="text" value={item} />
        <button onClick={handleSubmit}>
          <span>Add</span>
        </button>
      </div>

      <div>
        <ul>
          {listItem.map((todoList) => (
            <li>{todoList}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todo;
