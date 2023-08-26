import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react"
import { auth, db } from "../lib/Firebase";
import { Link } from "react-router-dom";
import { MdRemoveCircle } from "react-icons/md";
import { BASE_IMAGE_URL } from "../constants";
const MyList = () => {
  const [ data , setData ] = useState([]);
	const [user , setUser] = useState(null);
  useEffect(()=>{
   const fetchData = onSnapshot(
    collection(db , 'MyList'),
    (onSnapshot) => {
      const list = [];
      onSnapshot.docs.forEach(doc => {
        list.push({ id:doc.id, ...doc.data()})
      })
      list.forEach(doc => {
        setData(doc)
      })
    }
   )
   return () => fetchData();
  },[])
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    })
  }, [])
  const removeList = async (id) => {
		try {
			const delete_list = doc(db , "MyList",id);
			await deleteDoc(delete_list);
		} catch (error) {
			console.log(error);
		}
	}
  return (
    <div className="w-[90%] mx-auto mt-36 p-1 relative z-20">
		<Link className="text-white text-3xl inline italic mt-4" to="/"> Home <h1 className=" text-red-500 inline tracking-widest"> / My Lists</h1></Link>
    {
      user?.uid && data?.user_id == user?.uid && (
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-start items-center gap-5 space-y-5">
			{
				data.data?.map( movie => {
					return(
						<div className="flex flex-col justify-evenly items-start gap-5 space-y-2" key={movie?.id}>
              <img className=" w-[90%] md:w-64  object-cover rounded-md cursor-pointer group-hover:scale-110 transition-all ease-in-out" src={BASE_IMAGE_URL+movie?.backdrop_path || movie?.poster_path} alt="" />
							<div className="flex flex-col justify-start items-start gap-1">
                <span className=" text-lg text-gray-400 capitalize space-x-1">title :<small className="text-white ml-2">{movie?.title}</small></span>
                <span className=" text-lg text-gray-400 capitalize space-x-1">original_language :<small className="text-white ml-2">{movie?.original_language}</small></span>
                <span className=" text-lg text-gray-400 capitalize space-x-1">vote_average :<small className="text-white ml-2">{movie?.vote_average}</small></span>
                <span className=" text-lg text-gray-400 capitalize space-x-1">vote_count :<small className="text-white ml-2">{movie?.vote_count}</small></span>
                <MdRemoveCircle size={25} className="mt-2 text-3xl cursor-pointer text-white" onClick={()=> removeList(data.id)} />
							</div>
						</div>
					)
				})
			}
		</div>
      )
    }
	</div>
  )
}

export default MyList