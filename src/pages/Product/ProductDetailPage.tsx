import ProductDisplay from "@/components/ProductDetail/ProductDisplay/ProductDisplay";
import { Spinner } from "@/components/ProductDetail/Spinner";
import TechnicalSpecifications from "@/components/ProductDetail/TechnicalSpecifications/TechnicalSpecifications";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { ErrorMsg } from "@/components/common/ErrorMsg";
import { useGetProducts } from "@/hooks/useGetProducts";
import BaseLayout from "@/layouts/BaseLayout";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

const ProductDetailPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const location = useLocation();
  const categoryId = location.state?.categoryId;
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
    return <BaseLayout>
      <Spinner />
    </BaseLayout>

  }

  if (isProductError) {
    return (
      <BaseLayout><ErrorMsg
        title="Error loading product"
        message="There was an issue loading the product details."
      /></BaseLayout>
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
      <Breadcrumb className="p-4 pb-20" />
      <ProductDisplay product={selectedProduct} />
      <TechnicalSpecifications specs={selectedProduct.specs} />
    </BaseLayout>
  );
};

export default ProductDetailPage;
