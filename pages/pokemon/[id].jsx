import InfoCard from "../../components/InfoCard";

export async function getStaticProps({params}) {
  const api = "https://pokeapi.co/api/v2/pokemon";
  const res = await fetch(`${api}/${params.id}`);
  const pokemon = await res.json();
  return { props: {pokemon} };
}
export async function getAllPokemonsIds() {
  const api = "https://pokeapi.co/api/v2/pokemon/?limit=254";
  const res = await fetch(api);
  const data = await res.json();
  return data.results.map((pokemon,i) =>{
		return {params:{id:`${i+1}`}}
	});
}
export async function getStaticPaths() {
  const paths = await getAllPokemonsIds();
  return { paths, fallback: false };
}

export default function Pokemon({pokemon}) {
	console.log(pokemon)
  return (pokemon ? <InfoCard pokemon={pokemon} />: <p>Loading</p>);
}
