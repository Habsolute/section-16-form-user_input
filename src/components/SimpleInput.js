import { useState } from "react";
const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const enteredEmailIsValid = enteredEmail.trim() !== "";

  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid && emailIsValid) {
    formIsValid = true;
  }

  /**
   * form name ----------------------------------------------------------------------------------
   */
  function nameInputChangeHandler(e) {
    setEnteredName(e.target.value);
    // console.log(enteredName);
  }

  function nameInputBlurHandler(e) {
    setEnteredNameTouched(true);
  }

  /**
   * form Email ---------------------------------------------------------------------------
   */

  function emailInputChangeHandler(e) {
    setEnteredEmail(e.target.value);

    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (e.target.value.match(reg)) {
      setEmailIsValid(true);
    } else {
      setEmailIsValid(false);
    }
    console.log(e.target.value);
  }

  function emailInputBlurHandler(e) {
    setEnteredEmailTouched(true);
  }

  /**
   *  form submit handler --------------------------------------------------------------------
   */
  function FormSubmitHandler(e) {
    e.preventDefault();

    setEnteredNameTouched(true);
    setEnteredEmailTouched(true);

    if (!enteredNameIsValid) {
      return;
    }
    // console.log(enteredName);
    // console.log(enteredEmail);

    setEnteredName("");
    setEnteredEmail("");
    setEnteredNameTouched(false);
    setEnteredEmailTouched(false);
  }

  // console.log(nameInputIsInvalid);

  const nameInputClasses = nameInputIsInvalid
    ? "form-control  invalid"
    : "form-control";

  const emailInputClasses = emailInputIsInvalid
    ? "form-control  invalid"
    : "form-control";

  /**
   * jsx return ----------------------------------------------------------------------------
   */
  return (
    <form onSubmit={FormSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
      </div>
      {nameInputIsInvalid && (
        <p className="error-text">Name must not be empty.</p>
      )}

      <div className={emailInputClasses}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          onChange={emailInputChangeHandler}
          value={enteredEmail}
          onBlur={emailInputBlurHandler}
        />
      </div>
      {emailInputIsInvalid && <p className="error-text">Email Not Good.</p>}

      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
