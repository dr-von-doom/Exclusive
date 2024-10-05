export const ShippingMethod = () => {
  return (
    <details className="mt-1 md:absolute">
      <summary className="text-xs font-semibold md:text-sm">
        Shipping method
      </summary>
      <div id="shipping-method" className="mb-7 text-xs font-light md:text-sm">
        <div id="standard-sh" className="flex items-center gap-2">
          <label htmlFor="standard">Standard</label>
          <input type="radio" name="shipping" id="standard" />
        </div>
        <div id="express-sh" className="flex items-center gap-2">
          <label htmlFor="express">Express</label>
          <input type="radio" name="shipping" id="express" />
        </div>
        <div id="premium-sh" className="flex items-center gap-2">
          <label htmlFor="premium">Premium</label>
          <input type="radio" name="shipping" id="premium" />
        </div>
      </div>
    </details>
  );
};

export default ShippingMethod;
