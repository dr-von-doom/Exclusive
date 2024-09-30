import PlaceholderImage from "@/assets/icons/placeholder.svg?react";

export const PromotionalImageSkeleton = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="h-40 w-full max-w-md animate-pulse overflow-hidden rounded-lg bg-gray-200 p-4 shadow-lg">
        <PlaceholderImage className="h-full w-full" />
      </div>

      <div className="mt-4 h-4 w-3/4 animate-pulse rounded-full bg-gray-200"></div>
      <div className="mt-2 h-4 w-1/2 animate-pulse rounded-full bg-gray-200"></div>
    </div>
  );
};
