import HomeCatalog from './HomeSections/homeCatalog/HomeCatalog';
import ProductCard from './HomeSections/productCard/ProductCard';
import Time from './HomeSections/time/Time';

const HomePage = () => {
  return (
    <>
      <HomeCatalog />
      <Time />
      <ProductCard />
    </>
  );
};

export default HomePage;
