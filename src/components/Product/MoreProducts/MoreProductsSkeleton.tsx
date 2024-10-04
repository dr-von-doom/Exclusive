export const YouMightLikeSkeleton = () => {
  return (
    <div>
      <h2
        className="my-6 ml-5 text-xl font-bold md:text-4xl"
        style={{ letterSpacing: "0.02em", wordSpacing: "0.3em" }}
      >
        You Might Also Like
      </h2>

      
      <div className="mb-8 grid grid-cols-[repeat(auto-fit,300px)] justify-center gap-8">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="flex flex-col h-80 border rounded-lg overflow-hidden shadow-lg animate-pulse bg-gray-200"
          >
            <div className="h-48 bg-gray-300 rounded-t-lg"></div> 
            <div className="flex flex-col justify-between p-4">
              <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
              <div className="h-6 bg-gray-300 rounded w-1/2"></div> 
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
