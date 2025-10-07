import React, { useState } from 'react';
import { Star, Clock, MapPin, Phone, ArrowRight } from 'lucide-react';
import img1 from "../../assets/images/DesertSafari.jpg";
import img2 from "../../assets/images/morningdesert2.jpg";
import img3 from "../../assets/images/buggy1.jpg";
import img4 from "../../assets/images/dubai6.jpg";
import img5 from "../../assets/images/dubai5.jpg";
import img6 from "../../assets/images/dubaiBuggy.jpg";
import img7 from "../../assets/images/privatesetup.jpg";
import img8 from "../../assets/images/dubaicitytour.jpg";
import img9 from "../../assets/images/abudhabi.jpg";
import img10 from "../../assets/images/yatch.jpg";
import img11 from "../../assets/images/attractiveticket.jpg";

//poplular packages
const PopularPackages = () => {
    const packages = [
        {
            id: 1,
            name: "Morning Desert Safari",
            image: img1,
            rating: 5,
            time: "2:30 PM",
            location: "Dubai",
            category: "Popular",
           
        },
        {
            id: 2,
            name: "Evening Desert Safari",
            image: img2,
            rating: 5,
            time: "3:00 PM",
            location: "Dubai",
            category: "Popular",
        },
        {
            id: 3,
            name: "Private Desert Safari",
            image: img4,
            rating: 4,
            time: "4:00 PM",
            location: "Dubai",
            category: "Popular",
        },
        {
            id: 4,
            name: "Quad Bike Desert Safari",
            image: img3,
            rating: 5,
            time: "3:30 PM",
            location: "Dubai",
            category: "Popular",
        },
        {
            id: 5,
            name: "Dune buggy ride",
            image: img6,
            rating: 5,
            time: "9:00 AM",
            location: "Dubai",
            category: "Popular",
        },
        {
            id: 6,
            name: "Safari + private setup",
            image: img7,
            rating: 5,
            time: "6:00 AM",
            location: "Dubai",
            category: "Popular",

        },
        {
            id: 7,
            name: "Dubai city tour",
            image: img8,
            rating: 4,
            time: "5:00 PM",
            location: "Dubai",
            category: "Popular",
        },
        {
            id: 8,
            name: "Abu Dhabi City Tour",
            image: img9,
            rating: 5,
            time: "7:00 AM",
            location: "Dubai",
            category: "Popular",
        },
        {
            id: 9,
            name: "Dinner Cruise (Five Star)",
            image: img10,
            rating: 4,
            time: "5:00 PM",
            location: "Dubai",
            category: "Popular",
        },
        {
            id: 10,
            name: "Tour attraction tickets",
            image: img11,
            rating: 5,
            time: "7:00 AM",
            location: "Dubai",
            category: "Popular",
        }
    ];

    const renderStars = (rating) => {
        return Array(5).fill(0).map((_, index) => (
            <Star
                key={index}
                size={16}
                fill={index < rating ? "#1CA8CB" : "none"}
                stroke={index < rating ? "#1CA8CB" : "#D1D5DB"}
                strokeWidth={2}
            />
        ));
    };

    return (
        <div className="md:py-16 py-12 md:px-8 px-4">
            <div className="w-full">
                {/* Header Section */}
                <div className="text-center md:mb-14 mb-7">
                    <h1 className="text-3xl md:text-[40px] font-semibold md:mb-6 mb-4 text-[#1CA8CB]">
                        Popular Packages
                    </h1>
                </div>

                {/* Grid Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10 md:px-4">
                    {packages.map((pkg) => (
                        <div 
                            key={pkg.id} 
                            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                        >
                            {/* Image Container */}
                            <div className="relative overflow-hidden">
                                <img
                                    src={pkg.image}
                                    alt={pkg.name}
                                    className="w-full h-56 object-cover hover:scale-110 transition-transform duration-500"
                                />
                                {/* Category Badge */}
                                <div className="absolute top-4 left-0 bg-[#1CA8CB] text-white px-4 py-1 text-sm font-medium">
                                    — {pkg.category}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-5">
                                {/* Package Name */}
                                <h3 className="text-xl font-bold text-[#1CA8CB] mb-3">
                                    {pkg.name}
                                </h3>

                                {/* Rating, Time, Location */}
                                <div className="flex items-center justify-between mb-4 text-sm">
                                    <div className="flex items-center gap-1">
                                        {renderStars(pkg.rating)}
                                    </div>
                                    <div className="flex items-center gap-1 text-gray-600 font-medium">
                                        <Clock size={16} className="text-[#1CA8CB]" />
                                        <span>{pkg.time}</span>
                                    </div>
                                    <div className="flex items-center gap-1 text-gray-600 font-medium">
                                        <MapPin size={16} className="text-[#1CA8CB]" />
                                        <span>{pkg.location}</span>
                                    </div>
                                </div>

                             
                                {/* Action Buttons */}
                                <div className="flex gap-3">
                                    <button className="flex-1 bg-[#1CA8CB] hover:bg-[#1691B0] text-white font-semibold py-3 px-2 rounded-full transition-colors duration-300 flex items-center justify-center gap-2 text-sm">
                                        <Phone size={16} />
                                        Call US
                                    </button>
                                    <button className="flex-1 bg-[#1CA8CB] hover:bg-[#1691B0] text-white font-semibold py-3 px-2 rounded-full transition-colors duration-300 flex items-center justify-center gap-2 text-sm">
                                        Book Now
                                        <ArrowRight size={16} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PopularPackages;