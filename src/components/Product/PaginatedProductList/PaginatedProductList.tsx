import { Button } from "@/components/common/Button";
import {
  GetAllProductsResponse,
  ProductSortingOptions,
  productSortingOptions,
} from "@/types/product.type";
import { useEffect, useRef } from "react";
import { DetailedProductCard } from "../DetailedProductCard";

export type PaginatedProductListProps = {
  products: GetAllProductsResponse;
  onLoadMore: () => void;
  onSort: (sortingOption: ProductSortingOptions) => void;
};

export const PaginatedProductList = ({
  products,
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
          {products.data.length} out of {products.totalProducts}
        </div>
        <div className="flex items-center space-x-3 sm:justify-self-end">
          <span>Sort by</span>
          <select
            name="sort-by"
            id="sort-by"
            className="sm:flex-0 flex-1 rounded border border-gray-300 p-1 focus:outline-none active:outline-none"
            onChange={(e) => onSort(e.target.value as ProductSortingOptions)}
          >
            {Object.keys(productSortingOptions).map((key) => {
              const { label } =
                productSortingOptions[
                  key as keyof typeof productSortingOptions
                ];

              return (
                <option key={key} value={key}>
                  {label}
                </option>
              );
            })}
          </select>
        </div>
      </div>

      <div
        className="flex flex-col gap-5 overflow-y-auto scroll-smooth p-5"
        ref={resultsSection}
      >
        {products.data.map((product, index) => (
          <DetailedProductCard key={index} {...product} />
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        {products.page < products.totalPages && (
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
