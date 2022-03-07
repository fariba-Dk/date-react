import React, { useState } from "react";
import "../styles.css";

const PERMISSIONS = ["Yes", "No"];

const RegisterYourApplicationForm = () => {
  const [date, setDate] = useState(new Date());
  function onChange(date) {
    setDate(date);
  }

  return (
    <div>
      <form>
        <h2>Please Register for our next Event</h2>

        <label>Name*:</label>
        <input type="text" required placeholder="Name" />

        <label>Email*:</label>
        <input type="email" required placeholder="Email" />

        <label>Age*:</label>
        <input type="number" required min="0" placeholder="Age" />

        <label>About us*:</label>
        <select required>
          <option value="">
            Do you want to receive Techtonica's Newsletter
          </option>
          {PERMISSIONS.map((preference) => (
            <option key={preference}>{preference}</option>
          ))}
        </select>

        <button onChange={onChange} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default RegisterYourApplicationForm;
