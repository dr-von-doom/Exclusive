interface Specs {
  [key: string]: string | number | boolean | undefined;
}

interface TechnicalSpecificationsProps {
  specs: Specs | null;
}

const TechnicalSpecifications = ({ specs }: TechnicalSpecificationsProps) => {
  if (!specs) {
    return <div>No product specs available</div>;
  }

  const formatKey = (key: string) => {
    return key
      .replace(/([A-Z])/g, ' $1') 
      .replace(/^./, (str) => str.toUpperCase()); 
  };

  return (
    <div className="technical-specifications mb-8">
      <h2 className="text-xl font-bold p-4 mx-auto md:ml-[170px]">Technical Specifications</h2>
      <table className="max-w-3xl w-full border-none mx-auto md:ml-[170px]">
        <tbody>
          {Object.entries(specs).map(([key, value]) => (
            value !== undefined && (
              <tr key={key}>
                <td className="border border-transparent p-2 px-4">{formatKey(key)}:</td>
                <td className="border border-transparent p-2 px-4">{String(value)}</td> 
              </tr>
            )
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TechnicalSpecifications;
