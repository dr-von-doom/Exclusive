import { Breadcrumb } from "@/components/common/Breadcrumb";
import { CategoryBanner } from "@/components/Product/CategoryBanner";
import { ExploreMoreBanner } from "@/components/Product/ExploreMoreBanner";
import { ProductFilter } from "@/components/Product/ProductFilter";
import { useGetProducts } from "@/hooks/useGetProducts";
import BaseLayout from "@/layouts/BaseLayout";
import { Category } from "@/types/category.type";
import { CategoryFilters } from "@/types/filter.type";
import { CategoryFilterOptions, SortOptions } from "@/types/paginatedData.type";
import { Product } from "@/types/product.type";
import { getCategoryByName } from "@/utils/data";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const sortOptionsList = [
  { value: "", label: "Default" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Rating" },
];

export const ProductListPage = () => {
  // Get the group and category name from the URL
  const params = useParams();
  const { group: groupName, category: categoryName } = params;

  // Check if the group and category
  if (!groupName || !categoryName) return <div>Invalid URL</div>;

  const [category, setCategory] = useState<Category | null>(null);
  const [sortOptions, setSortOptions] = useState<SortOptions<Product>>({});
  const [categoryFilters] = useState<CategoryFilters | null>(null);
  const [selectedFilters, setSelectedFilters] =
    useState<CategoryFilterOptions | null>(null);

  const { isLoading, isSuccess, isError, data: products } = useGetProducts();

  console.log(products);

  // Fetch the category data
  useEffect(() => {
    const category = getCategoryByName(categoryName);
    setCategory(category);
  }, [categoryName]);

  if (!category) return <div>Loading...</div>;

  /**
   * It handles loading more products
   */
  const handleLoadMoreProducts = () => {
    if (!category) return;
  };

  /**
   * It handles sorting products
   */
  const handleSortProducts = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;

    switch (value) {
      case "price-asc":
        setSortOptions({ sortBy: "price", order: "asc" });
        break;
      case "price-desc":
        setSortOptions({ sortBy: "price", order: "desc" });
        break;
      case "rating":
        setSortOptions({ sortBy: "rating", order: "desc" });
        break;
      default:
        setSortOptions({});
        break;
    }
  };

  const handleFilterChange = (selectedOptions: CategoryFilterOptions) => {
    setSelectedFilters(selectedOptions);
  };

  return (
    <BaseLayout>
      <Breadcrumb />
      <div className="flex h-full grow flex-col items-center justify-center gap-5 p-10">
        <CategoryBanner category={category} />

        <div className="my-10 grid w-full gap-4 sm:grid-cols-4">
          <div className="sm:col-span-1">
            {categoryFilters && (
              <ProductFilter
                onFilterChange={handleFilterChange}
                categoryFilters={categoryFilters}
              />
            )}
          </div>
          <div className="flex flex-col gap-3 sm:col-span-3">
            {/* <PaginatedProductList
              paginatedData=}
              sortOptionsList={sortOptionsList}
              onLoadMore={handleLoadMoreProducts}
              onSort={handleSortProducts}
            /> */}
          </div>
        </div>
      </div>

      <ExploreMoreBanner />
    </BaseLayout>
  );
};

export default ProductListPage;
