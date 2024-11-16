import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Lucide } from 'lucide-react';

const Navbar = () => {
 

  return (
    <nav className="bg-gray-800 text-white py-4 px-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          {/* <img src="/api/placeholder/100/40" alt="Logo" className="h-8 mr-4" /> */}
          <span className="text-lg font-bold">M S B</span>
        </div>
        <div>
          <ul className="flex space-x-4">
            <li className="cursor-pointer hover:text-gray-300" >
              Interior
            </li>
            <li className="cursor-pointer hover:text-gray-300" >
              Wholesale
            </li>
            <li className="cursor-pointer hover:text-gray-300" >
              Contact
            </li>
            <li className="cursor-pointer hover:text-gray-300" >
              About Us
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;