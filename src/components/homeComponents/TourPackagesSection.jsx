import React, { useState, useEffect } from 'react';
import { Utensils, Mountain, Camera, Crown } from 'lucide-react';
import img1 from "../../assets/images/Buggy.jpg"
import img2 from "../../assets/images/memories.jpg"

const TourPackagesSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('tour-packages');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const perks = [
    {
      id: 1,
      title: "Flavors For All",
      description: "You're more than a customer; you're our guest, and your happiness is our top priority. That's why we offer a variety of food options, including vegan and non-vegan dishes, to ensure everyone can enjoy their meal. ",
      icon: Utensils,
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&h=400&fit=crop",
      delay: "0ms"
    },
    {
      id: 2,
      title: "Exciting Adventure",
      description: "Whether it's a morning safari, dune bashing, buggy racing, or camel rides, we've got every adventure you're looking for! And all with safety, as it's our top priority.",
      icon: Mountain,
      image: img1,
      delay: "150ms"
    },
    {
      id: 3,
      title: "Picture-Perfect Moments",
      description: "As you create real-life memories, we'll make sure every moment is captured. We've set up photo points at key locations to ensure you have the perfect pictures to look back on.",
      icon: Camera,
      image: img2,
      delay: "300ms"
    },
    {
      id: 4,
      title: "VIP Experience",
      description: "If you're looking to go beyond the usual travel, our VIP experiences are tailor-made for you. Our tours can be customized with exclusive perks, personalized services, and premium upgrades for a truly luxurious experience.",
      icon: Crown,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop",
      delay: "450ms"
    }
  ];

  return (
    <div id="tour-packages" className="mt-10 md:mt-20  px-6 md:px-12">
      <div className="w-full">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <h1 
            className={`text-3xl md:text-[40px] font-bold text-[#1CA8CB] mb-4 md:mb-6 transform transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Dubai Tour Packages
          </h1>
          <h2 
            className={`text-xl md:text-2xl font-semibold text-gray-800 mb-4 max-w-4xl mx-auto transform transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            See How Our Tours Packages In Dubai Make Your Trip Effortless & Exciting
          </h2>
          <p 
            className={`text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed transform transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            We're not just offering trips—we're crafting experiences. Our goal is simple: to make you and your travel partner feel stress-free and thrilled every step of the way. The only thing you have to worry about is securing your spot; leave the rest to us.
          </p>
        </div>

        {/* What Perks Section Title */}
        <div className="text-center mb-10 md:mb-14">
          <h3 
            className={`text-2xl md:text-3xl font-bold text-[#1CA8CB] mb-3 transform transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            What Perks Are Waiting for You?
          </h3>
          <p 
            className={`text-base md:text-lg text-gray-600 transform transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Here are all the incredible perks that await you during your journey:
          </p>
        </div>

        {/* Perks Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {perks.map((perk, index) => {
            const Icon = perk.icon;
            return (
              <div
                key={perk.id}
                className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: isVisible ? `calc(0ms + ${perk.delay})` : '0ms'
                }}
              >
                {/* Image Container */}
                <div className="relative overflow-hidden h-48 md:h-52">
                  <img
                    src={perk.image}
                    alt={perk.title}
                    className="w-full h-full object-cover "
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  
                  {/* Icon Badge */}
                  <div className="absolute top-4 right-4 bg-[#1CA8CB] p-3 rounded-full shadow-lg transform group-hover:rotate-12 transition-transform duration-300">
                    <Icon size={24} className="text-white" strokeWidth={2} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 md:p-6">
                  <h4 className="text-lg md:text-xl font-bold text-[#1CA8CB] mb-3 group-hover:text-[#1691B0] transition-colors duration-300">
                    {perk.title}
                  </h4>
                  <p className="text-gray-600 text-sm font-medium leading-relaxed">
                    {perk.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        
      </div>
    </div>
  );
};

export default TourPackagesSection;