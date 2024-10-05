import { YouMightLike } from "@/components/Product/MoreProducts";
import ProductDisplay from "@/components/ProductDetail/ProductDisplay/ProductDisplay";
import { Spinner } from "@/components/ProductDetail/Spinner";
import TechnicalSpecifications from "@/components/ProductDetail/TechnicalSpecifications/TechnicalSpecifications";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { ErrorMsg } from "@/components/common/ErrorMsg";
import { useGetProductById } from "@/hooks/useGetProductsById";
import BaseLayout from "@/layouts/BaseLayout";
import { useEffect } from "react"; // Asegúrate de importar useEffect
import { useParams } from "react-router-dom";

const ProductDetailPage = () => {
  const { productId = "" } = useParams<{ productId: string }>();

  // Utiliza el nuevo hook para obtener el producto por ID
  const {
    data: selectedProduct,
    isLoading: isProductLoading,
    isError: isProductError,
  } = useGetProductById(productId); // Cambia aquí

  // Agrega un efecto para desplazar suavemente hacia arriba
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (isProductLoading) {
    return (
      <BaseLayout>
        <Spinner />
      </BaseLayout>
    );
  }

  if (isProductError) {
    return (
      <BaseLayout>
        <ErrorMsg
          title="Error loading product"
          message="There was an issue loading the product details."
        />
      </BaseLayout>
    );
  }

  if (!selectedProduct) {
    return (
      <BaseLayout>
        <ErrorMsg title="Product not found" message="No products were found." />
      </BaseLayout>
    );
  }

  // Asegúrate de que el descuento esté definido
  if (selectedProduct.discount === undefined) {
    selectedProduct.discount = 0;
  }

  return (
    <BaseLayout>
      <Breadcrumb className="p-4 pb-20" />
      <ProductDisplay product={selectedProduct} />
      <TechnicalSpecifications specs={selectedProduct.specs} />
      <YouMightLike currentCategoryId={selectedProduct.categoryId} />
    </BaseLayout>
  );
};

export default ProductDetailPage;
