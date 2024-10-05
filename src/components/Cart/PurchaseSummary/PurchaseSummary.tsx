import Button from "@/components/common/Button/Button";

export const PurchaseSummary = () => {
  return (
    <div className="relative rounded-lg border border-neutral-300 p-8 shadow-md">
      <h2 className="my-6 text-2xl font-semibold">Purchase Summary</h2>
      <div className="mb-12">
        <div className="mb-4 flex justify-between border-b-2 pb-2">
          <p>Subtotal</p>
          <p className="font-semibold">$629.98</p>
        </div>
        <div className="mb-4 flex justify-between border-b-2 pb-2">
          <p>Shipping Costs</p>
          <p className="font-semibold">$8.99</p>
        </div>
        <div className="mb-4 flex justify-between border-b-2 pb-2">
          <p>Discounts</p>
          <p className="font-semibold">$0</p>
        </div>
        <div className="mb-4 flex justify-between border-b-2 pb-2">
          <p>Total Discounts</p>
          <p className="font-semibold">$0</p>
        </div>
        <div className="mb-4 flex justify-between border-b-2 pb-2">
          <p>IVA</p>
          <p className="font-semibold">$3.54</p>
        </div>
        <div className="flex justify-between border-b-2 pb-2">
          <p>Total</p>
          <p className="font-semibold">$642.51</p>
        </div>
      </div>
      <Button className="absolute bottom-0 left-0 right-0 mx-auto mb-6 w-[calc(100%-4rem)]">
        Start Payment
      </Button>
    </div>
  );
};

export default PurchaseSummary;
