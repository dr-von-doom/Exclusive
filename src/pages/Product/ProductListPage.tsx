import { Breadcrumb } from "@/components/common/Breadcrumb";
import { ErrorMsg } from "@/components/common/ErrorMsg";
import { CategoryBanner } from "@/components/Product/CategoryBanner";
import { ExploreMoreBanner } from "@/components/Product/ExploreMoreBanner";
import { PaginatedProductList } from "@/components/Product/PaginatedProductList";
import { useGetCategoryByName } from "@/hooks/useGetCategoryByName";
import { useGetFilters } from "@/hooks/useGetFilters";
import { useGetProducts } from "@/hooks/useGetProducts";
import BaseLayout from "@/layouts/BaseLayout";
import {
  productSortingOptions,
  ProductSortingOptions,
} from "@/types/product.type";
import { PaginationOptions } from "@/types/request.type";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ProductListPage = () => {
  // Get the group and category name from the URL
  const params = useParams();
  const { group: groupName, category: categoryName } = params;

  // Check if the group and category
  if (!groupName || !categoryName) return <div>Invalid URL</div>;

  // Init the states
  const [paginationOptions, setPaginationOptions] = useState<PaginationOptions>(
    {
      _page: 1,
      _per_page: 10,
    },
  );

  const {
    isLoading: isCategoryLoading,
    error: categoryError,
    data: category,
  } = useGetCategoryByName(categoryName);

  // const {} = useGetFilters();

  const {
    data: productData,
    fetchNextPage,
    hasNextPage,
    isLoadingError: isProductLoadingError,
    isLoading: isProductLoading,
    refetch,
  } = useGetProducts(
    {
      categoryId: category?.id,
      filters: {},
    },
    paginationOptions,
  );

  const onLoadMore = () => {
    if (!hasNextPage) return;

    fetchNextPage();
  };

  const onSort = (sortingOption: ProductSortingOptions) => {
    const { sort, order } = productSortingOptions[sortingOption].value;

    console.log(sort, order);
    setPaginationOptions((prev) => ({
      ...prev,
      _sort: sort,
      _order: order,
    }));
  };

  useEffect(() => {
    refetch();
  }, [paginationOptions, refetch]);

  return (
    <BaseLayout>
      <div className="flex h-full grow flex-col items-center justify-center gap-5 p-8">
        <Breadcrumb className="!p-0" />

        {isProductLoadingError || categoryError ? (
          <ErrorMsg
            title="Something went wrong."
            message="Please try again later. If the problem persists, please contact us."
          />
        ) : (
          <>
            <CategoryBanner
              category={category}
              isLoading={isCategoryLoading}
              error={categoryError}
            />

            <div className="my-10 grid w-full gap-4 sm:grid-cols-4">
              <div className="sm:col-span-1">
                {/* {categoryFilters && (
                  <ProductFilter
                    onFilterChange={handleFilterChange}
                    categoryFilters={categoryFilters}
                  />
                )} */}
              </div>
              <div className="flex flex-col gap-3 sm:col-span-3">
                <PaginatedProductList
                  products={
                    productData?.pages.flatMap((page) => page.data) || []
                  }
                  isLoading={isProductLoading}
                  totalProducts={productData?.pages[0]?.totalProducts || 0}
                  hasNextPage={hasNextPage}
                  onLoadMore={onLoadMore}
                  onSort={onSort}
                />
              </div>
            </div>
          </>
        )}
      </div>

      <ExploreMoreBanner />
    </BaseLayout>
  );
};

export default ProductListPage;
