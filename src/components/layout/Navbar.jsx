// import { Link } from "react-router-dom";
// import Logo from "../../assets/images/Logo.png";
// import { FaWhatsapp } from "react-icons/fa";

// function Navbar() {
//   return (
//     <>
//       <div className='bg-white border border-gray-200 flex justify-around items-center py-2'>
//         <div>
//           <img src={Logo} alt='logo' className='w-45 object-contain' />
//         </div>

//         <div>
//           <ul className='flex gap-8 font-semibold '>
//             <li className="hover:text-[#1CA8CB] transition-colors duration-300">
//               <Link to="/">Home</Link>
//             </li>
//             <li className="hover:text-[#1CA8CB] transition-colors duration-300">
//               <Link to="/about">City Tour</Link>
//             </li>
//             <li className="hover:text-[#1CA8CB] transition-colors duration-300">
//               <Link to="/about">Desert Safari</Link>
//             </li>
//             <li className="hover:text-[#1CA8CB] transition-colors duration-300">
//               <Link to="/about">Dinner Cruise</Link>
//             </li>
//             <li className="hover:text-[#1CA8CB] transition-colors duration-300">
//               <Link to="/about">About Us</Link>
//             </li>
//             <li className="hover:text-[#1CA8CB] transition-colors duration-300">
//               <Link to="/about">Contact Us</Link>
//             </li>
//           </ul>
//         </div>

//         <div>
//           <button className='bg-[#1CA8CB] text-white px-5 py-3 rounded-full flex items-center gap-3 cursor-pointer hover:bg-[#1691B0] transition-colors duration-300'>
//             Book Now
//             <FaWhatsapp size={22} />
//           </button>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Navbar




// import { Link } from "react-router-dom";
// import { useState } from "react";
// import Logo from "../../assets/images/ArhamLogo.jpg";
// import { FaWhatsapp } from "react-icons/fa";
// import { FaSortDown } from "react-icons/fa";

// function Navbar() {
//   const [openDropdown, setOpenDropdown] = useState(null);

//   const cityTourItems = [
//     "Dubai City Tour",
//     "Abu Dhabi City Tour",
//     "Sharjah City Tour",
//     "Full Day Dubai Tour"
//   ];

//   const desertSafariItems = [
//     "Desert Safari",
//     "Evening Desert Safari",
//     "Overnight Safari",
//     "VIP Desert Safari"
//   ];

//   const dinnerCruiseItems = [
//     "Marina Dinner Cruise",
//     "Creek Dinner Cruise",
//     "Luxury Yacht Cruise",
//   ];

//   return (
//     <>
//       <div className='bg-white flex justify-around items-center py-2 relative z-50 shadow-sm'>
//         <div>
//           <img src={Logo} alt='logo' className='w-48 object-contain' />
//         </div>

//         <div>
//           <ul className='flex gap-8 font-semibold'>
//             <li className="hover:text-[#1CA8CB] transition-colors duration-300">
//               <Link to="/">Home</Link>
//             </li>
            
//             {/* City Tour Dropdown */}
//             <li 
//               className="relative"
//               onMouseEnter={() => setOpenDropdown('cityTour')}
//               onMouseLeave={() => setOpenDropdown(null)}
//             >
//               <div className="flex items-center gap-2 hover:text-[#1CA8CB] transition-colors duration-300 cursor-pointer">
//                 <span>City Tour</span>
//                 <FaSortDown size={16} />
//               </div>
              
//               {/* Dropdown Menu */}
//               <div className={`absolute top-full left-0 mt-2 bg-[#1CA8CB] rounded-md shadow-lg overflow-hidden transition-all duration-300 z-50 ${
//                 openDropdown === 'cityTour' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
//               }`}>
//                 <ul className=" min-w-[200px]">
//                   {cityTourItems.map((item, index) => (
//                     <li key={index} className="border-b border-white  last:border-b-0">
//                       <Link 
//                         to="/city-tour" 
//                         className="block px-4 py-3 text-white hover:bg-white hover:text-[#1CA8CB] transition-all duration-200"
//                       >
//                         {item}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </li>

//             {/* Desert Safari Dropdown */}
//             <li 
//               className="relative"
//               onMouseEnter={() => setOpenDropdown('desertSafari')}
//               onMouseLeave={() => setOpenDropdown(null)}
//             >
//               <div className="flex items-center gap-2 hover:text-[#1CA8CB] transition-colors duration-300 cursor-pointer">
//                 <span>Desert Safari</span>
//                 <FaSortDown size={16} />
//               </div>
              
