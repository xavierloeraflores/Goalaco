import React, { useContext, useState } from "react";
import { Link } from "@reach/router";
import { auth, signInWithGoogle, generateUserDocument } from "../firebase";
import Button from "@material-ui/core/Button";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState(null);

  const createUserWithEmailAndPasswordHandler = async (
    event,
    email,
    password
  ) => {
    event.preventDefault();
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      generateUserDocument(user, { displayName });
    } catch (error) {
      setError("Error Signing up");
    }

    setEmail("");
    setPassword("");
    setDisplayName("");
  };
  const linebreak = "\n";
  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;

    if (name === "userEmail") {
      setEmail(value);
    } else if (name === "userPassword") {
      setPassword(value);
    } else if (name === "displayName") {
      setDisplayName(value);
    }
  };

  return (
    <div id="LoginCSS">
      <h1>Sign Up</h1>
      <div>
        {error !== null && <div>{error}</div>}
        <form className="">
          <label htmlFor="displayName" className="block">
            Display Name:
          </label>
          <input
            type="text"
            name="displayName"
            value={displayName}
            placeholder="Name"
            id="displayName"
            onChange={(event) => onChangeHandler(event)}
          />
          <p>{linebreak}</p>
          <label htmlFor="userEmail" className="block">
            Email:
          </label>
          <input
            type="email"
            name="userEmail"
            value={email}
            placeholder="Email"
            id="userEmail"
            onChange={(event) => onChangeHandler(event)}
          />
          <p>{linebreak}</p>
          <label htmlFor="userPassword" className="block">
            Password:
          </label>
          <input
            type="password"
            name="userPassword"
            value={password}
            placeholder="Password"
            id="userPassword"
            onChange={(event) => onChangeHandler(event)}
          />
          <p>{linebreak}</p>
          <Button
            onClick={(event) => {
              createUserWithEmailAndPasswordHandler(event, email, password);
            }}
          >
            Sign up
          </Button>
        </form>
        <Button
          onClick={() => {
            try {
              signInWithGoogle();
            } catch (error) {
              console.error("Error signing in", error);
            }
          }}
        >
          Sign In with Google
        </Button>
        <p>
          Already have an account? <Link to="/">Sign in here</Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default SignUp;
