import styles from "../../styles/home.module.css";
import { API_URL } from "../../constants";
import Movie from "../../components/movie";

export const dynamic = "force-dynamic";

export const metadata = {
	title: "Home",
};

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
						<Movie key={movie.id} id={movie.id} title={movie.title} poster_path={movie.poster_path} />
					);
				})
			}
		</div>
	)
}