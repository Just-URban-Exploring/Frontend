import { Navbar } from "./Navbar.jsx";
import { FaUserAlt, FaHeart } from "react-icons/fa";
import { MdSettings } from "react-icons/md";
import styles from "../../css/NavbarPages.module.css";

export function NavbarProfile() {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.position}>
        <FaUserAlt size={40} className={styles.iconPosition} />
        <h2 className={styles.titlePosition}> Profil</h2>
      </div>
    </div>
  );
}

export function NavbarFavoritePlace() {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.position}>
        <FaHeart size={40} className={styles.iconPosition} />
        <h2 className={styles.titlePositionPlaces}> Favorite Places </h2>
      </div>
    </div>
  );
}

export function NavbarEinstellung() {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.position}>
        <MdSettings size={40} className={styles.iconPosition} />
        <h2 className={styles.titlePosition}> Einstellung </h2>
      </div>
    </div>
  );
}
