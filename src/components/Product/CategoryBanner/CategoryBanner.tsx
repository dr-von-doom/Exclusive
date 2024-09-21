import { Category } from "@/types/Category";

export type CategoryBannerProps = {
  category: Category;
};

export const CategoryBanner = ({ category }: CategoryBannerProps) => {
  if (!category) return null;

  return (
    <div className="min-h-30 grid w-full justify-evenly gap-10 rounded-md bg-[radial-gradient(circle,_rgba(46,_46,_46,_1)_0%,_rgba(0,_0,_0,_1)_100%)] p-5 text-white shadow-md first-line:bg-[rgb(46,_46,_46)] md:grid-cols-2">
      <div className="flex flex-col justify-center space-y-3">
        <h2 className="text-2xl">{category.name}</h2>
        <p className="text-lg">{category.description}</p>
      </div>
      <div>
        <img
          src="https://picsum.photos/500/300"
          alt="Category"
          className="h-full w-full rounded-md object-cover"
        />
      </div>
    </div>
  );
};

export default CategoryBanner;
