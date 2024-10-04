import { getPromotionalImages } from "@/services/promotionalImage.service";
import { PromotionalImageData } from "@/types/promotionalImages.type";
import { useQuery } from "@tanstack/react-query";

export const useGetPromotionalImages = () => {
  return useQuery<PromotionalImageData[], Error>({
    queryKey: ["promotionalImages"],
    queryFn: async () => {
      const images = await getPromotionalImages();
      if (!images || images.length === 0) {
        throw new Error("No promotional images found");
      }
      return images;
    },
  });
};
