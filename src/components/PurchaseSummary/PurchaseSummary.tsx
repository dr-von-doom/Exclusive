import Button from "../common/Button/Button";

export const PurchaseSummary = () => {
  return (
    <div className="relative p-8 border border-neutral-300 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold my-6">Purchase Summary</h2>
      <div className="flex justify-between border-b-2 pb-2 mb-4">
        <p>Subtotal</p>
        <p className="font-semibold">$629.98</p>
      </div>
      <div className="flex justify-between border-b-2 pb-2 mb-4">
        <p>Shipping Costs</p>
        <p className="font-semibold">$8.99</p>
      </div>
      <div className="flex justify-between border-b-2 pb-2 mb-4">
        <p>Discounts</p>
        <p className="font-semibold">$0</p>
      </div>
      <div className="flex justify-between border-b-2 pb-2 mb-4">
        <p>Total Discounts</p>
        <p className="font-semibold">$0</p>
      </div>
      <div className="flex justify-between border-b-2 pb-2 mb-4">
        <p>IVA</p>
        <p className="font-semibold">$3.54</p>
      </div>
      <div className="flex justify-between border-b-2 pb-2">
        <p>Total</p>
        <p className="font-semibold">$642.51</p>
      </div>
      <Button className="absolute bottom-0 left-0 right-0 mx-auto my-4 w-[calc(100%-2rem)]">Start Payment</Button>
    </div>
  );
};

export default PurchaseSummary;
