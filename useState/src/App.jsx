import Counter from "./Components/counter";
import Alert from "./Components/Alert";
import Loader from "./Components/Loader";
import User from "./Components/User";

let App = ()=>{
  // let [age, setAge] = useState(28);
  return(
    <>
     {/* <div>
      <h1 className="text-center font-bold text-4xl mt-28">Hey! my age is {age}</h1>
      <div className=" flex justify-center mt-4">
          <button onClick={()=>{
            setAge(30)
          }} className="bg-black text-white rounded-4xl px-4 py-2">Update the age</button>
      </div>
    </div> */}

    {/* <Counter/> */}
    {/* <Alert/> */}
    {/* <Loader/> */}
    <User/>
   
    </>
  )
}
export default App;


