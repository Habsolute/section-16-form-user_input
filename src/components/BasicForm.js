import React, { useState } from "react";

const BasicForm = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  function fisrtNameInputHandler(e) {
    setFirstName(e.target.value);
  }

  function lastNameInputHandler(e) {
    setLastName(e.target.value);
  }

  function emailInputHandler(e) {
    setEmail(e.target.value);
  }

  function formSubmitHandler(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className="form-control">
          <label htmlFor="fisrtName">First Name</label>
          <input
            value={firstName}
            onChange={fisrtNameInputHandler}
            type="text"
            id="name"
          />
        </div>
        <div className="form-control">
          <label htmlFor="lastName">Last Name</label>
          <input
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
