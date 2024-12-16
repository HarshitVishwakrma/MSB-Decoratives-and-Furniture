import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetails() {
  const [quantity, setQuantity] = useState(1);
  const {productId} = useParams();

  console.log(productId)
  
  const product = {
    name: "Handcrafted Wooden Wall Clock",
    price: 89.99,
    description: "Beautifully crafted wall clock made from premium oak wood. Each piece is unique with its natural wood grain patterns, making it a perfect addition to any room. The clock features hand-carved details and a smooth finish that highlights the wood's natural beauty.",
    features: [
      "Made from premium oak wood",
      "Hand-carved details",
      "Silent quartz movement",
      "12-inch diameter",
      "1-year warranty",
      "Batteries included"
    ],
    images: [
      "https://img.freepik.com/free-photo/handcrafted-wooden-decorative-sculpture_23-2151003031.jpg?t=st=1734368965~exp=1734372565~hmac=f48b7a9fd851c05fb80bb5f524e7d1aa52ce102e237f901fcd78463c85de0105&w=360",
      "https://img.freepik.com/free-photo/handcrafted-wooden-decorative-sculpture_23-2151003032.jpg?t=st=1734368937~exp=1734372537~hmac=1425a61f5598242b9db8f2f6eb15d881a9f23900262e218ca60dab5d50fb94c4&w=360",
      "https://img.freepik.com/free-photo/handcrafted-wooden-decorative-sculpture_23-2151003033.jpg?t=st=1734368990~exp=1734372590~hmac=9bd9cc07fef57750b7ffa8cc08de3efb9e7d3fc0ffd0f1cf16841aff047bc5ac&w=360"
    ]
  };

  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  return (
    <div className="p-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            {/* Image Section */}
            <div className="space-y-4">
              <div className="aspect-w-1 aspect-h-1">
                <img
                  src={selectedImage}
                  alt={product.name}
                  className="w-full h-[400px] object-contain rounded-lg"
                />
              </div>
              <div className="flex space-x-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(image)}
                    className={`w-20 h-20 rounded-md overflow-hidden ${
                      selectedImage === image ? 'ring-2 ring-[#744e2e]' : ''
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Product ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Details Section */}
            <div className="space-y-6">
              <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
              <p className="text-4xl font-bold text-[#744e2e]">${product.price}</p>
              <p className="text-gray-600">{product.description}</p>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Features:</h3>
                <ul className="list-disc pl-5 space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="text-gray-600">{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <label htmlFor="quantity" className="text-gray-700">
                    Quantity:
                  </label>
                  <select
                    id="quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="border border-gray-300 rounded-md px-3 py-2"
                  >
                    {[1, 2, 3, 4, 5].map((num) => (
                      <option key={num} value={num}>
                        {num}
                      </option>
                    ))}
                  </select>
                </div>

                <button className="w-full bg-[#744e2e] text-white py-3 px-6 rounded-md hover:bg-[#5c3e24] transition duration-300">
                  Add to Cart
                </button>

                <div className="flex items-center space-x-4 justify-center mt-4">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="ml-2 text-sm text-gray-600">Fast Shipping</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="ml-2 text-sm text-gray-600">Quality Guaranteed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;