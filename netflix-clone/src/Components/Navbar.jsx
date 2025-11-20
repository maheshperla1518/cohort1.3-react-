import { Link } from "react-router-dom";

let Navbar = ()=>{
    return (
        <>
                <header className="flex justify-between items-center bg-linear-to-r from-neutral-950 to-neutral-700">
                       <div className="w-[400px] flex justify-center fill-red-400">
                            <div className="w-[200px] px-6 py-4">
                                <Link to="/">
                                <svg xmlns="http://www.w3.org/2000/svg" className="fill-red-600 cursor-pointer" aria-hidden="true"  viewBox="0 0 111 30"><path d="M105.062 14.28 111 30c-1.75-.25-3.499-.563-5.28-.845l-3.345-8.686-3.437 7.969c-1.687-.282-3.344-.376-5.031-.595l6.031-13.75L94.468 0h5.063l3.062 7.874L105.875 0h5.124zM90.47 0h-4.594v27.25c1.5.094 3.062.156 4.594.343zm-8.563 26.937c-4.187-.281-8.375-.53-12.656-.625V0h4.687v21.875c2.688.062 5.375.28 7.969.405zM64.25 10.657v4.687h-6.406V26H53.22V0h13.125v4.687h-8.5v5.97zm-18.906-5.97V26.25c-1.563 0-3.156 0-4.688.062V4.687h-4.844V0h14.406v4.687zM30.75 15.593c-2.062 0-4.5 0-6.25.095v6.968c2.75-.188 5.5-.406 8.281-.5v4.5l-12.968 1.032V0H32.78v4.687H24.5V11c1.813 0 4.594-.094 6.25-.094zM4.78 12.968v16.375C3.094 29.531 1.593 29.75 0 30V0h4.469l6.093 17.032V0h4.688v28.062c-1.656.282-3.344.376-5.125.625z"/></svg>
                                </Link>
                            </div>
                        </div>
                    <div className="flex gap-6 w-[400px] font-semibold">
                        <button className="text-white bg-transparent cursor-pointer border border-neutral-300 rounded-sm px-4 py-2 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" aria-hidden="true" data-icon="LanguagesSmall" data-icon-id=":R8pbamklaqlqp6:"><path fill="currentColor" fill-rule="evenodd" d="M10.77 5.33 10.5 6 9.34 8.94l-.57 1.44L7.33 14h1.78l.73-1.97h3.58l.74 1.97H16l-3.43-8.67zm-.15 4.6-.24.63h2.51l-1.26-3.35zm-1.1-5.09.1-.19h-3.2V2h-1.5v2.65H.55V6h3.77A11 11 0 0 1 0 10.43c.33.28.81.8 1.05 1.16 1.5-.91 2.85-2.36 3.88-4.02v5.1h1.49V7.52q.6.95 1.33 1.8l.57-1.43a12 12 0 0 1-1.34-1.9h2.09z" clip-rule="evenodd"/></svg>
                        English
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" aria-hidden="true" data-icon="CaretDownSmall" data-icon-id=":R9pbamkqlalalap6:"><path fill="currentColor" fill-rule="evenodd" d="M11.6 6.5c.15 0 .22.18.12.28l-3.48 3.48a.33.33 0 0 1-.48 0L4.28 6.78a.17.17 0 0 1 .12-.28z" clip-rule="evenodd"/></svg>
                        </button>
                        <button className="text-white cursor-pointer bg-red-400 rounded-sm px-4 py-2">Sign in</button>
                    </div>
            </header>
        
        </>
    )
} 
export default Navbar;

