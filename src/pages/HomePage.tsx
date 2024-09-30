import bannerImage from "@/assets/images/products/products-banner.png";
import { Banner } from "@/components/Home/Banner";
import { PromotionalImage } from "@/components/Home/PromotionalImage";
import { PromotionalImageSkeleton } from "@/components/Home/PromotionalImage/PromotionalImagesSkeleton";
import { FeaturedProductView } from "@/components/Product/FeaturedProductView";
import { useGetPromotionalImages } from "@/Hooks/usePromotionalImages"; 
import BaseLayout from "@/layouts/BaseLayout";

const HomePage = () => {
  const {
    data: promotionalImages,
    error,
    isLoading,
  } = useGetPromotionalImages();


  return (
    <BaseLayout>
      <div className="max-w-full">
        <section>
          {isLoading ? (
            <div className="flex flex-col space-y-4">
              {[...Array(2)].map((_, index) => (
                <PromotionalImageSkeleton key={index} />
              ))}
            </div>
          ) : error ? (
            <p className="text-red-500">
              Error fetching promotional images: {error.message}
            </p>
          ) : promotionalImages && promotionalImages.length > 0 ? (
            promotionalImages.map((image) => (
              <PromotionalImage
                key={image.href}
                src={image.src}
                alt={image.alt}
                href={image.href}
                className={image.className}
              />
            ))
          ) : (
            <p>No hay imágenes promocionales disponibles.</p>
          )}
        </section>
        <FeaturedProductView />
        <Banner
          mainText="Everything you need, just a Click away"
          title="DON'T LET THE WINTER FREEZE"
          subtitle="YOUR WALLET!"
          imageSrc={bannerImage}
          shopNowLink="#"
        />
      </div>
    </BaseLayout>
  );
};

export default HomePage;
