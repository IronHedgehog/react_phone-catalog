import { BrandNewModels } from './BrandNewModels';
import { Hero } from './Hero';
import { HotPrices } from './HotPrices';
import { ShopByCategory } from './ShopByCategory';

export const HomePage = () => {
  return (
    <>
      <Hero />
      <BrandNewModels />
      <ShopByCategory />
      <HotPrices />
    </>
  );
};
