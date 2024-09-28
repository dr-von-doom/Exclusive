import { Breadcrumb } from "@/components/common/Breadcrumb";
import { CategoryBanner } from "@/components/Product/CategoryBanner";
import { ExploreMoreBanner } from "@/components/Product/ExploreMoreBanner";
import { PaginatedProductList } from "@/components/Product/PaginatedProductList";
import { ProductFilter } from "@/components/Product/ProductFilter";
import BaseLayout from "@/layouts/BaseLayout";
import { Category } from "@/types/category.type";
import { CategoryFilters } from "@/types/filter.type";
import {
  CategoryFilterOptions,
  PaginatedData,
  SortOptions,
} from "@/types/paginatedData.type";
import { Product } from "@/types/product.type";
import {
  getCategoryByName,
  getFilters,
  getProductByCategory,
} from "@/utils/data";
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

  // Initialize the state
  const [paginatedData, setPaginatedData] = useState<PaginatedData<Product>>({
    data: [],
    page: 1,
    totalResults: 0,
    totalPages: 0,
  });

  const [category, setCategory] = useState<Category | null>(null);
  const [sortOptions, setSortOptions] = useState<SortOptions<Product>>({});
  const [categoryFilters, setCategoryFilters] =
    useState<CategoryFilters | null>(null);
  const [selectedFilters, setSelectedFilters] =
    useState<CategoryFilterOptions | null>(null);

  // Fetch the category data
  useEffect(() => {
    const category = getCategoryByName(categoryName);
    setCategory(category);
  }, [categoryName]);

  // Fetch the products by category and category filters
  useEffect(() => {
    if (!category) return;
    const results = getProductByCategory(
      category.id,
      {
        page: paginatedData.page,
        ...sortOptions,
      },
      selectedFilters,
    );

    const categoryFilters = getFilters(category.id);
    setCategoryFilters(categoryFilters);
    setPaginatedData(results);
  }, [category]);

  useEffect(() => {
    if (!category) return;

    const results = getProductByCategory(
      category.id,
      {
        page: 1,
        ...sortOptions,
      },
      selectedFilters,
    );

    setPaginatedData(results);
  }, [sortOptions, selectedFilters]);

  if (!category) return <div>Loading...</div>;

  /**
   * It handles loading more products
   */
  const handleLoadMoreProducts = () => {
    if (!category) return;

    const results = getProductByCategory(
      category.id,
      {
        page: paginatedData.page + 1,
        ...sortOptions,
      },
      selectedFilters,
    );

    setPaginatedData({
      ...results,
      data: [...paginatedData.data, ...results.data],
    });
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
            <PaginatedProductList
              paginatedData={paginatedData}
              sortOptionsList={sortOptionsList}
              onLoadMore={handleLoadMoreProducts}
              onSort={handleSortProducts}
            />
          </div>
        </div>
      </div>

      <ExploreMoreBanner />
    </BaseLayout>
  );
};

export default ProductListPage;
