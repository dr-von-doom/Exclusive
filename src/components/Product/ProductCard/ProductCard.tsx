import { Product } from "@/types/Product";
import { getDiscountedPrice, priceFormatter } from "@/utils/functions";

export const ProductCard = (product: Product) => {
  return (
    <div className="bg-white shadow-sm rounded-md p-4 relative flex flex-col border border-neutral-300 justify-between font-poppins max-w-[300px]">
      {product.discount? product.discount != 0 && <div className="absolute top-0 left-0 bg-red-500 text-white rounded-md px-3.5 py-1.5"><span>-{Math.floor(product.discount * 100)}%</span></div> : null}
      <div className="p-4 w-full flex items-center justify-center">
        <img src={product.imageURL} alt={product.name}/>
      </div>
      <div><p className="font-bold text-lg">{product.name}</p></div>
      <div id="price" className="flex gap-2 my-2 font-semibold text-lg">
        {product.discount? product.discount != 0 && <p className="text-green-500">{priceFormatter(getDiscountedPrice(product.price, product.discount))}</p> : null}
        <p className={`${product.discount ? 'line-through text-[#c6cacd]' : ''}`}>{priceFormatter(product.price)}</p>
      </div>
      <button className="bg-red-500 text-white font-medium rounded-md px-4 py-2 w-fit transition-all hover:scale-110">Add to cart</button>
    </div>
  )
}

export default ProductCard;