import BaseLayout from "@/layouts/BaseLayout";
import { FeaturedProductView } from "@/components/Product/FeaturedProductView/FeaturedProductView";

const HomePage = () => {
  return (
    <BaseLayout>
      <div className=" bg-slate-100 p-10">
        <h1>Home Page</h1>
        <FeaturedProductView></FeaturedProductView>
      </div>
    </BaseLayout>
  );
};

export default HomePage;
