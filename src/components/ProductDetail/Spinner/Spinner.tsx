export const Spinner: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="loader"></div> {/* Agrega la animación CSS que desees */}
    </div>
  );
};

export default Spinner;