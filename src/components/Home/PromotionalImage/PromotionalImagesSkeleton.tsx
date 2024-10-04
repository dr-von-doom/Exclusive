export const PromotionalImageSkeleton = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6">

      <div className="w-full max-w-3xl animate-pulse rounded-[30px] bg-gray-200 shadow-lg">
        <div className="w-full h-80 bg-gray-300 rounded-[30px]"></div> 
      </div>
      
      <div className="w-full max-w-3xl animate-pulse rounded-[30px] bg-gray-200 shadow-lg mb-6">
        <div className="w-full h-80 bg-gray-300 rounded-[30px]"></div> 
      </div>
    </div>
  );
};
