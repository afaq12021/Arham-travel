// import React, { useState, useEffect } from 'react';
// import { MessageCircle, Phone, Sparkles } from 'lucide-react';
// import img1 from "../../assets/images/dubaiBuggy.jpg";

// const CTASection = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   return (
//     <div className="relative mt-20 py-10 md:py-16 px-4 md:px-8 overflow-hidden">
//       {/* Background Image with Overlay */}
//       <div 
//         className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//         style={{
//              backgroundImage: `url(${img1})`,

//         }}
//       >
//         <div className="absolute inset-0 bg-gradient-to-br from-[#1CA8CB]/95 via-[#1CA8CB]/90 to-[#0D7A94]/95"></div>
//       </div>

//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-20 right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
//         <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
//       </div>

//       {/* Content */}
//       <div className="relative z-10 max-w-5xl mx-auto text-center">
//         {/* Icon with Animation */}
//         <div 
//           className={`flex justify-center mb-6 transform transition-all duration-1000 ${
//             isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-50 -translate-y-10'
//           }`}
//         >
//           <div className="relative">
//             <Sparkles size={48} className="text-yellow-300 animate-pulse" />
//             <Sparkles size={24} className="text-yellow-200 absolute -top-2 -right-2 animate-ping" />
//           </div>
//         </div>

//         {/* Main Heading */}
//         <h2 
//           className={`text-4xl md:text-5xl font-bold text-white mb-4 transform transition-all duration-1000 delay-200 ${
//             isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
//           }`}
//         >
//           Ready For Thrills?
//         </h2>

//         {/* Subheading */}
//         <h3 
//           className={`text-3xl md:text-5xl font-bold text-white/95 mb-6 transform transition-all duration-1000 delay-300 ${
//             isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
//           }`}
//         >
//           Get Ready For The Ultimate Ride!
//         </h3>

//         {/* Description */}
//         <p 
//           className={`text-xl md:text-2xl text-white/90 mb-10 font-medium transform transition-all duration-1000 delay-400 ${
//             isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
//           }`}
//         >
//           Secure Your Safari Spot Today!
//         </p>

//         {/* Buttons */}
//         <div 
//           className={`flex flex-col sm:flex-row gap-5 justify-center items-center transform transition-all duration-1000 delay-500 ${
//             isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
//           }`}
//         >
//           {/* WhatsApp Button */}
//           <button className="group bg-white text-[#1CA8CB] px-8 py-4 rounded-full font-bold text-lg flex items-center gap-3 hover:bg-[#1CA8CB] hover:text-white transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 min-w-[240px] justify-center">
//             <MessageCircle 
//               size={24} 
//               className="group-hover:animate-bounce" 
//             />
//             <span>Book On WhatsApp</span>
//           </button>

//           {/* Call Now Button */}
//           <button className="group bg-white text-[#1CA8CB] px-8 py-4 rounded-full font-bold text-lg flex items-center gap-3 hover:bg-[#1CA8CB] hover:text-white transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 min-w-[240px] justify-center">
//             <Phone 
//               size={24} 
//               className="group-hover:animate-pulse" 
//             />
//             <span>Call Now</span>
//           </button>
//         </div>

//         {/* Decorative Line */}
//         <div 
//           className={`mt-12 flex justify-center transform transition-all duration-1000 delay-700 ${
//             isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
//           }`}
//         >
//           <div className="h-1 w-32 bg-gradient-to-r from-transparent via-white to-transparent rounded-full"></div>
//         </div>

//         {/* Additional Info */}
//         <p 
//           className={`mt-8 text-white/80 text-sm md:text-base transform transition-all duration-1000 delay-800 ${
//             isVisible ? 'opacity-100' : 'opacity-0'
//           }`}
//         >
//           🌟 Limited Spots Available | Best Price Guaranteed | Instant Confirmation
//         </p>
//       </div>

