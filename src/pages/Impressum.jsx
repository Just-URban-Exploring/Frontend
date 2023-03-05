import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../css/Datenschutz-AGB.module.css'

const Impressum = () => {

  const navigate = useNavigate();

  return (
    <div>
            <button className={styles.buttonDatenschutz} onClick={() => navigate('/')}>Home</button>
      <div className={styles.impressumContainer}>
        <h2 className={styles.h2Big3}>Impressum</h2>
      <p className={styles.pText}>Angaben gemäß § 5 TMG</p>

<p className={styles.pText}>
  Max Muster<br/>
  Musterweg<br/>
  12345 Musterstadt
</p>
<p className={styles.pBold3}>Vertreten durch:</p>
<p className={styles.pText}>Max Muster</p>
<p className={styles.pBold3}>Kontakt:</p>
<p className={styles.pText}>
  Telefon: 01234-789456
  Fax: 1234-56789
  E-Mail: max@muster.de
</p>

<p className={styles.pBold3}>Umsatzsteuer-ID:</p>
<p className={styles.pText}>Umsatzsteuer-Identifikationsnummer gemäß §27a Umsatzsteuergesetz: Musterustid.</p>

<p className={styles.pBold3}>Wirtschafts-ID:</p>
<p className={styles.pText}>Musterwirtschaftsid</p>
      </div>
    </div>
  )
}

export default Impressum