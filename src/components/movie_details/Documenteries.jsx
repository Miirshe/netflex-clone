import { useEffect, useState} from "react";
import axios from "axios";
import requests from "../../request";
import { useParams } from "react-router-dom";
import { BASE_IMAGE_URL } from "../../constants";
const Documenteries = () => {
	const [movie, setMovies] = useState([]);
	const {id} = useParams();
	console.log("id : ",Number(id));
	useEffect(() => {
		const fetchDetailMovies = async () => {
			const { data } = await axios.get(requests?.fetchDocumantaries);
			const detail = data.results.find(data => {
				return data.id === Number(id);
			})
			setMovies(detail);
		}
		return () => fetchDetailMovies();
     }, []);
   console.log("hi movei detail",movie);

  return (
	<div className="mt-36 w-[90%] mx-auto p-4">
       <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-start gap-5 p-3">
				<img className="w-full rounded-md object-cover" src={`${BASE_IMAGE_URL+movie?.backdrop_path || movie?.poster_path}`} alt="" />
			<div className="flex flex-col justify-start item-start gap-2 space-y-2">
			<div className="flex flex-row justify-between md:justify-start items-center gap-5 ">
            <span className=" text-center bg-green-500 p-1 rounded md:font-bold text-white text-lg">
              {movie?.vote_average * 10} % matches{" "}
            </span>
            <span className=" font-thin text-lg">
              {movie?.release_date || movie?.first_air_date}
            </span>
            <span className="flex h-4 items-center justify-center rounded  border border-white/40 px-1.5 text-xs">
              HD
            </span>
          </div>
				<span className=" text-lg text-gray-400 capitalize space-x-1">title :<small className="text-white ml-2">{movie?.title}</small></span>
				<span className=" text-lg text-gray-400 capitalize space-x-1">original_language :<small className="text-white ml-2">{movie?.original_language}</small></span>
				<span className=" text-lg text-gray-400 capitalize space-x-1">overview : <small className="text-white ml-2">{movie?.overview}</small></span>
				<span className=" text-lg text-gray-400 capitalize space-x-1">vote_average :<small className="text-white ml-2">{movie?.vote_average}</small></span>
				<span className=" text-lg text-gray-400 capitalize space-x-1">vote_count :<small className="text-white ml-2">{movie?.vote_count}</small></span>

			</div>
       </div>
	</div>
  )
}

export default Documenteries