//               {/* Dropdown Menu */}
//               <div className={`absolute top-full left-0 mt-2 bg-[#1CA8CB] rounded-md shadow-lg overflow-hidden transition-all duration-300 z-50 ${
//                 openDropdown === 'desertSafari' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
//               }`}>
//                 <ul className="min-w-[200px]">
//                   {desertSafariItems.map((item, index) => (
//                     <li key={index} className="border-b border-white last:border-b-0">
//                       <Link 
//                         to="/desert-safari" 
//                         className="block px-4 py-3 text-white hover:bg-white hover:text-[#1CA8CB] transition-all duration-200"
//                       >
//                         {item}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </li>

//             {/* Dinner Cruise Dropdown */}
//             <li 
//               className="relative"
//               onMouseEnter={() => setOpenDropdown('dinnerCruise')}
//               onMouseLeave={() => setOpenDropdown(null)}
//             >
//               <div className="flex items-center gap-2 hover:text-[#1CA8CB] transition-colors duration-300 cursor-pointer">
//                 <span>Dinner Cruise</span>
//                 <FaSortDown size={16} />
//               </div>
              
//               {/* Dropdown Menu */}
//               <div className={`absolute top-full left-0 mt-2 bg-[#1CA8CB] rounded-md shadow-lg overflow-hidden transition-all duration-300 z-50 ${
//                 openDropdown === 'dinnerCruise' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
//               }`}>
//                 <ul className=" min-w-[200px]">
//                   {dinnerCruiseItems.map((item, index) => (
//                     <li key={index} className="border-b border-white last:border-b-0">
//                       <Link 
//                         to="/dinner-cruise" 
//                         className="block px-4 py-3 text-white hover:bg-white hover:text-[#1CA8CB] transition-all duration-200"
//                       >
//                         {item}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </li>

//             <li className="hover:text-[#1CA8CB] transition-colors duration-300">
//               <Link to="/about">About Us</Link>
//             </li>
//             <li className="hover:text-[#1CA8CB] transition-colors duration-300">
//               <Link to="/contact">Contact Us</Link>
//             </li>
//           </ul>
//         </div>

//         <div>
//           <button className='bg-[#1CA8CB] text-white px-5 py-3 rounded-full flex items-center gap-3 cursor-pointer hover:bg-[#1691B0] transition-colors duration-300'>
//             Book Now
//             <FaWhatsapp size={22} />
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Navbar;


//added humberger and maked responsive try1
// import { Link } from "react-router-dom";
// import { useState } from "react";
// import Logo from "../../assets/images/ArhamLogo.jpg";
// import { FaWhatsapp, FaSortDown } from "react-icons/fa";
// import { HiMenu, HiX } from "react-icons/hi";

// function Navbar() {
//   const [openDropdown, setOpenDropdown] = useState(null);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [mobileDropdown, setMobileDropdown] = useState(null);

//   const cityTourItems = [
//     "Dubai City Tour",
//     "Abu Dhabi City Tour",
//     "Sharjah City Tour",
//     "Full Day Dubai Tour"
//   ];

//   const desertSafariItems = [
//     "Desert Safari",
//     "Evening Desert Safari",
//     "Overnight Safari",
//     "VIP Desert Safari"
//   ];

//   const dinnerCruiseItems = [
//     "Marina Dinner Cruise",
//     "Creek Dinner Cruise",
//     "Luxury Yacht Cruise",
//   ];

//   const toggleMobileDropdown = (dropdown) => {
//     setMobileDropdown(mobileDropdown === dropdown ? null : dropdown);
//   };

//   const closeMobileMenu = () => {
//     setIsMobileMenuOpen(false);
//     setMobileDropdown(null);
//   };

//   return (
//     <>
//       <nav className='bg-white flex justify-between items-center px-4 md:px-6 lg:px-8 py-2 relative z-50 shadow-sm'>
//         {/* Logo */}
//         <div>
//           <img src={Logo} alt='logo' className='w-36 md:w-48 object-contain' />
//         </div>

//         {/* Desktop Menu */}
//         <div className='hidden lg:block'>
//           <ul className='flex gap-8 font-semibold'>
//             <li className="hover:text-[#1CA8CB] transition-colors duration-300">
//               <Link to="/">Home</Link>
//             </li>
            
//             {/* City Tour Dropdown */}
//             <li 
//               className="relative"
//               onMouseEnter={() => setOpenDropdown('cityTour')}
//               onMouseLeave={() => setOpenDropdown(null)}
//             >
//               <div className="flex items-center gap-2 hover:text-[#1CA8CB] transition-colors duration-300 cursor-pointer">
//                 <span>City Tour</span>
//                 <FaSortDown size={16} />
//               </div>
              
//               <div className={`absolute top-full left-0 mt-2 bg-[#1CA8CB] rounded-md shadow-lg overflow-hidden transition-all duration-300 z-50 ${
//                 openDropdown === 'cityTour' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
//               }`}>
//                 <ul className="min-w-[200px]">
//                   {cityTourItems.map((item, index) => (
//                     <li key={index} className="border-b border-white last:border-b-0">
//                       <Link 
//                         to="/city-tour" 
//                         className="block px-4 py-3 text-white hover:bg-white hover:text-[#1CA8CB] transition-all duration-200"
//                       >
//                         {item}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </li>

