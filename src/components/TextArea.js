import React, { useState } from "react";

export default function TextArea(props) {
  const handleUppercase = () => {
    let uppertext = text.toUpperCase();
    setText(uppertext);
    props.showAlert("success", "Text changed to Uppercase");
  };

  const handleLowercase = () => {
    let lowertext = text.toLowerCase();
    setText(lowertext);
    props.showAlert("success", "Text changed to Lowercase");
  };

  const handleclearText = () => {
    let lowertext = "";
    setText(lowertext);
    props.showAlert("success", "Text Area is cleared");
  };

  const changehandler = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <div style={{ color: props.mode === '#f8f9fa' ? 'black' : 'white' }}>
      <h1>{props.Heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="tarea"
          value={text}
          style={{
            background: props.mode === '#f8f9fa' ? '#f8f9fa' :
              props.mode === 'rgb(33, 37, 41)' ? 'rgb(33, 37, 41)' : '#f8f9fa',
            color: props.mode === '#f8f9fa' ? 'black' :
              props.mode === 'rgb(33, 37, 41)' ? 'white' : 'black'
          }}
          onChange={changehandler}
          rows="6"
        ></textarea>
      </div>
      <div className="container bg-">
        <p>
          Words:{text.split(" ").filter((element) => { return element.length !== 0 }).length} Characters:{text.length}
        </p>
      </div>
      <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleUppercase}>
        Convert to Uppercase
      </button>
      <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleLowercase}>
        Convert to Lowercase
      </button>
      <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleclearText}>
        Clear Text
      </button>
    </div>
  );
}
