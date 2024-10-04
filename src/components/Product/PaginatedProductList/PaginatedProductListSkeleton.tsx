import { DetailedProductCardSkeleton } from "../DetailedProductCard/DetailedProductCardSkeleton";

export const PaginatedProductListSkeleton = () => {
  return (
    <>
      <div className="grid animate-pulse gap-5 p-5 sm:grid-cols-2">
        <div className="flex items-center">
          <span className="h-5 w-5 rounded-lg bg-gray-100"></span> /
          <span className="h-5 w-5 rounded-lg bg-gray-100"></span>
        </div>
        <div className="flex items-center space-x-3 sm:justify-self-end">
          <span>Sort by</span>
          <select
            name="sort-by"
            id="sort-by"
            className="sm:flex-0 flex-1 rounded border border-gray-300 p-1 focus:outline-none active:outline-none"
          >
            <option>...</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-5 overflow-y-auto scroll-smooth p-5">
        <DetailedProductCardSkeleton />
      </div>
    </>
  );
};
