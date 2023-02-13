import React from "react";
import styles from "../css/Login.module.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export function Login() {
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
            id="oulined-email-input"
            label="E-Mail"
            fullWidth
            className={styles.forminput}
          ></TextField>
          <TextField
            htmlFor="passwort"
            id="outlined-password-input"
            label="Passwort"
            type="password"
            autoComplete="current-password"
            fullWidth
            className={styles.forminput}
          ></TextField>
        </div>
        <button type="submit" className={styles.btnprimary}>
          Anmelden
        </button>
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
