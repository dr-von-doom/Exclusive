import bannerImage from "@/assets/images/products/products-banner.png";
import { Banner } from "@/components/Home/Banner";
import {
  PromotionalImage,
  PromotionalImageProps,
} from "@/components/Home/PromotionalImage";
import { FeaturedProductView } from "@/components/Product/FeaturedProductView";
import { YouMightLike } from "@/components/Product/MoreProducts";
import BaseLayout from "@/layouts/BaseLayout";
import { getPromotionalImages } from "@/utils/data";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [promotionalImages, setPromotionalImages] = useState<
    PromotionalImageProps[]
  >([]);

  useEffect(() => {
    setPromotionalImages(getPromotionalImages());
  });

  return (
    <BaseLayout>
      <div className="max-w-full">
        <section>
          {promotionalImages.map((image, index) => (
            <PromotionalImage
              key={index}
              src={image.src}
              alt={image.alt}
              href={image.href}
              className={image.className}
            />
          ))}
        </section>
        <FeaturedProductView />
        <YouMightLike />
        <Banner
          mainText="Everything you need, just a Click away"
          title="DON'T LET THE WINTER FREEZE"
          subtitle="YOUR WALLET!"
          imageSrc={bannerImage}
          shopNowLink="#"
        />
      </div>
    </BaseLayout>
  );
};

export default HomePage;
