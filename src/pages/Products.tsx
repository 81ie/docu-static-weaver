
import { useEffect } from 'react';
import PageHeader from '../components/products/PageHeader';
import ProductsSection from '../components/products/ProductsSection';
import MembershipsSection from '../components/products/MembershipsSection';
import { products, memberships } from '../data/productData';

const Products = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    console.log("Products page mounted");
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProductsSection products={products} />
          <MembershipsSection memberships={memberships} />
        </div>
      </section>
    </div>
  );
};

export default Products;
