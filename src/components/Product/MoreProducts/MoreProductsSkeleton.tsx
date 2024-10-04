export const SkeletonCard = () => (
  <div className="flex flex-col items-center justify-center p-4 bg-gray-200 rounded-lg shadow-md animate-pulse">
    <div className="w-full h-40 bg-gray-300 rounded-lg mb-2"></div>
    <div className="w-full h-6 bg-gray-300 rounded mb-1"></div>
    <div className="w-full h-4 bg-gray-300 rounded"></div>
  </div>
);