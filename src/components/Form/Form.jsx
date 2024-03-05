import "./FormStyles.css";
import React from "react";

const Form = () => {
  return (
    <div>
      <div className="form">
        <h1>Contact Me</h1>
       
          <div className="form-group">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required/>
          </div>
          <div className="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label for="subject">Subject:</label>
            <input type="text" id="subject" name="subject" required />
          </div>
          <div className="form-group">
            <label for="message">Message:</label>
            <textarea
              id="message"
              name="message"
              required
              rows="6"
              placeholder="Type Your message here"
            />
          </div>
          <button type="submit" className="btn">
            Submit
          </button>
      </div>
    </div>
  );
};

export default Form;
