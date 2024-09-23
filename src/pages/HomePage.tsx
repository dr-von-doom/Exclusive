import bannerImage from "@/assets/images/products/products-banner.png";
import Banner from "@/components/Banner/Banner";
import { PromotionalImageProps } from "@/components/PromotionalImage";
import PromotionalImage from "@/components/PromotionalImage/PromotionalIImage";
import BaseLayout from "@/layouts/BaseLayout";
import { getPromotionalImages } from "@/utils/data";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
        <Banner
          mainText="Everything you need, just a Click away"
          title="DON'T LET THE WINTER FREEZE"
          subtitle="YOUR WALLET!"
          imageSrc={bannerImage}
          shopNowLink="#"
        />
        <Link to="/category">Category</Link>
      </div>
    </BaseLayout>
  );
};

export default HomePage;
