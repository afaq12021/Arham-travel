// import React, { useState, useEffect } from 'react';
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const FamousCategories = () => {
    
//     const attractions = [
//         {
//             id: 1,
//             name: "Explore Desert",
//             image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop",
          
//         },
//         {
//             id: 2,
//             name: "Dubai City",
//             image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&h=300&fit=crop",
//         },
//         {
//             id: 3,
//             name: "Camel Ride",
//             image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop",
//         },
//         {
//             id: 6,
//             name: "Eiffel Tower",
//             image: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=400&h=300&fit=crop",
//             location: "Champ de Mars, Paris",
//         },
//         {
//             id: 7,
//             name: "Desert Safari",
//             image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=400&h=300&fit=crop",
//         },
//         {
//             id: 8,
//             name: "Buggy Racing",
//             image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=400&h=300&fit=crop",
//         },
       
//     ];


//     const sliderRef = React.useRef(null);

//     const sliderSettings = {
//         dots: false,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 4,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 3000,
//         pauseOnHover: true,
//         beforeChange: (current, next) => {
//             setCurrentSlide(next);
//         },
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 1,
//                     beforeChange: (current, next) => {
//                         setCurrentSlide(next);
//                     }
//                 }
//             },
//             {
//                 breakpoint: 640,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                     beforeChange: (current, next) => {
//                         setCurrentSlide(next);
//                     }
//                 }
//             }
//         ]
//     };

   

//     return (
//         <div className="min-h-screen py-8 px-4">
//             <div className="max-w-7xl mx-auto">
//                 {/* Header Section */}
//                 <div className="text-center mb-14">
//                     <h1 className="text-3xl md:text-[40px] font-semibold mb-6 text-[#1CA8CB]">
//                         Famous Categories
//                     </h1>
//                     <h1 className='text-[#1CA8CB] font-semibold text-xl'>Here's What We Have For You</h1>
//                 </div>

//                 {/* Carousel Section */}
//                 <div className="relative">
//                     <Slider ref={sliderRef} {...sliderSettings}>
//                         {attractions.map((attraction) => (
//                             <div key={attraction.id} className="px-4">
//                                 <div className="group relative bg-white rounded-3xl  overflow-hidden border border-[#1CA8CB]">
//                                     {/* Image Container */}
//                                     <div className="relative overflow-hidden rounded-t-3xl">
//                                         <img
//                                             src={attraction.image}
//                                             alt={attraction.name}
//                                             className="w-full h-56 object-cover "
//                                         />
//                                         {/* Gradient Overlay */}
//                                         <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
//                                     </div>

//                                     {/* Content */}
//                                     <div className="p-4">
//                                         <h3 className="text-xl font-bold text-[#1CA8CB] mb-2">
//                                             {attraction.name}
//                                         </h3>

//                                         <p className='text-gray-500 text-md'>Perfect for those with an adventures spirit, you can hop on exhilarating ride through the dunes</p>

                                      

//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </Slider>
//                 </div>

              
//             </div>
//         </div>
//     );
// };

// export default FamousCategories;


// import React, { useState, useRef } from 'react';
// import Slider from "react-slick";
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import img1 from "../../assets/images/Buggy.jpg"
// import img2 from "../../assets/images/DesertSafari.jpg"
// import img3 from "../../assets/images/DesertCamel.jpg"

// const FamousCategories = () => {
//     const [currentSlide, setCurrentSlide] = useState(0);
    
//     const attractions = [
//         {
//             id: 1,
//             name: "EXPLORE DESERT",
//             image: "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?w=400&h=300&fit=crop",
//             description: "Experience the vast beauty of golden sand dunes and breathtaking desert landscapes."
//         },
//         {
//             id: 2,
//             name: "DUBAI CITY",
//             image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&h=300&fit=crop",
//             description: "Discover the modern marvels of Dubai with stunning skyscrapers, luxury shopping, and world-class attractions."
//         },
//         {
//             id: 3,
//             name: "CAMEL RIDE",
//             image: img3,
//             description: "Take a traditional camel ride through the desert and experience authentic Arabian culture and heritage."
//         },
     
//         {
//             id: 5,
//             name: "DESER SAFARI",
//             image: img2,
//             description: "Embark on an exciting desert safari adventure with dune bashing, cultural shows, and traditional cuisine."
//         },
//         {
//             id: 6,
//             name: "BUGGY RACING",
//             image:img1,
//             description: "Perfect for those with an adventurous spirit, hop on an exhilarating ride through the dunes at high speed."
//         },
//     ];

//     const sliderRef = useRef(null);

//     const sliderSettings = {
//         dots: false,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 4,
//         slidesToScroll: 1,
//         autoplay: false,
//         autoplaySpeed: 3000,
//         pauseOnHover: true,
//         arrows: false,
//         beforeChange: (current, next) => {
//             setCurrentSlide(next);
//         },
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 1,
//                 }
//             },
//             {
//                 breakpoint: 640,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                 }
//             }
//         ]
//     };

//     const goToPrev = () => {
//         sliderRef.current?.slickPrev();
//     };

//     const goToNext = () => {
//         sliderRef.current?.slickNext();
//     };

//     return (
//         <div className="min-h-screen md:py-8 py-4 md:px-8 px-3">
//             <div className="w-full">
//                 {/* Header Section */}
//                 <div className="text-center md:mb-14 mb-7">
//                     <h1 className="text-3xl md:text-[40px] font-semibold md:mb-6 mb-4 text-[#1CA8CB]">
//                         Famous Categories
//                     </h1>
//                     <h1 className='text-[#1CA8CB] font-semibold text-xl'>Here's What We Have For You</h1>
//                 </div>

//                 {/* Carousel Section */}
//                 <div className="relative md:px-10 px-6">
//                     {/* Previous Arrow */}
//                     <button
//                         onClick={goToPrev}
//                         className="absolute left-0 top-1/2 "
//                         aria-label="Previous slide"
//                     >
//                         <ChevronLeft size={36} color='#1CA8CB'/>
//                     </button>

//                     {/* Next Arrow */}
//                     <button
//                         onClick={goToNext}
//                         className="absolute right-0 top-1/2 "
//                         aria-label="Next slide"
//                     >
//                         <ChevronRight size={32} color='#1CA8CB' />
//                     </button>

//                     <Slider ref={sliderRef} {...sliderSettings}>
//                         {attractions.map((attraction) => (
//                             <div key={attraction.id} className="px-4">
//                                 <div className="group relative bg-white rounded-2xl overflow-hidden shadow">
//                                     {/* Image Container */}
//                                     <div className="relative overflow-hidden rounded-t-2xl">
//                                         <img
//                                             src={attraction.image}
//                                             alt={attraction.name}
//                                             className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-500"
//                                         />
//                                         {/* Gradient Overlay */}
//                                         <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
//                                     </div>

//                                     {/* Content */}
//                                     <div className="p-4">
//                                         <h3 className="text-xl font-bold text-[#1CA8CB] mb-2 text-center">
//                                             {attraction.name}
//                                         </h3>
//                                         <p className='text-gray-500 text-md font-medium leading-relaxed text-center '>
//                                             {attraction.description}
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </Slider>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default FamousCategories;










import React, { useState, useRef, useEffect } from 'react';
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../assets/images/Buggy.jpg"
import img2 from "../../assets/images/DesertSafari.jpg"
import img3 from "../../assets/images/DesertCamel.jpg"


const FamousCategories = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [slidesToShow, setSlidesToShow] = useState(4);
    
       
    const attractions = [
        {
            id: 1,
            name: "EXPLORE DESERT",
            image: "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?w=400&h=300&fit=crop",
            description: "Experience the vast beauty of golden sand dunes and breathtaking desert landscapes."
        },
        {
            id: 2,
            name: "DUBAI CITY",
            image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&h=300&fit=crop",
            description: "Discover the modern marvels of Dubai with stunning skyscrapers, luxury shopping, and world-class attractions."
        },
        {
            id: 3,
            name: "CAMEL RIDE",
            image: img3,
            description: "Take a traditional camel ride through the desert and experience authentic Arabian culture and heritage."
        },
     
        {
            id: 5,
            name: "DESER SAFARI",
            image: img2,
            description: "Embark on an exciting desert safari adventure with dune bashing, cultural shows, and traditional cuisine."
        },
        {
            id: 6,
            name: "BUGGY RACING",
            image:img1,
            description: "Perfect for those with an adventurous spirit, hop on an exhilarating ride through the dunes at high speed."
        },
    ];

    const sliderRef = useRef(null);

    // Update slides to show based on screen size
    useEffect(() => {
        const updateSlidesToShow = () => {
            if (window.innerWidth >= 1024) {
                setSlidesToShow(4);
            } else if (window.innerWidth >= 640) {
                setSlidesToShow(2);
            } else {
                setSlidesToShow(1);
            }
        };

        updateSlidesToShow();
        window.addEventListener('resize', updateSlidesToShow);
        return () => window.removeEventListener('resize', updateSlidesToShow);
    }, []);

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        arrows: false,
        beforeChange: (current, next) => {
            setCurrentSlide(next);
        },
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    const goToPrev = () => {
        sliderRef.current?.slickPrev();
    };

    const goToNext = () => {
        sliderRef.current?.slickNext();
    };

    return (
        <div className="min-h-screen md:py-8 py-4 px-3 md:px-8">
            <div className="w-full max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-7 md:mb-14">
                    <h1 className="text-3xl md:text-[40px] font-semibold mb-4 md:mb-6 text-[#1CA8CB]">
                        Famous Categories
                    </h1>
                    <h1 className='text-[#1CA8CB] font-semibold text-xl'>Here's What We Have For You</h1>
                </div>

                {/* Carousel Section */}
                <div className="relative">
                    {/* Previous Arrow */}
                    <button
                        onClick={goToPrev}
                        className="absolute -left-2 md:left-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-50 rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft size={28} color='#1CA8CB'/>
                    </button>

                    {/* Next Arrow */}
                    <button
                        onClick={goToNext}
                        className="absolute -right-2 md:right-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-50 rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110"
                        aria-label="Next slide"
                    >
                        <ChevronRight size={28} color='#1CA8CB' />
                    </button>

                    {/* Slider Container */}
                    <div className="px-10 md:px-12">
                        <Slider ref={sliderRef} {...sliderSettings}>
                            {attractions.map((attraction) => (
                                <div key={attraction.id} className="outline-none">
                                    <div className="px-3 md:px-4">
                                        <div className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                                            {/* Image Container */}
                                            <div className="relative overflow-hidden rounded-t-2xl">
                                                <img
                                                    src={attraction.image}
                                                    alt={attraction.name}
                                                    className="w-full h-48 md:h-52 object-cover group-hover:scale-110 transition-transform duration-500"
                                                />
                                                {/* Gradient Overlay */}
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                                            </div>

                                            {/* Content */}
                                            <div className="p-4">
                                                <h3 className="text-lg md:text-xl font-bold text-[#1CA8CB] mb-2 text-center">
                                                    {attraction.name}
                                                </h3>
                                                <p className='text-gray-500 text-md font-medium leading-relaxed text-center'>
                                                    {attraction.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FamousCategories;