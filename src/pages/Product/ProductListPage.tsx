import DetailedProductCard from "@/components/Product/DetailedProductCard";
import BaseLayout from "@/layouts/BaseLayout";
import { getProductBySubCategory } from "@/services/ProductService";
import { Product } from "@/types/Product";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ProductListPage = () => {
  const params = useParams();
  const { category, subcategory } = params;

  const [data, setData] = useState<Product[]>([]);
  const [meta, setMeta] = useState({
    page: 1,
    totalPages: 1,
    totalResults: 0,
  });

  if (!category || !subcategory) return <div>Invalid URL</div>;

  useEffect(() => {
    const results = getProductBySubCategory(subcategory, {
      page: meta.page,
    });

    setData(results.data);
    setMeta(results.meta);
  }, [category, subcategory]);

  return (
    <BaseLayout>
      <div className="flex h-full grow flex-col items-center justify-center bg-slate-100 p-10">
        <h1>Product page list</h1>

        <div className="grid gap-4 sm:grid-cols-3">
          <div className="sm:col-span-1">
            <p>Category: {category}</p>
            <p>Subcategory: {subcategory}</p>
          </div>
          <div className="flex flex-col gap-3 sm:col-span-2">
            <div>
              <div>
                {data.length} out of {meta.totalResults}
              </div>
              <div>Sort by</div>
            </div>
            {data.map((product, index) => (
              <DetailedProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default ProductListPage;
