import { Product } from "@/types/product.type";
import { getDiscountedPrice, priceFormatter } from "@/utils/functions";

export const ProductCard = (product: Product) => {
  return (
    <div className="relative flex max-w-[300px] flex-col justify-between rounded-md border border-neutral-300 bg-white p-4 font-poppins shadow-sm">
      {product.discount
        ? product.discount != 0 && (
            <div className="absolute left-0 top-0 rounded-md bg-red-500 px-3.5 py-1.5 text-white">
              <span>-{Math.floor(product.discount * 100)}%</span>
            </div>
          )
        : null}
      <div className="flex w-full items-center justify-center p-4">
        <img src={product.imageURL} alt={product.name} />
      </div>
      <div>
        <p className="text-lg font-bold">{product.name}</p>
      </div>
      <div id="price" className="my-2 flex gap-2 text-lg font-semibold">
        {product.discount
          ? product.discount != 0 && (
              <p className="text-green-500">
                {priceFormatter(
                  getDiscountedPrice(product.price, product.discount),
                )}
              </p>
            )
          : null}
        <p
          className={`${product.discount ? "text-[#c6cacd] line-through" : ""}`}
        >
          {priceFormatter(product.price)}
        </p>
      </div>
      <button className="w-fit rounded-md bg-red-500 px-4 py-2 font-medium text-white transition-all hover:scale-110">
        Add to cart
      </button>
    </div>
  );
};

export default ProductCard;
