export default function Footer() {
  return (
    <footer className="bg-[#744e2e] text-white mt-20 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-xl font-serif mb-4">MSB Decoratives and Furniture</h3>
          <p className="text-gray-400">Bringing nature's beauty into your home through handcrafted wooden masterpieces.</p>
        </div>
        <div>
          <h4 className="text-lg font-serif mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-[#d4a373] cursor-pointer">About Us</li>
            <li className="hover:text-[#d4a373] cursor-pointer">Contact</li>
            <li className="hover:text-[#d4a373] cursor-pointer">Shipping Info</li>
            <li className="hover:text-[#d4a373] cursor-pointer">Returns</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-serif mb-4">Contact Us</h4>
          <p className="text-gray-400">Email: pv.trader789@gmail.com</p>
          <p className="text-gray-400">Phone: (+91) 9977187665</p>
        </div>
      </div>
    </footer>
  );
}