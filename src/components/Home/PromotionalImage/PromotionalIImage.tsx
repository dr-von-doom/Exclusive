import { PromotionalImageData } from "@/types/promotional.images";
import { ErrorMsg } from "@/components/ErrorMsg"; 
import { PromotionalImageSkeleton } from "@/components/Home/PromotionalImage/PromotionalImagesSkeleton";

export type PromotionalImageProps = {
  isLoading?: boolean;
  error?: Error | null;
} & PromotionalImageData; 


export const PromotionalImage = ({
  src,
  alt,
  href,
  className = "",
  isLoading = false,
  error = null,
}: PromotionalImageProps) => {
  if (error) {
    return (
      <ErrorMsg
        title="Something went wrong. Please try again later."
        message={error.message}
      />
    );
  }

  if (isLoading) {
    return <PromotionalImageSkeleton />;
  }

  return (
    <a href={href} className="block p-4">
      <img
        src={src}
        alt={alt}
        className={`h-auto max-w-full rounded-[20px] shadow-md ${className}`}
      />
    </a>
  );
};

export default PromotionalImage;
