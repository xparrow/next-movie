import { Suspense } from "react";
import MovieCredits from "../../../../../components/movie-credits";
import type { IParms } from "../layout";
import Loading from "../../../../../components/Loading";

export default function Credits({ params:{id}}:IParms){
  return(
    <Suspense fallback={<Loading />}>
      <MovieCredits id={id} />
    </Suspense>
  );
}