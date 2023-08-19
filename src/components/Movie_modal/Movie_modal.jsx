import { Modal } from "@mui/material";
import { modalState, movieState } from "../../atom/atom";
import { useRecoilState } from "recoil";
import ReactPlayer from "react-player";
import { FiThumbsUp } from "react-icons/fi";
import { BiVolumeFull, BiVolumeMute } from "react-icons/bi";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  AiFillPauseCircle,
  AiFillPlaySquare,
  AiFillPlusSquare,
} from "react-icons/ai";
const apikey = "a7e7b64fe447cfe5893860a239761076";
const Movie_modal = () => {
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [movie, setMovies] = useRecoilState(movieState);
  const [key, setKey] = useState("");
  const [isplaying, setisplaying] = useState(true);
  const [ismuted, setIsmuted] = useState(false);
  useEffect(() => {
    const fetchTrailers = async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/${
          movie?.media_type === "tv" ? "tv" : "movie"
        }/${
          movie?.id
        }?api_key=${apikey}&language=en-US&append_to_response=videos`
      );
      setKey(data.videos.results[0].key);
    };

    return () => fetchTrailers();
  }, [movie]);
  console.log("key", key);
  const handleClose = () => {
    setShowModal(false);
    setMovies(null);
  };

  console.log("movie", movie);
  return (
    <Modal
      open={showModal}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <>
        <div className="flex flex-col justify-center items-center gap-3 p-3">

          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${key}`}
            playing={isplaying}
            muted={ismuted}
            width="100%"
          />
          <div className="w-[90%] md:w-[55%] lg:w-[43%] flex flex-row justify-between items-center gap-2 p-1">
            <div className="flex flex-row justify-evenly items-center gap-2">
              {isplaying ? (
                <AiFillPauseCircle
                  className=" cursor-pointer"
                  size={35}
                  onClick={() => setisplaying(!isplaying)}
                />
              ) : (
                <AiFillPlaySquare
                  className=" cursor-pointer"
                  onClick={() => setisplaying(!isplaying)}
                  size={35}
                />
              )}
              <AiFillPlusSquare size={30} />
              <FiThumbsUp size={30} />
            </div>
            <div>
              {ismuted ? (
                <BiVolumeMute className=" cursor-pointer" onClick={() => setIsmuted(!ismuted)} size={30} />
              ) : (
                <BiVolumeFull className=" cursor-pointer" onClick={() => setIsmuted(!ismuted)} size={30} />
              )}
            </div>
          </div>
        </div>
        <div className="w-[90%] md:w-[55%] lg:w-[43%] mx-auto bg-[#181818] p-3 rounded flex flex-col justify-center items-start gap-4 space-y-2">
          <div className="flex flex-row justify-start items-center gap-5 ">
            <span className=" bg-green-500 p-1 rounded font-bold text-white text-lg">
              {movie?.vote_average * 10} % matches{" "}
            </span>
            <span className=" font-thin text-lg">
              {movie?.release_date || movie?.first_air_date}
            </span>
            <span className="flex h-4 items-center justify-center rounded  border border-white/40 px-1.5 text-xs">
              HD
            </span>
          </div>
          <h1 className=" text-xl tracking-widest text-gray-400 font-semibold">
            title : {movie?.title}
          </h1>
          <p className=" text-lg tracking-widest">
            <small className="text-gray-400 text-xl">overview</small> :{" "}
            {movie?.overview.slice(0, 120) +
              [movie?.overview.length > 30 ? "" : ""]}
          </p>
          <div className=" flex flex-row justify-start items-center gap-5">
            <span className=" text-lg tracking-widest">
              <small className="  text-gray-400 text-xl">
                original language
              </small>{" "}
              : {movie?.original_language}
            </span>
            <span className=" text-lg tracking-widest">
              {" "}
              <small className="  text-gray-400 text-xl">votes</small> :{" "}
              {movie?.vote_count}
            </span>
            <span className=" text-lg tracking-widest">
              <small className="  text-gray-400 text-xl">status</small> :{" "}
              {movie?.status}
            </span>
          </div>
        </div>
      </>
    </Modal>
  );
};

export default Movie_modal;
