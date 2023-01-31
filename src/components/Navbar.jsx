import styles from "../css/Navbar.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes, FaUser } from "react-icons/fa";
import { MdFavorite, MdSettings, MdLogout } from "react-icons/md";
import { HiLocationMarker } from "react-icons/hi";

export function Navbar() {
  const [isAppActive, setIsAppActive] = useState(false);

  return (
    <>
      <nav className={styles.navbar}>
        <h3 className="Logo">Logo</h3>
        <ul
          className={isAppActive ? styles.navlinksapp : styles.navlinks}
          onClick={() => setIsAppActive(false)}
        >
          <Link to="/profile" className={styles.profile}>
            <li className={styles.iconsmenu}>
              {" "}
              <div>
                <FaUser />{" "}
              </div>
              <div>Profil </div>
            </li>
          </Link>
          <Link to="/favoriteplaces" className={styles.favoriteplaces}>
            <li className={styles.iconsmenu}>
              {" "}
              <div>
                <MdFavorite className={styles.iconfavorite} />
              </div>
              <div>Favorite Places</div>
            </li>
          </Link>
          <Link to="/standort" className={styles.standort}>
            <li className={styles.iconsmenu}>
              {" "}
              <div>
                <HiLocationMarker />
              </div>
              <div>Standort</div>
            </li>
          </Link>
          <Link to="/einstellung" className={styles.einstellung}>
            <li className={styles.iconsmenu}>
              <div>
                <MdSettings className={styles.iconeinstellung} />
              </div>
              <div>Einstellung</div>
            </li>
          </Link>
          <div className={styles.ausloggenposition}>
            <Link to="*" className={styles.ausloggen}>
              <li className={styles.iconsmenu}>
                <div>
                  <MdLogout className={styles.ausloggen} />
                </div>
                <div>Ausloggen</div>
              </li>
            </Link>
          </div>
        </ul>
        <button
          className={styles.menuiconapp}
          onClick={() => setIsAppActive(!isAppActive)}
        >
          {isAppActive ? (
            <FaTimes className={styles.menuiconfatimes} />
          ) : (
            <FaBars className={styles.menuiconfabars} />
          )}
        </button>
      </nav>
    </>
  );
}
