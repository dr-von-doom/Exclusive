import Button from "@/components/Button";
import { PaginatedData } from "@/types/PaginatedData";
import { Product } from "@/types/Product";
import DetailedProductCard from "../DetailedProductCard";

export type PaginatedProductListProps = {
  paginatedData: PaginatedData<Product>;
  sortOptionsList: { value: string; label: string }[];
  onLoadMore: () => void;
  onSort: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

export const PaginatedProductList = ({
  paginatedData,
  sortOptionsList,
  onLoadMore,
  onSort,
}: PaginatedProductListProps) => {
  return (
    <>
      <div className="flex flex-row justify-between">
        <div>
          {paginatedData.data.length} out of {paginatedData.totalResults}
        </div>
        <div className="space-x-3">
          <span>Sort by</span>
          <select
            name="sort-by"
            id="sort-by"
            className="rounded border border-gray-300 p-1 focus:outline-none active:outline-none"
            onChange={onSort}
          >
            {sortOptionsList.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        {paginatedData.data.map((product, index) => (
          <DetailedProductCard key={index} {...product} />
        ))}

        <div className="flex justify-center">
          {paginatedData.page < paginatedData.totalPages && (
            <Button
              type="secondary"
              onClick={() => onLoadMore()}
              className="w-fit"
            >
              Load More
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default PaginatedProductList;
