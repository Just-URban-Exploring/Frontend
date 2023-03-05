import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../css/Login.module.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import axios from "axios";
import Jure from "../assets/JURE-Logo.svg";

const envURI = import.meta.env.VITE_URI

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);
  const [authenticated, setAuthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated")|| false));

  // Um eine Navbar mit Farbwechsel in dieser Datei zu platzieren brauchen wir einen useState, der die Farbe dieser Seite speichert. Dieser Props wird dann mit dem Aufruf der Nacbar-Komponente and die Navbar.jsx übergeben
  // const [bgColor, setBgColor] = useState('blue');

  const configuration = {
    method: "post",
    url: `${envURI}/users/login`,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Credentials': 'true',
      'Content-Type': 'application/json'
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
        setAuthenticated(true)
        localStorage.setItem('authenticated', true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const navigate = useNavigate();

  return (
    <div className={styles.containerStyle}>
      <div className={styles.buttonContainer}>
      <button className={styles.btnprimary} onClick={() => navigate("/register")}>Registrierung</button>
      <button className={styles.btnprimary} id="home" onClick={() => navigate("/")}>Home</button>
      </div>
      <h1 className={styles.login}>Login</h1>
      {/* Hier wird der bgColor State an die Navbar übergeben
      <Navbar bgColor={bgColor}/> */}
      <img src={Jure} alt="Logo" />
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
        <div className={styles.divTextField}>
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
        <div className={styles.btnpw}>
          <button
            type="submit"
            className={styles.btnprimary}
            onClick={(e) => handleSubmit(e)}
          >
            Anmelden
          </button>
            <div className={styles.pw}><a className={styles.alink}href="/forgot-pw">Passwort vergessen?</a></div>
        </div>
        {/*  <button type="submit" className={styles.btngoogle}>
        <button type="submit" className="btn-google">
          Mit Google anmelden
        </button> */}
        
      </Box>
    </div>
  );
}
