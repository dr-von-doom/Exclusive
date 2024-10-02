interface ProductData {
  id: number;
  name: string;
  description: string;
  rating: number;
  totalRatings: number;
  imageURL: string;
  categoryId: number;
  price: number;
  discount?: number;
  features: string[];
}

const ProductDisplay = ({ product }: { product: ProductData }) => {
  if (!product) {
    return <div>No product details available</div>;
  }

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-20 mb-8">
      <div className="product-images flex flex-col gap-4">
        <div className="main-image">
          <img
            src={product.imageURL}
            alt={product.name}
            className="w-full max-w-xs object-cover rounded-lg"
          />
        </div>
      </div>

      <div className="product-info max-w-sm w-full">
        <h1 className="font-bold text-2xl">{product.name}</h1>
        <p className="text-lg text-red-600 font-bold">
          ${((product.discount ? product.price * (1 - product.discount) : product.price)).toFixed(2)}
        </p>

        <p className={`text-sm ${product.rating >= 4 ? 'text-green-500' : 'text-red-500'}`}>
          {product.totalRatings} Reviews | {product.rating} Stars
        </p>
        <p className="text-base text-gray-700 mb-4">{product.description}</p>

        <div className="features mb-4">
          <h2 className="font-semibold">Features:</h2>
          <ul className="list-disc pl-5">
            {product.features.map((feature, index) => (
              <li key={index} className="text-gray-600">{feature}</li>
            ))}
          </ul>
        </div>

        <div className="purchase-options flex flex-col gap-2">
          <button className="bg-red-600 text-white rounded py-2">Buy Now</button>
          <button className="bg-red-600 text-white rounded py-2 w-full">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
