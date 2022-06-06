import { useState, useRef } from "react";
const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState("");

  function nameInputChangeHandler(e) {
    setEnteredName(e.target.value);
    console.log(enteredName);
  }

  function FormSubmitHandler(e) {
    e.preventDefault();

    console.log(enteredName);

    const enteredValue = nameInputRef.current.value;
    console.log(enteredValue);
    setEnteredName("");
  }

  return (
    <form onSubmit={FormSubmitHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          value={enteredName}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
