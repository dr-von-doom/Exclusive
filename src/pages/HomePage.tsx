import bannerImage from "@/assets/images/products/products-banner.png";
import { Banner } from "@/components/Home/Banner";
import { PromotionalImage } from "@/components/Home/PromotionalImage"; 
import { FeaturedProductView } from "@/components/Product/FeaturedProductView";
import BaseLayout from "@/layouts/BaseLayout";

const HomePage = () => {
  return (
    <BaseLayout>
      <div className="max-w-full">
        <PromotionalImage />
        <FeaturedProductView />
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