//             {/* Desert Safari Dropdown */}
//             <li 
//               className="relative"
//               onMouseEnter={() => setOpenDropdown('desertSafari')}
//               onMouseLeave={() => setOpenDropdown(null)}
//             >
//               <div className="flex items-center gap-2 hover:text-[#1CA8CB] transition-colors duration-300 cursor-pointer">
//                 <span>Desert Safari</span>
//                 <FaSortDown size={16} />
//               </div>
              
//               <div className={`absolute top-full left-0 mt-2 bg-[#1CA8CB] rounded-md shadow-lg overflow-hidden transition-all duration-300 z-50 ${
//                 openDropdown === 'desertSafari' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
//               }`}>
//                 <ul className="min-w-[200px]">
//                   {desertSafariItems.map((item, index) => (
//                     <li key={index} className="border-b border-white last:border-b-0">
//                       <Link 
//                         to="/desert-safari" 
//                         className="block px-4 py-3 text-white hover:bg-white hover:text-[#1CA8CB] transition-all duration-200"
//                       >
//                         {item}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </li>

//             {/* Dinner Cruise Dropdown */}
//             <li 
//               className="relative"
//               onMouseEnter={() => setOpenDropdown('dinnerCruise')}
//               onMouseLeave={() => setOpenDropdown(null)}
//             >
//               <div className="flex items-center gap-2 hover:text-[#1CA8CB] transition-colors duration-300 cursor-pointer">
//                 <span>Dinner Cruise</span>
//                 <FaSortDown size={16} />
//               </div>
              
//               <div className={`absolute top-full left-0 mt-2 bg-[#1CA8CB] rounded-md shadow-lg overflow-hidden transition-all duration-300 z-50 ${
//                 openDropdown === 'dinnerCruise' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
//               }`}>
//                 <ul className="min-w-[200px]">
//                   {dinnerCruiseItems.map((item, index) => (
//                     <li key={index} className="border-b border-white last:border-b-0">
//                       <Link 
//                         to="/dinner-cruise" 
//                         className="block px-4 py-3 text-white hover:bg-white hover:text-[#1CA8CB] transition-all duration-200"
//                       >
//                         {item}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </li>

//             <li className="hover:text-[#1CA8CB] transition-colors duration-300">
//               <Link to="/about">About Us</Link>
//             </li>
//             <li className="hover:text-[#1CA8CB] transition-colors duration-300">
//               <Link to="/contact">Contact Us</Link>
//             </li>
//           </ul>
//         </div>

//         {/* Desktop Book Now Button */}
//         <div className='hidden lg:block'>
//           <button className='bg-[#1CA8CB] text-white px-5 py-3 rounded-full flex items-center gap-3 cursor-pointer hover:bg-[#1691B0] transition-colors duration-300'>
//             Book Now
//             <FaWhatsapp size={22} />
//           </button>
//         </div>

//         {/* Mobile Hamburger Icon */}
//         <button 
//           className='lg:hidden text-[#1CA8CB] z-50 relative'
//           onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//         >
//           {isMobileMenuOpen ? <HiX size={32} /> : <HiMenu size={32} />}
//         </button>
//       </nav>

//       {/* Mobile Menu - Full Width from Top */}
//       <div className={`fixed top-0 left-0 w-full bg-white shadow-2xl transform transition-all duration-300 ease-in-out z-40 overflow-y-auto ${
//         isMobileMenuOpen ? 'translate-y-0 max-h-screen' : '-translate-y-full max-h-0'
//       } lg:hidden`}>
//         <div className='flex flex-col pt-20 px-6 pb-8'>
//           <ul className='flex flex-col gap-2 font-semibold'>
//             <li className="py-3 px-4 hover:bg-[#1CA8CB] hover:text-white rounded-md transition-all duration-300">
//               <Link to="/" onClick={closeMobileMenu}>Home</Link>
//             </li>
            
//             {/* Mobile City Tour Dropdown */}
//             <li className="py-3 px-4 hover:bg-[#1CA8CB] hover:text-white rounded-md transition-all duration-300">
//               <div 
//                 className="flex items-center justify-between cursor-pointer"
//                 onClick={() => toggleMobileDropdown('cityTour')}
//               >
//                 <span>City Tour</span>
//                 <FaSortDown 
//                   size={16} 
//                   className={`transform transition-transform duration-300 ${
//                     mobileDropdown === 'cityTour' ? 'rotate-180' : ''
//                   }`}
//                 />
//               </div>
//               <div className={`overflow-hidden transition-all duration-300 ${
//                 mobileDropdown === 'cityTour' ? 'max-h-96 mt-2' : 'max-h-0'
//               }`}>
//                 <ul className='pl-4 space-y-1'>
//                   {cityTourItems.map((item, index) => (
//                     <li key={index} className="py-2 px-3 hover:bg-[#1CA8CB] hover:text-white rounded-md transition-all duration-200">
//                       <Link to="/city-tour" onClick={closeMobileMenu}>
//                         {item}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </li>

