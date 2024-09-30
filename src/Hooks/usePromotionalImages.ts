// hooks/usePromotionalImages.ts
import { useQuery } from "@tanstack/react-query";
import { getPromotionalImagesFromApi } from "@/services/promotionalImage.ts"; // Asegúrate de que la ruta sea correcta
import { PromotionalImageProps } from "@/components/Home/PromotionalImage";

export const useGetPromotionalImages = () => {
  return useQuery<PromotionalImageProps[], Error>({
    queryKey: ["promotionalImages"],
    queryFn: async () => {
      const images = await getPromotionalImagesFromApi();
      if (!images || images.length === 0) {
        throw new Error("No promotional images found");
      }
      return images;
    },
  });  
};
