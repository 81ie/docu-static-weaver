
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Activity, Heart, Brain } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import ProductCard from '../components/ProductCard';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: <Activity className="w-12 h-12 text-wellness-green" />,
      title: "Activity Tracking",
      description: "Monitor your daily activities, steps, and exercise routines to stay on top of your fitness goals."
    },
    {
      icon: <Heart className="w-12 h-12 text-wellness-green" />,
      title: "Health Metrics",
      description: "Track vital health metrics like heart rate, sleep patterns, and calories to understand your body better."
    },
    {
      icon: <Brain className="w-12 h-12 text-wellness-green" />,
      title: "Wellness Insights",
      description: "Get personalized insights and recommendations based on your health data to improve your well-being."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection 
        title="Discover Wellness Connect Tracker"
        subtitle="Track your health metrics, connect with fitness devices, and achieve your wellness goals with our comprehensive tracking solution."
        ctaText="Get Started Today"
        ctaLink="/products"
        imageSrc="/lovable-uploads/2c2a3a47-31cc-4ca0-ad99-f13fea437d4a.png"
      />
      
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: a1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-wellness-blue mb-4">Key Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Wellness Connect Tracker offers a comprehensive suite of tools to help you monitor, 
              manage, and improve your overall health and wellness.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-wellness text-center card-hover"
              >
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-wellness-blue mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-wellness-lightBlue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-wellness-blue mb-4">Our Products</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our range of products designed to enhance your wellness journey and help you achieve your health goals.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <ProductCard 
                image="/lovable-uploads/631266b0-1092-4ba1-9c63-3729fcaf6c7b.png" 
                title="Accessories"
                price="From $29.99"
                description="Enhance your wellness experience with our premium accessories."
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <ProductCard 
                image="/lovable-uploads/c9dbb3d6-75b7-44cf-b151-78a52e2e6d3a.png" 
                title="Wellness Tracker"
                price="$149.99"
                description="Our cutting-edge wellness tracker for comprehensive health monitoring."
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <ProductCard 
                image="/lovable-uploads/37f3caf9-15b0-4f4f-ad23-8d035bb4adb6.png" 
                title="Membership Plans"
                price="From $9.99"
                description="Unlock premium features with our flexible membership options."
                type="membership"
              />
            </motion.div>
          </div>
          
          <div className="text-center mt-12">
            <motion.a 
              href="/products"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              viewport={{ once: true }}
              className="inline-flex items-center text-wellness-blue font-medium hover:text-wellness-green transition-colors"
            >
              View All Products <ArrowRight size={16} className="ml-1" />
            </motion.a>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-wellness-blue rounded-2xl overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12 flex items-center">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Health Journey?</h2>
                  <p className="text-blue-100 mb-6">
                    Join our waitlist to be among the first to experience Wellness Connect Tracker 
                    and take control of your health.
                  </p>
                  <form className="flex flex-col sm:flex-row gap-2">
                    <input 
                      type="email" 
                      placeholder="Your email address" 
                      className="flex-1 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-wellness-green" 
                    />
                    <button type="submit" className="bg-wellness-green text-white px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition-colors">
                      Join Waitlist
                    </button>
                  </form>
                </div>
              </div>
              <div className="relative h-64 md:h-auto">
                <img 
                  src="/lovable-uploads/570b7731-6e06-44b3-8bb4-8fb9ffbf14f2.png" 
                  alt="Wellness Connect App" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-wellness-blue/60 to-transparent md:hidden"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
