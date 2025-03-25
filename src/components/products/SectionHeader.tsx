
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
}

const SectionHeader = ({ title }: SectionHeaderProps) => {
  return (
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-3xl font-bold text-wellness-blue mb-8 text-center"
    >
      {title}
    </motion.h2>
  );
};

export default SectionHeader;
