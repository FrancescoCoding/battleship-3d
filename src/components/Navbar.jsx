import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles["navbar"]}>
      <div className={styles["navbar__container__title"]}>
        <h1>
          Battleship <span className={styles["three-span"]}>3</span>
          <span className={styles["D-span"]}>D</span>
        </h1>
      </div>
    </nav>
  );
};

export default Navbar;
