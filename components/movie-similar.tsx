import { API_URL } from "../constants";
import styles from "../styles/movie-credits.module.css";
import SimilarBox from "./movie-similar-box";

async function getSimilar(id:string){
	const response = await fetch(`${API_URL}/${id}/similar`);
	return response.json();
}

export default async function MovieSimilar({id}:{id:string}){
  const similar = await getSimilar(id);
  return(
    <div className={styles.container}>
      {
        similar.length === 0 ? 
        <p>비슷한 영화가 없습니다.</p>
        :
        similar.map((simil)=>{
          return(
            <SimilarBox backdrop_path={simil.backdrop_path} id={simil.id} original_title={simil.original_title} original_language={simil.original_language} title={simil.title} release_date={simil.release_date} key={simil.id} />
            // <div className={styles.box} key={simil.id}>
            //   <img src={simil.backdrop_path} alt={simil.backdrop_path} />
            //   <p className={styles.tit}>{simil.original_title}</p>
            //   { simil.original_language !== 'en' && <p className={styles.subTit}>{simil.title}</p>}
            //   <p className={styles.subTit}>{simil.release_date}</p>
            // </div>
          )
        })
      }
    </div>
  );
}