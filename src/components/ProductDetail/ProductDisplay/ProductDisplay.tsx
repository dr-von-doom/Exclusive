import React from 'react';

const ProductDisplay: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-20 mb-8">
      <div className="product-images flex flex-col gap-4">
        <div className="thumbnail-images flex flex-col gap-2">
          <img
            src="images/products/product-00000000-00.png"
            alt=""
            className="w-16 h-16 object-cover rounded-lg"
          />
          <img
            src="images/products/product-00000000-01.png"
            alt=""
            className="w-16 h-16 object-cover rounded-lg"
          />
          <img
            src="images/products/product-00000000-02.png"
            alt=""
            className="w-16 h-16 object-cover rounded-lg"
          />
        </div>
        <div className="main-image">
          <img
            src="images/products/product-00000000-close.png"
            alt="LENOVO IdeaPad Slim 3"
            className="w-full max-w-xs object-cover rounded-lg"
          />
        </div>
      </div>

      <div className="product-info max-w-sm w-full">
        <h1 className="font-bold text-2xl">LENOVO IdeaPad Slim 3</h1>
        <p className="text-lg text-red-600 font-bold">$529.99</p>
        <p className="text-sm text-green-500">In Stock</p>
        <p className="text-sm text-gray-600">230 Reviews | 4.9 Stars</p>
        <p className="text-base text-gray-700 mb-4">
          In the LENOVO IdeaPad Slim 3 Gray laptop, find all the performance
          you need, an elegant laptop that meets your needs.
        </p>

        <div className="product-options flex flex-col gap-2 mb-4">
          <div className="option">
            <label htmlFor="color-select" className="font-medium">Colours:</label>
            <select id="color-select" className="w-full border border-gray-300 rounded p-2">
              <option>Gray</option>
              <option>Black</option>
            </select>
          </div>
          <div className="option">
            <label htmlFor="size-select" className="font-medium">Size:</label>
            <select id="size-select" className="w-full border border-gray-300 rounded p-2">
              <option>13"</option>
              <option>14"</option>
              <option>15.6"</option>
              <option>17.3"</option>
            </select>
          </div>
        </div>

        <div className="purchase-options flex flex-col gap-2">
          <button className="bg-red-600 text-white rounded py-2">Buy Now</button>
          <a href="cart.html">
            <button className="bg-red-600 text-white rounded py-2 w-full">Add to Cart</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
