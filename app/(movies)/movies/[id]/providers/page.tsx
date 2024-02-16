import { Suspense } from "react";
import MovieProviders from "../../../../../components/movie-providers";
import { IParms } from "../layout";
import Loading from "../../../../../components/Loading";

export default function Providers({ params:{id}}:IParms){
  return(
    <Suspense fallback={<Loading />}>
      <MovieProviders id={id} />
    </Suspense>
  );
}