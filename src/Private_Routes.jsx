import Cookies from "js-cookie"
import { Navigate, Outlet } from "react-router-dom";

const Private_Routes = ({children}) => {
	const token = Cookies.get('accessToken');
	if(!token){
		<Navigate to='/Login'/>
	}
	return <Outlet/>
}

export default Private_Routes