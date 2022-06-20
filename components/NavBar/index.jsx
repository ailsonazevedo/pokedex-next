import Link from "next/link";
import Image from "next/image";

import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Image
            src="/images/pokebola.png"
            width="30"
            height="30"
            alt="PokePython"
          />
          <h1>Pokedex</h1>
        </div>
        <ul className={styles.link_items}>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contatc</a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
