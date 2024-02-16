import { API_URL } from "../app/constants";
import styles from "../styles/movie-info.module.css";

export async function getMovie(id:string) {
	const response = await fetch(`${API_URL}/${id}`);
	return response.json();
}

export default async function MovieInfo({id}: {id:string}) {
  const movie = await getMovie(id);
  return (
    <div className={styles.container}>
      <img src={movie.poster_path} alt={movie.title} className={styles.poster} />
      <div className={styles.info}>
        <h1 className={styles.title}>{movie.title}</h1>
        <p>{movie.overview}</p>
        <p>⭐{movie.vote_average.toFixed(1)}&nbsp;&nbsp;&nbsp;⏱{movie.runtime}m</p>
        <h3>production companies</h3>
        <ul className={styles.product_list}>
          {
            movie.production_companies.map((item)=>{
              return(
                <li key={item.id}>
                  {item.name}
                </li>
              )
            })
          }
        </ul>
        {
          movie.homepage !== '' && <a href={movie.homepage} target="_blank">🔗Homepage</a>
        }
        
      </div>
    </div>
  );
}