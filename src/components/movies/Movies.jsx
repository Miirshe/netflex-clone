import axios from "axios";
import { useEffect, useState } from "react"
import { BASE_IMAGE_URL } from "../../constants";
import { Link } from "react-router-dom";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { useMyList } from "../../reducers/My_list_context";

const Movies = ({title,url}) => {

	// const [ movies , setMovies ] = useState([]);

	const { add_my_list } = useMyList();

	const [data, setData] = useState([]);
	useEffect(() => {
        const Fetch_movies = async () => {
		const { data } = await axios.get(url);
		setData(data.results);
	}  
		Fetch_movies();

	}, [url]);

	console.log("data", data);
	const handleMovies = (id) => {
		const result = data?.filter( data =>  {
			return data.id === id ;
		})
		add_my_list(result)
	}
  return (
	<div className="w-[90%] mx-auto mt-36 p-1 relative z-20">
		<Link className="text-white text-3xl inline italic mt-4" to="/"> Home <h1 className=" text-red-500 inline tracking-widest"> / {title}</h1></Link>
		<div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-start items-center gap-5 space-y-5">
			{
				data?.map( movie => {
					return(
						<div className="flex flex-col justify-evenly items-start gap-5 space-y-2" key={movie?.id}>
							<Link state={movie} to={`/Movies_details/${movie?.id}`}>
							    <img className=" w-[90%] md:w-64  object-cover rounded-md cursor-pointer group-hover:scale-110 transition-all ease-in-out" src={BASE_IMAGE_URL+movie.backdrop_path || movie.poster_path} alt="" />
							</Link>
							<div className="flex flex-col justify-start items-start gap-1">
							   <span className=" text-lg text-gray-400 capitalize space-x-1">title :<small className="text-white ml-2">{movie?.title}</small></span>
				               <span className=" text-lg text-gray-400 capitalize space-x-1">original_language :<small className="text-white ml-2">{movie?.original_language}</small></span>
				               <span className=" text-lg text-gray-400 capitalize space-x-1">vote_average :<small className="text-white ml-2">{movie?.vote_average}</small></span>
				               <span className=" text-lg text-gray-400 capitalize space-x-1">vote_count :<small className="text-white ml-2">{movie?.vote_count}</small></span>
							   <BsFillPlusCircleFill size={25} className="mt-2 cursor-pointer text-white" onClick={() => handleMovies(movie?.id)} />
							</div>
						</div>
					)
				})
			}
		</div>
	</div>
  )
}

export default Movies