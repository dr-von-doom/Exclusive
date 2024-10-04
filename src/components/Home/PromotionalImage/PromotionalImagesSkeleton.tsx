import PlaceholderImage from "@/assets/icons/placeholder.svg?react";

export const PromotionalImageSkeleton = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="h-40 w-full max-w-md animate-pulse overflow-hidden rounded-lg bg-gray-200 p-4 shadow-lg">
        <PlaceholderImage className="h-full w-full" />
      </div>

      <div className="h-40 w-full max-w-md animate-pulse overflow-hidden rounded-lg bg-gray-200 p-4 shadow-lg mt-4 mb-4">
        <PlaceholderImage className="h-full w-full" />
      </div>

    </div>
  );
};
