import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <div className="form_container">
      <div className="form">

        <form name="personForm" className="element">

          <h2 className="loginn">Form Page</h2>
          <div className="label_input_container">
            <label for="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              ng-model="person.name"
              placeholder="Enter name"
              required
            />
          </div>
          <div className="label_input_container">
            <label for="adress" >Adress</label>
            <input
              id="address"
              name="address"
              type="text"
              ng-model="person.address"
              placeholder="Enter address"
              required
            />
          </div>
          <div className="label_input_container">
            <label for="contact" >Contact No</label>
            <input
              id="mobile"
              name="mobile"
              type="number"
              ng-pattern="/^(91){1}[0-9]{8}$/"
              placeholder="Enter contact Number"
              ng-maxlength="10"
              ng-minlength="10"
              ng-model="person.mobile"
              required
            />
          </div>

          <div className="label_input_container">
            <label for="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              ng-model="person.email"
              ng-pattern="regex"
              placeholder="Enter valid email"
              required
            />
          </div>

          <div className="checkbox_label_container">
            <input
              type="checkbox"
              ng-model="terms"
              name="terms"
              id="terms"
              required
            />

            <p className="p_text">I Agree to the terms.</p>
          </div>
          <button className="sub-form " type="submit">Submit Form</button>

        </form>
      </div>
    </div>
  );
};
export default Form;
