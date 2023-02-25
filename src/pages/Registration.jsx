import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import Audioguide from "../components/Audioguide.jsx";
import "../css/registration.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import axios from "axios";

// import avatar1 from "../img/avatar-blue-green.png";
// import avatar2 from "../img/avatar-blue-pink.png";
// import avatar3 from "../img/avatar-green-yellow.png";
// import avatar4 from "../img/avatar-pink-blue.png";
// import avatar5 from "../img/avatar-red-yellow.png";
// import avatar6 from "../img/avatar-yellow-pink.png";

export function Registration() {
  // // POST user -----
  // const INITIAL = {
  //   profilname: "",
  //   stadt: "",
  //   email: "",
  //   passwort: "",
  //   avatar: "",
  //   audio: false,
  //   abo: "",
  //   isAdmin: false,
  // };

  // const [user, setUser] = useState(INITIAL);

  // const handleChange = (e) => {
  //   setUser({ ...user, [e.target.id]: e.target.value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   fetch("http://localhost:5555/registration", {
  //     method: "POST",
  //     body: JSON.stringify(user),
  //     headers: {
  //       "Content-type": "application/json; charset=UTF-8",
  //     },
  //   }).then((response) => response.json());
  //   setUser(user);
  //   console.log(user);
  //   setUser(INITIAL);
  //   setMatchPwd("");
  // };

  const [profilname, setProfilname] = useState("");
  const [stadt, setStadt] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [matchPwd, setMatchPwd] = useState("");
  const [register, setRegister] = useState(false);
  const configuration = {
    method: "post",
    url: `${connection.URI}/user/register`,
    data: {
      profilname,
      stadt,
      email,
      password,
    },
  };

  const handleSubmit = (e) => {
    // prevent the form from refreshing the whole page
    e.preventDefault();
    axios(configuration)
      .then((result) => {
        console.log(result);
        setRegister(true);
      })
      .catch((error) => {
        error = new Error();
      });
    setMatchPwd("");
    navigate("/icons");

    // make a popup alert showing the "submitted" text
    // alert("Submited");
  };

  const navigate = useNavigate();

  return (
    <div>
      <h1 className="register">Registrierung</h1>
      <div>
        {" "}
        {/* display success message */}
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
        }}
        noValidate
        autoComplete="off"
        onSubmit={(e) => handleSubmit(e)}
      >
        {/* <form action="" className="mt-4" > */}
        {/* Profilname */}
        <div className="mb-3">
          <TextField
            htmlFor="profilname"
            name="profilname"
            type="text"
            id="profilname"
            label="Profilname"
            fullWidth
            className="form-input"
            value={profilname}
            onChange={(e) => setProfilname(e.target.value)}
          ></TextField>

          {/* <label htmlFor="profilname" className="form-label">
              Profilname
            </label>
            <input
              value={user.profilname}
              type="text"
              name="profilname"
              className="form-control"
              id="profilname"
              aria-describedby="profileNameHelp"
              placeholder="profilname"
              onChange={handleChange}
            /> */}
        </div>

        {/* Stadt */}
        <div className="mb-3">
          <TextField
            htmlFor="stadt"
            name="stadt"
            type="text"
            id="stadt"
            label="Stadt"
            fullWidth
            className="form-input"
            value={stadt}
            onChange={(e) => setStadt(e.target.value)}
          ></TextField>
          {/* <label htmlFor="stadt" className="form-label">
              Stadt
            </label>
            <input
              value={user.stadt}
              type="text"
              className="form-control"
              id="stadt"
              aria-describedby="cityHelp"
              placeholder="stadt"
              onChange={handleChange}
            /> */}
        </div>
        {/* E-Mail */}
        <div className="mb-3">
          <TextField
            htmlFor="email"
            name="email"
            type="email"
            id="email"
            label="E-mail"
            fullWidth
            className="form-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></TextField>
          {/* <label htmlFor="email" className="form-label">
              E-Mail-Adresse
            </label>
            <input
              value={user.email}
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="email"
              onChange={handleChange}
            /> */}
        </div>

        {/*-----Passwort Start----------------------------------------------------------------*/}
        <div>
          <TextField
            htmlFor="password"
            name="password"
            type="text"
            id="password"
            label="Password"
            fullWidth
            className="form-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></TextField>
        </div>
        <div>
          <TextField
            htmlFor="passwortwiederholen"
            type="text"
            id="passwortwiederholen"
            label="Passwort wiederholen"
            fullWidth
            className="form-input"
            value={matchPwd}
            onChange={(e) => setMatchPwd(e.target.value)}
          ></TextField>
        </div>

        {/*-----Passwort Ende---------------------*/}

        {/* A V A T A R */}

        {/* A U D I O G U I D E */}

        {/* A B O N N E M E N T  A U S W Ä H L E N */}

        {/* P A Y P A L */}

        <span>
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
        {/* "R E G I S T R I E R E N" - B U T T O N  */}
        <button
          className="btn-primary regButton"
          type="submit"
          disabled={password !== matchPwd ? true : false}
          onClick={(e) => handleSubmit(e)}
        >
          Jetzt Registrieren!
        </button>
        <button onClick={() => navigate("/map")}>Home</button>
      </Box>
    </div>
  );
}
