import { Product } from "@/types/Product"

export const ProductCard = (product: Product) => {

  function getDiscountedPrice(price: number, discount: number): number {
    return price - (price * discount / 100);
  }

  function priceFormatter(price: number): string {
    return price.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  }

  return (
    <div className="bg-white shadow-sm rounded-md p-4 relative flex flex-col border border-neutral-300">
      {product.discount && <div className="absolute top-0 left-0 bg-red-500 text-white rounded-md px-3.5 py-1.5"><span>-{product.discount}%</span></div>}
      <div className="p-4 w-full ">
        <img src={product.image} alt={product.name}/>
      </div>
      <div><p className="font-bold text-lg">{product.name}</p></div>
      <div id="price" className="flex gap-2 my-2 font-medium text-lg">
        {product.discount && <p className="text-[#23ec97]">{priceFormatter(getDiscountedPrice(product.price, product.discount))}</p>}
        <p className={`${product.discount ? 'line-through text-[#c6cacd]' : ''}`}>{priceFormatter(product.price)}</p>
      </div>
      <button className="bg-red-500 text-white font-medium rounded-md px-4 py-2 w-fit transition-all hover:scale-110">Add to cart</button>
    </div>
  )
}

export default ProductCard;