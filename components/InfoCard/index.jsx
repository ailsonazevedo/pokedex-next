import Image from "next/image";
import { toCapitalizedString } from "../../services/stringService";

import styles from "./InfoCard.module.css";

export default function Card({ pokemon }) {
  return (
    <div className={styles.card}>
      <div className={styles.basicWrapper}>
        <Image
          src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
          width="240"
          height="240"
          alt={pokemon.name}
        />
        <p className={styles.id}>#{pokemon.id}</p>
        <h3 className={styles.name}>{pokemon.name}</h3>
      </div>
      <div className={styles.details}>
        <h3>Initial Stats:</h3>
        <p>
          <b>Type(s): </b>
          {pokemon.types
            .map(({ type }) => {
              return toCapitalizedString(type.name);
            })
            .join(",")}
        </p>
        {pokemon.stats.map(({ base_stat, stat }) => {
          return (
            <p key={pokemon.id}>
              <b>{toCapitalizedString(stat.name).replace("-", " ")}: </b>
              {base_stat}
            </p>
          );
        })}
      </div>
    </div>
  );
}
