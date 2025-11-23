import {useParams} from "react-router-dom";
import movies from "../MockData/moviesData";
import ReactPlayer from 'react-player';
import { useState } from "react";
import MoviesCard from "../Components/MoviesCard";

    let MutedIcon = ()=>(<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class=" fill-white bi bi-volume-mute-fill" viewBox="0 0 16 16">
        <path d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06m7.137 2.096a.5.5 0 0 1 0 .708L12.207 8l1.647 1.646a.5.5 0 0 1-.708.708L11.5 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L10.793 8 9.146 6.354a.5.5 0 1 1 .708-.708L11.5 7.293l1.646-1.647a.5.5 0 0 1 .708 0"/>
        </svg>);
    
    let UnmutedIcon = ()=>(<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-volume-up fill-white" viewBox="0 0 16 16">
        <path d="M11.536 14.01A8.47 8.47 0 0 0 14.026 8a8.47 8.47 0 0 0-2.49-6.01l-.708.707A7.48 7.48 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303z"/>
        <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.48 5.48 0 0 1 11.025 8a5.48 5.48 0 0 1-1.61 3.89z"/>
        <path d="M10.025 8a4.5 4.5 0 0 1-1.318 3.182L8 10.475A3.5 3.5 0 0 0 9.025 8c0-.966-.392-1.841-1.025-2.475l.707-.707A4.5 4.5 0 0 1 10.025 8M7 4a.5.5 0 0 0-.812-.39L3.825 5.5H1.5A.5.5 0 0 0 1 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 7 12zM4.312 6.39 6 5.04v5.92L4.312 9.61A.5.5 0 0 0 4 9.5H2v-3h2a.5.5 0 0 0 .312-.11"/>
        </svg>);

let Details = ()=>{
    let {slug} = useParams();
    let movie = movies.find((movie)=>movie.slug == slug);

    let WatchlistHandler = ()=>{
        alert(`${movie.title} has been added to Watchlist`);
    }
    let [volume,setVolume] = useState(false);

    let volumeHandler = ()=>{
        return(
            setVolume((prev)=>!prev)
        )
    }

    let suggestions =  movies.filter((sugg)=>{
        return sugg.genre == movie.genre && sugg.imdb_rating >= movie.imdb_rating
    })
    return(
        <>
            <section className="bg-neutral-800">
                <div className="w-full h-80vh overflow-hidden relative bg-neutral-800 h-screen">
                    <ReactPlayer muted={volume} width="100vw" height="80vh" className="scale-125" playing loop={true} src={movie.youtube_trailer}></ReactPlayer>
                </div>
                <div className="absolute w-[400px] p-4 bottom-40 left-40">
                    <div className="bg-red-600 font-semibold w-fit text-neutral-300 px-3 py-1 rounded-sm text-sm">IMDB Ratings {movie.imdb_rating}</div>
                    <h1 className="font-black mb-2 text-neutral-400 text-4xl">{movie.title}</h1>
                    <p className="text-neutral-400 text-left">{movie.description}</p>
                    <button onClick={WatchlistHandler} className="bg-neutral-400 hover:cursor-pointer hover:bg-neutral-100 text-neutral-800 text-[16px] font-semibold px-4 py-1.5 mt-4 rounded-sm flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
                        </svg>
                        Add to Watchlist
                        </button>
                </div>
                <div className="absolute hover:cursor-pointer bottom-60 right-20 border rounded-full border-white p-2" onClick={volumeHandler}>{volume ? <MutedIcon/> : <UnmutedIcon/>}</div>
                <div className="w-full mx-auto px-12">
                    <h1 className="font-black text-5xl text-white">More Like These</h1>
                    <div className="flex gap-2 mt-4 flex-wrap">
                        {
                            suggestions.map((movie)=><MoviesCard slug={movie.slug} img={movie.img}/>)
                        }
                    </div>
                    <div className="mt-8 text-[18px] font-sans text-center text-neutral-400">All content belongs to its respective owners. If any copyrighted material needs to be removed, please contact us.</div>
                </div>
            </section>
        </>
    )
} 
export default Details;