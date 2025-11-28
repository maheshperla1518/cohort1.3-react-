import { Route,Routes,Link } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Products from "./pages/Products";

let App = ()=>{
  return(
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Products/>}/>
        <Route path="/details/:id" element={<Details/>}/>
      </Routes>
    </>
  )
}
export default App;
