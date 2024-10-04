import bannerImage from "@/assets/images/products/products-banner.png";
import { Banner } from "@/components/Home/Banner";
import { PromotionalImage } from "@/components/Home/PromotionalImage";
import { FeaturedProductView } from "@/components/Product/FeaturedProductView";
import { useGetPromotionalImages } from "@/Hooks/usePromotionalImages"; 
import BaseLayout from "@/layouts/BaseLayout";
import { ErrorMsg } from "@/components/common/ErrorMsg"; 
import { PromotionalImageSkeleton } from "@/components/Home/PromotionalImage/PromotionalImagesSkeleton";

const HomePage = () => {
  const {
    data: promotionalImages,
    error: promotionalImageError, 
    isLoading,  
  } = useGetPromotionalImages();


  if (isLoading) {
    return (
      <BaseLayout>
        <div className="flex flex-wrap justify-center gap-4">
          <PromotionalImageSkeleton />
        </div>
      </BaseLayout>
    );
  }


  if (promotionalImageError) {
    return (
      <BaseLayout>
        <ErrorMsg 
          title="Something went wrong. Please try again later."
          message={promotionalImageError.message}
        />
      </BaseLayout>
    );
  }

  return (
    <BaseLayout>
      <div className="max-w-full">
        <section>
          <div className="flex flex-col">
            {promotionalImages && promotionalImages.length > 0 ? (
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
              <p>No promotional images available</p> 
            )}
          </div>
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
