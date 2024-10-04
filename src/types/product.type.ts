import { OrderOptions } from "./request.type";

/** Specification type */
export type Spec = {
  [key: string]: string | number | boolean;
};
/** Product type */
export type Product = {
  id: number;
  name: string;
  categoryId: number;
  imageURL: string;
  description: string;
  /** Ratting 0 to 5 */
  rating: number;
  /** Total number of rating */
  totalRatings: number;
  /** Price (with out discount) */
  price: number;
  /** Discount (0 to 1) */
  discount?: number;
  /** Sort list of features (3) */
  features: string[];
  /** List of specifications (used to filter) */
  specs: Spec;
};

/** Product parameters */
export type GetAllProductsParams = {
  categoryId?: number | null;
  filters?: Record<string, string>;
};

/** Product response */
export type GetAllProductsResponse = {
  data: Product[];
  page: number;
  totalPages: number;
  totalProducts: number;
};

/** Product sort options */
export enum ProductSortingOptions {
  DEFAULT = "DEFAULT",
  PRICE_LOW_TO_HIGH = "PRICE_LOW_TO_HIGH",
  PRICE_HIGH_TO_LOW = "PRICE_HIGH_TO_LOW",
  RATING_HIGH_TO_LOW = "RATING_HIGH_TO_LOW",
  DISCOUNT_HIGH_TO_LOW = "DISCOUNT_HIGH_TO_LOW",
}

/** Product sort option type */
export const productSortingOptions: {
  [key in ProductSortingOptions]: {
    label: string;
    value: {
      sort: string | null;
      order: OrderOptions | null;
    };
  };
} = {
  [ProductSortingOptions.DEFAULT]: {
    label: "Default",
    value: {
      sort: null,
      order: null,
    },
  },
  [ProductSortingOptions.RATING_HIGH_TO_LOW]: {
    label: "Rating",
    value: {
      sort: "rating",
      order: OrderOptions.DESC,
    },
  },
  [ProductSortingOptions.DISCOUNT_HIGH_TO_LOW]: {
    label: "Discount",
    value: {
      sort: "discount",
      order: OrderOptions.DESC,
    },
  },
  [ProductSortingOptions.PRICE_LOW_TO_HIGH]: {
    label: "Price (Low to High)",
    value: {
      sort: "price",
      order: OrderOptions.ASC,
    },
  },
  [ProductSortingOptions.PRICE_HIGH_TO_LOW]: {
    label: "Price (High to Low)",
    value: {
      sort: "price",
      order: OrderOptions.DESC,
    },
  },
};