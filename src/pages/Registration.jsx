import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import axios from "axios";
import connection from "../connection.json";
import "../css/registration.css";

export function Registration() {
  const [profilname, setProfilname] = useState("");
  const [stadt, setStadt] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [matchPwd, setMatchPwd] = useState("");
  const [register, setRegister] = useState(false);

  const configuration = {
    method: "post",
    url: `${connection.URI}/users/registration`,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Allow-Credentials": "true",
      "Content-Type": "application/json",
    },
    data: {
      profilname,
      stadt,
      email,
      password,
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios(configuration)
      .then((result) => {
        setRegister(true);
        console.log(result);
        navigate("/icons");
      })
      .catch((error) => {
        console.log(error);
      });
    setMatchPwd("");
    setEmail("");
    setPassword("");
    setProfilname("");
    setStadt("");
  };

  const navigate = useNavigate();

  return (
    <div className="container">
      <h1 className="register">Registrierung</h1>
      <button onClick={() => navigate("/map")}>Home</button>
      <div>
        {register ? (
          <p className="text-success">You Are Registered Successfully</p>
        ) : (
          <p className="text-danger">You Are Not Registered</p>
        )}
      </div>
      <Box
        className="card"
        component="form"
        sx={{
          "& .MuiTextField-root": { mt: 2 },
          backgroundColor: "var(--blue--700)",
          color: "white",
          padding: "1rem",
          width: "80%",
          maxWidth: "600px",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        noValidate
        autoComplete="off"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="mb-3">
          <TextField
            htmlFor="profilname"
            name="profilname"
            type="text"
            id="profilname"
            label="Profilname"
            fullWidth
            className="form-input"
            sx={{ backgroundColor: "white" }}
            value={profilname}
            onChange={(e) => setProfilname(e.target.value)}
          ></TextField>
        </div>

        <div className="mb-3">
          <TextField
            htmlFor="stadt"
            name="stadt"
            type="text"
            id="stadt"
            label="Stadt"
            fullWidth
            className="form-input"
            sx={{ backgroundColor: "white" }}
            value={stadt}
            onChange={(e) => setStadt(e.target.value)}
          ></TextField>
        </div>

        <div className="mb-3">
  <TextField
    htmlFor="password"
    name="password"
    type="text"
    id="password"
    label="Password"
    fullWidth
    className="form-input"
    sx={{ backgroundColor: "white" }}
    value={password}
    onChange={(e) => setPassword(e.target.value)}
  ></TextField>
</div>
<div className="mb-3">
  <TextField
    htmlFor="passwortwiederholen"
    type="text"
    id="passwortwiederholen"
    label="Passwort wiederholen"
    fullWidth
    className="form-input"
    sx={{ backgroundColor: "white" }}
    value={matchPwd}
    onChange={(e) => setMatchPwd(e.target.value)}
  ></TextField>
</div>

<span className="agb">
  Mit dem Klick auf den “Jetzt registrieren!” Button erlaube ich dieser
  App den Zugriff auf meinen Standort. Ich stimme den{" "}
  <Link to="/agb" target="_blank">
    AGB
  </Link>{" "}
  und{" "}
  <Link to="/datenschutz" target="_blank">
    Datenschutzrichtlinien
  </Link>{" "}
  zu.
</span>

<button
  className="btn-primary regButton"
  type="submit"
  disabled={password !== matchPwd ? true : false}
  onClick={(e) => handleSubmit(e)}
  sx={{ backgroundColor: "var(--blue--600)", mt: 3 }}
>
  Jetzt Registrieren!
</button>

        
</Box>
    </div>
  );
}