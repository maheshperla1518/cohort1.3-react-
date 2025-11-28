import {Link} from "react-router-dom"

let Navbar = ()=>{
    return(
        <>
            <header className="flex items-center border-neutral-400 justify-between border-b">
                <Link to="/" className="font-black p-4 text-xl">API's and UseEffect</Link>
                <div className="flex w-[300px] gap-12 items-center text-[16px] font-semibold text-neutral-600">
                    <Link to="/" className="cursor-pointer">Home</Link>
                    <Link to="" className="cursor-pointer">Details</Link>
                </div>
            </header>
        </>
    )
}
export default Navbar;