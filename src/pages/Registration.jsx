import React from "react";
import { useState } from "react";
import Audioguide from "../components/Audioguide.jsx";
// import avatar1 from "../img/avatar-blue-green.png";
// import avatar2 from "../img/avatar-blue-pink.png";
// import avatar3 from "../img/avatar-green-yellow.png";
// import avatar4 from "../img/avatar-pink-blue.png";
// import avatar5 from "../img/avatar-red-yellow.png";
// import avatar6 from "../img/avatar-yellow-pink.png";

export function Registration() {
  // POST user -----
  const INITIAL = 
  {
    profilname: "",
    stadt: "",
    email: "",
    passwort: "",
    avatar: "",
    audio: false,
    abo: "",
    isAdmin: false,
  };

const [user, setUser] = useState(INITIAL);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5555/registration", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((response) => response.json());
      setUser(user);
      console.log(user);
      setUser(INITIAL);
  };

  return (
    <div>
      <h1 className="register">Registrierung</h1>
      <form action="" className="mt-4" onSubmit={handleSubmit}>
        {/* Profilname */}
        <div className="mb-3">
          <label htmlFor="profilname" className="form-label">
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
          />
        </div>

        {/* Stadt */}
       <div className="mb-3">
          <label htmlFor="stadt" className="form-label">
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
          />
         </div>
        {/* E-Mail */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
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
          />
        </div>

        {/* Passwort */}
        <div className="mb-3">
          <label htmlFor="passwort" className="form-label">
            Passwort
          </label>
          <input
            value={user.passwort}
            type="password"
            className="form-control"
            id="passwort"
            aria-describedby="passwordHelp"
            placeholder="passwort"
            onChange={handleChange}
          />
        </div>
        {/* Passwort wiederholen */}
{/*        <div className="mb-3">
          <label htmlFor="InputrepeatPassword" className="form-label">
            Passwort wiederholen
          </label>
          <input
            type="password"
            className="form-control"
            id="InputrepeatPassword"
            aria-describedby="repeatPasswordHelp"
            onChange={handleChange}
          />
        </div>
*/}
        {/* A V A T A R */}
        {/* <div>
          <h4>Wähle dein Profilbild aus:</h4>
          <img
            src={avatar1}
            alt="avatar"
            className="avatar"
            id="avatar1"
            onClick={handleChange}
          />
          <img
            src={avatar2}
            alt="avatar"
            className="avatar"
            id="avatar2"
            onClick={handleChange}
          />
          <img
            src={avatar3}
            alt="avatar"
            className="avatar"
            id="avatar3"
            onClick={handleChange}
          />
          <img
            src={avatar4}
            alt="avatar"
            className="avatar"
            id="avatar4"
            onClick={handleChange}
          />
          <img
            src={avatar5}
            alt="avatar"
            className="avatar"
            id="avatar5"
            onClick={handleChange}
          />
          <img
            src={avatar6}
            alt="avatar"
            className="avatar"
            id="avatar6"
            onClick={handleChange}
          />
          <div className="icons-verweis">
            {" "}
            Icons erstellt von{" "}
            <a
              href="https://www.flaticon.com/de/autoren/secret-studio"
              title="Secret Studio"
            >
              {" "}
              Secret Studio{" "}
            </a>{" "}
            from{" "}
            <a href="https://www.flaticon.com/de/" title="Flaticon">
              www.flaticon.com'
            </a>
          </div>
        </div> */}

        {/* A U D I O G U I D E */}
        <div className="audio-guide-choice">
          <span>
            Möchtest du den Audioguide einschalten? Voreingestellt ist dieser auf "Aus"!
          </span>
          <Audioguide />
        </div>

        {/* A B O N N E M E N T  A U S W Ä H L E N */}
        <div className="abo-cards-main">
          <div className="abo-card">
            <h3>3 €</h3>
            <h5>1 Tag</h5>
          </div>
          <div className="abo-card">
            <h3>5 €</h3>
            <h5>1 Monat</h5>
          </div>
          <div className="abo-card">
            <h3>20 €</h3>
            <h5>1 Jahr</h5>
          </div>
        </div>

        {/* P A Y P A L */}
        <div className="paypal">
          <button>Paypal</button>
        </div>

        {/* "R E G I S T R I E R E N" - B U T T O N  */}
        <span>
          Mit dem Klick auf den “Jetzt registrieren!” Button erlaube ich dieser
          App den Zugriff auf meinen Standort. Ich stimme den{" "}
          <a href="#">AGB</a> und <a href="#">Datenschutzlinien</a> zu.
        </span>
        <button className="btn-primary" type="submit">
          Jetzt Registrieren!
        </button>
      </form>
    </div>
  );
}
