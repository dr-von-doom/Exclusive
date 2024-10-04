import { getCategoryByName } from "@/services/category.service";
import { Category } from "@/types/category.type";
import { useQuery } from "@tanstack/react-query";

export const useGetCategoryByName = (categoryName: string) => {
  return useQuery<Category, Error>({
    queryKey: ["category-by-name", categoryName],
    queryFn: async () => {
      const category = await getCategoryByName(categoryName);

      if (!category) {
        throw new Error("Category not found");
      }
      return category;
    },
  });
};
