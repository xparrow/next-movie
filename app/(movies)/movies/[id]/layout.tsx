import { Suspense } from "react";
import DetailNav from "../../../../components/detail-nav";
import MovieInfo from "../../../../components/movie-info";
import Loading from "../../../../components/Loading";

export interface IParms {
	params: {id:string}
}

interface ChildrenAdd extends IParms {
  children:React.ReactNode
}
export default async function Layout({params:{id}, children}:ChildrenAdd){
  return (
    <div className="sub-container">
      <Suspense fallback={<Loading />}>
				<MovieInfo id={id} />
			</Suspense>
      <DetailNav id={id} />
      {children}
    </div>
  );
}