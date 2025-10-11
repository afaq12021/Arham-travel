import React, { useState, useRef, useEffect } from 'react';
import Slider from "react-slick";
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const GoogleReviews = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [slidesToShow, setSlidesToShow] = useState(4);

    const reviews = [
        {
            id: 1,
            name: "Racquelle jae",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
            date: "February 11",
            rating: 5,
            text: "Hiring Feedback Wrench has been one of the greatest investments I have made",
            platform: "Google"
        },
        {
            id: 2,
            name: "Rita Nwokeji",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
            date: "March 11, 2021",
            rating: 5,
            text: "Rob helped me identify the next steps for my accounting practice quickly. Thanks alot",
            platform: "Google"
        },
        {
            id: 3,
            name: "Mike Stilwell",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
            date: "March 11, 2018",
            rating: 5,
            text: "Met with Rob as he helped me navigate some long term strategies as I operated",
            platform: "Google"
        },
        {
            id: 4,
            name: "Sarah Johnson",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
            date: "January 15, 2021",
            rating: 5,
            text: "Excellent service! The team was professional and helped us achieve our goals.",
            platform: "Google"
        },
        {
            id: 5,
            name: "David Chen",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
            date: "April 20, 2021",
            rating: 5,
            text: "Outstanding experience from start to finish. Highly recommend their services!",
            platform: "Google"
        }
    ];

    const sliderRef = useRef(null);
useEffect(() => {
    const updateSlidesToShow = () => {
        if (window.innerWidth >= 1280) {
            setSlidesToShow(4); // ✅ Show 4 slides on large screens
        } else if (window.innerWidth >= 1024) {
            setSlidesToShow(3); // 3 on medium/desktop
        } else if (window.innerWidth >= 640) {
            setSlidesToShow(2); // 2 on tablet
        } else {
            setSlidesToShow(1); // 1 on mobile
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
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: false,
    beforeChange: (current, next) => setCurrentSlide(next),
    responsive: [
        {
            breakpoint: 1280, // below 1280px → 3 slides
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 1024, // below 1024px → 2 slides
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 640, // below 640px → 1 slide
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};

    const goToPrev = () => {
        sliderRef.current?.slickPrev();
    };

    const goToNext = () => {
        sliderRef.current?.slickNext();
    };

    const renderStars = (rating) => {
        return [...Array(5)].map((_, index) => (
            <Star
                key={index}
                size={18}
                className={index < rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-300 text-gray-300"}
            />
        ));
    };

    return (
        <div className="md:mt-24 mt-10  px-3 md:px-8">
            <div className="w-full">
                {/* Header Section */}
                <div className="text-center mb-8 md:mb-12">
                    <h1 className="text-3xl md:text-[40px] font-bold mb-3 md:mb-4 text-[#1CA8CB]">
                        The Trust We've Earned
                    </h1>
                    <h2 className='text-gray-800 font-semibold text-lg md:text-xl'>
                        Google Reviews
                    </h2>
                </div>

                {/* Google Rating Box */}
                <div className="max-w-4xl mx-auto mb-8 md:mb-12 bg-white rounded-2xl shadow-md p-4 md:p-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-6">
                            <div className="flex items-center gap-3">
                                <svg className="w-24 h-8" viewBox="0 0 272 92" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="#EA4335" d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"/>
                                    <path fill="#FBBC05" d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"/>
                                    <path fill="#4285F4" d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z"/>
                                    <path fill="#34A853" d="M225 3v65h-9.5V3h9.5z"/>
                                    <path fill="#EA4335" d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z"/>
                                    <path fill="#4285F4" d="M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49.01z"/>
                                </svg>
                                <span className="text-gray-700 font-medium">Rating</span>
                            </div>
                            <div className="flex flex-col items-center md:items-start">
                                <div className="text-3xl md:text-5xl font-bold text-gray-900">5.0</div>
                                <div className="flex gap-1 mt-1">
                                    {renderStars(5)}
                                </div>
                                <div className="text-sm text-gray-500 mt-1">86 reviews</div>
                            </div>
                        </div>
                        <button className="bg-[#1CA8CB] hover:bg-[#1691B0] text-white font-medium md:px-6 px-4 md:py-3 py-2 rounded-lg transition-colors duration-300 ">
                            Write a Review
                        </button>
                    </div>
                </div>

                {/* Carousel Section */}
                <div className="relative">
                    {/* Previous Arrow */}
                    <button
                        onClick={goToPrev}
                        className="absolute -left-2 md:left-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-50 rounded-full md:p-2 p-[5px] shadow-lg transition-all duration-300 hover:scale-110"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft size={28} color='#1CA8CB'/>
                    </button>

                    {/* Next Arrow */}
                    <button
                        onClick={goToNext}
                        className="absolute -right-2 md:right-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-50 rounded-full md:p-2 p-[5px] shadow-lg transition-all duration-300 hover:scale-110"
                        aria-label="Next slide"
                    >
                        <ChevronRight size={28} color='#1CA8CB' />
                    </button>

                    {/* Slider Container */}
                    <div className="px-8 md:px-12">
                        <Slider ref={sliderRef} {...sliderSettings}>
                            {reviews.map((review) => (
                                <div key={review.id} className="outline-none">
                                    <div className="px-3 md:px-4">
                                        <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 p-5 md:p-6 h-full">
                                            {/* Header with Profile */}
                                            <div className="flex items-start gap-4 mb-4">
                                                <img
                                                    src={review.image}
                                                    alt={review.name}
                                                    className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover"
                                                />
                                                <div className="flex-1">
                                                    <h3 className="text-base md:text-lg font-semibold text-gray-900">
                                                        {review.name}
                                                    </h3>
                                                    <div className="flex gap-1 my-1">
                                                        {renderStars(review.rating)}
                                                    </div>
                                                    <p className="text-sm text-gray-500">{review.date}</p>
                                                </div>
                                            </div>

                                            {/* Review Text */}
                                            <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
                                                {review.text}
                                            </p>

                                            {/* Read More Link */}
                                            <button className="text-[#1CA8CB] hover:underline text-sm font-medium">
                                                Read more
                                            </button>

                                            {/* Posted on Platform */}
                                            <div className="flex items-center gap-2 mt-4 pt-4 border-t border-gray-100">
                                                <svg className="w-16 h-5" viewBox="0 0 272 92" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill="#EA4335" d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"/>
                                                    <path fill="#FBBC05" d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"/>
                                                    <path fill="#4285F4" d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z"/>
                                                    <path fill="#34A853" d="M225 3v65h-9.5V3h9.5z"/>
                                                    <path fill="#EA4335" d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z"/>
                                                    <path fill="#4285F4" d="M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49.01z"/>
                                                </svg>
                                                <span className="text-xs text-gray-500">Posted on <span className="text-[#4285F4] font-medium">Google</span></span>
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

export default GoogleReviews;