//             {/* Mobile Desert Safari Dropdown */}
//             <li className="py-3 px-4 hover:bg-[#1CA8CB] hover:text-white rounded-md transition-all duration-300">
//               <div 
//                 className="flex items-center justify-between cursor-pointer"
//                 onClick={() => toggleMobileDropdown('desertSafari')}
//               >
//                 <span>Desert Safari</span>
//                 <FaSortDown 
//                   size={16} 
//                   className={`transform transition-transform duration-300 ${
//                     mobileDropdown === 'desertSafari' ? 'rotate-180' : ''
//                   }`}
//                 />
//               </div>
//               <div className={`overflow-hidden transition-all duration-300 ${
//                 mobileDropdown === 'desertSafari' ? 'max-h-96 mt-2' : 'max-h-0'
//               }`}>
//                 <ul className='pl-4 space-y-1'>
//                   {desertSafariItems.map((item, index) => (
//                     <li key={index} className="py-2 px-3 hover:bg-[#1CA8CB] hover:text-white rounded-md transition-all duration-200">
//                       <Link to="/desert-safari" onClick={closeMobileMenu}>
//                         {item}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </li>

//             {/* Mobile Dinner Cruise Dropdown */}
//             <li className="py-3 px-4 hover:bg-[#1CA8CB] hover:text-white rounded-md transition-all duration-300">
//               <div 
//                 className="flex items-center justify-between cursor-pointer"
//                 onClick={() => toggleMobileDropdown('dinnerCruise')}
//               >
//                 <span>Dinner Cruise</span>
//                 <FaSortDown 
//                   size={16} 
//                   className={`transform transition-transform duration-300 ${
//                     mobileDropdown === 'dinnerCruise' ? 'rotate-180' : ''
//                   }`}
//                 />
//               </div>
//               <div className={`overflow-hidden transition-all duration-300 ${
//                 mobileDropdown === 'dinnerCruise' ? 'max-h-96 mt-2' : 'max-h-0'
//               }`}>
//                 <ul className='pl-4 space-y-1'>
//                   {dinnerCruiseItems.map((item, index) => (
//                     <li key={index} className="py-2 px-3 hover:bg-[#1CA8CB] hover:text-white rounded-md transition-all duration-200">
//                       <Link to="/dinner-cruise" onClick={closeMobileMenu}>
//                         {item}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </li>

//             <li className="py-3 px-4 hover:bg-[#1CA8CB] hover:text-white rounded-md transition-all duration-300">
//               <Link to="/about" onClick={closeMobileMenu}>About Us</Link>
//             </li>
//             <li className="py-3 px-4 hover:bg-[#1CA8CB] hover:text-white rounded-md transition-all duration-300">
//               <Link to="/contact" onClick={closeMobileMenu}>Contact Us</Link>
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/* Overlay */}
//       {isMobileMenuOpen && (
//         <div 
//           className='fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden'
//           onClick={closeMobileMenu}
//         ></div>
//       )}
//     </>
//   );
// }

// export default Navbar;



// mobile response done 
// import { Link } from "react-router-dom";
// import { useState } from "react";
// import Logo from "../../assets/images/ArhamLogo.jpg";
// import { FaWhatsapp, FaSortDown } from "react-icons/fa";
// import { HiMenu, HiX } from "react-icons/hi";

// function Navbar() {
//   const [openDropdown, setOpenDropdown] = useState(null);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [mobileDropdown, setMobileDropdown] = useState(null);

//   const cityTourItems = [
//     "Dubai City Tour",
//     "Abu Dhabi City Tour",
//     "Sharjah City Tour",
//     "Full Day Dubai Tour"
//   ];

//   const desertSafariItems = [
//     "Desert Safari",
//     "Evening Desert Safari",
//     "Overnight Safari",
//     "VIP Desert Safari"
//   ];

//   const dinnerCruiseItems = [
//     "Marina Dinner Cruise",
//     "Creek Dinner Cruise",
//     "Luxury Yacht Cruise",
//   ];

//   const toggleMobileDropdown = (dropdown) => {
//     setMobileDropdown(mobileDropdown === dropdown ? null : dropdown);
//   };

//   const closeMobileMenu = () => {
//     setIsMobileMenuOpen(false);
//     setMobileDropdown(null);
//   };

//   return (
//     <>
//       <nav className='bg-white flex justify-between items-center px-4 md:px-6 lg:px-8 py-2 relative z-50 shadow-sm'>
//         {/* Logo */}
//         <div>
//           <img src={Logo} alt='logo' className='w-36 md:w-48 object-contain' />
//         </div>

