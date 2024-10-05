import Link from "next/link";
import Links from "./links/Links";
import styles from "./navbar.module.css";

const NavBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        Hello, I'm <span className={styles.highlight}>Alen Xia</span>
      </div>
      <Links />
    </div>
  );
};

export default NavBar;
