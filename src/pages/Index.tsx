
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
        imageSrc="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
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
      
      {/* Animated Image Section */}
      <section className="py-16 bg-wellness-lightBlue overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center md:text-left"
            >
              <h2 className="text-3xl font-bold text-wellness-blue mb-4">Visualize Your Progress</h2>
              <p className="text-gray-600 mb-6">
                See how your wellness metrics improve over time with interactive visualizations. 
                Set goals, track your journey, and celebrate your achievements.
              </p>
              <a 
                href="/products" 
                className="btn-primary inline-block"
              >
                Explore Features
              </a>
            </motion.div>
            
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative z-10 rounded-xl overflow-hidden shadow-2xl"
              >
                <motion.img 
                  src="https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3"
                  alt="Wellness Data Visualization" 
                  className="w-full h-auto"
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
              
              <motion.div 
                className="absolute -top-4 -right-4 w-32 h-32 bg-wellness-green/20 rounded-full z-0"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 0.4, 0.7]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <motion.div 
                className="absolute -bottom-8 -left-8 w-40 h-40 bg-wellness-blue/10 rounded-full z-0"
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
                image="https://images.unsplash.com/photo-1620138546344-7b2c38516edf?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
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
                image="https://images.unsplash.com/photo-1575318634028-6a0cfcb60c59?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
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
                image="https://images.unsplash.com/photo-1593476123561-9516f2097158?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
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
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
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
