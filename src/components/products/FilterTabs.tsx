
import { motion } from 'framer-motion';

interface FilterTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const FilterTabs = ({ activeTab, setActiveTab }: FilterTabsProps) => {
  return (
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
  );
};

export default FilterTabs;
