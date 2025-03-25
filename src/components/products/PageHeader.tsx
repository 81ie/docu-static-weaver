
import { motion } from 'framer-motion';

const PageHeader = () => {
  return (
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
  );
};

export default PageHeader;
