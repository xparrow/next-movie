import { API_URL } from "../constants";
import styles from "../styles/movie-videos.module.css";

async function getVideos(id:string){
	const response = await fetch(`${API_URL}/${id}/videos`);
	return response.json();
}

export default async function MovieVideos({id}:{id:string}) {
  const videos = await getVideos(id);
  return(
    <div className={styles.container}>
      {
        videos.length > 0 ?
        videos.map((item, i:number)=>{
          return(
            <div key={item.id}>
              <iframe src={`https://www.youtube.com/embed/${item.key}`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title={item.name}></iframe>
            </div>
          )
        })
        :
        <p>비디오가 없습니다.</p>
      }
    </div>
  )
}