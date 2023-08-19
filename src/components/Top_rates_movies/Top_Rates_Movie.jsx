import { Link } from "react-router-dom"
import { BASE_IMAGE_URL } from "../../constants"

const Top_Rate_Movie = ({data}) => {
  return (
	<Link to={`/Top_rates_detail/${data?.id}`} className="w-full p-2 group mt-3">
		<img className=" w-[90%] md:w-64 object-cover cursor-pointer rounded-md group-hover:scale-110 transition-all ease-in-out" src={`${BASE_IMAGE_URL+data.backdrop_path || data.poster_path}`} alt="" />
	</Link>
  )
}

export default Top_Rate_Movie