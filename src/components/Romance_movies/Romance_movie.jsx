import { Link } from "react-router-dom"
import { BASE_IMAGE_URL } from "../../constants"

const Romance_movie = ({data}) => {
  return (
	<Link to={`/Romance_detail/${data?.id}`} className="w-full p-2 group mt-3">
		<img className=" w-[90%] md:w-64  object-cover rounded-md cursor-pointer group-hover:scale-110 transition-all ease-in-out" src={`${BASE_IMAGE_URL+data.backdrop_path || data.poster_path}`} alt="" />
	</Link>
  )
}

export default Romance_movie