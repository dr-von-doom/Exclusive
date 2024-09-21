import BaseLayout from "@/layouts/BaseLayout";
import Filter from "@/components/Filter";

const HomePage = () => {
  return (
    <BaseLayout>
      <div className="flex h-full grow items-center justify-center bg-slate-100 p-10">
        <h1>Home Page</h1>
      </div>
      <Filter /> 
    </BaseLayout>
  );
};

export default HomePage;
