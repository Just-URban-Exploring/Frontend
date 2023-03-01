import React from "react";
import { useNavigate } from "react-router-dom";
// import "../css/Global.css";
import styles from "../css/DatenschutzTemplate.module.css";

const AGB = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button
        className={styles.buttonDatenschutz}
        onClick={() => navigate("/")}
      >
        Home
      </button>
      <div className={styles.AGBContainer}>
        <h2 className={styles.h2Big}>Allgemeine Geschäftsbedingungen</h2>
        <h4 className={styles.h4Bold}>Stand: Februar 2023</h4>
        <p className={styles.pBold}>Rechtliche Hinweise zur Benutzung:</p>
        <p className={styles.pText}>
          Der Unternehmer schließt im Laufe seiner Geschäftstätigkeit eine
          Vielzahl von Verträgen ab. Um eine Orientierungshilfe zu bieten,
          stellt die IHK München und Oberbayern Musterverträge zur Verfügung.</p>
          <p className={styles.pText}>
            Dieses Vertragsformular wurde mit größter Sorgfalt erstellt, erhebt
            aber keinen Anspruch auf Vollständigkeit und Richtigkeit. Es ist als
            Checkliste mit Formulierungshilfen zu verstehen und soll nur eine
            Anregung bieten, wie die typische Interessenlage zwischen den Parteien
            sachgerecht ausgeglichen werden kann. Dies entbindet den Verwender
            jedoch nicht von der sorgfältigen eigenverantwortlichen Prüfung.
          </p>
          <p className={styles.pText}>Aus Gründen der sprachlichen Vereinfachung wird auf die Nennung der
            Geschlechter verzichtet, wo eine geschlechtsneutrale Formulierung
            nicht möglich war. In diesen Fällen beziehen die verwendeten
            männlichen Begriffe die weiblichen Formen ebenso mit ein.
          </p><p className={styles.pText}>
            Der Mustervertrag ist nur ein Vorschlag für eine mögliche Regelung. Viele
            Festlegungen sind frei vereinbar. Der Verwender kann auch andere
            Formulierungen wählen. Vor einer Übernahme des unveränderten Inhaltes
            muss daher im eigenen Interesse genau überlegt werden, ob und in
            welchen Teilen gegebenenfalls eine Anpassung an die konkret zu
            regelnde Situation und die Rechtsentwicklung erforderlich ist.
          </p><p className={styles.pText}>Auf
          diesen Vorgang hat die Industrie- und Handelskammer natürlich keinen
          Einfluss und kann daher naturgemäß für die Auswirkungen auf die
          Rechtsposition der Parteien keine Haftung übernehmen. Auch die Haftung
          für leichte Fahrlässigkeit ist grundsätzlich ausgeschlossen. Falls Sie
          einen maßgeschneiderten Vertrag benötigen, sollten Sie sich durch
          einen Rechtsanwalt Ihres Vertrauens beraten lassen.
        </p>
        <h2 className={styles.h2Big2}>Allgemeine Geschäftsbedingungen für Tour Guide App</h2>
        <li className={styles.liStyle}> 1. Geltungsbereich </li>
        <li className={styles.liStyle}> 2. Vertragspartner </li>
        <li className={styles.liStyle}> 3. Vertragsschluss </li>
        <li className={styles.liStyle}> 4. Widerrufsrecht </li>
        <li className={styles.liStyle}> 5. Preise und Versandkosten </li>
        <li className={styles.liStyle}> 6. Lieferung </li>
        <li className={styles.liStyle}> 7. Zahlung </li>
        <li className={styles.liStyle}> 8. Eigentumsvorbehalt </li>
        <li className={styles.liStyle}> 9. Streitbeilegung Allgemeine Geschäftsbedingungen </li>
        <p className={styles.pTitle}>Allgemeine Geschäftsbedingungen</p>
          <li className={styles.liStyle}>1. Geltungsbereich</li> <p className={styles.pText}>
            Für alle Lieferungen von Tour Guide App (nachfolgend
                    JURE) an Verbraucher gelten diese Allgemeinen Geschäftsbedingungen
                    (AGB). Verbraucher ist jede natürliche Person, die ein Rechtsgeschäft zu
                    einem Zwecke abschließt, der überwiegend weder ihrer gewerblichen noch
                    ihrer selbstständigen beruflichen Tätigkeit zugerechnet werden kann.
          </p> 
        <li className={styles.liStyle}>2. Vertragspartner
        </li> <p className={styles.pText}>
          Der Kaufvertrag kommt zustande mit Tour Guide App,
          Inhaber: Max Muster, Demostr. 1, 12345 Demostadt, Handelsregister:
          Amtsgericht Demostadt, HRA 12345.
        </p>
        <li className={styles.liStyle}>3. Vertragsschluss</li>
        <li className={styles.liStyle2}>3.1. Die Darstellung
        der Produkte in der App stellt kein rechtlich bindendes Angebot, sondern nur eine Aufforderung zur Bestellung dar.</li>
        <li className={styles.liStyle2}>3.2. Durch
        Anklicken des Buttons [Kaufen/kostenpflichtig bestellen] geben Sie eine
        verbindliche Bestellung der auf der Bestellseite aufgelisteten Waren ab.
        Ihr Kaufvertrag kommt zustande, wenn wir Ihre Bestellung durch eine
        Auftragsbestätigung per E-Mail unmittelbar nach dem Erhalt Ihrer
        Bestellung annehmen.</li>
        <li className={styles.liStyle}>4. Widerrufsrecht</li>
        <li className={styles.liStyle2}>4.1. Wenn Sie Verbraucher sind
        (also eine natürliche Person, die die Bestellung zu einem Zweck abgibt,
        der weder Ihrer gewerblichen oder selbständigen beruflichen Tätigkeit
        zugerechnet werden kann), steht Ihnen nach Maßgabe der gesetzlichen
        Bestimmungen ein Widerrufsrecht zu.</li>
        <li className={styles.liStyle2}>4.2. Machen Sie als Verbraucher von
        Ihrem Widerrufsrecht nach Ziffer 4.1 Gebrauch, so haben Sie die
        regelmäßigen Kosten der Rücksendung zu tragen.</li> <li className={styles.liStyle2}>4.3. Im Übrigen gelten
        für das Widerrufsrecht die Regelungen, die im Einzelnen wiedergegeben
        sind in der folgenden Widerrufsbelehrung Widerrufsrecht Sie haben das
        Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu
        widerrufen. Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag an dem
        Sie oder ein von Ihnen benannter Dritter, der nicht der Beförderer ist,
        die Waren in Besitz genommen haben bzw. hat. Um Ihr Widerrufsrecht
        auszuüben, müssen Sie uns [Namen des Unternehmers, Anschrift,
        Telefonnummer und E-Mail Adresse eintragen]
        mittels
          einer eindeutigen Erklärung (zB ein mit der Post versandter Brief oder
          eine E-Mail) über Ihren Entschluss, diesen Vertrag zu widerrufen,
          informieren. Sie können dafür das beigefügte Muster-Widerrufsformular
          verwenden, das jedoch nicht vorgeschrieben ist. Sie können das Muster-
          Widerrufsformular oder eine andere eindeutige Erklärung auch auf
          unserer Webseite (Internet-Adresse einfügen) elektronisch ausfüllen
          und übermitteln. Machen Sie von dieser Möglichkeit Gebrauch, so werden
          wir Ihnen unverzüglich (zB per E-Mail) eine Bestätigung über den
          Eingang eines solchen Widerrufs übermitteln. Zur Wahrung der
          Widerrufsfrist reicht es aus, dass Sie die Mitteilung über die
          Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist absenden.
          Folgen des Widerrufs Wenn Sie diesen Vertrag widerrufen, haben wir
          Ihnen alle Zahlungen, die wir von Ihnen erhalten haben, einschließlich
          der Lieferkosten (mit Ausnahme der zusätzlichen Kosten, die sich
          daraus ergeben, dass Sie eine andere Art der Lieferung als die von uns
          angebotene, günstigste Standardlieferung gewählt haben), unverzüglich
          und spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem
          die Mitteilung über Ihren Widerruf dieses Vertrags bei uns eingegangen
          ist. Für diese Rückzahlung verwenden wir dasselbe Zahlungsmittel, das
          Sie bei der ursprünglichen Transaktion eingesetzt haben, es sei denn,
          mit Ihnen wurde ausdrücklich etwas anderes vereinbart; in keinem Fall
          werden Ihnen wegen dieser Rückzahlung Entgelte berechnet. Wir können
          die Rückzahlung verweigern, bis wir die Waren wieder zurückerhalten
          haben oder bis Sie den Nachweis erbracht haben, dass Sie die Waren
          zurückgesandt haben, je nachdem, welches der frühere Zeitpunkt ist.
          Sie haben die Waren unverzüglich und in jedem Fall spätestens binnen
          vierzehn Tagen ab dem Tag, an dem Sie uns über den Widerruf dieses
          Vertrages unterrichten, an uns oder an (hier sind gegebenenfalls der
          Name und die Anschrift der von Ihnen zur Entgegennahme der Ware
          ermächtigten Person einzufügen) zurückzusenden oder zu übergeben. Die
          Frist ist gewahrt, wenn Sie die Waren vor Ablauf der Frist von
          vierzehn Tagen absenden. Sie tragen die unmittelbaren Kosten der
          Rücksendung der Waren. Sie müssen für einen etwaigen Wertverlust der
          Waren nur aufkommen, wenn dieser Wertverlust auf einen zur Prüfung der
          Beschaffenheit, Eigenschaften und Funktionsweise der Waren nicht
          notwendigen Umgang mit ihnen zurückzuführen ist.</li> <p className={styles.pBold}>
            - Ende der
            Widerrufsbelehrung -
          </p> 
          <li className={styles.liStyle}>5. Preise und Versandkosten</li>
          <li className={styles.liStyle2}>5.1.Die auf den
          Produktseiten genannten Preise enthalten die gesetzliche
          Mehrwertsteuer und sonstige Preisbestandteile.</li>
          <li className={styles.liStyle2}>5.2. Zusätzlich zu den
          angegebenen Preisen berechnen wir für die Lieferung innerhalb
          Deutschlands pauschal 9,90 € Euro pro Bestellung. Die Versandkosten
          werden Ihnen auf den Produktseiten, im Warenkorbsystem und auf der
          Bestellseite nochmals deutlich mitgeteilt.</li>
          <li className={styles.liStyle2}>5.3. Bei Zahlung per
          Nachnahme wird zusätzlich eine Gebühr in Höhe von 4,50 € Euro fällig,
          die der Zusteller vor Ort erhebt. Weitere Steuern oder Kosten fallen
          nicht an.</li>
          <li className={styles.liStyle}>6. Lieferung</li>
          <li className={styles.liStyle2}>6.1. Die Lieferung erfolgt nur innerhalb
          Deutschlands mit 6,99 €.</li>
          <li className={styles.liStyle2}>6.2. Die Lieferzeit beträgt bis zu 3 Tage. Auf
          eventuell abweichende Lieferzeiten weisen wir auf der jeweiligen
          Produktseite hin.</li>
          <li className={styles.liStyle}>7. Zahlung</li>
          <li className={styles.liStyle2}>7.1. Die Zahlung erfolgt wahlweise per
          Vorkasse oder Nachnahme.</li>
          <li className={styles.liStyle2}>7.2. Bei Auswahl der Zahlungsart Vorkasse nennen wir Ihnen unsere Bankverbindung in der Auftragsbestätigung und liefern die Ware nach Zahlungseingang.</li>
        <li className={styles.liStyle}>8. Eigentumvorbehalt</li>
        <p className={styles.pText}>Bis zur vollständigen Zahlung bleibt die Ware unser Eigentum.</p>
        <li className={styles.liStyle}>9. Streitbeilegung</li>
        <p className={styles.pText}>Die EU-Kommission hat eine Internetplattform zur Online-Beilegung von Streitigkeiten geschaffen. Die Plattform dient als Anlaufstelle zur außergerichtlichen Beilegung von Streitigkeiten betreffend vertragliche Verpflichtungen, die aus Online-Kaufverträgen erwachsen. Nähere Informationen sind unter dem folgenden Link verfügbar: http://ec.europa.eu/consumers/odr. Wir sind zur Beilegung von Streitigkeiten mit Verbrauchern zur Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle bereit oder gemäß ____ (Angabe der Rechtsnorm oder der vertraglichen Vereinbarung) verpflichtet. Die zuständige Verbraucherschlichtungsstelle ist: Universalschlichtungsstelle des Bundes Zentrum für Schlichtung e.V., Straßburger Straße 8, 77694 Kehl am Rhein, www.verbraucher-schlichter.de. Zur Beilegung der genannten Streitigkeiten werden wir in einem Streitbeilegungsverfahren vor dieser Stelle teilnehmen.</p>
        <span className={styles.spanKursiv}>Alternativ:</span>
        <p className={styles.pText}>Die EU-Kommission hat eine Internetplattform zur Online-Beilegung von Streitigkeiten geschaffen. Die Plattform dient als Anlaufstelle zur außergerichtlichen Beilegung von Streitigkeiten betreffend vertragliche Verpflichtungen, die aus Online-Kaufverträgen erwachsen. Nähere Informationen sind unter dem folgenden Link verfügbar:
