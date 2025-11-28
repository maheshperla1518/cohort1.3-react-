import movies from "../MockData/moviesData";
import MoviesCard from "../Components/MoviesCard";
import { useState } from "react";

let Home = () => {
  let [popular, setPopular] = useState();

  let popularmovies = movies.filter((data) => {
    return data.imdb_rating > 8;
  });

  let popularHandler = () => {
    return setPopular((prev) => !prev);
  };

  return (
    <>
      <div>
        <div className="relative w-full h-screen overflow-hidden">
          <img
            className="w-full h-fit object-cover"
            src="https://assets.nflxext.com/ffe/siteui/vlv3/6fd9d446-cd78-453a-8c9c-417ed3e00422/web/IN-en-20251117-TRIFECTA-perspective_2fe4e381-977f-49fd-a7f4-1da0bcf09429_large.jpg"
            alt=""
          />
        </div>
        <div className="h-screen w-full object-cover bg-linear-to-b from-neutral-950 to-transparent-100 absolute top-18 bottom-0 left-0 right-0 z-1"></div>
      </div>

      {/* CARDS */}
      <div
        onClick={popularHandler}
        className="absolute flex gap-2 items-center rounded-full top-22 left-30 z-10"
      >
        <h2 className="text-neutral-400 hover:cursor-pointer text-sm border border-neutral-500 rounded-full px-4 py-2">
          {popular ? (
            <div className="w-[90vw] h-[90vh] flex flex-wrap mx-auto overflow-hidden justify-center gap-4 absolute top-10 bottom-0 right-0 left-0 z-2">
              {popularmovies.map((movie) => (
                <MoviesCard img={movie.img} key={movie.id} slug={movie.slug} />
              ))}
            </div>
          ) : (
            <div className="w-[90vw] h-[90vh] flex flex-wrap overflow-hidden mx-auto justify-center gap-4 absolute top-10 bottom-0 right-0 left-0 z-2">
              {movies.map((movie) => (
                <MoviesCard img={movie.img} key={movie.id} slug={movie.slug} />
              ))}
            </div>
          )}{" "}
          IMDb Top Movie's
        </h2>
      </div>
    </>
  );
};
export default Home;
