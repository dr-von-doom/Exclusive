import CategoryBanner from "@/components/Product/CategoryBanner";
import PaginatedProductList from "@/components/Product/PaginatedProductList";
import BaseLayout from "@/layouts/BaseLayout";
import { Category } from "@/types/Category";
import { PaginatedData, SortOptions } from "@/types/PaginatedData";
import { Product } from "@/types/Product";
import { getCategoryByName, getProductByCategory } from "@/utils/data";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const sortOptionsList = [
  { value: null, label: "Default" },
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

  // Fetch the category data
  useEffect(() => {
    const category = getCategoryByName(categoryName);
    setCategory(category);
  }, [categoryName]);

  // Fetch the products by category
  useEffect(() => {
    if (!category) return;
    const results = getProductByCategory(category.id, {
      page: paginatedData.page,
      ...sortOptions,
    });

    setPaginatedData(results);
  }, [category, sortOptions]);

  if (!category) return <div>Loading...</div>;

  /**
   * It handles loading more products
   */
  const handleLoadMoreProducts = () => {
    if (!category) return;

    const results = getProductByCategory(category.id, {
      page: paginatedData.page + 1,
      ...sortOptions,
    });

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

  return (
    <BaseLayout>
      <div className="flex h-full grow flex-col items-center justify-center gap-5 p-10">
        <CategoryBanner category={category} />

        <div className="grid gap-4 sm:grid-cols-3">
          <div className="sm:col-span-1">
            <p>Filters</p>
          </div>
          <div className="flex flex-col gap-3 sm:col-span-2">
            <PaginatedProductList
              paginatedData={paginatedData}
              sortOptionsList={sortOptionsList}
              onLoadMore={handleLoadMoreProducts}
              onSort={handleSortProducts}
            />
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default ProductListPage;
