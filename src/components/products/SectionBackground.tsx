
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface BackgroundBubbleProps {
  type: 'trackers' | 'accessories' | 'memberships';
  children?: ReactNode;
}

const SectionBackground = ({ type, children }: BackgroundBubbleProps) => {
  if (type === 'trackers') {
    return (
      <div className="relative mb-12">
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
        {children}
      </div>
    );
  }

  if (type === 'accessories') {
    return (
      <div className="relative mb-12">
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
        {children}
      </div>
    );
  }

  if (type === 'memberships') {
    return (
      <div className="relative">
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
        
        {children}
        
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
    );
  }

  return <>{children}</>;
};

export default SectionBackground;
