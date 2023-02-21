import React, { useState } from "react";

function InputArea(props) {
  // handle input chnage in the input box
  const [inputText, setInputText] = useState("");
  // Adding text to input box
  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  return (
    <div className="form">
      {/* Input box  */}
      <input onChange={handleChange} type="text" value={inputText} />
      {/* Button functions. */}
      <button
        onClick={() => {
          props.onAdd(inputText);
          setInputText("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
