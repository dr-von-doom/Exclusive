interface Specs {
  brand?: string;
  processor?: string;
  memory?: string;
  storage?: string;
  graphics?: string;
}

interface TechnicalSpecificationsProps {
  specs: Specs | null;
}

const TechnicalSpecifications = ({ specs }: TechnicalSpecificationsProps) => {
  if (!specs) {
    return <div>No product specs available</div>;
  }

  return (
    <div className="technical-specifications mb-8">
      <h2 className="text-xl font-bold p-4 mx-auto md:ml-[170px]">Technical specifications</h2>
      <table className="max-w-3xl w-full border-none mx-auto md:ml-[170px]">
        <tbody>
          <tr>
            <td className="border border-transparent p-2 px-4">Brand:</td>
            <td className="border border-transparent p-2 px-4">{specs.brand}</td>
          </tr>
          <tr>
            <td className="border border-transparent p-2 px-4">Processor:</td>
            <td className="border border-transparent p-2 px-4">{specs.processor}</td>
          </tr>
          <tr>
            <td className="border border-transparent p-2 px-4">Memory:</td>
            <td className="border border-transparent p-2 px-4">{specs.memory}</td>
          </tr>
          <tr>
            <td className="border border-transparent p-2 px-4">Storage:</td>
            <td className="border border-transparent p-2 px-4">{specs.storage}</td>
          </tr>
          <tr>
            <td className="border border-transparent p-2 px-4">Graphics:</td>
            <td className="border border-transparent p-2 px-4">{specs.graphics}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TechnicalSpecifications;
