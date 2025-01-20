import Link from "next/link";
import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <Link href="/">
          <h2>CARNEST</h2>
          <p>Choose and buy your Car</p>
        </Link>
      </header>
      <div className={styles.container}>{children}</div>
      <footer className={styles.footer}>
        Developed by{" "}
        <a
          href="https://www.linkedin.com/in/soudabeh-noorollahi/"
          target="_blank"
        >
          Soudabeh
        </a>{" "}
        with 💗 &copy;
      </footer>
    </>
  );
}

export default Layout;
