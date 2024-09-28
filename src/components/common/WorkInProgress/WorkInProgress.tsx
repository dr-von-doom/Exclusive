export const WorkInProgress = () => {
  return (
    <div className="my-36 flex flex-col items-center">
      <h1 className="mb-4 font-poppins text-5xl font-semibold">
        UNDER CONSTRUCTION
      </h1>
      <div className="w-96">
        <img
          src="https://www.shutterstock.com/image-vector/under-construction-symbol-worker-hold-600nw-2029822556.jpg"
          alt="work-in-progress-image"
        />
      </div>
      <div className="container text-center w-80 italic">
        <h2 className="font-xl font-medium">
          This section is under construction
        </h2>
        <p className="">
          We are working hard to bring you new content. Please check back later!
        </p>
      </div>
    </div>
  );
};

export default WorkInProgress;
