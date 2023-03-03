import styles from "../../css/Navbar.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes, FaRegUser } from "react-icons/fa";

import { BsHeart } from "react-icons/bs";
import { MdOutlinePlace, MdOutlineSettings, MdLogout } from "react-icons/md";

export function Navbar({ currentPage}) {
  const [isAppActive, setIsAppActive] = useState(false);
  const [isLoggedin, setIsLoggedin] = useState(false);

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('authenticated');
    setIsLoggedin(false);
  };

  const getPageTitle = () => {
    switch (currentPage) {
      case "profile":
        return { icon: <FaRegUser size={40} />, title: "Profil" };
      case "favoriteplaces":
        return { icon: <FaHeart size={35} className={styles.iconfavorite} />, title: "Favorite Places" };
      case "standort":
        return { icon: <MdOutlinePlace size={40} />, title: "Standort" };
      case "einstellung":
        return { icon: <MdOutlineSettings size={40} className={styles.iconeinstellung} />, title: "Einstellung" };
      default:
        return { icon: <FaBars />, title: "Menu" };
    }
  };

  const page = getPageTitle();


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
          <Link to="/logout" className={styles.ausloggen}>
              <li className={styles.iconsmenu}>
                <div>
                  <MdLogout size={40} className={styles.ausloggen} />
                </div>
                <div className={styles.navbarAusloggen} onClick={logout}>Ausloggen</div>
              </li>
            </Link>
          </div>
        </ul>
        <div
        // Hier wird anhand des Props von der kommenden Seite die entsprechende Klasse ausgewählt
          // className={bgColor === 'blue' ? styles.menuiconappWhite : styles.menuiconappBlue}
          className={styles.menuiconappBlue}
          onClick={() => setIsAppActive(!isAppActive)}
        >
          {isAppActive ? (
            <FaTimes className={styles.menuiconfatimes} />
          ) : (
            <FaBars className={styles.menuiconfabars} />
          )}
        </div>
      </nav>
      {isAppActive && <div className={styles.blur}></div>}
    </>
  );
}
