import { useState, useRef } from "react";
const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  function nameInputChangeHandler(e) {
    setEnteredName(e.target.value);
    console.log(enteredName);
  }

  function FormSubmitHandler(e) {
    e.preventDefault();

    setEnteredNameTouched(true);

    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
      return;
    } else {
      setEnteredNameIsValid(true);
    }

    console.log(enteredName);

    const enteredValue = nameInputRef.current.value;
    console.log(enteredValue);
    setEnteredName("");
  }

  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
  console.log(nameInputIsInvalid);

  const nameInputClasses = nameInputIsInvalid
    ? "form-control  invalid"
    : "form-control";

  return (
    <form onSubmit={FormSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
