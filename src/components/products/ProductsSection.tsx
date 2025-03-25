
import { useState } from 'react';
import FilterTabs from './FilterTabs';
import SectionHeader from './SectionHeader';
import ProductsList from './ProductsList';
import SectionBackground from './SectionBackground';

interface Product {
  id: number;
  image: string;
  title: string;
  price: string;
  description: string;
  category: string;
}

interface ProductsSectionProps {
  products: Product[];
}

const ProductsSection = ({ products }: ProductsSectionProps) => {
  const [activeTab, setActiveTab] = useState('all');

  const filteredProducts = activeTab === 'all' 
    ? products
    : products.filter(product => product.category === activeTab);

  const getBgType = () => {
    if (activeTab === 'trackers') return 'trackers';
    if (activeTab === 'accessories') return 'accessories';
    return 'accessories'; // Default fallback
  };

  return (
    <div className="mb-12">
      <SectionHeader title="ALL PRODUCTS" />
      <FilterTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <SectionBackground type={getBgType()}>
        <ProductsList products={filteredProducts} />
      </SectionBackground>
    </div>
  );
};

export default ProductsSection;
