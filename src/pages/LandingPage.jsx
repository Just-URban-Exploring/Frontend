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

      <div className={styles.firstCallToAction}>
          <h1 className={styles.jureParagraf}>
            <p><span className={styles.jurestyle}>J</span>ust <span className={styles.jurestyle}>UR</span>ban <span className={styles.jurestyle}>E</span>xploring</p>
          </h1>
          <div>
            <h2 className={styles.jureParagraf}>Alles, aber simpel</h2>
          </div>
          <img src={Jure} className={styles.imgJure}alt="Logo" />
          <p className={styles.pCTA}>In deiner Umgebung gibt es mehr zu entdecken als zu denkst. </p><p className={styles.pCTA}>Probiere es aus und überzeuge dich selbst!</p>
      </div>
      <div className={styles.containerCallToAction}>
        <img src={Berlin} className={styles.imgTakeATour} alt="Berlin" />
        <div className={styles.containerRight}>
          <h2 className={styles.h2Text}>Erkunde die Welt auf deine eigene Art und Weise</h2>
          <p className={styles.text}>
              Sei dein eigener Tour Guide. Besuche die interessantesten Orte der
              Welt. Entdecke Sehenswürdigkeiten auf eigene Faust - in der Stadt und
              auf dem Land. Zeit und Verweildauer bestimmst du selbst. Ohne Stress
              und ganz unabhängig.
            </p>
        </div>
      </div>
      <div className={styles.containerIcons}>
        {<img src={Icons} alt="Icons" />}
        <div className={styles.IconParagrafPosition}>
          <div>
            <img src={SecretIcon} alt="Secret Icon" />
          </div>
          <p>
            Dank der Icons kannst du auf einen Blick sehen, was sehenswert ist.
            Klicke auf ein Icon und lasse dir Informationen zu dem ausgewählten
            Ort anzeigen. Jeder Ort hat seine eigene Geschichte.
          </p>
        </div>
      </div>

      <div className={styles.containerMap}>
        {<img src={Map} alt="Map" />}
        <h2 className={styles.containerMapH2}>Karte</h2>
        <div className={styles.containerMapParagraf}>
          <p>
            Museen, schöne Aussichten, Parks, Cafés und sogar das nächstgelegene
            WC werden dir auf der Karte angezeigt. Auf deinem Weg durch die Orte
            der Welt entscheidest du, wo es lang geht.
          </p>
        </div>
      </div>

      <div className={styles.containerAudioGuide}>
      <h2 className={styles.containerMapH2}>Audioguide</h2>
        <img src={AudioGuide} alt="AudioGuide" />
        <div>
          <p className={styles.audioGuideText}>
            Bist du eher der auditive Entdecker? Lass dir die Tour vorlesen mit
            einem Klick kannst du in eine andere Zeit oder neue Welt eintauchen.
          </p>
        </div>
      </div>

      <div className={styles.containerCallToAction}>
        <h2>Jetzt loslegen</h2>
        <p>
          Registriere dich jetzt und entdecke die Welt auf deine eigene Art und
          Weise.
        </p>
        <img src={Jure} alt="Logo" />
        <div className={styles.callBackActionParagraf}>
          <p className={styles.callBackActionJure}>
            <span className={styles.jurestyle}>J</span>ust <span className={styles.jurestyle}>UR</span>ban <span className={styles.jurestyle}>E</span>xploring
          </p>
          <div>
            <p>Alles, aber simpel</p>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <Link to="/agb">AGB</Link>
        <Link to="/datenschutz">Datenschutz</Link>
        <Link to="/impressum">Impressum</Link>
      </div>
    </div>
  );
}
