import styles from "../../styles/home.module.css";
import { API_URL } from "../../constants";
import dynamic from "next/dynamic";

export const metadata = {
	title: "Home",
};

const DynamicMovieNoSSR = dynamic(
  ()=> import("../../components/movie"),
  {ssr:false}
);

async function getMovies() {
	const res = await fetch(API_URL);
	const json = await res.json();
	return json;
}

export default async function HomePage(){
	const movies = await getMovies();
	return (
		<div className={styles.container}>
			{
				movies.map((movie)=>{
					return(
						<DynamicMovieNoSSR key={movie.id} id={movie.id} title={movie.title} poster_path={movie.poster_path} />
					);
				})
			}
		</div>
	)
}