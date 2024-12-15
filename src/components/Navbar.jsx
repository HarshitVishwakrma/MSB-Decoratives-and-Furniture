import { useState } from 'react';
import { FaHome } from 'react-icons/fa';
import { IoMdMenu, IoMdClose } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {

  const navigate = useNavigate();

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
            <a href="/products" className="hover:text-[#d4a373]">Products</a>
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