import MovieSimilar from "../../../../../components/movie-similar";
import { IParms } from "../layout";

export default function Similar({params:{id}}:IParms){
  return(
    <MovieSimilar id={id} />
  );
}