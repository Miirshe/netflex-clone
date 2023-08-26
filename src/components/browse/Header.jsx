import { Link, useNavigate } from "react-router-dom";
import Nexflex from "../../assets/NetFlex.svg";
import { AiOutlineSearch, AiOutlineBell, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../lib/Firebase";
import { toast } from "react-toastify";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMenu , setShowMenu] = useState(true);
  const navigate = useNavigate();
	useEffect(() => {
    const handle_scroll_window = ()=>{
      if(window.scrollY > 0){
        setIsScrolled(true);
      }else{
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll",handle_scroll_window);
    return ()=> window.removeEventListener("scroll",handle_scroll_window);
	}, []);
  const logoutuser = () => {
    signOut(auth).then(() => {
      toast.success('successfully logout...');
      navigate('/');

    }).catch((error) => {
      toast.error(error.message);
    });
  }
  return (
    <header className={`${isScrolled && 'bg-[#141414]'} 
    p-1 w-full fixed top-0 z-50 bg-color`}>
      <div className="w-[90%] mx-auto flex flex-col justify-start items-start md:flex-row md:justify-between md:items-center gap-3 space-y-2 md:space-y-0 p-1">

          <div className="relative w-full md:w-fit">
            <img src={Nexflex} alt="Logo svg" className="w-36 h-16" />
            {
              showMenu ? <AiOutlineMenu onClick={()=>setShowMenu(!showMenu)}  size={30} className=" block md:hidden absolute top-3 right-1"/> : 
              <AiOutlineClose onClick={()=>setShowMenu(!showMenu)} size={30} className=" block md:hidden absolute top-3 right-1"/>
            }
          </div>

        <div className={`${showMenu ? 'hidden md:flex w-full lg:w-[50%] flex-col justify-start md:flex-row md:justify-between items-center gap-2 space-y-2 md:space-y-0 p-1' :' block md:w-fit h-screen md:h-fit'} w-full lg:w-[50%] flex flex-col justify-start md:flex-row md:justify-between items-center gap-2 space-y-2 md:space-y-0 p-1`}>

          <div className="lg:w-[70%] flex flex-col md:flex-row justify-around items-center gap-2 space-y-2 md:space-y-0" onClick={()=>setShowMenu(!showMenu)}>
            <Link className="link_style hover:text-gray-300" to="/Browse">Home</Link>
            <Link className="link_style hover:text-gray-300" to="/All_Movies">Movies</Link>
            <Link className="link_style hover:text-gray-300" to="/MyList">My Lists</Link>
          </div>

          <div className="flex flex-col md:flex-row justify-evenly items-center gap-3 space-y-2 md:space-y-0 p-1">
          <AiOutlineBell className=" cursor-pointer inline" size={20} />
          <AiOutlineSearch className=" cursor-pointer inline" size={20} />
          <img
            src="../images/logo/profile.png"
            alt="profile avator"
            className=" cursor-pointer inline w-14 rounded-lg"
            onClick={()=>logoutuser()}
          />
        </div>


        </div>

      </div>
    </header>
  );
};

export default Header;
