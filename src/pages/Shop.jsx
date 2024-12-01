import React, { useState } from 'react';
import { ShoppingBag, ShoppingCart } from 'lucide-react';

// Product data
const products = [
  {
    id: '1',
    name: 'Handcrafted Chess Board',
    description: 'Elegant wooden chess board with intricate inlay work, made from premium walnut and maple wood.',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1586165368502-1bad197a6461?auto=format&fit=crop&q=80&w=800',
    category: 'games'
  },
  {
    id: '2',
    name: 'Decorative Wall Panel',
    description: 'Geometric wooden wall art, handcrafted from sustainable teak wood.',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?auto=format&fit=crop&q=80&w=800',
    category: 'decoration'
  },
  {
    id: '3',
    name: 'Rustic Dining Chair',
    description: 'Handmade wooden dining chair with a comfortable ergonomic design.',
    price: 249.99,
    image: 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&q=80&w=800',
    category: 'furniture'
  },
  {
    id: '4',
    name: 'Wooden Vase',
    description: 'Hand-turned decorative vase made from exotic wood species.',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1578500351865-d6c3706f46bc?auto=format&fit=crop&q=80&w=800',
    category: 'decoration'
  }
];

// ProductCard Component
function ProductCard({ product, onAddToCart }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="text-sm text-gray-600 mt-2">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900">
            ${product.price.toFixed(2)}
          </span>
          <button
            onClick={() => onAddToCart(product)}
            className="bg-amber-600 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-amber-700 transition-colors"
          >
            <ShoppingCart size={20} />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

// CategoryFilter Component
function CategoryFilter({ selectedCategory, onCategoryChange }) {
  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'decoration', label: 'Decorative Items' },
    { id: 'furniture', label: 'Furniture' },
    { id: 'games', label: 'Games' },
  ];

  return (
    <div className="flex gap-4 mb-8">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id === 'all' ? null : category.id)}
          className={`px-4 py-2 rounded-full transition-colors ${
            (selectedCategory === category.id) || (category.id === 'all' && !selectedCategory)
              ? 'bg-amber-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
}

// Main App Component
function Shop() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-amber-800 flex items-center gap-2">
              <ShoppingBag className="h-8 w-8" />
              Wooden Wonders
            </h1>
            <div className="relative">
              <ShoppingBag className="h-6 w-6 text-gray-600" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-amber-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Discover Our Collection
          </h2>
          <p className="text-gray-600">
            Handcrafted wooden treasures for your home, each piece telling its own unique story.
          </p>
        </div>

        <CategoryFilter
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default Shop;