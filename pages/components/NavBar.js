import Link from 'next/link'
import Image from 'next/image'

import styles from '../../styles/Navbar.module.css'

export default function Navbar(){
    return(
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Image
                    src="/images/pycharm-original.svg" 
                    width="30"
                    height="30"
                    alt="PokePython"
                />
                <h1>Pokedex</h1>
            </div>
            <ul>
                <li>
                    <link href="/"><a>Home</a></link>
                </li>
                <li>
                    <link href="/about"><a>Sobre</a></link>
                </li>
                <li>
                    <link href="/contact"><a>Contato</a></link>
                </li>
            </ul>
        </nav>
    )
}