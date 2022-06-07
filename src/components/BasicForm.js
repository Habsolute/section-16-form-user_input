import React, { useState } from "react";
import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  //  First name
  const [firstName, setFirstName] = useState("");
  const [fistNameTouched, setFistNameTouched] = useState(false);
  const firstNameIsValid = firstName.trim() !== "";

  //  Last name
  const [lastName, setLastName] = useState("");
  const [lastNameTouched, setLastNameTouched] = useState(false);
  const lastNameIsValid = lastName.trim() !== "";

  //  email
  const [email, setEmail] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);
  const emailIsValid = email.trim().includes("@");

  const formIsValid = emailIsValid && lastNameIsValid && firstNameIsValid;

  useInput("hello");
  console.log("formulaire valide : " + formIsValid);
  /**
   *  First Name receive from form ---------------------
   */
  function fisrtNameInputHandler(e) {
    setFirstName(e.target.value);
  }

  function firstNameBlur(e) {
    setFistNameTouched(true);
  }

  /**
   *  LastName receive from form ---------------------
   */
  function lastNameInputHandler(e) {
    setLastName(e.target.value);
  }

  function lastNameBlur() {
    setLastNameTouched(true);
  }

  /**
   *  Email receive from form ---------------------
   */
  function emailInputHandler(e) {
    setEmail(e.target.value);
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

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className="form-control">
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
        {}
        <div className="form-control">
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
      </div>
      <div className="form-control">
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
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
