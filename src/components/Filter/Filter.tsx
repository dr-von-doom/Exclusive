import filtersData from "@/data/filters.json";
import { Filter as FilterType } from "@/types/Filter";
import { useState } from "react";

export const Filter = () => {
  const [openFilters, setOpenFilters] = useState<Set<string>>(new Set());

  const capitalizeFirstLetter = (string: string): string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const toggleFilter = (filterName: string) => {
    const newOpenFilters = new Set(openFilters);
    if (newOpenFilters.has(filterName)) {
      newOpenFilters.delete(filterName);
    } else {
      newOpenFilters.add(filterName);
    }
    setOpenFilters(newOpenFilters);
  };

  return (
    <div className="font-poppins m-0 border p-4 md:p-6">
      <h2 className="text-xl md:text-2xl text-black mb-4">Filters</h2>
      {(filtersData as FilterType[]).map((filterCategory: FilterType) => (
        <div key={filterCategory.categoryId} className="bg-white mb-4">
          {filterCategory.filters.map((filter) => (
            <div key={filter.name} className="mb-2">
              <div
                className="flex cursor-pointer items-center border border-gray-300 bg-gray-100 px-3 py-2 rounded-md"
                onClick={() => toggleFilter(filter.name)}
              >
                <span
                  className={`mr-2 transition-transform ${
                    openFilters.has(filter.name) ? "rotate-0" : "rotate-180"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <span className="text-sm">{capitalizeFirstLetter(filter.name)}</span>
              </div>
              {openFilters.has(filter.name) && (
                <ul className="border border-gray-300 p-2 rounded-md">
                  {filter.options.map((option) => (
                    <li key={option} className="flex items-center rounded p-2">
                      <input
                        type={filter.type}
                        id={option}
                        name={filter.name}
                        className="h-4 w-4 cursor-pointer rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <label
                        htmlFor={option}
                        className="text-black-600 ml-2 cursor-pointer text-sm"
                      >
                        {option}
                      </label>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Filter;
