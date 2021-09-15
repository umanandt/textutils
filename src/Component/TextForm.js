import React, { useState } from "react";

let emailText;

export default function TextForm(props) {
  const [text, setText] = useState("");
  const [emaill, getEmaill] = useState("");

  const onChangeHandle = (e) => {
    setText(e.target.value);
  };

  const changeUppercase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "Success");
  };

  const changeLowercase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "Success");
  };

  const clearEverything = () => {
    setText("");
  };

  const removeExtraSpace = () => {
    let regexPatterToRemoveSpaces = /[\s/g]/;
    text.replace(regexPatterToRemoveSpaces);
    props.showAlert("Removed Extra Spaces", "Success");
  };

  const copyText = () => {
    let textt = document.getElementById("myArea");
    textt.select();
    navigator.clipboard.writeText(text);
    props.showAlert("Copied Content", "Success");
  };

  const extractEmaill = () => {
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    let stringg = text.split(" ");
    for (let i = 0; i < text.split(" ").length; i++) {
      if (stringg[i].match(emailPattern)) {
        emailText = stringg[i];
        getEmaill(emailText);
        props.showAlert("Found Email", "Success");
      } else {
        emailText = "No email";
        getEmaill(emailText);
        
      }
    }
  };

  const titleCase = () => {
    let chnageLower = text.toLowerCase();
    let lowerString = chnageLower.split(" ");
    for (let i = 0; i < lowerString.length; i++) {
      //    console.log(lowerString[i]);
      lowerString[i] =
        lowerString[i][0].toUpperCase() + lowerString[i].slice(1);
      //  console.log(lowerString[i][0].toUpperCase());
      //  console.log(lowerString[i].slice(1));
    }
    setText(lowerString.join(" "));
  };
  // function - extra space and copy text
  return (
    <>
      <div
        className="container my-3"
        style={{color: props.mode === 'light' ? 'white':'black'}}
        >
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            <h1> {props.heading} </h1>
          </label>
          <textarea
            className="form-control"
            style={{
              backgroundColor: props.mode === 'dark' ? 'grey' : 'white',
                        color: props.mode === 'dark' ? 'white' : 'black',
            }}
            id="myArea"
            rows="6"
            placeholder="Enter Text Here"
            onChange={onChangeHandle}
            value={text}></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-2" onClick={changeUppercase}
       
        >
          Convert to UPPERCASE
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={changeLowercase}>
          Convert to lowercase
        </button>

        <button className="btn btn-primary mx-2 my-2" onClick={clearEverything}>
          Clear Eveything
        </button>

        <button className="btn btn-primary mx-2 my-2" onClick={extractEmaill}>
          Extract Email
        </button>

        <button className="btn btn-primary mx-2 my-2" onClick={titleCase}>
          Title Case
        </button>

        <button className="btn btn-primary mx-2 my-2" onClick={copyText}>
          Copy Text
        </button>

        <button
          className="btn btn-primary mx-2 my-2"
          onClick={removeExtraSpace}
        >
          Remove Extra Space
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === 'dark' ? 'white' : 'black'}}
        style={{ color: props.mode === "#339933" ? "white" : "black"}}
        >
        <h1> Your Text Summary </h1>
        <p>
          Number of Words{" "}
          {text ? text.split(" ").length : text.split(" ").shift()} & Number of
          Character {text.length}
        </p>
        <p>
          {" "}
          Time you take to read :--{" "}
          {text ? 0.008 * text.split(" ").length : "None"}
        </p>
        <h3>Preview Text</h3>
        <p>{text}</p>
        <p>Extracted Email is: {emailText}</p>
      </div>
    </>
  );
}
