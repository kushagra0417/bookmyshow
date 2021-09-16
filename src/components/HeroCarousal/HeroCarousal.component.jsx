import React, {useEffect,useState} from "react";
import Slider from "react-slick";
import axios from "axios";



import { NextArrow, PrevArrow } from "./Arrows.Component";
const HeroCarousal = () => {
    const [images,setImages]=useState([]);

    useEffect(()=>{
         //async
         const requestNowPlayingMovies= async ()=>{
             const getImages=await axios.get("/movie/now_playing");
             setImages(getImages.data.results);
         };
         requestNowPlayingMovies();
    },[])

    const settingsLG = {
        arrows: true,
        autoplay: true,
        centerMode: true,
        dots:true,
        centerPadding: "300px",
        slidesToShow: 1,
        infinite: true,
        slideToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };
    const settings = {
        arrows: true,
        slidesToShow: 1,
        infinite: true,
        speed: 500,
        slideToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };
  
  return (
    <>
    <div className="lg:hidden">
                <Slider {...settings}>
                    {images.map((image) => (
                        <div className="w-full h-56 md:h-80 py-3">
                            <img
                                src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
                                alt="Hero Banner"
                                className="w-full h-full rounded-md object-center "
                            />
                        </div>
                    ))}
                </Slider>
            </div>
            <div className="hidden lg:block">
                <Slider {...settingsLG}>
                    {images.map((image) => (
                        <div className="w-full h-96 px-2 py-3">
                            <img
                                src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
                                alt="Hero Banner"
                                className="w-full h-full rounded-md object-center "
                            />
                        </div>
                    ))}
                </Slider>
            </div>
    </>  
  );
};

export default HeroCarousal;
