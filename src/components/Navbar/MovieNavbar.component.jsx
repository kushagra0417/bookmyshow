import React ,{ useContext }from "react";
import {BiChevronDown,BiMenu,BiSearch, BiShareAlt} from "react-icons/bi"

//context
import { MovieContext } from "../../context/movie.context";

const NavSm =()=>{
    const { movie } = useContext(MovieContext);
return (
    <>
    <div className="text-white flex items-center justify-between">
        <div>
             <h3 className="text-xl md:text-3xl font-bold"> 
             {movie.original_title}
             </h3>
            
        </div>
        <div className="w-8 h-8">
            <BiShareAlt className="w-full h-full"/>
        </div>
    </div>
    </>
)
}



const NavLg=()=>{
return (
    <>
    <div className="container mx-auto px-4 flex items-center justify-between"> 
        <div className="flex items-center justify-center w-1/2 gap-3" >
            <div className="w-12 h-12">
                <img src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png" alt="logo" className="w-full h-full"/>
            </div>
            <div className="w-full flex items-center gap-3 bg-white py-2 px-3 rounded-md">
        <BiSearch className="w-8 h-8"/>
        <input type="search" className="w-full bg-transparent border-none focus:outline-none" placeholder="Search for movies, events, Plays, Sports and Activities."/>
    </div>
        </div>
        <div className="flex items-center justify-center gap-3">
        <span className="text-gray-300 text-xs flex items-center cursor-pointer hover:text-white">
                 Varanasi<BiChevronDown/>
             </span>
             <button className="bg-red-600 text-white px-4 py-2 text-sm rounded">Sign in</button>
             <div className="w-8 h-8 text-white"><BiMenu className="w-full h-full"/></div>
        </div>
    </div>
    </>
)
}

const MovieNavbar = ()=>{
 return (
 <>
 <nav className="absolute inset-x-0 z-30 bg-opacity-10 backdrop-filter backdrop-blur-lg lg:relative lg:bg-bms-800 p-4">
     <div className="md:hidden">
    {/* mobile screen */}
    <NavSm/>
     </div>
    <div className="hidden md:block lg:hidden">
        {/* medium screen */}
        <NavSm/>
    </div>
    <div className="hidden lg:flex">
        {/* large  screen */}
        <NavLg/>
    </div>
 </nav>
 </>
 )
}


export default MovieNavbar;