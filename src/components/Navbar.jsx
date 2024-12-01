// import React from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import { Lucide } from 'lucide-react';

// const Navbar = () => {
 

//   return (
//     <nav className="bg-gray-800 text-white py-4 px-4">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="flex items-center">
//           {/* <img src="/api/placeholder/100/40" alt="Logo" className="h-8 mr-4" /> */}
//           <span className="text-lg font-bold">M S B</span>
//         </div>
//         <div>
//           <ul className="flex space-x-4">
//             <li className="cursor-pointer hover:text-gray-300" >
//               Interior
//             </li>
//             <li className="cursor-pointer hover:text-gray-300" >
//               Wholesale
//             </li>
//             <li className="cursor-pointer hover:text-gray-300" >
//               Contact
//             </li>
//             <li className="cursor-pointer hover:text-gray-300" >
//               About Us
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import { useState } from 'react';
import { FaHome } from 'react-icons/fa';
import { IoMdMenu, IoMdClose } from 'react-icons/io';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#744e2e] text-white fixed w-full z-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <FaHome className="h-8 w-8" />
            <span className="ml-2 text-xl font-bold">MSB Decoratives and Furniture</span>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <IoMdClose size={24} /> : <IoMdMenu size={24} />}
            </button>
          </div>

          <div className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-[#d4a373]">Home</a>
            <a href="#products" className="hover:text-[#d4a373]">Products</a>
            <a href="#about" className="hover:text-[#d4a373]">About</a>
            <a href="#contact" className="hover:text-[#d4a373]">Contact</a>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <a href="#home" className="block py-2 hover:text-[#d4a373]">Home</a>
            <a href="#products" className="block py-2 hover:text-[#d4a373]">Products</a>
            <a href="#about" className="block py-2 hover:text-[#d4a373]">About</a>
            <a href="#contact" className="block py-2 hover:text-[#d4a373]">Contact</a>
          </div>
        )}
      </div>
    </nav>
  );
}