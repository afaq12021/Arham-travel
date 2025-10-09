import React, { useState, useEffect } from 'react';
import { Award, MousePointerClick, Shield, Headphones } from 'lucide-react';

const FeaturesSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      id: 1,
      title: "#1 Rated Touring Company",
      icon: Award,
      delay: "0ms"
    },
    {
      id: 2,
      title: "Seamless Booking Experience",
      icon: MousePointerClick,
      delay: "200ms"
    },
    {
      id: 3,
      title: "Premium Service & Safety",
      icon: Shield,
      delay: "400ms"
    },
    {
      id: 4,
      title: "24/7 Customer Service",
      icon: Headphones,
      delay: "600ms"
    }
  ];

  return (
    <div className="md:mt-10 mt-5 py-16 px-6 md:px-10 bg-gradient-to-br from-[#E6F8FC] to-[#B3E9F5]">
      <div className="w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: isVisible ? feature.delay : '0ms'
                }}
              >
                {/* Icon Container */}
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 bg-[#1CA8CB] rounded-full flex items-center justify-center shadow-lg transform transition-transform duration-300 hover:rotate-12 hover:scale-110">
                    <Icon size={40} className="text-white" strokeWidth={2} />
                  </div>
                </div>

                {/* Title with Animation */}
                <h3 
                  className={`text-center text-[#1CA8CB] font-bold text-lg md:text-xl leading-tight transition-all duration-700 ${
                    isVisible ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{
                    transitionDelay: isVisible ? `calc(${feature.delay} + 300ms)` : '0ms'
                  }}
                >
                  {feature.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;