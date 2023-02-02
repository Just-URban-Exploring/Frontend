import { NavbarFavoritePlace } from "../components/Navbar/NavbarPages.jsx";
import styles from "../css/FavoritePlaces.module.css";
export function FavoritePlaces() {
  return (
    <>
      <NavbarFavoritePlace />
      <div className={styles.container}>
        <span>Berlin - </span>
        <span className={styles.fontsizeLand}> Deutschland</span>
        <div className={styles.favoritePlacesItem}>
          <p> </p>
        </div>
        <div className={styles.favoritePlacesItem}>
          <p> </p>
        </div>
        <div className={styles.favoritePlacesItem}>
          <p> </p>
        </div>
        <div className={styles.favoritePlacesItem}>
          <p> </p>
        </div>
        <span>Berlin - </span>
        <span className={styles.fontsizeLand}> Deutschland</span>
        <div className={styles.favoritePlacesItem}>
          <p> </p>
        </div>
        <div className={styles.favoritePlacesItem}>
          <p> </p>
        </div>
        <div className={styles.favoritePlacesItem}>
          <p> </p>
        </div>
        <div className={styles.favoritePlacesItem}>
          <p> </p>
        </div>
      </div>
    </>
  );
}
