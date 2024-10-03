// hooks/usePromotionalImages.ts
import { useQuery } from "@tanstack/react-query";
import { getPromotionalImages } from "@/services/promotionalImage.ts"; 
import { PromotionalImageData } from "@/types/promotional.images";

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
