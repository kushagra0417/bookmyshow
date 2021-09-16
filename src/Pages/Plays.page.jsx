import React,{useEffect,useState} from "react";
import axios from "axios";
//component
import Poster from "../components/Poster/Poster.component";
import PlaysFilters from "../components/PlaysFilters/PlaysFilters.component";
import HeroCarousal from "../components/HeroCarousal/HeroCarousal.component";
const Plays = () => {
  const [popularMovies,setPopularMovies]=useState([])
  useEffect(()=>{
    const requestPopularMovies=async ()=>{
        const getPopularMovies=await axios.get("/movie/popular");
       
        setPopularMovies(getPopularMovies.data.results);

    }
    requestPopularMovies();
  },[]);
  return (

    
    <>
    <div className="hidden lg:block">
          <HeroCarousal/>
    </div>
      <div className="container mx-auto px-4 lg:my-10 lg:px-36 ">
        <div className="w-full flex flex-col-reverse lg:flex lg:flex-row-reverse lg:gap-4">
          <div className="lg:w-3/4">
            <h2 className="text-2xl font-bold mb-4">Plays in Varanasi</h2>
            <div className="flex flex-wrap  ">

              {
                popularMovies.map((popularMovie)=>(
                  <div className="w-1/2 md:w-1/3 xl:w-1/4 my-3">
                  <Poster
                   {...popularMovie}
                  />
                </div>
                ))
              }
           
            
          </div>
          </div>
          

          <div className="lg:w-3/12 hidden lg:flex lg:flex-col"><h2 className="text-2xl font-bold mb-4">Filters</h2>
          <div> 
                    <PlaysFilters title="Date" tags={["Today","Tomorrow","This Weekend"]}/>
                    <PlaysFilters title="Language" tags={["Tamil","English","Hindi"]}/>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Plays;
