import { FaFacebook, FaInstagram, FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Logo from "../../assets/images/Logo.png";

function Footer() {
  const popularTrips = [
    "Evening Desert Safari",
    "Private Desert Safari",
    "Morning Desert Safari",
    "Quad Bike Desert Safari"
  ];

  const toursCategories = [
    "Dubai",
    "Abu Dhabi",
    "Dinner Cruise (2 Hours)",
    "Dinner Cruise (Five Star)"
  ];

  return (
    <footer className="bg-blue-50 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and CTA Section */}
          <div className="flex flex-col items-start">
            <div className="mb-6">
              {/* Replace with your logo */}
              <img src={Logo} alt="Arham Travel Logo" className="w-50 h-auto" />
            </div>
            <p className="text-[#1CA8CB] font-semibold text-lg mb-6">
              Book Your Safari Today!
            </p>
            <div className="flex gap-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-black text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#1CA8CB] transition-colors duration-300"
              >
                <FaFacebook size={20} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-black text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#1CA8CB] transition-colors duration-300"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Popular Trips Section */}
          <div>
            <h3 className="text-[#1CA8CB] font-bold text-lg mb-6 relative">
              POPULAR TRIPS
              <span className="block w-12 h-1 bg-[#1CA8CB] mt-2"></span>
            </h3>
            <ul className="space-y-3">
              {popularTrips.map((trip, index) => (
                <li key={index}>
                  <a 
                    href="/tours" 
                    className="text-gray-700 hover:text-[#1CA8CB] transition-colors duration-300"
                  >
                    {trip}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Tours Categories Section */}
          <div>
            <h3 className="text-[#1CA8CB] font-bold text-lg mb-6 relative">
              TOURS CATEGORIES
              <span className="block w-12 h-1 bg-[#1CA8CB] mt-2"></span>
            </h3>
            <ul className="space-y-3">
              {toursCategories.map((category, index) => (
                <li key={index}>
                  <a 
                    href="/tours" 
                    className="text-gray-700 hover:text-[#1CA8CB] transition-colors duration-300"
                  >
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us Section */}
          <div>
            <h3 className="text-[#1CA8CB] font-bold text-lg mb-6 relative">
              CONTACT US
              <span className="block w-12 h-1 bg-[#1CA8CB] mt-2"></span>
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FaWhatsapp className="text-[#1CA8CB] text-xl mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-700">WA: +5453455226</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FaPhone className="text-[#1CA8CB] text-xl mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-700">PH: +974535184536</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FaEnvelope className="text-[#1CA8CB] text-xl mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-700 break-words">Arhamtravel@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-[#1CA8CB] text-xl mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-700">
                   Office No. 14,<br />
                    Dubai, UAE
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="border-t border-gray-300 mt-10 pt-6">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Arham Travel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;