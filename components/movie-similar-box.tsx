'use client';
import { useRouter } from "next/navigation";
import styles from "../styles/movie-credits.module.css";

interface SimilarProps {
	id: string,
	original_title: string,
	original_language: string,
	title: string,
	release_date: string,
	backdrop_path: string
}

export default function SimilarBox({backdrop_path, id, original_title, original_language, title, release_date}:SimilarProps){
	const router = useRouter();
	
	const movieClick = ()=>{
		router.push(`/movies/${id}`);
	}
	return(
		<div className={styles.box} key={id}>
			{
				backdrop_path === null ? 
					<div className={styles.imgNotFound} onClick={movieClick}>
						<span className={styles.txt}>이미지 없음</span>
					</div>
				:
				<img src={backdrop_path} alt={title} onClick={movieClick} className={styles.cursor} />
			}
			
			<p className={styles.tit}>{original_title}</p>
			{ original_language !== 'en' && <p className={styles.subTit}>{title}</p>}
			<p className={styles.subTit}>{release_date}</p>
		</div>
	)
}