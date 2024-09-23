/**
 * Calculates the discounted price given the original price and discount rate.
 * 
 * @param price - The original price of the item.
 * @param discount - The discount rate to be applied (e.g., 0.2 for 20% discount).
 * @returns The price after applying the discount.
 */
export function getDiscountedPrice(price: number, discount: number): number {
  return price - (price * discount);
}

/**
 * Formats a given price into a string with US currency formatting.
 * 
 * @param price - The price to be formatted.
 * @returns The formatted price string in US dollars.
 */
export function priceFormatter(price: number): string {
  return price.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}