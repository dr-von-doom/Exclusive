import PlaceholderImage from "@/assets/images/placeholder.svg?react";
import { Rating } from "@/components/common/Rating";

export const DetailedProductCardSkeleton = () => {
  return (
    <div className="grid animate-pulse gap-5 rounded-lg border border-slate-200 shadow-sm lg:grid-cols-5">
      <div className="flex items-center justify-center rounded-bl-lg rounded-tl-lg bg-gray-100 p-5 lg:col-span-2">
        <PlaceholderImage className="h-1/2 w-1/2" />
      </div>

      <div className="flex flex-col justify-evenly gap-5 p-5 lg:col-span-3">
        <div className="flex flex-row items-center gap-2">
          <div className="h-6 w-6 rounded-lg bg-gray-300"></div>
          <Rating value={0} />
          <div className="h-6 w-6 rounded-lg bg-gray-300"></div>
        </div>

        <div className="flex flex-col gap-1 space-y-2">
          <div className="h-7 w-80 rounded-lg bg-gray-300"></div>
          <div className="h-6 w-full rounded-lg bg-gray-300"></div>

          <div className="space-y-2 pl-5">
            <div className="h-6 w-80 rounded-lg bg-gray-300"></div>
            <div className="h-6 w-80 rounded-lg bg-gray-300"></div>
            <div className="h-6 w-80 rounded-lg bg-gray-300"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 justify-end gap-3 lg:grid-cols-2">
          <div className="flex items-center justify-center gap-1 lg:justify-start">
            <div className="h-8 w-24 rounded-lg bg-gray-300"></div>

            <div className="h-5 w-20 rounded-lg bg-gray-300"></div>
          </div>

          <div className="flex lg:justify-end">
            <div className="h-10 w-32 rounded-lg bg-gray-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
