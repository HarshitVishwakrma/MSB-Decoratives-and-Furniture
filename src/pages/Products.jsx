import { useState } from 'react';
import { ShoppingBagIcon, HeartIcon } from '@heroicons/react/24/outline';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Product Data
const products = [
  {
    id: 1,
    name: 'Artisan Wooden Bowl',
    price: 89.99,
    description: 'Hand-carved from sustainable maple wood',
    image: 'https://images.unsplash.com/photo-1635241161466-541f065683ba?w=500',
    category: 'Kitchen'
  },
  {
    id: 2,
    name: 'Decorative Wall Clock',
    price: 149.99,
    description: 'Vintage-inspired timepiece crafted from walnut',
    image: 'https://images.unsplash.com/photo-1594497572060-7eec86c2f8bf?w=500',
    category: 'Wall Decor'
  },
  {
    id: 3,
    name: 'Wooden Jewelry Box',
    price: 129.99,
    description: 'Elegant storage with intricate inlay work',
    image: 'https://images.unsplash.com/photo-1584304285947-5cec0b5b2d6f?w=500',
    category: 'Storage'
  },
  {
    id: 4,
    name: 'Rustic Candle Holder',
    price: 59.99,
    description: 'Natural edge wood with iron accents',
    image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?w=500',
    category: 'Decor'
  }
];

// Header Component
function Header({ cartCount }) {
  return (
    <nav className="bg-[#2c1810] text-white py-4 px-6 fixed w-full z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-serif">MSB Decoratives and Furnitures</h1>
        <div className="flex items-center space-x-6">
          <HeartIcon className="h-6 w-6 cursor-pointer hover:text-[#d4a373]" />
          <div className="relative">
            <ShoppingBagIcon className="h-6 w-6 cursor-pointer hover:text-[#d4a373]" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#d4a373] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {cartCount}
              </span>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

// Hero Component
function Hero() {
  return (
    <div className="pt-16">
      <div className="relative h-[70vh] bg-cover bg-center" 
           style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=1200)' }}>
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white">
            <h2 className="text-5xl font-serif mb-4">Handcrafted with Love</h2>
            <p className="text-xl mb-8">Discover our collection of unique wooden artifacts</p>
            <button className="bg-[#d4a373] hover:bg-[#2c1810] text-white px-8 py-3 rounded-full transition duration-300">
              Explore Collection
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Category Filter Component
function CategoryFilter({ categories, activeCategory, onCategoryChange }) {

  const tabs = ["Retail", "WholeSale"]

  return (
    <div className="flex justify-center space-x-6 mb-12 py-12">
      {tabs.map(category => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-6 py-2 rounded-full ${
            activeCategory === category 
              ? 'bg-[#2c1810] text-white' 
              : 'bg-[#d4a373]/20 text-[#2c1810] hover:bg-[#d4a373]/30'
          } transition duration-300`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

// Product Card Component
function ProductCard({ product, onAddToCart }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
      <div className="h-64 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover hover:scale-110 transition duration-500"
        />
      </div>
      <div className="p-6">
        <div className="text-sm text-[#d4a373] font-medium mb-2">{product.category}</div>
        <h3 className="text-xl font-serif text-[#2c1810] mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-4">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-xl font-semibold text-[#2c1810]">${product.price}</span>
          <button
            onClick={() => onAddToCart(product)}
            className="bg-[#2c1810] hover:bg-[#d4a373] text-white px-4 py-2 rounded-full text-sm transition duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

// Product Grid Component
function ProductGrid({ products, onAddToCart }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 m-8">
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
}

// Newsletter Component
function Newsletter() {
  return (
    <div className="bg-[#2c1810] text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8">
          <h4 className="text-2xl font-serif mb-4">Join Our Newsletter</h4>
          <p className="text-gray-400">Subscribe to receive updates about new products and special offers.</p>
        </div>
        <div className="max-w-md mx-auto flex">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-l-full w-full focus:outline-none text-gray-800"
          />
          <button className="bg-[#d4a373] hover:bg-[#ba8a5c] px-6 rounded-r-full transition duration-300">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}


// Main Products Component
function Products() {
  const [cart, setCart] = useState([]);
  const [activeTab, setActiveTab] = useState('Retail');

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="min-h-screen bg-[#f8f3e9]">
      <Navbar></Navbar>
      <Hero />
      <main className="max-w-7xl mx-auto px-6">
        <CategoryFilter 
          activeCategory={activeTab} 
          onCategoryChange={setActiveTab} 
        />
        <ProductGrid products={products} onAddToCart={addToCart} />
      </main>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Products;