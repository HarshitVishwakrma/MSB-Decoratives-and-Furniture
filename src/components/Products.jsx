import { FaChair, FaChessBoard, FaHome } from 'react-icons/fa';

export default function Products() {
  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Our Masterpieces</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <FaChair className="w-12 h-12 text-[#a87b50] mb-4" />
              <h3 className="text-xl font-bold mb-2">Custom Furniture</h3>
              <p className="text-gray-600">Handcrafted chairs, tables, and cabinets made to your specifications.</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <FaChessBoard className="w-12 h-12 text-[#a87b50] mb-4" />
              <h3 className="text-xl font-bold mb-2">Game Boards</h3>
              <p className="text-gray-600">Exquisite chess boards and other gaming tables for enthusiasts.</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <FaHome className="w-12 h-12 text-[#a87b50] mb-4" />
              <h3 className="text-xl font-bold mb-2">Interior Decor</h3>
              <p className="text-gray-600">Decorative items and custom interior solutions for your space.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}