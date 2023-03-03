import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styles from "../css/LandingPage.module.css";
import Jure from "../assets/JURE-Logo.svg";
import Berlin from "../assets/brandenBurgerTor.svg";
import Icons from "../assets/Icons.svg";
import Map from "../assets/Map.svg";
import SecretIcon from "../assets/SecretIcon.svg";
import AudioGuide from "../assets/AudioGuide.svg";

export function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      {/* Buttons */}
      <div className={styles.buttonContainer}>
      <button className={styles.btnPrimary} onClick={() => navigate("/login")}>Anmelden</button>
        <button className={styles.btnPrimary} onClick={() => navigate("/register")}>Registrieren</button>
      </div>

      <div className={styles.CallToAction}>
          <h1 className={styles.h1JURE}>
            <p><span className={styles.jurestyle}>J</span>ust <span className={styles.jurestyle}>UR</span>ban <span className={styles.jurestyle}>E</span>xploring</p>
          </h1>
            <h2>Alles, aber simpel</h2>
          <img src={Jure} className={styles.imgJure} alt="Logo" />
          <p className={styles.pCTA}>In deiner Umgebung gibt es mehr zu entdecken als zu denkst.</p>
          <p className={styles.pCTA}>Probiere es jetzt aus!</p>
      </div>

      <div className={styles.containerInfo}>
        <img src={Berlin} className={styles.imgTakeATour} alt="Berlin" />
        <div className={styles.containerText}>
          <h2 className={styles.h2Text}>Erkunde die Welt auf deine eigene Art und Weise</h2>
          <p className={styles.text}>
              Sei dein eigener Tour Guide. Besuche die interessantesten Orte der
              Welt. Entdecke Sehenswürdigkeiten auf eigene Faust - in der Stadt und
              auf dem Land. Zeit und Verweildauer bestimmst du selbst. Ohne Stress
              und ganz unabhängig.
            </p>
        </div>
      </div>
      <div className={styles.containerInfo}>
      <div className={styles.containerText}> 
        <h2 className={styles.h2Text}>Einfache Bedienung</h2> 
          <p className={styles.text}>
            Dank der Icons kannst du auf einen Blick sehen, was sehenswert ist.
            Klicke auf ein Icon und lasse dir Informationen zu dem ausgewählten
            Ort anzeigen. Jeder Ort hat seine eigene Geschichte.
          </p>
          <img src={SecretIcon} className={styles.secretIcon} alt="Secret Icon" />
          <p className={styles.text2}>Psst ... Geheimtipp gefällig? Wir kennen da was.</p>
        </div>
        <img src={Icons} className={styles.icons} alt="Icons" />
        
      </div>

      <div className={styles.containerInfo}>
        <img src={Map} className={styles.imgMap} alt="Map" />
        <div className={styles.containerText}>
          <h2 className={styles.h2Text}>Karte</h2>
            <p className={styles.text}>
              Museen, schöne Aussichten, Parks, Cafés und sogar das nächstgelegene
              WC werden dir auf der Karte angezeigt. Auf deinem Weg durch die Orte
              der Welt entscheidest du, wo es lang geht.
            </p>
        </div>
      </div>
      <div className={styles.containerInfo}>
      <div className={styles.containerText}>
        <h2 className={styles.h2Text}>Audioguide</h2>
        <p className={styles.text}>
              Bist du eher der auditive Entdecker? Lass dir die Tour vorlesen mit
              einem Klick kannst du in eine andere Zeit oder neue Welt eintauchen.
            </p>
      </div>
        <img src={AudioGuide} className={styles.imgAudio} alt="AudioGuide" />
      </div>

      <div className={styles.CallToAction}>
        <h2 className={styles.h2Text}>Jetzt loslegen</h2>
        <p className={styles.pCTA}>
          Registriere dich jetzt und entdecke die Welt auf deine eigene Art und
          Weise.
        </p>
        <img src={Jure} className={styles.imgJure} alt="Logo" />
          <h1 className={styles.h1JURE}>
            <span className={styles.jurestyle}>J</span>ust <span className={styles.jurestyle}>UR</span>ban <span className={styles.jurestyle}>E</span>xploring
          </h1>
            <h2>Alles, aber simpel</h2>
      </div>
      <div className={styles.footer}>
        <Link className={styles.linkTo} to="/agb">AGB</Link>
        <Link className={styles.linkTo} to="/datenschutz">Datenschutz</Link>
        <Link className={styles.linkTo} to="/impressum">Impressum</Link>
      </div>
    </div>
  );
}
