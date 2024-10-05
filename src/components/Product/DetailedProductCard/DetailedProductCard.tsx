import { Button } from "@/components/common/Button";
import { Rating } from "@/components/common/Rating";
import { Product } from "@/types/product.type";
import { Link } from "react-router-dom";
import { DetailedProductCardSkeleton } from "./DetailedProductCardSkeleton";

export type DetailedProductCardProps = {
  product?: Product;
  isLoading?: boolean;
};

export const DetailedProductCard = ({
  product,
  isLoading,
}: DetailedProductCardProps) => {

  if (isLoading) return <DetailedProductCardSkeleton />;

  if (!product) return null;

  const currentPrice = product.price - product.price * (product.discount ?? 0);
  return (

    <Link key={product.id}
      to={`/product/${product.id}`}
      className="cursor-pointer"><div
        className="grid gap-5 rounded-lg border border-slate-200 shadow-sm lg:grid-cols-5 cursor-pointer"
      >
        <div className="flex items-center justify-center rounded-bl-lg rounded-tl-lg bg-gray-100 p-5 lg:col-span-2">
          <img src={product.imageURL} alt={product.name} className="max-h-60" />
        </div>

        <div className="flex flex-col justify-evenly gap-5 p-5 lg:col-span-3">
          <div className="flex flex-row items-center gap-2">
            <span>{product.rating}</span>
            <Rating value={product.rating} />
            <span className="text-sm font-light">({product.totalRatings})</span>
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-lg font-semibold">{product.name}</p>
            <p>{product.description}</p>

            <ul className="list-disc pl-5 text-sm lg:text-base">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 justify-end gap-3 lg:grid-cols-2">
            <div className="flex items-center justify-center gap-1 lg:justify-start">
              <strong className="text-2xl text-rose-600">
                $ {currentPrice.toFixed(2)}
              </strong>

              {(product.discount ?? 0) > 0 && (
                <span className="text-sm text-gray-500 line-through">
                  $ {product.price.toFixed(2)}
                </span>
              )}
            </div>

            <div className="flex lg:justify-end">
              <Button type="primary" className="w-full lg:w-fit">
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </div></Link>
  );
};

export default DetailedProductCard;
