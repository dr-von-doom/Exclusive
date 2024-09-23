import { Button } from "@/components/Button";
import { PaginatedData } from "@/types/PaginatedData";
import { Product } from "@/types/Product";
import { useEffect, useRef } from "react";
import { DetailedProductCard } from "../DetailedProductCard";

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
  const optionSection = useRef<HTMLDivElement>(null);
  const resultsSection = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const rect = optionSection.current?.getClientRects()[0];
    if (rect) {
      resultsSection.current?.style.setProperty(
        "height",
        `calc(100vh - ${rect.height}px)`,
      );
    }
  }, [optionSection]);

  return (
    <>
      <div className="grid gap-5 p-5 sm:grid-cols-2" ref={optionSection}>
        <div className="flex items-center">
          {paginatedData.data.length} out of {paginatedData.totalResults}
        </div>
        <div className="flex items-center space-x-3 sm:justify-self-end">
          <span>Sort by</span>
          <select
            name="sort-by"
            id="sort-by"
            className="sm:flex-0 flex-1 rounded border border-gray-300 p-1 focus:outline-none active:outline-none"
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

      <div
        className="flex flex-col gap-5 overflow-y-auto scroll-smooth p-5"
        ref={resultsSection}
      >
        {paginatedData.data.map((product, index) => (
          <DetailedProductCard key={index} {...product} />
        ))}
      </div>

      <div className="mt-10 flex justify-center">
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
    </>
  );
};

export default PaginatedProductList;
