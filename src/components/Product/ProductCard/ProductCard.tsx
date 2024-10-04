import { Product } from "@/types/product.type";
import { getDiscountedPrice, priceFormatter } from "@/utils/functions";
import {Button}  from "@/components/common/Button";

export const ProductCard = (product: Product) => {
  return (
    <div className="relative flex max-w-[300px] flex-col justify-between rounded-md border border-neutral-300 bg-white p-4 font-poppins shadow-sm h-[400px]"> 
      {product.discount && (
        <div className="absolute left-0 top-0 rounded-md bg-red-500 px-3.5 py-1.5 text-white">
          <span>-{Math.floor(product.discount * 100)}%</span>
        </div>
      )}
      <div className="flex w-full items-center justify-center h-48 p-4"> 
        <img src={product.imageURL} alt={product.name} className="object-contain h-full" /> 
      </div>
      <div className="flex-grow"> 
        <p className="text-lg font-bold">{product.name}</p>
      </div>
      <div id="price" className="my-2 flex gap-2 text-lg font-semibold">
        {product.discount ? (
          <p className="text-green-500">
            {priceFormatter(getDiscountedPrice(product.price, product.discount))}
          </p>
        ) : null}
        <p className={`${product.discount ? "text-[#c6cacd] line-through" : ""}`}>
          {priceFormatter(product.price)}
        </p>
      </div>
      <Button filled type="primary" className="w-fit"> 
        Add to cart
      </Button>
    </div>
  );
};