//       {/* Floating Elements */}
//       <div className="absolute top-1/4 left-5 md:left-10 animate-bounce" style={{ animationDuration: '3s' }}>
//         <div className="w-3 h-3 bg-yellow-300 rounded-full"></div>
//       </div>
//       <div className="absolute top-1/3 right-5 md:right-10 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
//         <div className="w-4 h-4 bg-white/50 rounded-full"></div>
//       </div>
//       <div className="absolute bottom-1/4 left-1/4 animate-bounce" style={{ animationDuration: '5s', animationDelay: '2s' }}>
//         <div className="w-2 h-2 bg-yellow-200 rounded-full"></div>
//       </div>
//     </div>
//   );
// };

// export default CTASection;



import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, Sparkles,Plane } from 'lucide-react';
import img1 from "../../assets/images/dubaiBuggy.jpg";

const CTASection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="md:mt-20 mt-10 relative py-10 md:py-16 px-4 md:px-8 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
        backgroundImage: `url(${img1})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#1CA8CB]/95 via-[#1CA8CB]/90 to-[#0D7A94]/95"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Icon with Animation */}
        <div 
          className={`flex justify-center mb-6 transform transition-all duration-1000 ${
            isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-50 -translate-y-10'
          }`}
        >
          <div className="relative">
            <Plane size={48} className="text-yellow-300 animate-pulse" />
            <Plane size={24} className="text-yellow-200 absolute -top-2 -right-2 animate-ping" />
          </div>
        </div>

        {/* Main Heading */}
        <h2 
          className={`text-4xl md:text-5xl font-bold text-white mb-4 transform transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Ready For Thrills?
        </h2>

        {/* Subheading */}
        <h3 
          className={`text-3xl md:text-5xl font-bold text-white/95 mb-6 transform transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Get Ready For The Ultimate Ride!
        </h3>

        {/* Description */}
        <p 
          className={`text-xl md:text-2xl text-white/90 mb-10 font-medium transform transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Secure Your Safari Spot Today!
        </p>

        {/* Buttons */}
        <div 
          className={`flex flex-col sm:flex-row gap-5 justify-center items-center transform transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* WhatsApp Button */}
          <button className="group bg-white text-[#1CA8CB] px-8 py-4 rounded-full font-bold text-lg flex items-center gap-3 hover:bg-[#1CA8CB] hover:text-white transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 min-w-[240px] justify-center">
            <MessageCircle 
              size={24} 
              className="group-hover:animate-bounce" 
            />
            <span>Book On WhatsApp</span>
          </button>

          {/* Call Now Button */}
          <button className="group bg-white text-[#1CA8CB] px-8 py-4 rounded-full font-bold text-lg flex items-center gap-3 hover:bg-[#1CA8CB] hover:text-white transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 min-w-[240px] justify-center">
            <Phone 
              size={24} 
              className="group-hover:animate-pulse" 
            />
            <span>Call Now</span>
          </button>
        </div>

        {/* Decorative Line */}
        <div 
          className={`mt-12 flex justify-center transform transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`}
        >
          <div className="h-1 w-32 bg-gradient-to-r from-transparent via-white to-transparent rounded-full"></div>
        </div>

        {/* Additional Info */}
        <p 
          className={`mt-8 text-white/80 text-sm md:text-base transform transition-all duration-1000 delay-800 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          🌟 Limited Spots Available | Best Price Guaranteed | Instant Confirmation
        </p>
      </div>

      {/* Floating Elements - Flying Airplanes */}
      <div className="absolute top-1/4 left-5 md:left-10 animate-bounce" style={{ animationDuration: '3s' }}>
        <Plane size={20} className="text-yellow-300 transform rotate-45" />
      </div>
      <div className="absolute top-1/3 right-5 md:right-10 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
        <Plane size={24} className="text-white/70 transform -rotate-12" />
      </div>
      <div className="absolute bottom-1/4 left-1/4 animate-bounce" style={{ animationDuration: '5s', animationDelay: '2s' }}>
        <Plane size={18} className="text-yellow-200 transform rotate-90" />
      </div>
    </div>
  );
};

export default CTASection;