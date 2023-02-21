import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea.jsx";
import Heading from "./Heading";

function App() {
  const [items, setItems] = useState([]);
  // Adding items to list
  function addItem(inputText) {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
  }
  // Deleting the selected Item.
  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <Heading />
      <InputArea onAdd={addItem} />

      {/* List of Items and related code. */}
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={todoItem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
