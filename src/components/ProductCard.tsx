import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
interface ProductCardProps {
  image: string;
  title: string;
  price: string;
  description: string;
  type?: 'product' | 'membership';
}
const ProductCard = ({
  image,
  title,
  price,
  description,
  type = 'product'
}: ProductCardProps) => {
  return <motion.div className="card-wellness card-hover group" whileHover={{
    y: -5
  }} transition={{
    type: "spring",
    stiffness: 300
  }}>
      <div className="relative aspect-square bg-wellness-lightBlue rounded-lg mb-4 overflow-hidden">
        <motion.img src={image} alt={title} loading="lazy" whileHover={{
        scale: 1.05
      }} transition={{
        duration: 0.3
      }} className="get ride of this image and swap it with the one i" />
      </div>
      <h3 className="text-wellness-blue font-semibold text-lg mb-1">{title}</h3>
      <p className={`text-wellness-green font-medium ${type === 'membership' ? 'text-sm' : 'text-base'}`}>
        {price}
        {type === 'membership' && <span className="text-gray-500">/month</span>}
      </p>
      <p className="text-gray-600 text-sm mt-2 mb-4">{description}</p>
      <motion.button className="flex items-center text-wellness-blue font-medium transition-colors" whileHover={{
      color: '#34A853',
      x: 3
    }}>
        Learn More <ArrowRight size={16} className="ml-1" />
      </motion.button>
    </motion.div>;
};
export default ProductCard;