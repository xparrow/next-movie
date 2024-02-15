import { Suspense } from "react";
import MovieCredits from "../../../../../components/movie-credits";
import type { IParms } from "../layout";

export default function Credits({ params:{id}}:IParms){
  return(
    <Suspense>
      <MovieCredits id={id} />
    </Suspense>
  );
}