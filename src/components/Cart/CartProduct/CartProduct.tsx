import { getDiscountedPrice, priceFormatter } from "@/utils/functions";
import ShippingMethod from "../ShippingMethod";
import { Product } from "@/types/product.type";

interface CartProductProps {
  product: Product;
}

export const CartProduct = ({ product }: CartProductProps) => {
  return (
    <div className="flex pb-4 relative">
      <div className="flex flex-shrink-0 items-center max-w-[100px] md:max-w-[150px]">
        <img src={product.imageURL} alt={product.name} />
      </div>
      <div className="ml-3">
        <div id="product-info" className="text-sm md:text-lg">
          <h3>{product.name}</h3>
        </div>
        <ShippingMethod />
        <div id="quantity" className="absolute bottom-4 text-sm md:text-base">
          <select name="quantity" id="quantity-select">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div id="product-price" className="absolute right-0 text-sm max-md:bottom-4 md:text-base md:text-center md:mt-3">
          <p className="hidden md:block">Price</p>
          <p className="font-semibold">{priceFormatter(getDiscountedPrice(product.price, product.discount ? product.discount: 0))}</p>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
