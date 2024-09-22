export type FilterOption = {
  name: string;
  type: "checkbox" | "radio";
  options: string[];
};

export type Filter = {
  categoryId: number;
  filters: FilterOption[];
};
