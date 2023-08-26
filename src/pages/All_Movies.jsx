import { Movies } from '../Links'
import requests from '../request'

const All_Movies = () => {
  return (
	<div>
		<Movies title="Trending Movies" url={requests.fetchTrending}/>
        <Movies title="Action Movies" url={requests.fetchActionMovies}/>
        <Movies title="Top_Rated Movies" url={requests.fetchTopRated}/>
        <Movies title="Romance Movies" url={requests.fetchRomanceMovies}/>
        <Movies title="Documentaries Movies" url={requests.fetchDocumantaries}/>
        <Movies title="Comedy Movies" url={requests.fetchComedyMovies}/>
	</div>
  )
}

export default All_Movies