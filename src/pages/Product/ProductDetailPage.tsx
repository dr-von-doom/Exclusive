import ProductDisplay from "@/components/ProductDetail/ProductDisplay/ProductDisplay";
import { Spinner } from "@/components/ProductDetail/Spinner";
import TechnicalSpecifications from "@/components/ProductDetail/TechnicalSpecifications/TechnicalSpecifications";
import { ErrorMsg } from "@/components/common/ErrorMsg";
import { useGetProducts } from "@/hooks/useGetProducts";
import BaseLayout from "@/layouts/BaseLayout";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetailPage = () => {
  const { productId, categoryId } = useParams<{ productId: string; categoryId: string }>();
  const [paginationOptions] = useState({
    _page: 1,
    _per_page: 10,
  });

  const {
    data: productData,
    isLoading: isProductLoading,
    isError: isProductError,
    refetch,
  } = useGetProducts(
    {
      categoryId: Number(categoryId),
      filters: {},
    },
    paginationOptions
  );

  useEffect(() => {
    refetch();
  }, [refetch]);

  let selectedProduct;

  if (productData) {
    const allProducts = productData?.pages?.flatMap((page) => page.data) ?? [];
    selectedProduct = allProducts.find((product) => product.id === Number(productId));

    if (selectedProduct && selectedProduct.discount === undefined) {
      selectedProduct.discount = 0;
    }
  }

  if (isProductLoading) {
    return <Spinner />;
  }

  if (isProductError) {
    return (
      <ErrorMsg
        title="Error loading product"
        message="There was an issue loading the product details."
      />
    );
  }

  if (!selectedProduct) {
    return (
      <BaseLayout>
        <ErrorMsg title="Product not found" message="No products were found." />
      </BaseLayout>
    );
  }

  return (
    <BaseLayout>
      <ProductDisplay product={selectedProduct} />
      <TechnicalSpecifications specs={selectedProduct.specs} />
    </BaseLayout>
  );
};

export default ProductDetailPage;
