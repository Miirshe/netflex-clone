import axios from "axios";
import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Romance_movie from "./Romance_movie";

const Romance_movies = ({ title, url }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const Fetch_romance_movies = async () => {
      const { data } = await axios.get(url);
      setData(data.results);
    };

    return () => {
		Fetch_romance_movies();
    };
  }, []);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="w-[90%] mx-auto mt-14 p-1 relative z-20">

		<h1 className="text-lg font-medium p-1 md:text-2xl tracking-widest">{title}</h1>

      <Carousel responsive={responsive}>


          {data.map((data) => {

            return <Romance_movie key={data.id} data={data}/>;

          })}
      </Carousel>

    </div>
  );
};

export default Romance_movies;
