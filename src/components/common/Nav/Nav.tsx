import categories from "@/data/categories.json";
import categoryGroups from "@/data/category-groups.json";
import { CategoryGroup } from "@/types/category.type";
import { Link } from "react-router-dom";

const toKebabCase = (str: string) => str.toLowerCase().replace(/\s+/g, "-");

export const Nav = () => {
  const getSubcategoriesForCategory = (groupId: number) =>
    categories.filter((subcategory) => subcategory.groupId === groupId);

  return (
    <nav className="m-0 bg-white p-4 text-center font-poppins text-sm md:text-base">
      <ul className="flex list-none justify-center space-x-5 pr-4 lg:justify-start lg:pl-4">
        {categoryGroups.map((category: CategoryGroup) => (
          <li className="group relative" key={category.id}>
            <a className="cursor-pointer py-3 text-black hover:text-red-500">
              {category.name}
            </a>
            <ul className="absolute left-1/2 z-10 mt-2 hidden -translate-x-1/2 transform rounded border border-gray-400 bg-white p-2 group-hover:block lg:left-auto lg:w-max lg:transform-none lg:whitespace-nowrap lg:text-start">
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

export default Nav;
