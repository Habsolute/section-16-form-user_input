import React, { useState } from "react";
import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  //  First name
  const [firstName, setFirstName] = useState("");
  const [fistNameTouched, setFistNameTouched] = useState(false);
  const firstNameIsValid = firstName.trim() !== "";
  const nameInputError = fistNameTouched && !firstNameIsValid;

  //  Last name
  const [lastName, setLastName] = useState("");
  const [lastNameTouched, setLastNameTouched] = useState(false);
  const lastNameIsValid = lastName.trim() !== "";
  const lastNameInputError = lastNameTouched && !lastNameIsValid;

  //  email
  const [email, setEmail] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);
  const emailIsValid = email.trim().includes("@");
  const emailInputError = emailTouched && !emailIsValid;

  const formIsValid = emailIsValid && lastNameIsValid && firstNameIsValid;

  useInput("hello");
  // console.log("formulaire valide : " + formIsValid);
  /**
   *  First Name receive from form ---------------------
   */
  function fisrtNameInputHandler(e) {
    setFirstName(e.target.value);
    setFistNameTouched(false);
  }

  function firstNameBlur(e) {
    setFistNameTouched(true);
  }

  /**
   *  LastName receive from form ---------------------
   */
  function lastNameInputHandler(e) {
    setLastName(e.target.value);
    setLastNameTouched(false);
  }

  function lastNameBlur() {
    setLastNameTouched(true);
  }

  /**
   *  Email receive from form ---------------------
   */
  function emailInputHandler(e) {
    setEmail(e.target.value);
    setEmailTouched(false);
  }

  function emailBlur() {
    setEmailTouched(true);
  }
  /**
   *  form submit---------------------
   */
  function formSubmitHandler(e) {
    e.preventDefault();

    const formData = {
      fisrtName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      email: e.target.email.value,
    };

    // console.log(formData);
    props.receiveFormData(formData);
    setFirstName("");
    setLastName("");
    setEmail("");
  }

  let inputNameClasses = "";
  if (nameInputError) {
    inputNameClasses = "form-control  invalid";
  } else {
    inputNameClasses = "form-control";
  }

  const lastNameInputClasses = lastNameInputError
    ? "form-control  invalid"
    : "form-control";

  const emailInputClasses = emailInputError
    ? "form-control  invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={inputNameClasses}>
          <label htmlFor="fisrtName">First Name</label>
          <input
            onBlur={firstNameBlur}
            name="firstName"
            value={firstName}
            onChange={fisrtNameInputHandler}
            type="text"
            id="name"
          />
        </div>
        {nameInputError && (
          <p className="error-text">Must be a valid first name.</p>
        )}

        <div className={lastNameInputClasses}>
          <label htmlFor="lastName">Last Name</label>
          <input
            onBlur={lastNameBlur}
            name="lastName"
            value={lastName}
            onChange={lastNameInputHandler}
            type="text"
            id="name"
          />
        </div>
        {lastNameInputError && (
          <p className="error-text">Must be a valid last name.</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          onBlur={emailBlur}
          name="email"
          type="text"
          id="name"
          value={email}
          onChange={emailInputHandler}
        />
      </div>
      {emailInputError && <p className="error-text">Must be a valid Email.</p>}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
