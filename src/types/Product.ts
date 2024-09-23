/** Specification type */
export type Spec = {
  name: string;
  value: string;
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
  specs: Spec[];
};