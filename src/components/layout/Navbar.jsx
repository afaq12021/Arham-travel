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




import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "../../assets/images/ArhamLogo.jpg";
import { FaWhatsapp } from "react-icons/fa";
import { FaSortDown } from "react-icons/fa";

function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);

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

  return (
    <>
      <div className='bg-white flex justify-around items-center py-2 relative z-50 shadow-sm'>
        <div>
          <img src={Logo} alt='logo' className='w-48 object-contain' />
        </div>

        <div>
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
              
              {/* Dropdown Menu */}
              <div className={`absolute top-full left-0 mt-2 bg-[#1CA8CB] rounded-md shadow-lg overflow-hidden transition-all duration-300 z-50 ${
                openDropdown === 'cityTour' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
              }`}>
                <ul className=" min-w-[200px]">
                  {cityTourItems.map((item, index) => (
                    <li key={index} className="border-b border-white  last:border-b-0">
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
              
              {/* Dropdown Menu */}
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
              
              {/* Dropdown Menu */}
              <div className={`absolute top-full left-0 mt-2 bg-[#1CA8CB] rounded-md shadow-lg overflow-hidden transition-all duration-300 z-50 ${
                openDropdown === 'dinnerCruise' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
              }`}>
                <ul className=" min-w-[200px]">
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

        <div>
          <button className='bg-[#1CA8CB] text-white px-5 py-3 rounded-full flex items-center gap-3 cursor-pointer hover:bg-[#1691B0] transition-colors duration-300'>
            Book Now
            <FaWhatsapp size={22} />
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;