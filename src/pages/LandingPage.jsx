import styles from "../css/LandingPage.module.css";
import Jure from "../assets/JURE-Logo.svg";
import Berlin from "../assets/brandenBurgerTor.svg";
import Icons from "../assets/Icons.svg";
import Map from "../assets/Map.svg";
import SecretIcon from "../assets/SecretIcon.svg";
import AudioGuide from "../assets/AudioGuide.svg";
export function LandingPage() {
  return (
    <div className={styles.container}>
      <div className={styles.containerWillkommen}>
        <h2>Willkommen</h2>
        <img src={Jure} alt="Logo" />
        <div className={styles.jure}>
          <p className={styles.jureParagraf}>
            <b>JU</b>st <b>UR</b>ban <b>E</b>xploring
          </p>
          <div>
            <p>Alles, aber simpel</p>
          </div>
        </div>
      </div>

      <div className={styles.containerTakeATour}>
        {<img src={Berlin} alt="Berlin" />}

        <h2 className={styles.containerTakeATourH2}>Take a Tour</h2>
        <div className={styles.containerTakeATourParagraf}>
          <p>
            Sei dein eigener Tour Guide. Besuche die interessantesten Orte der
            Welt. Entdecke Sehenswürdigkeiten auf eigene Fast - in der Stadt und
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
            Dank der Icons kannst du auf einen Blick sehen was sehenswert ist.
            Klicke auf ein Icon und lasse dir Informationen zu dem ausgewählten
            Ort anzeigen. Jeder Ort hat seine eigene Geschichte.
          </p>
        </div>
      </div>

      <div className={styles.containerMap}>
        {<img src={Map} alt="Berlin" />}
        <h2 className={styles.containerMapH2}>Map</h2>
        <div className={styles.containerMapParagraf}>
          <p>
            Museen, schöne Aussichten, Parks, Cafés und sogar das nächstgelegene
            WC werden dir auf der Karte angezeigt. Auf deinem Weg durch die Orte
            der Welt entscheidest du wo es lang geht.
          </p>
        </div>
      </div>
      <div className={styles.containerAudioGuide}>
        <img src={AudioGuide} alt="Logo" />
        <div>
          <p>
            Bist du eher der auditive Entdecker? Lass dir die Tour vorlesen mit
            einem Klick kannst du in eine andere Zeit oder neue Welt eintauchen.
          </p>
        </div>
      </div>

      <div className={styles.containercallBackAction}>
        <h2>Just do It</h2>
        <img src={Jure} alt="Logo" />
        <div className={styles.callBackActionParagraf}>
          <p className={styles.callBackActionJure}>
            <b>JU</b>st <b>UR</b>ban <b>E</b>xploring
          </p>
          <div>
            <p>Alles, aber simpel</p>
          </div>
        </div>
        <button className={styles.callbackActionButton}>Anmelden</button>
      </div>
    </div>
  );
}
