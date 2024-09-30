import React from 'react';

const TechnicalSpecifications: React.FC = () => {
  return (
    <div className="technical-specifications mb-8">
      <h2 className="text-xl font-bold p-4 mx-auto md:ml-[170px]">Technical specifications</h2>
      <table className="max-w-3xl w-full border-none mx-auto md:ml-[170px]"> {/* Cambios aquí */}
        <tbody>
          <tr>
            <td className="border border-transparent p-2 px-4">Processor:</td>
            <td className="border border-transparent p-2 px-4">Intel Core i5</td>
          </tr>
          <tr>
            <td className="border border-transparent p-2 px-4">Memory:</td>
            <td className="border border-transparent p-2 px-4">8 GB</td>
          </tr>
          <tr>
            <td className="border border-transparent p-2 px-4">Battery Life:</td>
            <td className="border border-transparent p-2 px-4">7 hours</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TechnicalSpecifications;
