
import { ArrowRight } from 'lucide-react';

interface ProductCardProps {
  image: string;
  title: string;
  price: string;
  description: string;
  type?: 'product' | 'membership';
}

const ProductCard = ({ image, title, price, description, type = 'product' }: ProductCardProps) => {
  return (
    <div className="card-wellness card-hover group">
      <div className="relative aspect-square bg-wellness-lightBlue rounded-lg mb-4 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transform transition-transform group-hover:scale-105"
          loading="lazy" 
        />
      </div>
      <h3 className="text-wellness-blue font-semibold text-lg mb-1">{title}</h3>
      <p className={`text-wellness-green font-medium ${type === 'membership' ? 'text-sm' : 'text-base'}`}>
        {price}
        {type === 'membership' && <span className="text-gray-500">/month</span>}
      </p>
      <p className="text-gray-600 text-sm mt-2 mb-4">{description}</p>
      <button className="flex items-center text-wellness-blue font-medium hover:text-wellness-green transition-colors">
        Learn More <ArrowRight size={16} className="ml-1" />
      </button>
    </div>
  );
};

export default ProductCard;
