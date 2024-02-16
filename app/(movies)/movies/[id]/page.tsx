import { Suspense } from "react";
import { getMovie } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";
import Loading from "../../../../components/Loading";
import type { IParms } from "./layout";

export async function generateMetadata({params:{id}}:IParms){
	const movie = await getMovie(id);
	return {
		title:movie.title,
	}
}

export default async function MovieDetail({ params:{id}}:IParms) {
	// const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]); Promise
	return (
		<>
			{/* <Suspense fallback={<Loading />}>
				<MovieInfo id={id} />
			</Suspense> */}
			<Suspense fallback={<Loading />}>
				<MovieVideos id={id} />
			</Suspense>
		</>
	)
}