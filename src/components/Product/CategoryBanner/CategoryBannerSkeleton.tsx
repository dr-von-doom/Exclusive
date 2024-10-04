import PlaceholderImage from "@/assets/images/placeholder.svg?react";

export const CategoryBannerSkeleton = () => {
  return (
    <div className="min-h-30 grid w-full animate-pulse justify-evenly gap-10 rounded-md bg-gray-100 px-10 py-5 shadow-md md:grid-cols-2 lg:px-32">
      <div className="flex flex-col justify-center space-y-3">
        <div className="my-3 mb-4 h-8 w-52 rounded-xl bg-gray-300"></div>
        <div className="h-7 w-80 rounded-xl bg-gray-300"></div>
        <div className="w-100 h-7 rounded-xl bg-gray-300"></div>
        <div className="h-7 w-64 rounded-xl bg-gray-300"></div>
      </div>

      <div className="flex h-48 w-full items-center justify-center rounded bg-gray-300">
        <PlaceholderImage className="h-1/2 w-1/2" />
      </div>
    </div>
  );
};
