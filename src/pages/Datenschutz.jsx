import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../css/Datenschutz-AGB.module.css";
const Datenschutz = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.containerDatenschutz}>
      <h1 className={styles.titleDatenschutz}>Datenschutzerklärung</h1>
      <button
        className={styles.buttonDatenschutz}
        onClick={() => navigate("/")}
      >
        Home
      </button>
      <p>
        Letzte Aktualisierung: 07.02.2023 Diese Datenschutzrichtlinie beschreibt
        unsere Richtlinien und Verfahren für die Sammlung, Verwendung und
        Offenlegung Ihrer Informationen, wenn Sie den Service nutzen, und
        informiert Sie über Ihre Datenschutzrechte und wie das Gesetz Sie
        schützt. Sie schützt. Wir verwenden Ihre persönlichen Daten zur
        Bereitstellung und Verbesserung des Dienstes. Durch die Nutzung des
        Dienstes stimmen Sie der Sammlung und Nutzung von Informationen in in
        Übereinstimmung mit dieser Datenschutzrichtlinie. Diese
        Datenschutzrichtlinie wurde mit Hilfe des{" "}
        <a
          href="https://www.privacypolicies.com/privacy-policy-generator/"
          target="_blank"
        >
          Privacy Policy Generator
        </a>{" "}
        erstellt .
      </p>
      <h1 className={styles.titleDatenschutz}>
        Interpretation und Definitionen
      </h1>
      <h2 className={styles.subtitleDatenschutz}>Interpretation</h2>
      <p>
        Die Wörter, deren Anfangsbuchstaben groß geschrieben sind, haben die
        Bedeutung unter den folgenden Bedingungen definiert. Die folgenden
        Definitionen haben haben die gleiche Bedeutung, unabhängig davon, ob sie
        im Singular oder im Plural.
      </p>
      <h2 className={styles.subtitleDatenschutz}>Definitionen</h2>
      <p>Im Sinne dieser Datenschutzerklärung:</p>
      <ul className={styles.ulDatenschutz}>
        <li>
          <p>
            <strong>Profil</strong> bedeutet ein einzigartiges Konto, das für
            Sie erstellt wurde, um Zugang zu unserem Dienst oder zu Teilen
            unseres Dienstes.
          </p>
        </li>
        <li>
          <p>
            <strong>Affiliate</strong> bedeutet ein Unternehmen, das eine Partei
            kontrolliert, von ihr kontrolliert wird oder mit ihr unter
            gemeinsamer Kontrolle steht, wobei &quote;Kontrolle&quote; bedeutet
            Besitz von 50 % oder mehr der Aktien, Aktien oder anderen
            stimmberechtigten Wertpapieren für die Wahl von Direktoren oder
            anderen leitenden Angestellten.
          </p>
        </li>
        <li>
          <p>
            <strong>Anwendung</strong> bezieht sich auf Tour Guide App, das
            Softwareprogramm Programm, das von der Gesellschaft bereitgestellt
            wird.
          </p>
        </li>
        <li>
          <p>
            <strong>Unternehmen</strong> (bezieht sich auf &quot;das
            Unternehmen&quot;, &quot;Wir&quot; oder &quot;Uns&quot; in dieser
            Erklärung) verweist auf JURE, Berlin.
          </p>
        </li>
        <li>
          <p>
            <strong>Land</strong> bezieht sich auf: Berlin, Germany
          </p>
        </li>
        <li>
          <p>
            <strong>Gerät</strong> ist jedes Gerät, das auf den Dienst zugreifen
            kann wie z. B. ein Computer, ein Mobiltelefon oder ein digitales
            Tablet.
          </p>
        </li>
        <li>
          <p>
            <strong>Personenbezogene Daten</strong> sind alle Informationen, die
            sich auf eine identifizierte oder identifizierbare Person beziehen.
          </p>
        </li>
        <li>
          <p>
            <strong>Service</strong> bezieht sich auf die Anwendung.
          </p>
        </li>
        <li>
          <p>
            <strong>Service Anbieter</strong> ist jede natürliche oder
            juristische Person die die Daten im Auftrag des Unternehmens
            verarbeitet. Dies bezieht sich auf Drittunternehmen oder
            Einzelpersonen, die von der Gesellschaft beauftragt werden, um den
            Dienst zu erleichtern, den Dienst im Namen des Unternehmens zu
            erbringen den Dienst im Namen des Unternehmens bereitzustellen,
            Dienstleistungen im Zusammenhang mit dem Dienst Unternehmen bei der
            Analyse der Nutzung des Dienstes zu unterstützen.
          </p>
        </li>
        <li>
          <p>
            <strong>Nutzungsdaten</strong> beziehen sich auf automatisch
            erfasste Daten, die entweder durch die Nutzung des Dienstes oder
            durch die Infrastruktur des Dienstes Infrastruktur selbst (z. B. die
            Dauer eines Seitenbesuchs).
          </p>
        </li>
        <li>
          <p>
            <strong>Sie</strong> bedeutet die Person, die auf den Service
            zugreift oder ihn nutzt Dienstes oder das Unternehmen oder eine
            andere juristische Person, in deren Namen die Person, die auf den
            Dienst zugreift oder ihn nutzt, sofern zutreffend.
          </p>
        </li>
      </ul>
      <h1 className={styles.titleDatenschutz}>
        Erfassung und Verwendung Ihrer persönlichen Daten
      </h1>
      <h2 className={styles.subtitleDatenschutz}>
        Arten von gesammelten Daten
      </h2>
      <h3>Personenbezogene Daten</h3>
      <p>
        Während der Nutzung unseres Dienstes können wir Sie bitten, uns
        bestimmte Informationen zu geben, die dazu verwendet werden können, Sie
        zu kontaktieren oder Sie zu identifizieren. Persönlich identifizierbare
        Informationen können unter anderem sein nicht beschränkt auf:
      </p>
      <ul className={styles.ulDatenschutz}>
        <li>
          <p>E-Mail-Adresse</p>
        </li>
        <li>
          <p>Nutzungsdaten</p>
        </li>
      </ul>
      <h3>Nutzungsdaten</h3>
      <p>
        Nutzungsdaten werden bei der Nutzung des Dienstes automatisch erfasst.
      </p>
      <p>
        Zu den Nutzungsdaten können Informationen wie die
        Internetprotokolladresse Ihres Geräts Protokoll-Adresse (z.B.
        IP-Adresse), Browser-Typ, Browser-Version, die Seiten unseres Dienstes,
        die Sie besuchen, die Uhrzeit und das Datum Ihres Besuchs, die auf
        diesen Seiten verbrachte Zeit, eindeutige Gerätekennungen und andere
        Diagnosedaten.
      </p>
      <p>
        Wenn Sie über ein mobiles Gerät auf den Dienst zugreifen, können wir
        bestimmte Informationen automatisch erfassen, einschließlich, aber nicht
        beschränkt auf den Typ des von Ihnen verwendeten Mobilgeräts, die
        eindeutige ID Ihres Mobilgeräts, die IP-Adresse Ihres mobilen Geräts,Ihr
        mobiles Betriebssystem, die Art des Typ des von Ihnen verwendeten
        mobilen Internetbrowsers, eindeutige Gerätekennungen und andere
        Diagnosedaten.
      </p>
      <p>
        Wir können auch Informationen sammeln, die Ihr Browser sendet, wenn Sie
        unseren Dienst besuchen oder wenn Sie über ein Mobilgerät auf den Dienst
        Gerät zugreifen.
      </p>
      <h3>Während der Nutzung der Anwendung gesammelte Informationen</h3>
      <p>
        Während der Nutzung Unserer Anwendung, um Funktionen Unserer Anwendung
        zur Verfügung zu stellen, können wir mit Ihrer vorherigen Zustimmung
        Folgendes erfassen
      </p>
      <ul className={styles.ulDatenschutz}>
        <li>
          <p>Informationen zu Ihrem Standort</p>
        </li>
        <li>
          <p>
            Bilder und andere Informationen von der Kamera und der
            Fotobibliothek Ihres Geräts
          </p>
        </li>
      </ul>
      <p>
        Wir verwenden diese Informationen, um Funktionen unseres Dienstes
        bereitzustellen, um unseren Dienst zu verbessern und anzupassen. Die
        Informationen können auf die Server des Unternehmens und/oder den Server
        eines Dienstanbieters hochgeladen werden oder einfach sein auf Ihrem
        Gerät gespeichert.
      </p>
      <p>
        Sie können den Zugriff auf diese Informationen jederzeit aktivieren oder
        deaktivieren, über Ihre Geräteeinstellungen.
      </p>
      <h2>Verwendung Ihrer personenbezogenen Daten</h2>
      <p>
        Das Unternehmen kann personenbezogene Daten für die folgenden Zwecke
        verwenden:
      </p>
      <ul className={styles.ulDatenschutz}>
        <li>
          <p>
            <strong>Zur Bereitstellung und Wartung unseres Dienstes</strong>,
            einschließlich der Überwachung der Nutzung unseres Dienstes.
          </p>
        </li>
        <li>
          <p>
            <strong>Um Ihr Konto zu verwalten:</strong> um Ihre Registrierung
            als Benutzer des Dienstes zu verwalten. Die von Ihnen
            bereitgestellten personenbezogenen Daten können Ihnen Zugriff auf
            verschiedene Funktionen des Dienstes geben, die Ihnen als
            registrierter Benutzer zur Verfügung stehen.
          </p>
        </li>
        <li>
          <p>
            <strong>Zur Erfüllung eines Vertrages:</strong> die Entwicklung,
            Erfüllung und Durchführung des Kaufvertrages für die Produkte,
            Artikel oder Dienstleistungen, die Sie gekauft haben, oder andere
            Vertrag mit uns über den Dienst.
          </p>
        </li>
        <li>
          <p>
            <strong>Dich zu kontaktieren:</strong> kontaktieren Sie per E-Mail,
            Telefon Anrufe, SMS oder andere gleichwertige Formen der
            elektronischen Kommunikation, B. die Push-Benachrichtigungen einer
            mobilen Anwendung bezüglich Updates oder informative Mitteilungen in
            Bezug auf die Funktionalitäten, Produkte oder vertraglich
            vereinbarte Dienstleistungen, einschließlich der Sicherheitsupdates,
            wenn dies für ihre Umsetzung erforderlich oder angemessen ist.
          </p>
        </li>
        <li>
          <p>
            <strong>Zur Verfügung stellen</strong>von Neuigkeiten,
            Sonderangeboten und allgemeinen Informationen über andere Waren,
            Dienstleistungen und Veranstaltungen, die wir anbieten und die denen
            ähneln, die Sie bereits gekauft oder nach denen Sie sich erkundigt
            haben, es sei denn, Sie haben sich entschieden, solche nicht zu
            erhalten Information.
          </p>
        </li>
        <li>
          <p>
            <strong>Ihre Anfragen zu verwalten:</strong> Zur Teilnahme und
            Verwaltung Ihrer Anfragen an uns.
          </p>
        </li>
        <li>
          <p>
            <strong>Für Geschäftszwecke:</strong> Wir können Ihre Informationen
            verwenden, um eine Fusion, Veräußerung, Umstrukturierung,
            Reorganisation, Auflösung oder einen anderen Verkauf oder eine
            Übertragung einiger oder aller unserer Vermögenswerte zu bewerten
            oder durchzuführen, sei es als Unternehmensfortführung oder als Teil
            eines Konkurses, einer Liquidation oder eines ähnlichen Verfahrens,
            in denen personenbezogene Daten, die wir über unsere Servicebenutzer
            gespeichert haben, zu den übertragenen Vermögenswerten gehören.
          </p>
        </li>
        <li>
          <p>
            <strong>Für andere Zwecke:</strong>Wir können Ihre Informationen für
            andere Zwecke verwenden, z. B. zur Datenanalyse, zur Ermittlung von
            Nutzungstrends, zur Bestimmung der Wirksamkeit unserer
            Werbekampagnen und zur Bewertung und Verbesserung unseres Dienstes,
            unserer Produkte, Dienstleistungen, unseres Marketings und Ihrer
            Erfahrung.
          </p>
        </li>
      </ul>
      <p>
        Wir können Ihre personenbezogenen Daten in den folgenden Situationen
        weitergeben:
      </p>
      <ul className={styles.ulDatenschutz}>
        <li>
          <strong>Mit Service Anbietern:</strong> Wir können Ihre
          personenbezogenen Daten an Dienstleister weitergeben, um die Nutzung
          unseres Dienstes zu überwachen und zu analysieren, um Sie zu
          kontaktieren.
        </li>
        <li>
          <strong>Für Geschäftszwecke:</strong> Wir können Ihre
          personenbezogenen Daten im Zusammenhang mit oder während Verhandlungen
          über eine Fusion, den Verkauf von Unternehmensvermögen, die
          Finanzierung oder den Erwerb unseres gesamten oder eines Teils unseres
          Geschäfts an ein anderes Unternehmen weitergeben oder übertragen.
        </li>
        <li>
          <strong>Mit Affiliates:</strong> Wir können Ihre Daten an unsere
          verbundenen Unternehmen weitergeben, in diesem Fall werden wir von
          diesen verbundenen Unternehmen verlangen, diese Datenschutzrichtlinie
          einzuhalten. Verbundene Unternehmen umfassen unsere Muttergesellschaft
          und alle anderen Tochtergesellschaften, Joint-Venture-Partner oder
          andere Unternehmen, die wir kontrollieren oder die unter gemeinsamer
          Kontrolle mit uns stehen.
        </li>
        <li>
          <strong>Mit Business Partnern:</strong> Wir können Ihre Informationen
          an unsere Geschäftspartner weitergeben, um Ihnen bestimmte Produkte,
          Dienstleistungen oder Werbeaktionen anzubieten.
        </li>
        <li>
          <strong>Mit anderen Nutzern:</strong> Wenn Sie persönliche
          Informationen teilen oder anderweitig in den öffentlichen Bereichen
          mit anderen Benutzern interagieren, können diese Informationen von
          allen Benutzern eingesehen und öffentlich nach außen verbreitet
          werden.
        </li>
        <li>
          <strong>Mit Ihrer Zustimmung:</strong>Wir können Ihre
          personenbezogenen Daten mit Ihrer Zustimmung für andere Zwecke
          offenlegen.
        </li>
      </ul>
      <h2 className={styles.subtitleDatenschutz}>
        Aufbewahrung Ihrer personenbezogenen Daten
      </h2>
      <p>
        Das Unternehmen speichert Ihre ersonenbezogenen Daten nur so lange, wie
        dies für die in dieser Datenschutzrichtlinie dargelegten Zwecke
        erforderlich ist. Wir speichern und verwenden Ihre personenbezogenen
        Daten in dem Umfang, der erforderlich ist, um unseren gesetzlichen
        Verpflichtungen nachzukommen (z. B. wenn wir verpflichtet sind, Ihre
        Daten zur Einhaltung geltender Gesetze aufzubewahren), Streitigkeiten
        beizulegen und unsere gesetzlichen Vereinbarungen und Richtlinien
        durchzusetzen.
      </p>
      <p>
        Das Unternehmen speichert Nutzungsdaten auch für interne
        Analysezwecke.Nutzungsdaten werden im Allgemeinen für einen kürzeren
        Zeitraum aufbewahrt, es sei denn, diese Daten werden zur Erhöhung der
        Sicherheit oder zur Verbesserung der Funktionalität unseres Dienstes
        verwendet oder wir sind gesetzlich zur Aufbewahrung verpflichtet diese
        Daten für längere Zeiträume.
      </p>
      <h2>Übermittlung Ihrer personenbezogenen Daten:</h2>
      <p>
        Ihre Informationen, einschließlich personenbezogener Daten, werden in
        den Betriebsbüros des Unternehmens und an allen anderen Orten
        verarbeitet, an denen sich die an der Verarbeitung beteiligten Parteien
        befinden. Dies bedeutet, dass diese Informationen an Computer außerhalb
        Ihres Staates, Ihrer Provinz, Ihres Landes oder einer anderen
        staatlichen Gerichtsbarkeit übertragen und dort gespeichert werden
        können, wo die Datenschutzgesetze von denen Ihrer Gerichtsbarkeit
        abweichen können.
      </p>
      <p>
        Ihre Zustimmung zu dieser Datenschutzrichtlinie, gefolgt von Ihrer
        Übermittlung dieser Informationen, stellt Ihre Zustimmung zu dieser
        Übertragung dar.
      </p>
      <p>
        Das Unternehmen wird alle vernünftigerweise notwendigen Schritte
        unternehmen, um sicherzustellen, dass Ihre Daten sicher und in
        Übereinstimmung mit dieser Datenschutzrichtlinie behandelt werden, und
        es findet keine Übertragung Ihrer Personenbezogenen Daten an eine
        Organisation oder ein Land statt, es sei denn, es gibt angemessene
        Kontrollen, einschließlich der Sicherheit Ihrer Daten und andere
        persönliche Informationen.
      </p>
      <h2 className={styles.subtitleDatenschutz}>
        Löschen Sie Ihre persönlichen Daten
      </h2>
      <p>
        Sie haben das Recht, die personenbezogenen Daten, die wir über Sie
        erfasst haben, zu löschen oder zu verlangen, dass wir Sie beim Löschen
        unterstützen.
      </p>
      <p>
        Unser Service kann Ihnen die Möglichkeit geben, bestimmte Informationen
        über Sie aus dem Service zu löschen.
      </p>
      <p>
        Sie können Ihre Informationen jederzeit aktualisieren, ändern oder
        löschen, indem Sie sich bei Ihrem Konto anmelden, falls Sie eines
        haben,und den Abschnitt mit den Kontoeinstellungen besuchen, in dem Sie
        Ihre persönlichen Informationen verwalten können. Sie können uns auch
        kontaktieren, um Zugang zu personenbezogenen Daten, die Sie uns zur
        Verfügung gestellt haben, anzufordern, zu korrigieren oder zu löschen.
      </p>
      <p>
        Bitte beachten Sie jedoch, dass wir möglicherweise bestimmte
        Informationen aufbewahren müssen, wenn wir dazu gesetzlich verpflichtet
        sind oder eine gesetzliche Grundlage dafür haben.
      </p>
      <h2>Offenlegung Ihrer personenbezogenen Daten</h2>
      <h3>Geschäftliche Transaktionen</h3>
      <p>
        Wenn das Unternehmen an einer Fusion, Übernahme oder einem Verkauf von
        Vermögenswerten beteiligt ist, können Ihre personenbezogenen Daten
        übertragen werden. Wir werden Sie benachrichtigen, bevor Ihre
        personenbezogenen Daten übertragen werden und einer anderen
        Datenschutzrichtlinie unterliegen.
      </p>
      <h3>Law enforcement</h3>
      <p>
        Unter bestimmten Umständen kann das Unternehmen verpflichtet sein, Ihre
        personenbezogenen Daten offenzulegen, wenn dies gesetzlich
        vorgeschrieben ist oder als Reaktion auf gültige Anfragen von Behörden
        (z. B. einem Gericht oder einer Regierungsbehörde).
      </p>
      <h3>Andere gesetzliche Anforderungen</h3>
      <p>
        Das Unternehmen kann Ihre personenbezogenen Daten in gutem Glauben
        offenlegen, dass eine solche Maßnahme erforderlich ist:
      </p>
      <ul className={styles.ulDatenschutz}>
        <li>Einer gesetzlichen Verpflichtung nachkommen</li>
        <li>
          Schutz und Verteidigung der Rechte oder des Eigentums des Unternehmens
        </li>
        <li>
          Verhindern oder untersuchen Sie mögliches Fehlverhalten im
          Zusammenhang mit dem Dienst
        </li>
        <li>
          Schützen Sie die persönliche Sicherheit der Benutzer des Dienstes oder
          der Öffentlichkeit
        </li>
        <li>Schützen Sie sich vor gesetzlicher Haftung</li>
      </ul>
      <h2 className={styles.subtitleDatenschutz}>
        Sicherheit Ihrer persönlichen Daten
      </h2>
      <p>
        Die Sicherheit Ihrer personenbezogenen Daten ist uns wichtig, aber
        denken Sie daran, dass keine Übertragungsmethode über das Internet oder
        elektronische Speichermethode 100 % sicher ist. Obwohl wir uns bemühen,
        kommerziell akzeptable Mittel zum Schutz Ihrer personenbezogenen Daten
        zu verwenden, können wir deren absolute Sicherheit nicht garantieren.
      </p>
      <h1 className={styles.titleDatenschutz}>Datenschutz von Kindern</h1>
      <p>
        Unser Service richtet sich nicht an Personen unter 13 Jahren. Wir
        erfassen wissentlich keine personenbezogenen Daten von Personen unter 13
        Jahren. Wenn Sie ein Elternteil oder Erziehungsberechtigter sind und
        wissen, dass Ihr Kind uns personenbezogene Daten zur Verfügung gestellt
        hat, bitte kontaktiere uns. Wenn uns bekannt wird, dass wir
        personenbezogene Daten von Personen unter 13 Jahren ohne Überprüfung der
        elterlichen Zustimmung gesammelt haben, ergreifen wir Maßnahmen, um
        diese Informationen von unseren Servern zu entfernen.
      </p>
      <p>
        Wenn wir uns auf die Zustimmung als Rechtsgrundlage für die Verarbeitung
        Ihrer Daten verlassen müssen und Ihr Land die Zustimmung eines
        Elternteils erfordert, können wir die Zustimmung Ihrer Eltern verlangen,
        bevor wir diese Daten erfassen und verwenden.
      </p>
      <h1 className={styles.titleDatenschutz}>Links zu anderen Websites</h1>
      <p>
        Unser Service kann Links zu anderen Websites enthalten, die nicht von
        uns betrieben werden. Wenn Sie auf einen Link eines Drittanbieters
        klicken, werden Sie auf die Website dieses Drittanbieters
        weitergeleitet. Wir empfehlen Ihnen dringend, die Datenschutzrichtlinie
        jeder von Ihnen besuchten Website zu lesen.
      </p>
      <p>
        Wir haben keine Kontrolle über und übernehmen keine Verantwortung für
        die Inhalte, Datenschutzrichtlinien oder Praktiken von Websites oder
        Diensten Dritter.
      </p>
      <h1 className={styles.titleDatenschutz}>
        Änderungen an dieser Datenschutzrichtlinie
      </h1>
      <p>
        Wir können unsere Datenschutzrichtlinie von Zeit zu Zeit aktualisieren.
        Wir werden Sie über alle Änderungen informieren, indem wir die neue
        Datenschutzrichtlinie auf dieser Seite veröffentlichen.
      </p>
      <p>
        Bevor die Änderung in Kraft tritt, werden wir Sie per E-Mail und/oder
        durch einen deutlichen Hinweis auf unserem Dienst informieren und das
        Datum der &quote;letzten Aktualisierung&quote; oben in dieser
        Datenschutzrichtlinie aktualisieren.
      </p>
      <p>
        Es wird empfohlen, diese Datenschutzrichtlinie regelmäßig auf Änderungen
        zu überprüfen. Änderungen an dieser Datenschutzrichtlinie treten in
        Kraft, wenn sie auf dieser Seite veröffentlicht werden.
      </p>
      <h1 className={styles.titleDatenschutz}>Kontakt</h1>
      <p>
        Wenn Sie Fragen zu dieser Datenschutzrichtlinie haben, können Sie uns
        kontaktieren:
      </p>
      <ul className={styles.ulDatenschutz}>
        <li>
          <p>E-Mail: e.felsinger@icloud.com</p>
        </li>
        <li>
          <p>
            Auf unserer Website:{" "}
            <a
              href="https://jure.vercel.com"
              rel="external nofollow noopener"
              target="_blank"
            >
              https://jure.vercel.com
            </a>
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Datenschutz;
