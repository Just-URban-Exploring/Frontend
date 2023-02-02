import styles from "../../css/Navbar.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes, FaRegUser } from "react-icons/fa";

import { BsHeart } from "react-icons/bs";
import { MdOutlinePlace, MdOutlineSettings, MdLogout } from "react-icons/md";

export function Navbar() {
  const [isAppActive, setIsAppActive] = useState(false);

  return (
    <>
      <nav className={styles.navbar}>
        {/*  <h3 className="Logo">Logo</h3> */}
        <ul
          className={isAppActive ? styles.navlinksapp : styles.navlinks}
          onClick={() => setIsAppActive(false)}
        >
          <Link to="/profile" className={styles.profile}>
            <li className={styles.iconsmenu}>
              {" "}
              <div>
                <FaRegUser size={40} />{" "}
              </div>
              <div>Profil </div>
            </li>
          </Link>
          <Link to="/favoriteplaces" className={styles.favoriteplaces}>
            <li className={styles.iconsmenu}>
              {" "}
              <div>
                <BsHeart size={35} className={styles.iconfavorite} />
              </div>
              <div>Favorite Places</div>
            </li>
          </Link>
          <Link to="/standort" className={styles.standort}>
            <li className={styles.iconsmenu}>
              {" "}
              <div>
                <MdOutlinePlace size={40} />
              </div>
              <div>Standort</div>
            </li>
          </Link>
          <Link to="/einstellung" className={styles.einstellung}>
            <li className={styles.iconsmenu}>
              <div>
                <MdOutlineSettings
                  size={40}
                  className={styles.iconeinstellung}
                />
              </div>
              <div>Einstellung</div>
            </li>
          </Link>
          <div className={styles.ausloggenposition}>
            <Link to="*" className={styles.ausloggen}>
              <li className={styles.iconsmenu}>
                <div>
                  <MdLogout size={40} className={styles.ausloggen} />
                </div>
                <div className={styles.navbarAusloggen}>Ausloggen</div>
              </li>
            </Link>
          </div>
        </ul>
        <div
          className={styles.menuiconapp}
          onClick={() => setIsAppActive(!isAppActive)}
        >
          {isAppActive ? (
            <FaTimes className={styles.menuiconfatimes} />
          ) : (
            <FaBars className={styles.menuiconfabars} />
          )}
        </div>
      </nav>
    </>
  );
}
