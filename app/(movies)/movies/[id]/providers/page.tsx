import MovieProviders from "../../../../../components/movie-providers";
import { IParms } from "../layout";

export default function Providers({ params:{id}}:IParms){
  return(
    <MovieProviders id={id} />
  );
}