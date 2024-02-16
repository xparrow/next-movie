import { API_URL } from "../constants";
import styles from "../styles/movie-credits.module.css";

async function getCredits(id:string){
	const response = await fetch(`${API_URL}/${id}/credits`);
	return response.json();
}

export default async function MovieCredits({id}:{id:string}){
  const credits = await getCredits(id);
  return(
    <div className={styles.container}>
      {
        credits.map((credit)=>{
          return(
            <div className={styles.box} key={credit.id}>
              {
                !credit.profile_path ?
                <div className={styles.imgNotFoundCredit}>
                  <span className={styles.txt}>이미지 없음</span>
                </div>
                :
                <img src={credit.profile_path} alt={credit.name} />
              }
              <p className={styles.tit}>{credit.name}</p>
              <p className={styles.subTit}>{credit.character} 역</p>
            </div>
          )
        })
      }
    </div>
  );
}