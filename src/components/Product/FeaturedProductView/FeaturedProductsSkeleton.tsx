export const FeaturedProductsSkeleton = () => {
  return (
    <div>
      <h2
        className="my-6 text-center text-xl font-bold md:text-4xl text-gray-800" // Cambiado a gris oscuro
        style={{ letterSpacing: "0.03em", wordSpacing: "0.3em" }}
      >
        Best Selling Products
      </h2>
      <div
        id="featured-product-container"
        className="mb-8 grid grid-cols-[repeat(auto-fit,300px)] justify-center gap-8" 
      >
        {Array.from({ length: 12 }).map((_, index) => ( 
          <div
            key={index}
            className="relative flex max-w-[300px] animate-pulse flex-col justify-between rounded-md border border-neutral-300 bg-gray-200 p-4 font-poppins shadow-sm"
          >
            <div className="flex w-full items-center justify-center p-4">
              <div className="h-24 w-24 rounded-md bg-gray-300"></div>
            </div>
            <div className="mb-2 h-6 w-full rounded-md bg-gray-300"></div>
            <div className="my-2 flex gap-2">
              <div className="h-6 w-1/2 rounded-md bg-gray-300"></div>
              <div className="h-6 w-1/2 rounded-md bg-gray-300"></div>
            </div>
            <button className="w-fit rounded-md bg-gray-300 px-4 py-2 font-medium text-white">
              <div className="h-6 w-20 rounded-md bg-gray-300"></div>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProductsSkeleton;
