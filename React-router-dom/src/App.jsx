import NavBar from "./Components/navbar";
import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import About from "./pages/About";
import Requests from "./pages/Requests";
import UserCard from "./pages/UserCard";
import Post from "./pages/Post";
import ErrorPage from "./pages/ErrorPage";

let App = ()=>{
  return(
    <>
      <NavBar/>
      
      <Routes>
        <Route path="/" element={<Requests/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/requests" element={<Requests/>}></Route>
        <Route path="/:username" element={<UserCard/>}></Route>
        <Route path="/post/:id" element={<Post/>}></Route>
        <Route path="*" element={<ErrorPage/>}></Route>
      </Routes>
      
    </>
  )
}
export default App;
