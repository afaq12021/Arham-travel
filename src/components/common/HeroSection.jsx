import { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaWhatsapp, FaPaperPlane } from 'react-icons/fa';
import img1 from "../../assets/images/dubai2.jpg";
import img2 from "../../assets/images/dubai1.jpg";
import img3 from "../../assets/images/dubai3.jpg";

//herosection
function HeroSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    tripPlan: '',
    persons: '',
    destination: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    pauseOnHover: false,
    arrows: false,
  };

  // Images for the slider
  const slides = [
    {
      image: img1,
      alt: 'Dubai Skyline'
    },
    {
      image: img2,
      alt: 'Desert Safari'
    },
    {
      image: img3,
      alt: 'Dubai Marina'
    }
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0 z-0">
        <Slider {...sliderSettings}>
          {slides.map((slide, index) => (
            <div key={index} className="relative h-screen">
              <div className="absolute inset-0 bg-black/40 z-10"></div>
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Left Content - 60% */}
            <div className="text-white space-y-5 animate-fadeIn lg:w-[70%]">
              <h1 className="text-4xl sm:text-4xl lg:text-5xl xl:text-[55px] font-bold leading-tight">
                Discover <span className="text-[#1CA8CB]">Destinations</span> and Unique Adventures with Arham Travels
              </h1>
              <p className="text-base sm:text-lg lg:text-lg max-w-3xl leading-relaxed">
                Planning for a safe tour in Dubai? Arham Travels is right here with you — not just online, but on the ground. From desert safari Dubai adventures to private yacht escapes and sightseeing, we make sure every experience is smooth, secure, and full of joy.
              </p>
              <button className="bg-[#1CA8CB] text-white px-6 sm:px-8 py-2 sm:py-4 rounded-full flex items-center gap-3 text-base sm:text-lg font-semibold hover:bg-[#1691B0] transition-all duration-300 transform hover:scale-105 shadow-lg">
                Book Now
                <FaWhatsapp size={24} />
              </button>
            </div>

            {/* Right Booking Form - 40% */}
            <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-6 lg:p-6 w-full lg:w-[30%]">
              <h3 className="text-xl sm:text-xl font-bold text-[#1CA8CB] mb-2">
                BOOK A TRIP
              </h3>
              <p className="text-gray-600 mb-4">
                Ready to go? Fill out the form below!
              </p>

              <div onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-2 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1CA8CB] focus:border-transparent transition-all"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-2 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1CA8CB] focus:border-transparent transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="date"
                    name="date"
                    placeholder="Date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="w-full px-2 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1CA8CB] focus:border-transparent transition-all"
                  />
                  <input
                    type="time"
                    name="time"
                    placeholder="Time"
                    value={formData.time}
                    onChange={handleInputChange}
                    className="w-full px-2 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1CA8CB] focus:border-transparent transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <select
                    name="tripPlan"
                    value={formData.tripPlan}
                    onChange={handleInputChange}
                    className="w-full px-2 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1CA8CB] focus:border-transparent transition-all bg-white"
                  >
                    <option value="">Trip Plan</option>
                    <option value="city-tour">City Tour</option>
                    <option value="desert-safari">Desert Safari</option>
                    <option value="dinner-cruise">Dinner Cruise</option>
                    <option value="yacht-rental">Yacht Rental</option>
                  </select>
                  <input
                    type="number"
                    name="persons"
                    placeholder="No of Persons"
                    value={formData.persons}
                    onChange={handleInputChange}
                    className="w-full px-2 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1CA8CB] focus:border-transparent transition-all"
                    min="1"
                  />
                </div>

                <input
                  type="text"
                  name="destination"
                  placeholder="City / Destination"
                  value={formData.destination}
                  onChange={handleInputChange}
                  className="w-full px-2 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1CA8CB] focus:border-transparent transition-all"
                />

                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="3"
                  className="w-full px-2 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1CA8CB] focus:border-transparent transition-all resize-none"
                ></textarea>

                <button
                  type="button"
                  onClick={handleSubmit}
                  className="w-full bg-[#1CA8CB] hover:bg-[#1691B0] text-white px-4 py-2 rounded-lg font-medium text-lg flex items-center justify-center gap-3 transition-all duration-300 transform hover:scale-[1.02] shadow-lg"
                >
                  BOOK NOW
                  <FaPaperPlane size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }

        /* Custom slider dots styling */
        :global(.slick-dots) {
          bottom: 30px;
        }

        :global(.slick-dots li button:before) {
          font-size: 12px;
          color: white;
          opacity: 0.5;
        }

        :global(.slick-dots li.slick-active button:before) {
          color: #1CA8CB;
          opacity: 1;
        }
      `}</style>
    </div>
  );
}

export default HeroSection;