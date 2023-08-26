import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { My_list_reducers, initialState } from "./My_list_reducers";
import { toast } from "react-toastify";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../lib/Firebase";


const mainContext = createContext(initialState);

export const My_list_context = ({children}) => {
	const [user , setUser] = useState(null);

	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
		if (authUser) {
			setUser(authUser);
		} else {
			setUser(null);
		}
		})
	}, [])

	const [ state , dispatch ] = useReducer(My_list_reducers , initialState);

	const add_my_list = (myLists) => {

		const new_list = state.myLists.concat(myLists);

		dispatch({
			type:"add_list",
			payload:{
				myLists:new_list
			}
		})
		toast.success('list added successfully');
		const data = new_list;
		addLists(data);
	}

	const values = {
		myLists:state.myLists,
		add_my_list
	}

	const addLists = async (data) => {
        try {
          
          await addDoc(collection(db , 'MyList'),{
            data,
			user_id : user?.uid
          });
          
        } catch (error) {
          console.log(error);
        }
    }

	return <mainContext.Provider value={values}>
		{
			children
		}
	</mainContext.Provider>
}

export const useMyList = () => {
	const context = useContext(mainContext);
	if( context === undefined){
		return 'Your Context is Undefined'
	}

	return context;
}