import { requestApi } from "@/services/api";
import { Methods } from "@/types/request.type";
import { PromotionalImageData } from "@/types/promotional.images";

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
