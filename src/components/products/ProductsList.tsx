
import { motion } from 'framer-motion';
import ProductCard from '../ProductCard';

interface Product {
  id: number;
  image: string;
  title: string;
  price: string;
  description: string;
  category?: string;
  type?: 'product' | 'membership';
}

interface ProductsListProps {
  products: Product[];
}

const ProductsList = ({ products }: ProductsListProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {products.map((product, index) => (
        <motion.div 
          key={product.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <ProductCard 
            image={product.image} 
            title={product.title}
            price={product.price}
            description={product.description}
            type={product.type}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default ProductsList;
