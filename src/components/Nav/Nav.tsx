import categories from "@/data/categories.json";
import categoryGroups from "@/data/category-groups.json";
import { CategoryGroup } from "@/types/Category";
import { Link } from "react-router-dom";

const toKebabCase = (str: string) =>
  str.toLowerCase().replace(/\s+/g, "-");

export const Subheader = () => {
  const getSubcategoriesForCategory = (groupId: number) =>
    categories.filter((subcategory) => subcategory.groupId === groupId);

  return (
    <nav className="bg-white m-0 p-4 text-center text-sm md:text-base font-poppins">
      <ul className="flex justify-center list-none space-x-5 lg:justify-start pr-4 lg:pl-4">
        {categoryGroups.map((category: CategoryGroup) => (
          <li className="relative group" key={category.id}>
            <a className="text-black hover:text-red-500 cursor-pointer py-3">
              {category.name}
            </a>
            <ul
              className="absolute hidden lg:text-start group-hover:block z-10 bg-white border border-gray-400 rounded mt-2 p-2 lg:w-auto lg:w-max lg:whitespace-nowrap
              left-1/2 transform -translate-x-1/2 lg:left-auto lg:transform-none"
            >
              {getSubcategoriesForCategory(category.id).map((subcategory) => (
                <li className="mb-2 last:mb-0" key={subcategory.id}>
                  <Link
                    to={`/category/${toKebabCase(category.name)}/${toKebabCase(subcategory.name)}`}
                    className="block text-black hover:text-red-500"
                  >
                    {subcategory.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Subheader;
