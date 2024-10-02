import BaseLayout from "@/layouts/BaseLayout";
import Breadcrumb from "@/components/common/Breadcrumb/Breadcrumb";
import CartProduct from "@/components/CartProduct";
import PurchaseSummary from "@/components/PurchaseSummary";

const CartProducts = [
  {
    id: 1,
    name: "Product 1",
    price: 100,
    imageURL: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Product 2",
    price: 200,
    imageURL: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Product 3",
    price: 300,
    imageURL: "https://via.placeholder.com/150",
  },
];

export const ShoppingCartPage = () => {
  return (
    <BaseLayout>
      <Breadcrumb></Breadcrumb>
      <section className="grid grid-cols-1 grid-rows-2 gap-8 p-8 lg:grid-cols-3 lg:grid-rows-1">
        <div className="rounded-lg bg-white p-8 shadow-xl lg:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">Cart</h2>
          <div className="flex flex-col gap-4">
            {CartProducts.map((product, index) => (
              <div key={product.id}>
                <CartProduct product={product} />
                {index !== CartProducts.length - 1 && <hr className="border" />}
              </div>
            ))}
          </div>
        </div>
        <PurchaseSummary></PurchaseSummary>
      </section>
    </BaseLayout>
  );
};
