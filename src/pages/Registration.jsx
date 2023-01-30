import React from "react";
import { useState } from "react";
import Audioguide from "../components/Audioguide.jsx";

export function Registration() {
  // POST user -----
  const [user, setUser] = useState({
    profilname: "",
    stadt: "",
    email: "",
    passwort: "",
    avatar: "",
    audio: false,
    abo: "",
    isAdmin: false,
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:4009/user", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((response) => response.json());
    setUser(user);
    console.log(user);
  };

  return (
    <div>
      <h1 className="register">Registrierung</h1>
      <form action="" className="mt-4" onSubmit={handleSubmit}>
        {/* Profilname */}
        <div className="mb-3">
          <label htmlFor="InputProfileName" className="form-label">
            Profilname
          </label>
          <input
            value={user.profilname}
            type="text"
            className="form-control"
            id="InputProfileName"
            aria-describedby="profileNameHelp"
            onChange={handleChange}
          />
        </div>

        {/* Stadt */}
        <div className="mb-3">
          <label htmlFor="Inputcity" className="form-label">
            Stadt
          </label>
          <input
            value={user.stadt}
            type="text"
            className="form-control"
            id="Inputcity"
            aria-describedby="cityHelp"
            onChange={handleChange}
          />
        </div>
        {/* E-Mail */}
        <div className="mb-3">
          <label htmlFor="Inputemail" className="form-label">
            E-Mail-Adresse
          </label>
          <input
            value={user.email}
            type="email"
            className="form-control"
            id="Inputemail"
            aria-describedby="emailHelp"
            onChange={handleChange}
          />
        </div>

        {/* Passwort */}
        <div className="mb-3">
          <label htmlFor="Inputpassword" className="form-label">
            Passwort
          </label>
          <input
            value={user.passwort}
            type="password"
            className="form-control"
            id="Inputpassword"
            aria-describedby="passwordHelp"
            onChange={handleChange}
          />
        </div>
        {/* Passwort wiederholen */}
        <div className="mb-3">
          <label htmlFor="InputrepeatPassword" className="form-label">
            Passwort wiederholen
          </label>
          <input
            value={user.passwordWiederholen}
            type="password"
            className="form-control"
            id="InputrepeatPassword"
            aria-describedby="repeatPasswordHelp"
            onChange={handleChange}
          />
        </div>

        {/* A U D I O G U I D E */}
        <div className="audio-guide-choice">
          <span>
            Möchtest du den Audioguide jetzt schon als Standarteinstellung
            festlegen?
            <span className="small-text">
              {" "}
              &#40;Du kannst diese Einstellung jederzeit in deinem Profil
              ändern. Wenn du den Audioguide jetzt ausschaltest, hast du nachher
              trotzdem die Möglichkeit dir einzelne Infotafeln vorlesen zu
              lassen.&#41;{" "}
            </span>
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
