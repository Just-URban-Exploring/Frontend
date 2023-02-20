import React, { useState } from "react";
import styles from "../css/Login.module.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export function Login() {
  const INITIAL = {
    email: "",
    passwort: "",
  };

  const [user, setUser] = useState(INITIAL);

  // Login-Messages___________________________________________________________________________
  const [loginMessage, setLoginMessage] = useState("");


 

  // Login-Messages___________________________________________________________________________

  const handleChange = (e) => {
    setUser({ ...user, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:5555/user/login", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((response) => response.json());
    
    
    console.log('user vor setUser: ',user);
    setUser(user);
    if(user) {
      setLoginMessage("LOGIN SUCCESSFUL!")
    } else {
      setLoginMessage("LOGIN Failed!")
    }
    console.log('user nach setUser: ',user);

    console.log(user);
    setUser(INITIAL);
  };


  {/* {isSubmitted ? <div className={styles.loginSuccess}> LOGIN SUCCESSFUL</div> : <div>LOGIN FAILED</div>} */}

  return (
    <div>
      <h1>Login</h1>
      <div>Logo</div>
      <Box
        className={styles.card}
        component={styles.form}
        sx={{
          "& .MuiTextField-root": { mt: 2 },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            htmlFor="email"
            type="email"
            id="email"
            label="E-Mail"
            fullWidth
            className={styles.forminput}
            value={user.email}
            onChange={handleChange}
          > 
          </TextField>
          <TextField
            htmlFor="passwort"
            id="passwort"
            label="Passwort"
            type="password"
            autoComplete="current-password"
            fullWidth
            className={styles.forminput}
            value={user.passwort}
            onChange={handleChange}
          ></TextField>
        </div>
        <button
          type="submit"
          className={styles.btnprimary}
          onClick={handleSubmit}
        >
          Anmelden
        </button>
        {loginMessage}
        <div className="forgot-pw">
          <a href="/forgot-pw">Passwort vergessen?</a>
        </div>
        {/*  <button type="submit" className={styles.btngoogle}>
        <button type="submit" className="btn-google">
          Mit Google anmelden
        </button> */}
      </Box>
    </div>
  );
}