//         {/* Desktop Menu */}
//         <div className='hidden lg:block'>
//           <ul className='flex gap-8 font-semibold'>
//             <li className="hover:text-[#1CA8CB] transition-colors duration-300">
//               <Link to="/">Home</Link>
//             </li>
            
//             {/* City Tour Dropdown */}
//             <li 
//               className="relative"
//               onMouseEnter={() => setOpenDropdown('cityTour')}
//               onMouseLeave={() => setOpenDropdown(null)}
//             >
//               <div className="flex items-center gap-2 hover:text-[#1CA8CB] transition-colors duration-300 cursor-pointer">
//                 <span>City Tour</span>
//                 <FaSortDown size={16} />
//               </div>
              
//               <div className={`absolute top-full left-0 mt-2 bg-[#1CA8CB] rounded-md shadow-lg overflow-hidden transition-all duration-300 z-50 ${
//                 openDropdown === 'cityTour' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
//               }`}>
//                 <ul className="min-w-[200px]">
//                   {cityTourItems.map((item, index) => (
//                     <li key={index} className="border-b border-white last:border-b-0">
//                       <Link 
//                         to="/city-tour" 
//                         className="block px-4 py-3 text-white hover:bg-white hover:text-[#1CA8CB] transition-all duration-200"
//                       >
//                         {item}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </li>

//             {/* Desert Safari Dropdown */}
//             <li 
//               className="relative"
//               onMouseEnter={() => setOpenDropdown('desertSafari')}
//               onMouseLeave={() => setOpenDropdown(null)}
//             >
//               <div className="flex items-center gap-2 hover:text-[#1CA8CB] transition-colors duration-300 cursor-pointer">
//                 <span>Desert Safari</span>
//                 <FaSortDown size={16} />
//               </div>
              
//               <div className={`absolute top-full left-0 mt-2 bg-[#1CA8CB] rounded-md shadow-lg overflow-hidden transition-all duration-300 z-50 ${
//                 openDropdown === 'desertSafari' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
//               }`}>
//                 <ul className="min-w-[200px]">
//                   {desertSafariItems.map((item, index) => (
//                     <li key={index} className="border-b border-white last:border-b-0">
//                       <Link 
//                         to="/desert-safari" 
//                         className="block px-4 py-3 text-white hover:bg-white hover:text-[#1CA8CB] transition-all duration-200"
//                       >
//                         {item}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </li>

//             {/* Dinner Cruise Dropdown */}
//             <li 
//               className="relative"
//               onMouseEnter={() => setOpenDropdown('dinnerCruise')}
//               onMouseLeave={() => setOpenDropdown(null)}
//             >
//               <div className="flex items-center gap-2 hover:text-[#1CA8CB] transition-colors duration-300 cursor-pointer">
//                 <span>Dinner Cruise</span>
//                 <FaSortDown size={16} />
//               </div>
              
//               <div className={`absolute top-full left-0 mt-2 bg-[#1CA8CB] rounded-md shadow-lg overflow-hidden transition-all duration-300 z-50 ${
//                 openDropdown === 'dinnerCruise' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
//               }`}>
//                 <ul className="min-w-[200px]">
//                   {dinnerCruiseItems.map((item, index) => (
//                     <li key={index} className="border-b border-white last:border-b-0">
//                       <Link 
//                         to="/dinner-cruise" 
//                         className="block px-4 py-3 text-white hover:bg-white hover:text-[#1CA8CB] transition-all duration-200"
//                       >
//                         {item}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </li>

//             <li className="hover:text-[#1CA8CB] transition-colors duration-300">
//               <Link to="/about">About Us</Link>
//             </li>
//             <li className="hover:text-[#1CA8CB] transition-colors duration-300">
//               <Link to="/contact">Contact Us</Link>
//             </li>
//           </ul>
//         </div>

//         {/* Desktop Book Now Button */}
//         <div className='hidden lg:block'>
//           <button className='bg-[#1CA8CB] text-white px-5 py-3 rounded-full flex items-center gap-3 cursor-pointer hover:bg-[#1691B0] transition-colors duration-300'>
//             Book Now
//             <FaWhatsapp size={22} />
//           </button>
//         </div>

//         {/* Mobile Hamburger Icon */}
//         <button 
//           className='lg:hidden text-[#1CA8CB] z-50 relative'
//           onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//         >
//           {isMobileMenuOpen ? <HiX size={32} /> : <HiMenu size={32} />}
//         </button>
//       </nav>

//       {/* Mobile Menu - Full Width from Top */}
//       <div className={`fixed top-0 left-0 w-full bg-white shadow-2xl transform transition-all duration-300 ease-in-out z-40 overflow-y-auto ${
//         isMobileMenuOpen ? 'translate-y-0 max-h-screen' : '-translate-y-full max-h-0'
//       } lg:hidden`}>
//         <div className='flex flex-col pt-20 px-6 pb-8'>
//           <ul className='flex flex-col gap-2 font-semibold'>
//             <li className="py-3 px-4 hover:bg-[#1CA8CB] hover:text-white rounded-md transition-all duration-300">
//               <Link to="/" onClick={closeMobileMenu}>Home</Link>
//             </li>
            
