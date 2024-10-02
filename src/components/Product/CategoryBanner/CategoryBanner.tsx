import { ErrorMsg } from "@/components/common/ErrorMsg";
import { Category } from "@/types/category.type";
import { CategoryBannerSkeleton } from "./CategoryBannerSkeleton";

const baseUrl = import.meta.env.BASE_URL;

export type CategoryBannerProps = {
  category?: Category;
  isLoading?: boolean;
  error?: Error | null;
};

export const CategoryBanner = ({
  category,
  isLoading = false,
  error = null,
}: CategoryBannerProps) => {
  if (error)
    return (
      <ErrorMsg
        title="Something went wrong. Please try again later."
        message={error.message}
      />
    );

  if (isLoading) return <CategoryBannerSkeleton />;

  if (!category)
    return (
      <ErrorMsg
        title="Category not found"
        message="The category you are looking for does not exist."
      />
    );

  return (
    <div className="min-h-30 grid w-full justify-evenly gap-10 rounded-md bg-[radial-gradient(circle,_rgba(46,_46,_46,_1)_0%,_rgba(0,_0,_0,_1)_100%)] px-10 py-5 text-white shadow-md first-line:bg-[rgb(46,_46,_46)] md:grid-cols-2 lg:px-32">
      <div className="flex flex-col justify-center space-y-3">
        <h2 className="my-3 text-2xl md:text-3xl">{category.name}</h2>
        <p className="text-lg md:text-xl">{category.description}</p>
      </div>
      <div>
        {category.imageUrl && (
          <img
            src={`${baseUrl}${category.imageUrl}`}
            alt="Category"
            className="md:max-w-60- h-full w-full rounded-md object-cover p-10"
          />
        )}
      </div>
    </div>
  );
};

export default CategoryBanner;
