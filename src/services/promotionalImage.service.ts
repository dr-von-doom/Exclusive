import { requestApi } from "@/services/api";
import { PromotionalImageData } from "@/types/promotionalImages.type";
import { Methods } from "@/types/request.type";

const route = "promotional_imanges";

/**
 * @returns {Promise<PromotionalImageProps[]>}
 */
export const getPromotionalImages = async (): Promise<
  PromotionalImageData[]
> => {
  const response = await requestApi(route, Methods.GET, {});
  return response as PromotionalImageData[];
};
