
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard';

const Products = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState('all');

  const products = [
    {
      id: 1,
      image: "/lovable-uploads/661a8e95-375a-48f4-a04e-4eaa118d1328.png",
      title: "Premium Yoga Mat",
      price: "$49.99",
      description: "High-quality, eco-friendly yoga mat for your wellness routine.",
      category: "accessories"
    },
    {
      id: 2,
      image: "/lovable-uploads/e5192a79-bd0c-4a54-868e-83a848631466.png",
      title: "Meditation Cushion",
      price: "$29.99",
      description: "Comfortable cushion to support your meditation practice.",
      category: "accessories"
    },
    {
      id: 3,
      image: "/lovable-uploads/ac999df0-af1a-4654-9e50-28cbbc8e9730.png",
      title: "Wellness Journal",
      price: "$19.99",
      description: "Track your wellness journey with our beautiful journal.",
      category: "accessories"
    },
    {
      id: 4,
      image: "/lovable-uploads/1d29b482-53db-41c2-b7b5-b3b8cae4c63a.png",
      title: "Basic Tracker",
      price: "$99.99",
      description: "Our entry-level health tracker with essential features.",
      category: "trackers"
    },
    {
      id: 5,
      image: "/lovable-uploads/81788d2d-0444-4753-909f-d17216d3866f.png",
      title: "Premium Tracker",
      price: "$149.99",
      description: "Advanced health tracking with additional sensors and features.",
      category: "trackers"
    },
    {
      id: 6,
      image: "/lovable-uploads/82e52876-26f8-457f-bd7e-4ca7127954a9.png",
      title: "Pro Health Monitor",
      price: "$199.99",
      description: "Our most comprehensive health tracking solution for professionals.",
      category: "trackers"
    }
  ];

  const memberships = [
    {
      id: 1,
      image: "/lovable-uploads/9049f9f7-43e7-4cf4-8e1e-88d6c1918d5a.png",
      title: "Basic Plan",
      price: "$9.99",
      description: "Essential features for casual users.",
      type: "membership"
    },
    {
      id: 2,
      image: "/lovable-uploads/35c1ca61-dc27-40b3-8324-d76f36a0e120.png",
      title: "Premium Plan",
      price: "$19.99",
      description: "Advanced analytics and personalized insights.",
      type: "membership"
    },
    {
      id: 3,
      image: "/lovable-uploads/a904819b-d25f-4fee-8ca0-9b0365419d43.png",
      title: "Family Plan",
      price: "$29.99",
      description: "Track health for up to 5 family members.",
      type: "membership"
    }
  ];

  const filteredProducts = activeTab === 'all' 
    ? products
    : products.filter(product => product.category === activeTab);

  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-16 bg-wellness-lightBlue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold text-wellness-blue mb-4">Products & Memberships</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our range of health tracking products and membership plans designed to help you achieve your wellness goals.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-wellness-blue mb-8 text-center"
            >
              ALL PRODUCTS
            </motion.h2>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="flex justify-center mb-8"
            >
              <div className="inline-flex rounded-md shadow-sm">
                <button 
                  onClick={() => setActiveTab('all')}
                  className={`px-4 py-2 text-sm font-medium rounded-l-lg border ${
                    activeTab === 'all' 
                      ? 'bg-wellness-blue text-white border-wellness-blue' 
                      : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  All Products
                </button>
                <button 
                  onClick={() => setActiveTab('trackers')}
                  className={`px-4 py-2 text-sm font-medium border-t border-b border-r ${
                    activeTab === 'trackers' 
                      ? 'bg-wellness-blue text-white border-wellness-blue' 
                      : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  Trackers
                </button>
                <button 
                  onClick={() => setActiveTab('accessories')}
                  className={`px-4 py-2 text-sm font-medium rounded-r-lg border-t border-b border-r ${
                    activeTab === 'accessories' 
                      ? 'bg-wellness-blue text-white border-wellness-blue' 
                      : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  Accessories
                </button>
              </div>
            </motion.div>
            
            {/* Animated Products Section */}
            <div className="relative mb-12">
              {activeTab === 'trackers' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute -top-16 -right-8 w-40 h-40 bg-wellness-blue/10 rounded-full z-0"
                >
                  <motion.div 
                    className="w-full h-full"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.6, 0.3, 0.6],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>
              )}
              
              {activeTab === 'accessories' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute -top-8 -left-8 w-32 h-32 bg-wellness-green/20 rounded-full z-0"
                >
                  <motion.div 
                    className="w-full h-full"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.7, 0.4, 0.7],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>
              )}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => (
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
                  />
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Animated Membership Section */}
          <div className="mt-16 relative">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-wellness-blue mb-8 text-center"
            >
              MEMBERSHIP PLANS
            </motion.h2>
            
            <motion.div 
              className="absolute -top-8 -right-4 w-24 h-24 bg-wellness-green/20 rounded-full z-0"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.6, 0.2, 0.6]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {memberships.map((membership, index) => (
                <motion.div 
                  key={membership.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -5, 
                    transition: { duration: 0.2 } 
                  }}
                >
                  <ProductCard 
                    image={membership.image} 
                    title={membership.title}
                    price={membership.price}
                    description={membership.description}
                    type="membership"
                  />
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="absolute -bottom-8 -left-4 w-32 h-32 bg-wellness-blue/10 rounded-full z-0"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.6, 0.3, 0.6]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
