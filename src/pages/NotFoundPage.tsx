import BaseLayout from "@/layouts/BaseLayout";

const NotFoundPage = () => {
  return (
    <BaseLayout>
      <div className="flex h-full grow flex-col items-center justify-center bg-slate-100 p-10">
        <h1>Not found</h1>
        <p>
          The page you are looking for does not exist. Please check the URL in
          the address bar and try again.
        </p>
      </div>
    </BaseLayout>
  );
};

export default NotFoundPage;
