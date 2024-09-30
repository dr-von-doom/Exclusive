import Breadcrumb from '@/components/common/Breadcrumb/Breadcrumb';
import ProductDisplay from '@/components/ProductDetail/ProductDisplay/ProductDisplay';
import TechnicalSpecifications from '@/components/ProductDetail/TechnicalSpecifications/TechnicalSpecifications';
import BaseLayout from '@/layouts/BaseLayout';

const ProductDetailPage = () => {
  return (
    <BaseLayout>
      <Breadcrumb />
      <ProductDisplay />
      <TechnicalSpecifications />
    </BaseLayout>
  );
};

export default ProductDetailPage;
