import { Category } from "@/types/category.type";

const baseURL = import.meta.env.BASE_URL;

export type CategoryBannerProps = {
  category: Category;
};

export const CategoryBanner = ({ category }: CategoryBannerProps) => {
  if (!category) return null;

  return (
    <div className="min-h-30 grid w-full justify-evenly gap-10 rounded-md bg-[radial-gradient(circle,_rgba(46,_46,_46,_1)_0%,_rgba(0,_0,_0,_1)_100%)] px-10 py-5 text-white shadow-md first-line:bg-[rgb(46,_46,_46)] md:grid-cols-2 lg:px-32">
      <div className="flex flex-col justify-center space-y-3">
        <h2 className="my-3 text-2xl md:text-3xl">{category.name}</h2>
        <p className="text-lg md:text-xl">{category.description}</p>
      </div>
      <div>
        {category.imageUrl && (
          <img
            src={`${baseURL}/${category.imageUrl}`}
            alt="Category"
            className="md:max-w-60- h-full w-full rounded-md object-cover p-10"
          />
        )}
      </div>
    </div>
  );
};

export default CategoryBanner;
