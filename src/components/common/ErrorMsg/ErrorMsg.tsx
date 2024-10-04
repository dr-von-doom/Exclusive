export type ErrorMsgProps = {
  title: string;
  message: string;
  imageUrl?: string;
};

export const ErrorMsg = ({
  title = "Something went wrong...",
  message,
  imageUrl,
}: ErrorMsgProps) => {
  return (
    <div className="mx-auto flex h-full max-w-screen-md flex-col items-center justify-center gap-3 p-10">
      <h1 className="text-lg font-bold">{title}</h1>
      <p>{message}</p>
      {imageUrl && <img src={imageUrl} alt="Error" />}
    </div>
  );
};


export default ErrorMsg;

