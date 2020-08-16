import React, { useState, useContext } from "react";
import { auth } from "../firebase";
import { UserContext } from "../providers/UserProvider";
import { Link } from "@reach/router";

const PasswordReset = () => {
  const [email, setEmail] = useState("");
  const [emailHasBeenSent, setEmailHasBeenSent] = useState(false);
  const [error, setError] = useState(null);

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;

    if (name === "userEmail") {
      setEmail(value);
    }
  };

  const linebreak = "\n";
  const sendResetEmail = (event) => {
    event.preventDefault();
    auth
      .sendPasswordResetEmail(email)
      .then(() => {
        setEmailHasBeenSent(true);
        setTimeout(() => {
          setEmailHasBeenSent(false);
        }, 3000);
      })
      .catch(() => {
        setError("Error resetting password");
      });
  };
  return (
    <div id="LoginCSS">
      <h1>Reset your Password</h1>
      <div>
        <form action="">
          {emailHasBeenSent && <div>An email has been sent to you!</div>}
          {error !== null && <div>{error}</div>}
          <label htmlFor="userEmail" className="w-full block">
            Email:
          </label>
          <input
            type="email"
            name="userEmail"
            id="userEmail"
            value={email}
            placeholder="Enter your email"
            onChange={onChangeHandler}
            className="mb-3 w-full px-1 py-2"
          />
          <p>{linebreak}</p>
          <button
            onClick={(event) => {
              sendResetEmail(event);
            }}
          >
            Send me a reset link
          </button>
        </form>

        <p>
          <Link to="/">&larr; back to sign in page</Link>
        </p>
      </div>
    </div>
  );
};
//test
export default PasswordReset;
