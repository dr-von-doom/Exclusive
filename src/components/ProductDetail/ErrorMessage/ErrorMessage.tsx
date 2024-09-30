interface ErrorMessageProps {
  message: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div className="flex justify-center items-center text-red-600 text-lg font-medium">
      <p>{message}</p>
    </div>
  );
};

export default ErrorMessage;