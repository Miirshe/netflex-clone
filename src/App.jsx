import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import List from "./pages/List"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import Browse from "./pages/Browse"
import Footer from "./components/footer/Footer"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "./components/browse/Header"
import Trending_detail from "./components/movie_details/Trending_detail"
import Romance_detail from "./components/movie_details/Romance_detail"
import Action_detail from "./components/movie_details/Action_detail"
import Comedy_detail from "./components/movie_details/Comedy_detail"
import Documenteries from "./components/movie_details/Documenteries"
import Top_rates_detail from "./components/movie_details/Top_rates_detail"

const App = () => {
  return (
    <>
   <ToastContainer />
   <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/List" element={<List/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/SignUp" element={<SignUp/>}/>
      <Route path="/Browse" element={<Browse/>}/>
      <Route path="/Trending_detail/:id" element={<Trending_detail/>}/>
      <Route path="/Romance_detail/:id" element={<Romance_detail/>}/>
      <Route path="/Action_detail/:id" element={<Action_detail/>}/>
      <Route path="/Comedy_detail/:id" element={<Comedy_detail/>}/>
      <Route path="/Documenteries/:id" element={<Documenteries/>}/>
      <Route path="/Top_rates_detail/:id" element={<Top_rates_detail/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App