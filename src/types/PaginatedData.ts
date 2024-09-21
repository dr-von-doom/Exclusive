/** Paginated Data */
export type PaginatedData<Type> = {
  data: Type[];
  page: number;
  totalPages: number;
  totalResults: number;
};

/** Sort options */
export type SortOptions<Type> = {
  sortBy?: keyof Type;
  order?: "asc" | "desc";
};

/** Pagination data options */
export type PaginationOptions<Type> = SortOptions<Type> & {
  page?: number;
};