//             {/* Mobile City Tour Dropdown */}
//             <li className="rounded-md transition-all duration-300">
//               <div 
//                 className="flex items-center justify-between cursor-pointer py-3 px-4 hover:bg-[#1CA8CB] hover:text-white rounded-md transition-all duration-300"
//                 onClick={() => toggleMobileDropdown('cityTour')}
//               >
//                 <span>City Tour</span>
//                 <FaSortDown 
//                   size={16} 
//                   className={`transform transition-transform duration-300 ${
//                     mobileDropdown === 'cityTour' ? 'rotate-180' : ''
//                   }`}
//                 />
//               </div>
//               <div className={`overflow-hidden transition-all duration-300 ${
//                 mobileDropdown === 'cityTour' ? 'max-h-96 mt-2' : 'max-h-0'
//               }`}>
//                 <ul className='pl-4 space-y-1'>
//                   {cityTourItems.map((item, index) => (
//                     <li key={index} className="py-2 px-3 bg-white hover:bg-[#1CA8CB] hover:text-white rounded-md transition-all duration-200">
//                       <Link to="/city-tour" onClick={closeMobileMenu}>
//                         {item}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </li>

//             {/* Mobile Desert Safari Dropdown */}
//             <li className="rounded-md transition-all duration-300">
//               <div 
//                 className="flex items-center justify-between cursor-pointer py-3 px-4 hover:bg-[#1CA8CB] hover:text-white rounded-md transition-all duration-300"
//                 onClick={() => toggleMobileDropdown('desertSafari')}
//               >
//                 <span>Desert Safari</span>
//                 <FaSortDown 
//                   size={16} 
//                   className={`transform transition-transform duration-300 ${
//                     mobileDropdown === 'desertSafari' ? 'rotate-180' : ''
//                   }`}
//                 />
//               </div>
//               <div className={`overflow-hidden transition-all duration-300 ${
//                 mobileDropdown === 'desertSafari' ? 'max-h-96 mt-2' : 'max-h-0'
//               }`}>
//                 <ul className='pl-4 space-y-1'>
//                   {desertSafariItems.map((item, index) => (
//                     <li key={index} className="py-2 px-3 bg-white hover:bg-[#1CA8CB] hover:text-white rounded-md transition-all duration-200">
//                       <Link to="/desert-safari" onClick={closeMobileMenu}>
//                         {item}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </li>

//             {/* Mobile Dinner Cruise Dropdown */}
//             <li className="rounded-md transition-all duration-300">
//               <div 
//                 className="flex items-center justify-between cursor-pointer py-3 px-4 hover:bg-[#1CA8CB] hover:text-white rounded-md transition-all duration-300"
//                 onClick={() => toggleMobileDropdown('dinnerCruise')}
//               >
//                 <span>Dinner Cruise</span>
//                 <FaSortDown 
//                   size={16} 
//                   className={`transform transition-transform duration-300 ${
//                     mobileDropdown === 'dinnerCruise' ? 'rotate-180' : ''
//                   }`}
//                 />
//               </div>
//               <div className={`overflow-hidden transition-all duration-300 ${
//                 mobileDropdown === 'dinnerCruise' ? 'max-h-96 mt-2' : 'max-h-0'
//               }`}>
//                 <ul className='pl-4 space-y-1'>
//                   {dinnerCruiseItems.map((item, index) => (
//                     <li key={index} className="py-2 px-3 bg-white hover:bg-[#1CA8CB] hover:text-white rounded-md transition-all duration-200">
//                       <Link to="/dinner-cruise" onClick={closeMobileMenu}>
//                         {item}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </li>

//             <li className="py-3 px-4 hover:bg-[#1CA8CB] hover:text-white rounded-md transition-all duration-300">
//               <Link to="/about" onClick={closeMobileMenu}>About Us</Link>
//             </li>
//             <li className="py-3 px-4 hover:bg-[#1CA8CB] hover:text-white rounded-md transition-all duration-300">
//               <Link to="/contact" onClick={closeMobileMenu}>Contact Us</Link>
//             </li>
//           </ul>

//           {/* Mobile Book Now Button */}
//           {/* <button 
//             className='bg-[#1CA8CB] text-white px-5 py-3 rounded-full flex items-center justify-center gap-3 cursor-pointer hover:bg-[#1691B0] transition-colors duration-300 mt-6'
//             onClick={closeMobileMenu}
//           >
//             Book Now
//             <FaWhatsapp size={22} />
//           </button> */}
//         </div>
//       </div>
//     </>
//   );
// }

// export default Navbar;




