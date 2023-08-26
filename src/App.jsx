import { Route, Routes, useLocation } from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Action_detail, All_Movies, Browse, Comedy_detail, Documenteries, 
Footer, Header, Home, List, Login, Movies_details, MyList, Opps, Private_Routes, Romance_detail, SignUp, 
Top_rates_detail, Trending_detail } from "./Links";
const App = () => {

  const locations = useLocation();

  return (
    <>
   <ToastContainer />
   {
    locations.pathname === '/' || locations.pathname === '/Login' || locations.pathname === '/SignUp'
    ? <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/Login" element={<Login/>}/>
        <Route path="/SignUp" element={<SignUp/>}/>
      </Routes>
    : <><Header/>
    <Routes>
      <Route path="/List" element={<Private_Routes/>}>
        <Route path="/List" element={<List/>}/>
      </Route>
      <Route path="/All_Movies" element={<Private_Routes/>}>
        <Route path="/All_Movies" element={<All_Movies/>}/>
      </Route>
      <Route path="/Browse" element={<Private_Routes/>}>
        <Route path="/Browse" element={<Browse/>}/>
      </Route>
      <Route path="/MyList" element={<Private_Routes/>}>
        <Route path="/MyList" element={<MyList/>}/>
      </Route>
      <Route path="/Trending_detail/:id" element={<Private_Routes/>}>
        <Route path="/Trending_detail/:id" element={<Trending_detail/>}/>
      </Route>
      <Route path="/Romance_detail/:id" element={<Private_Routes/>}>
        <Route path="/Romance_detail/:id" element={<Romance_detail/>}/>
      </Route>
      <Route path="/Action_detail/:id" element={<Private_Routes/>}>
        <Route path="/Action_detail/:id" element={<Action_detail/>}/>
      </Route>
      <Route path="/Comedy_detail/:id" element={<Private_Routes/>}>
        <Route path="/Comedy_detail/:id" element={<Comedy_detail/>}/>
      </Route>
      <Route path="/Documenteries/:id" element={<Private_Routes/>}>
        <Route path="/Documenteries/:id" element={<Documenteries/>}/>
      </Route>
      <Route path="/Top_rates_detail/:id" element={<Private_Routes/>}>
         <Route path="/Top_rates_detail/:id" element={<Top_rates_detail/>}/>
      </Route>
      <Route path="/Movies_details/:id" element={<Private_Routes/>}>
         <Route path="/Movies_details/:id" element={<Movies_details/>}/>
      </Route>
      <Route path='*' element={<Opps/>}/>
    </Routes>


    </>
   }
   
    <Footer/>
    </>
  )
}

export default App