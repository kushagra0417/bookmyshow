const settings={

    infinity: false,
    autoplay: false,
    slidesToShow: 6,
    slidesToScroll: 2,
    InitialSlide: 0,
    responsive: [
        {
            breakpoint: 1280,
            settings: {
              slidesToShow:5,
              slidesToScroll: 2,
              infinite: true,
            },
          }, 
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          arrows:false,
          slidesToShow: 3,
          slidesToScroll: 1,
          InitialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows:false,
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
}


export default settings;