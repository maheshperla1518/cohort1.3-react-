import movies from "../MockData/moviesData";
import MoviesCard from "../Components/MoviesCard";

let Home = ()=>{
    return(
        <>
            <div className="relative w-full h-screen overflow-hidden">
                <img className="w-full h-fit object-cover" src="https://assets.nflxext.com/ffe/siteui/vlv3/6fd9d446-cd78-453a-8c9c-417ed3e00422/web/IN-en-20251117-TRIFECTA-perspective_2fe4e381-977f-49fd-a7f4-1da0bcf09429_large.jpg" alt="" />
            </div>
            <div className="h-screen w-full object-cover bg-linear-to-b from-neutral-950 to-transparent-100 absolute top-18 bottom-0 left-0 right-0 z-1"></div>
            
                    <div className="w-[90vw] h-[90vh] flex flex-wrap mx-auto justify-center gap-4 absolute top-30 bottom-0 right-0 left-0 z-2">
                                {
                                movies.map((movie)=><MoviesCard img={movie.img} slug={movie.slug}/>) 
                                } 
                    </div>
        </>
    )
}
export default Home;