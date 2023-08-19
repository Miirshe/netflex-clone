import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"
import request from "../../request";
import { BASE_IMAGE_URL } from "../../constants";
import { AiFillPlaySquare , AiOutlineInfoCircle} from 'react-icons/ai';
import { useRecoilState } from "recoil";
import { modalState, movieState } from "../../atom/atom";
function Banner() {
    const [ trending,setTrending ] = useState([]);
    const [showModal , setShowModal] = useRecoilState(modalState);
    const [movie , setMovies] = useRecoilState(movieState);
    useEffect(()=>{
        const fetch_netflex_originals = async () =>{
            const { data } = await axios.get(request?.fetchRomanceMovies);
            setTrending(
                data.results[Math.floor(Math.random() * data.results.length)]);
        }

            fetch_netflex_originals();
    },[])
  return (
    <> 
    <div className="flex flex-col justify-center items-start space-y-2 relative ">
        <div className="absolute top-0 h-[97vh] w-screen -z-10">
            <img src={`${BASE_IMAGE_URL + trending.backdrop_path || trending.posters_path}`} alt=""
            className=" h-screen w-screen object-cover bg-center" />
        </div>
        </div>


        <div className="w-[95%] md:w-[50%] lg:w-[40%] flex flex-col justify-start items-start p-4 space-y-5 md:ml-20 mt-48">
            <h1 className="text-3xl font-semibold">{trending.title || trending.name || trending.original_name}</h1>
            <p>{trending.overview}</p>
            <div className="flex flex-row justify-start items-start  gap-3">
            <button className="py-3 px-10 bg-white  text-black rounded-md shadow-sm"
            onClick={()=>{
                setShowModal(true);
                setMovies(trending)
            }}><AiFillPlaySquare size={20} className="inline mr-3" />Play</button>
            <button className="py-3 px-10 bg-white  text-black rounded-md shadow-sm"><AiOutlineInfoCircle size={20} className="inline mr-3"/>More Info</button>
            </div>
         </div>
    </>
  )
}

export default Banner