import React from "react";
import "../css/login.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export function Login() {
  return (
    <div>
      <h1>Login</h1>
      <div>Logo</div>
      <Box
        className="card"
        component="form"
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
            className="form-input"
          ></TextField>
          <TextField
            htmlFor="passwort"
            id="outlined-password-input"
            label="Passwort"
            type="password"
            autoComplete="current-password"
            fullWidth
            className="form-input"
          ></TextField>
        </div>
        <button type="submit" className="btn-primary">
          Anmelden
        </button>
        <div className="forgot-pw">
          <a href="/forgot-pw">Passwort vergessen?</a>
        </div>
        <button type="submit" className="btn-google">
          Mit Google anmelden
        </button>
      </Box>
    </div>
  );
}
