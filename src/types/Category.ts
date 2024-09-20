/** Category group type */
export type CategoryGroup = {
  id: number;
  name: string;
};

/** Category type */
export type Category = {
  id: number;
  name: string;
  groupId: number;
  description?: string;
};
