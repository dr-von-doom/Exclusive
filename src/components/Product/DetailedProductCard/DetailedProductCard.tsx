import Button from "@/components/Button";
import Rating from "@/components/Rating";
import { Product } from "@/types/Product";

export const DetailedProductCard = (data: Product) => {
  const currentPrice = data.price - data.price * (data.discount ?? 0);

  return (
    <div
      key={data.id}
      className="grid gap-5 rounded-lg border border-slate-200 shadow-sm sm:grid-cols-5"
    >
      <div className="flex items-center justify-center rounded-bl-lg rounded-tl-lg bg-gray-100 p-5 sm:col-span-2">
        <img src={data.image} alt={data.name} className="max-h-60" />
      </div>

      <div className="flex flex-col justify-evenly gap-5 p-5 sm:col-span-3">
        <div className="flex flex-row items-center gap-2">
          <span>{data.rating}</span>
          <Rating value={data.rating} />
          <span className="text-sm font-light">({data.totalRatings})</span>
        </div>

        <div className="flex flex-col gap-1">
          <p className="text-lg font-semibold">{data.name}</p>
          <p>{data.description}</p>

          <ul className="list-disc pl-5 text-sm sm:text-base">
            {data.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-1 justify-end gap-3 sm:grid-cols-2">
          <div className="flex items-center justify-center gap-1 sm:justify-start">
            <strong className="text-2xl text-rose-600">
              $ {currentPrice.toFixed(2)}
            </strong>

            {data.discount && (
              <span className="text-sm text-gray-500 line-through">
                $ {data.price.toFixed(2)}
              </span>
            )}
          </div>

          <div className="flex sm:justify-end">
            <Button type="primary" className="w-full sm:w-fit">
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedProductCard;
