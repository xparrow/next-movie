import { Suspense } from "react";
import MovieSimilar from "../../../../../components/movie-similar";
import { IParms } from "../layout";
import Loading from "../../../../../components/Loading";

export default function Similar({params:{id}}:IParms){
  return(
    <div>test</div>
    // <Suspense fallback={<Loading />}>
    //   <MovieSimilar id={id} />
    // </Suspense>
  );
}