http://ec.europa.eu/consumers/odr.  Zur Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle sind wir weder bereit noch verpflichtet.</p>
        <div className={styles.lastDiv}>
          <p className={styles.pTextDiv1}>
          Quelle: Online-Handel, Wegweiser durch die rechtlichen Rahmenbedingungen des E-Commerce unter Berücksichtigung des neuen Verbraucherrechts, von Rechtsanwalt Dr. Carsten Föhlisch/Trusted Apps GmbH und Rechtsanwalt Dr. Christian Groß/DIHK Deutscher Industrie-und Handelskammertag, DIHK Verlag, 2.Auflage 2018 (www.dihk-verlag.de)
          </p>
          <p className={styles.pTextDiv2}>Hinweis: Die Veröffentlichung des Musters erfolgt mit freundlicher Genehmigung der Autoren. 
          Die Widerrufsbelehrung ist aktualisiert und entspricht dem aktuellen Stand ab 28.05.2022 gemäß Anlage 1 zu Art. 246 a § 1 Absatz 2 Satz 2 EGBGB. (Anl. 1 neu gef. mWv 13.6.2014 durch G v. 20.9.2013 (BGBl. I S. 3642); geänd. mWv 21.3.2016 durch G v. 11.3.2016 (BGBl. I S 396); geänd. mWv 28.5.2022 durch G v. 10.8.2021 (BGBl. I S. 3483)).</p>
        </div>
      </div>
    </div>
  );
};

export default AGB;
