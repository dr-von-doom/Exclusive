import CartProduct from "@/components/Cart/CartProduct";
// import PurchaseSummary from "@/components/Cart/PurchaseSummary/PurchaseSummary";
import Breadcrumb from "@/components/common/Breadcrumb/Breadcrumb";
import BaseLayout from "@/layouts/BaseLayout";
import { Product } from "@/types/product.type";

imageU: "https://via.placeholder.com/150";


const CartProducts: Product[] = [
  {
    "id": 1,
    "name": "Apple MacBook Air Pro",
    "description": "Lightweight and powerful laptop with an all-day battery life, perfect for on-the-go productivity.",
    "rating": 4.8,
    "totalRatings": 254,
    "imageURL": "https://via.placeholder.com/150",
    "categoryId": 1,
    "price": 999,
    "discount": 0.15,
    "features": [
      "13-inch Retina display",
      "Apple M1 chip for incredible performance",
      "8GB unified memory",
      "256GB SSD storage",
      "Backlit Magic Keyboard and Touch ID"
    ],
    "specs": {
      "brand": "Apple",
      "processor": "Intel Core i5",
      "memory": "8GB",
      "storage": "256GB",
      "graphics": "Intel HD"
    }
  },
  {
    "id": 2,
    "name": "HP Pavilion Gaming Laptop",
    "description": "High-performance gaming laptop with powerful graphics and processor to handle modern games.",
    "rating": 4.5,
    "totalRatings": 187,
    "imageURL": "https://via.placeholder.com/150",
    "categoryId": 1,
    "price": 1199,
    "discount": 0.2,
    "features": [
      "15.6-inch FHD display with 144Hz refresh rate",
      "AMD Ryzen 5 processor",
      "16GB DDR4 RAM",
      "512GB SSD storage",
      "NVIDIA GeForce graphics card"
    ],
    "specs": {
      "brand": "HP",
      "processor": "AMD Ryzen 5",
      "memory": "16GB",
      "storage": "512GB",
      "graphics": "NVIDIA GeForce"
    }
  },
  {
    "id": 3,
    "name": "Samsung Galaxy Book Flex",
    "description": "Versatile 2-in-1 laptop with a stunning QLED display and long-lasting battery.",
    "rating": 4.3,
    "totalRatings": 920,
    "imageURL": "https://via.placeholder.com/150",
    "categoryId": 1,
    "price": 1399,
    "discount": 0.1,
    "features": [
      "13.3-inch QLED touchscreen display",
      "Intel Core i7 processor",
      "16GB RAM",
      "512GB SSD storage",
      "Built-in S Pen and Wi-Fi 6 support"
    ],
    "specs": {
      "brand": "Samsung",
      "processor": "Intel Core i7",
      "memory": "16GB",
      "storage": "512GB",
      "graphics": "Intel HD"
    }
  },
];

export const ShoppingCartPage = () => {
  return (
    <BaseLayout>
      <Breadcrumb></Breadcrumb>
      <section className="grid grid-cols-1 grid-rows-2 gap-4 p-4 lg:grid-cols-3 lg:grid-rows-1">
        <div className="rounded-lg bg-white border border-neutral-300 p-6 shadow-xl lg:col-span-2">
          <h2 className="mb-2 text-2xl font-semibold">Cart</h2>
          <div className="flex flex-col gap-4">
            {CartProducts.map((product, index) => (
              <div key={product.id}>
                <CartProduct product={product} />
                {index !== CartProducts.length - 1 && <hr className="border" />}
              </div>
            ))}
          </div>
        </div>
      </section>
    </BaseLayout>
  );
};

export default ShoppingCartPage;
