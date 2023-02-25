import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../css/Login.module.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import axios from "axios";
import connection from "../connection.json";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);

  const configuration = {
    method: "post",
    url: `${connection.URI}/users/login`,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Credentials': 'true',
      'Content-Type': 'application/json',
    },
    data: {
      email,
      password,
    },
  };

  const handleSubmit = (e) => {
    // prevent the form from refreshing the whole page
    e.preventDefault();
    // fetch data
    axios(configuration)
      .then((result) => {
        setLogin(true);
        localStorage.setItem("token", result.data.token);
        navigate("/map");
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const navigate = useNavigate();

  return (
    <div>
      <h1>Login</h1>
      <div>Logo</div>
      <div>
        {login ? (
          <p className="text-success">You Are Logged in Successfully</p>
        ) : (
          <p className="text-danger">You Are Not Logged in</p>
        )}
      </div>
      <Box
        className={styles.card}
        component={styles.form}
        sx={{
          "& .MuiTextField-root": { mt: 2 },
        }}
        noValidate
        autoComplete="off"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div>
          <TextField
            htmlFor="email"
            type="email"
            id="email"
            label="E-Mail"
            fullWidth
            className={styles.forminput}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></TextField>
          <TextField
            htmlFor="passwort"
            id="passwort"
            label="Passwort"
            type="password"
            autoComplete="current-password"
            fullWidth
            className={styles.forminput}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></TextField>
        </div>
        <button
          type="submit"
          className={styles.btnprimary}
          onClick={(e) => handleSubmit(e)}
        >
          Anmelden
        </button>
        <div className="forgot-pw">
          <a href="/forgot-pw">Passwort vergessen?</a>
        </div>
        {/*  <button type="submit" className={styles.btngoogle}>
        <button type="submit" className="btn-google">
          Mit Google anmelden
        </button> */}
        <button onClick={() => navigate("/")}>Home</button>
      </Box>
    </div>
  );
}
