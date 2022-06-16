import Head from "next/head";
import Image from "next/image";

import styles from "../styles/Home.module.css";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import NavBar from "../components/NavBar";
import about from "../pages/about";
import Card from "../components/Card";

export async function getStaticProps() {
  const maxPokemons = 251;
  const api = "https://pokeapi.co/api/v2/pokemon/";

  const res = await fetch(`${api}/?limit=${maxPokemons}`);
  const data = await res.json();

  data.results.forEach((item, index) => {
    item.id = index + 1;
  });

  return {
    props: {
      pokemons: data.results,
    },
  };
}

export default function Home({ pokemons }) {
  return (
    <>
      <div className={styles.title_container}>
        <h1 className={styles.title}>
          Poke<span>dex</span>
        </h1>
        <Image
          src="/images/pokebola.png"
          width="50"
          height="50"
          alt="PokePython"
        />
      </div>
      <div className={styles.pokemon_container}>
        {pokemons.map((pokemon) => (
          <Card Key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </>
  );
}
