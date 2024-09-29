/** Api methods */
export enum Methods {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
  PATCH = "PATCH",
}

export enum OrderOptions {
  ASC = "asc",
  DESC = "desc",
}

/** It represent the pagination Options */
export type PaginationOptions = {
  _page?: number;
  _per_page?: number;
  _sort?: string;
  _order?: OrderOptions;
};
