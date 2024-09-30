const ProductImage = ({ imageUrl }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-sm">
        <img
          src={imageUrl}
          alt="Product"
          className="object-cover w-full h-full rounded-lg shadow-lg"
        />
      </div>
      <div className="flex space-x-2 mt-2">
        {/* Aquí puedes agregar miniaturas de imágenes */}
        <img
          src="images/products/product-00000000-00.png"
          alt="Thumbnail 1"
          className="w-20 h-20 object-cover rounded-lg cursor-pointer"
        />
        <img
          src="images/products/product-00000000-01.png"
          alt="Thumbnail 2"
          className="w-20 h-20 object-cover rounded-lg cursor-pointer"
        />
        <img
          src="images/products/product-00000000-02.png"
          alt="Thumbnail 3"
          className="w-20 h-20 object-cover rounded-lg cursor-pointer"
        />
      </div>
    </div>
  );
};

export default ProductImage;
