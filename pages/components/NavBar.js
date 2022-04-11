import Link from 'next/link';

export default function Footer(){
    return(
        <nav className="">
            <div>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pycharm/pycharm-original.svg"></img>
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