import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "../../assets/images/ArhamLogo.jpg";
import { FaWhatsapp, FaSortDown } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  const cityTourItems = [
    "Dubai City Tour",
    "Abu Dhabi City Tour",
    "Sharjah City Tour",
    "Full Day Dubai Tour"
  ];

  const desertSafariItems = [
    "Desert Safari",
    "Evening Desert Safari",
    "Overnight Safari",
    "VIP Desert Safari"
  ];

  const dinnerCruiseItems = [
    "Marina Dinner Cruise",
    "Creek Dinner Cruise",
    "Luxury Yacht Cruise",
  ];

  const toggleMobileDropdown = (dropdown) => {
    setMobileDropdown(mobileDropdown === dropdown ? null : dropdown);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setMobileDropdown(null);
  };

  return (
    <>
      <nav className='bg-white flex justify-between items-center px-4 md:px-6 lg:px-8 py-2 fixed top-0 left-0 right-0 z-50 shadow-sm'>
        {/* Logo */}
        <div>
          <img src={Logo} alt='logo' className='w-36 md:w-48 object-contain' />
        </div>

        {/* Desktop Menu */}
        <div className='hidden lg:block'>
          <ul className='flex gap-8 font-semibold'>
            <li className="hover:text-[#1CA8CB] transition-colors duration-300">
              <Link to="/">Home</Link>
            </li>
            
            {/* City Tour Dropdown */}
            <li 
              className="relative"
              onMouseEnter={() => setOpenDropdown('cityTour')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <div className="flex items-center gap-2 hover:text-[#1CA8CB] transition-colors duration-300 cursor-pointer">
                <span>City Tour</span>
                <FaSortDown size={16} />
              </div>
              
              <div className={`absolute top-full left-0 mt-2 bg-[#1CA8CB] rounded-md shadow-lg overflow-hidden transition-all duration-300 z-50 ${
                openDropdown === 'cityTour' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
              }`}>
                <ul className="min-w-[200px]">
                  {cityTourItems.map((item, index) => (
                    <li key={index} className="border-b border-white last:border-b-0">
                      <Link 
                        to="/city-tour" 
                        className="block px-4 py-3 text-white hover:bg-white hover:text-[#1CA8CB] transition-all duration-200"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            {/* Desert Safari Dropdown */}
            <li 
              className="relative"
              onMouseEnter={() => setOpenDropdown('desertSafari')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <div className="flex items-center gap-2 hover:text-[#1CA8CB] transition-colors duration-300 cursor-pointer">
                <span>Desert Safari</span>
                <FaSortDown size={16} />
              </div>
              
              <div className={`absolute top-full left-0 mt-2 bg-[#1CA8CB] rounded-md shadow-lg overflow-hidden transition-all duration-300 z-50 ${
                openDropdown === 'desertSafari' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
              }`}>
                <ul className="min-w-[200px]">
                  {desertSafariItems.map((item, index) => (
                    <li key={index} className="border-b border-white last:border-b-0">
                      <Link 
                        to="/desert-safari" 
                        className="block px-4 py-3 text-white hover:bg-white hover:text-[#1CA8CB] transition-all duration-200"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            {/* Dinner Cruise Dropdown */}
            <li 
              className="relative"
              onMouseEnter={() => setOpenDropdown('dinnerCruise')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <div className="flex items-center gap-2 hover:text-[#1CA8CB] transition-colors duration-300 cursor-pointer">
                <span>Dinner Cruise</span>
                <FaSortDown size={16} />
              </div>
              
              <div className={`absolute top-full left-0 mt-2 bg-[#1CA8CB] rounded-md shadow-lg overflow-hidden transition-all duration-300 z-50 ${
                openDropdown === 'dinnerCruise' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
              }`}>
                <ul className="min-w-[200px]">
                  {dinnerCruiseItems.map((item, index) => (
                    <li key={index} className="border-b border-white last:border-b-0">
                      <Link 
                        to="/dinner-cruise" 
                        className="block px-4 py-3 text-white hover:bg-white hover:text-[#1CA8CB] transition-all duration-200"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            <li className="hover:text-[#1CA8CB] transition-colors duration-300">
              <Link to="/about">About Us</Link>
            </li>
            <li className="hover:text-[#1CA8CB] transition-colors duration-300">
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Desktop Book Now Button */}
        <div className='hidden lg:block'>
          <button className='bg-[#1CA8CB] text-white px-5 py-3 rounded-full flex items-center gap-3 cursor-pointer hover:bg-[#1691B0] transition-colors duration-300'>
            Book Now
            <FaWhatsapp size={22} />
          </button>
        </div>

        {/* Mobile Hamburger Icon */}
        <button 
          className='lg:hidden text-[#1CA8CB] z-50 relative'
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <HiX size={32} /> : <HiMenu size={32} />}
        </button>
      </nav>

      {/* Mobile Menu - Full Width from Top */}
      <div className={`fixed top-0 left-0 w-full bg-white shadow-2xl transform transition-all duration-300 ease-in-out z-40 overflow-y-auto ${
        isMobileMenuOpen ? 'translate-y-0 max-h-screen' : '-translate-y-full max-h-0'
      } lg:hidden`}>
        <div className='flex flex-col pt-20 px-6 pb-8'>
          <ul className='flex flex-col gap-2 font-semibold'>
            <li className="py-3 px-4 hover:bg-[#1CA8CB] hover:text-white rounded-md transition-all duration-300">
              <Link to="/" onClick={closeMobileMenu}>Home</Link>
            </li>
            
            {/* Mobile City Tour Dropdown */}
            <li className="rounded-md transition-all duration-300">
              <div 
                className="flex items-center justify-between cursor-pointer py-3 px-4 hover:bg-[#1CA8CB] hover:text-white rounded-md transition-all duration-300"
                onClick={() => toggleMobileDropdown('cityTour')}
              >
                <span>City Tour</span>
                <FaSortDown 
                  size={16} 
                  className={`transform transition-transform duration-300 ${
                    mobileDropdown === 'cityTour' ? 'rotate-180' : ''
                  }`}
                />
              </div>
              <div className={`overflow-hidden transition-all duration-300 ${
                mobileDropdown === 'cityTour' ? 'max-h-96 mt-2' : 'max-h-0'
              }`}>
                <ul className='pl-4 space-y-1'>
                  {cityTourItems.map((item, index) => (
                    <li key={index} className="py-2 px-3 bg-white hover:bg-[#1CA8CB] hover:text-white rounded-md transition-all duration-200">
                      <Link to="/city-tour" onClick={closeMobileMenu}>
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            {/* Mobile Desert Safari Dropdown */}
            <li className="rounded-md transition-all duration-300">
              <div 
                className="flex items-center justify-between cursor-pointer py-3 px-4 hover:bg-[#1CA8CB] hover:text-white rounded-md transition-all duration-300"
                onClick={() => toggleMobileDropdown('desertSafari')}
              >
                <span>Desert Safari</span>
                <FaSortDown 
                  size={16} 
                  className={`transform transition-transform duration-300 ${
                    mobileDropdown === 'desertSafari' ? 'rotate-180' : ''
                  }`}
                />
              </div>
              <div className={`overflow-hidden transition-all duration-300 ${
                mobileDropdown === 'desertSafari' ? 'max-h-96 mt-2' : 'max-h-0'
              }`}>
                <ul className='pl-4 space-y-1'>
                  {desertSafariItems.map((item, index) => (
                    <li key={index} className="py-2 px-3 bg-white hover:bg-[#1CA8CB] hover:text-white rounded-md transition-all duration-200">
                      <Link to="/desert-safari" onClick={closeMobileMenu}>
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            {/* Mobile Dinner Cruise Dropdown */}
            <li className="rounded-md transition-all duration-300">
              <div 
                className="flex items-center justify-between cursor-pointer py-3 px-4 hover:bg-[#1CA8CB] hover:text-white rounded-md transition-all duration-300"
                onClick={() => toggleMobileDropdown('dinnerCruise')}
              >
                <span>Dinner Cruise</span>
                <FaSortDown 
                  size={16} 
                  className={`transform transition-transform duration-300 ${
                    mobileDropdown === 'dinnerCruise' ? 'rotate-180' : ''
                  }`}
                />
              </div>
              <div className={`overflow-hidden transition-all duration-300 ${
                mobileDropdown === 'dinnerCruise' ? 'max-h-96 mt-2' : 'max-h-0'
              }`}>
                <ul className='pl-4 space-y-1'>
                  {dinnerCruiseItems.map((item, index) => (
                    <li key={index} className="py-2 px-3 bg-white hover:bg-[#1CA8CB] hover:text-white rounded-md transition-all duration-200">
                      <Link to="/dinner-cruise" onClick={closeMobileMenu}>
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            <li className="py-3 px-4 hover:bg-[#1CA8CB] hover:text-white rounded-md transition-all duration-300">
              <Link to="/about" onClick={closeMobileMenu}>About Us</Link>
            </li>
            <li className="py-3 px-4 hover:bg-[#1CA8CB] hover:text-white rounded-md transition-all duration-300">
              <Link to="/contact" onClick={closeMobileMenu}>Contact Us</Link>
            </li>
          </ul>

          {/* Mobile Book Now Button */}
          {/* <button 
            className='bg-[#1CA8CB] text-white px-5 py-3 rounded-full flex items-center justify-center gap-3 cursor-pointer hover:bg-[#1691B0] transition-colors duration-300 mt-6'
            onClick={closeMobileMenu}
          >
            Book Now
            <FaWhatsapp size={22} />
          </button> */}
        </div>
      </div>
    </>
  );
}

export default Navbar;