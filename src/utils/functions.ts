export function getDiscountedPrice(price: number, discount: number): number {
  return price - (price * discount);
}

export function priceFormatter(price: number): string {
  return price.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}
