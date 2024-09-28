import { Category } from "@/types/category.type";
import { getCategoryByName } from "@/utils/data";
import { useQuery } from "@tanstack/react-query";

export const useGetCategoryByName = (categoryName: string) => {
  return useQuery<Category, Error>({
    queryKey: ["category", categoryName],
    queryFn: async () => {
      const category = getCategoryByName(categoryName);

      if (!category) {
        throw new Error("Category not found");
      }
      return category;
    },
  });
};
