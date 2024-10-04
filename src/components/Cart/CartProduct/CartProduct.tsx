import { priceFormatter } from "@/utils/functions";
import ShippingMethod from "../ShippingMethod";
import { Product } from "@/types/product.type";

interface CartProductProps {
  product: Product;
}

export const CartProduct = ({ product }: CartProductProps) => {
  return (
    <div className="relative mb-4 flex gap-4">
      <div>
        <img src={product.imageURL} alt={product.name} />
      </div>
      <div className="">
        <div id="product-info" className="text-lg">
          <h3>{product.name}</h3>
          <ShippingMethod />
        </div>
        <div id="quantity" className="absolute bottom-0 mb-2">
          <select name="quantity" id="quantity-select">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div
          id="product-price"
          className="absolute bottom-0 right-0 mb-2 flex flex-col items-center md:top-14 md:mb-0"
        >
          <p className="hidden md:block">Price</p>
          <p className="font-semibold">{priceFormatter(product.price)}</p>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
