import Action_movies from "../components/Action_movies/Action_movies";
import Banner from "../components/banner/Banner"
import Comedy_movies from "../components/Comedy_movies/Comedy_movies";
import Documenterie_movies from "../components/Documentorie_movies/Documenterie_movies";
import Movie_modal from "../components/Movie_modal/Movie_modal";
import Romance_movies from "../components/Romance_movies/Romance_movies";
import Top_Rate_Movies from "../components/Top_rates_movies/Top_Rate_Movies";
import Trending_movies from "../components/Trending_Movies/Trending_movies";
import requests from "../request";
const Browse = () => {

  return (
    <>
        <section>
          <Banner/>
        </section>
        <Trending_movies title="Trending Now" url={requests.fetchTrending} />
        <Action_movies title="Action Movies" url={requests.fetchActionMovies} />
        <Top_Rate_Movies title="Top Rated" url={requests.fetchTopRated} />
        <Romance_movies title="Romance Movies" url={requests.fetchRomanceMovies}  />
        <Documenterie_movies title="Documentaries" url={requests.fetchDocumantaries}  />
        <Comedy_movies title="Comedy Movies" url={requests.fetchComedyMovies}  />
        <Movie_modal/>
    </>
  )
}

export default Browse