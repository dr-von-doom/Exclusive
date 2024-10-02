import CostumerServiceIcon from "@/assets/icons/service-costumer.svg";
import ReturnServiceIcon from "@/assets/icons/service-returns.svg";
import DeliveryServiceIcon from "@/assets/icons/service-transport.svg";
import { Button } from "@/components/common/Button";

export const ExploreMoreBanner = () => {
  return (
    <div className="flex w-full flex-col items-center bg-zinc-900 p-10 text-white">
      <h2 className="space-x-2 text-3xl">
        <span className="font-bold text-green-600">Exclusive</span>
        <span>for</span>
        <span className="font-bold">You</span>
      </h2>

      <div className="mx-auto my-10 grid max-w-screen-md gap-4 sm:grid-cols-3 sm:gap-16">
        <div className="flex flex-col items-center gap-2 text-center">
          <img src={DeliveryServiceIcon} alt="" />
          <p className="font-bold uppercase">Free and fast delivery</p>
          <p className="text-sm">Free delivery for all orders over $140</p>
        </div>

        <div className="flex flex-col items-center gap-2 text-center">
          <img src={CostumerServiceIcon} alt="" />
          <p className="font-bold uppercase">27/7 Costumer Service</p>
          <p className="text-sm">Friendly 24/7 costumer service</p>
        </div>

        <div className="flex flex-col items-center gap-2 text-center">
          <img src={ReturnServiceIcon} alt="" />

          <p className="font-bold uppercase">Money back guarantee</p>
          <p className="text-sm">100% money back guarantee within 30 days</p>
        </div>
      </div>
      <div>
        <Button>
          <span className="text-lg font-bold">Explore now</span>
        </Button>
      </div>
    </div>
  );
};

export default ExploreMoreBanner;
