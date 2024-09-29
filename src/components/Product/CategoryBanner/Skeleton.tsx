export const Skeleton = () => {
  return (
    <div className="min-h-30 grid w-full animate-pulse justify-evenly gap-10 rounded-md bg-gray-100 px-10 py-5 shadow-md md:grid-cols-2 lg:px-32">
      <div className="flex flex-col justify-center space-y-3">
        <div className="my-3 mb-4 h-8 w-52 rounded-xl bg-gray-300"></div>
        <div className="h-7 w-80 rounded-xl bg-gray-300"></div>
        <div className="w-100 h-7 rounded-xl bg-gray-300"></div>
        <div className="h-7 w-64 rounded-xl bg-gray-300"></div>
      </div>

      <div className="flex h-48 w-full items-center justify-center rounded bg-gray-300">
        <svg
          className="mx-auto h-10 w-10 text-gray-200"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 18"
        >
          <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
        </svg>
      </div>
    </div>
  );
};
