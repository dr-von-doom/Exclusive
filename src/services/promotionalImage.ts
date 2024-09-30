import { requestApi } from "@/services/api";
import { Methods } from "@/types/request.type";

const route = "promotional_imanges";

export type PromotionalImageProps = {
  src: string;
  alt: string;
  href: string;
  className?: string;
};
/**
 * Fetch promotional images from the API
 * @returns {Promise<PromotionalImageProps[]>}
 */
export const getPromotionalImagesFromApi = async (): Promise<
  PromotionalImageProps[]
> => {
  const response = await requestApi(route, Methods.GET, {});
  return response as PromotionalImageProps[];
};
