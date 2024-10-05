import { getFilters } from "@/services/filters.service";
import { CategoryFilters } from "@/types/filter.type";
import { useQuery } from "@tanstack/react-query";

export const useGetFilters = (categoryId: string) => {
  return useQuery<CategoryFilters, Error>({
    queryKey: ["filters", categoryId],
    queryFn: async () => {
      const filters = await getFilters(categoryId);
      return filters;
    },
  });
};
