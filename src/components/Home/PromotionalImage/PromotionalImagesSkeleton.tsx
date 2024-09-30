import PlaceholderImage from "@/assets/icons/placeholder.svg?react";

export const PromotionalImageSkeleton = () => {
  return (
    <div className="flex flex-col justify-center items-center p-4 animate-pulse"> {/* Cambiado a flex-col */}
      <PlaceholderImage className="h-40 w-full max-w-md" />
    </div>
  );
};
