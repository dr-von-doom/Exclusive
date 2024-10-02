export type CategoryFiltersOptions = {
  name: string;
  type: "checkbox" | "radio";
  options: string[];
};

export type CategoryFilters = {
  categoryId: number;
  filters: CategoryFiltersOptions[];
};
