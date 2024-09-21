import { useState } from 'react';
import categories from '../../data/categories.json';
import categoryGroups from '../../data/category-groups.json';
import { Category, CategoryGroup } from '../../types/Category';

export const Subheader = () => {
  const [categoriesState] = useState<CategoryGroup[]>(categoryGroups);
  const [subcategoriesState] = useState<Category[]>(categories);

  const getSubcategoriesForCategory = (groupId: number) =>
    subcategoriesState.filter((subcategory) => subcategory.groupId === groupId);

  return (
    <nav className="bg-white m-0 p-4 text-center text-sm md:text-base">
      <ul className="flex justify-center list-none space-x-5 lg:justify-start">
        {categoriesState.map((category) => (
          <li className="relative group" key={category.id}>
            <a className="text-black hover:text-red-500 cursor-pointer py-3 ">
              {category.name}
            </a>
            <ul
              className="absolute hidden group-hover:block z-10 bg-white border border-gray-400 rounded mt-2 p-2 lg:w-36 
              left-1/2 transform -translate-x-1/2 lg:left-auto lg:transform-none"
            >
              {getSubcategoriesForCategory(category.id).map((subcategory) => (
                <li className="mb-2 last:mb-0" key={subcategory.id}>
                  <a
                    href={`/category/${category.name}/${subcategory.name}`}
                    className="block text-black hover:text-red-500"
                  >
                    {subcategory.name}
                  </a>
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
