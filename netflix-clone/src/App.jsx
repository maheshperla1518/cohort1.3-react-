import {Routes,Route} from "react-router-dom";
import Home from "./Pages/Home";
import Details from "./Pages/Details";
import Navbar from "./Components/Navbar";

let App = ()=>{
  return(
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/details/:slug" element={<Details/>}></Route>
      </Routes>
    </>
  )
}
export default App;
