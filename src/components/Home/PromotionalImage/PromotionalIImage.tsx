import { ErrorMsg } from "@/components/common/ErrorMsg";
import { PromotionalImageSkeleton } from "@/components/Home/PromotionalImage/PromotionalImagesSkeleton";
import { useGetPromotionalImages } from "@/hooks/useGetPromotionalImages";
import { PromotionalImageData } from "@/types/promotionalImages.type";

export const PromotionalImage = () => {
  const {
    data: promotionalImages,
    isLoading,
    error,
  } = useGetPromotionalImages();

  if (isLoading) {
    return <PromotionalImageSkeleton />;
  }

  if (error) {
    return (
      <ErrorMsg
        title="Error loading promotional images"
        message={error.message}
      />
    );
  }

  return (
    <section>
      <div className="flex flex-col">
        {promotionalImages && promotionalImages.length > 0 ? (
          promotionalImages.map((image: PromotionalImageData) => (
            <a key={image.href} href={image.href} className="block p-3">
              <img
                src={image.src}
                alt={image.alt}
                className={`h-auto max-w-full rounded-[20px] shadow-md ${image.className}`}
              />
            </a>
          ))
        ) : (
          <p>No promotional images available</p>
        )}
      </div>
    </section>
  );
};

export default PromotionalImage;
