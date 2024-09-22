import BaseLayout from "@/layouts/BaseLayout";
import { FeaturedProductView } from "@/components/Product/FeaturedProductView/FeaturedProductView";


const HomePage = () => {
  return (
    <BaseLayout>
      <div className="bg-slate-100 p-10">
        <FeaturedProductView />
      </div>
    </BaseLayout>
  );
};

export default HomePage;
