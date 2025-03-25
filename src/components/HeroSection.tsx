
import { motion } from 'framer-motion';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  imageSrc: string;
}

const HeroSection = ({ title, subtitle, ctaText, ctaLink, imageSrc }: HeroSectionProps) => {
  return (
    <section className="bg-wellness-lightBlue py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-wellness-blue mb-4 leading-tight">
              {title}
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              {subtitle}
            </p>
            <a 
              href={ctaLink} 
              className="btn-primary inline-block"
            >
              {ctaText}
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-xl overflow-hidden shadow-xl">
              <img 
                src={imageSrc} 
                alt="Wellness Connect App" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-wellness-green/10 rounded-full filter blur-3xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-64 h-64 bg-wellness-blue/10 rounded-full filter blur-3xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
