import React from "react";
import { useState, useEffect } from "react";
import styles from "../css/Profile.module.css";
import { FaTrashAlt, FaPencilAlt } from "react-icons";
import Audioguide from "../components/Audioguide.jsx";

export function Profile() {
  // F E T C H  D A T A
  const [dataUser, setDataUser] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const api = await fetch("http://localhost:4011/user/");
    const data = await api.json();
    setDataUser(data);
  };

  // P A T C H  U S E R
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
      method: "PATCH",
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
      <h1 className="mt-4">Profil-Header</h1>

      {/* P R O F I L K A R T E */}
      {dataUser.map((x) => {
        return (
          <div className="Card" key={x._id}>
            <div>
              <img src="" alt="avatar" className="avatar" />
              {id.img}
            </div>
            <div>
              <h4>Profilname</h4>
              <h2>{id.profilname}</h2>
            </div>
            <div>
              <h4>E-Mail-Adresse</h4>
              <h2>{x.email}</h2>
            </div>
            <div>
              <h4>Passwort</h4>
              <h2>******</h2>
            </div>
            <div>
              <h4>Aktuelles Abo</h4>
              <h2>{x.abo}</h2>
            </div>
            <a href="#">
              <FaPencilAlt />
              Angaben ändern
            </a>
          </div>
        );
      })}

      {/* D A T E N  Ä N D E R N */}
      {dataUser.map((x) => {
        return (
          <div className="Card" key={x._id}>
            <form action="" className="mt-4" onSubmit={handleSubmit}>
              {/* Profilname */}
              <div className="mb-3">
                <label htmlFor="InputProfileName" className="form-label">
                  Benutzername
                </label>
                <input
                  value={user.profilname}
                  type="text"
                  className="form-control"
                  id="InputProfileName"
                  aria-describedby="profileNameHelp"
                  onChange={handleChange}
                  placeholder={x.profilname}
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
                  placeholder={x.stadt}
                />
              </div>
              {/* E-Mail */}
              <div className="mb-3">
                <label htmlFor="Inputemail" className="form-label">
                  E-Mail
                </label>
                <input
                  value={user.email}
                  type="email"
                  className="form-control"
                  id="Inputemail"
                  aria-describedby="emailHelp"
                  onChange={handleChange}
                  placeholder={x.email}
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
                  placeholder="Neues Passwort eingeben"
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
                  placeholder="Passwort erneut eingeben"
                />
              </div>
              {/* Abo */}
              <div>Ein anderes Abo auswählen:</div>

              <button className="btn-primary" type="submit">
                Speichern
              </button>
            </form>
          </div>
        );
      })}

      {/* A U D I O  G U I D E  A N / A U S */}
      <div className="Card">
        <div>
          <span>Audio Guide Einstellung</span>
          <Audioguide />
        </div>
      </div>

      {/* A C C O U N T  L Ö S C H E N */}
      <div className="Card">
        <h3 className={styles.delete}>
          Account löschen <FaTrashAlt />
        </h3>
      </div>
    </div>
  );
}
