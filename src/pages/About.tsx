import { useEffect } from "react";
import { motion } from "framer-motion";
import TeamMember from "../components/TeamMember";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const teamMembers = [
    {
      image: "/team/sarah-johnson.jpg",
      name: "Sarah Johnson",
      role: "Founder & CEO",
      description:
        "Sarah has over 15 years of experience in healthcare and holistic wellness practices.",
    },
    {
      image: "/team/michael-chen.jpg",
      name: "Michael Chen",
      role: "Chief Technology Officer",
      description:
        "Michael brings a decade of experience developing healthcare technologies that improve patient outcomes.",
    },
    {
      image: "/team/wellness-team.jpg",
      name: "The Wellness Team",
      role: "Health Professionals",
      description:
        "Our dedicated team of health experts, nutritionists, and customer care professionals working together for your wellness.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-16 bg-wellness-lightBlue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold text-wellness-blue mb-4"
            >
              ABOUT US
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-20 h-1 bg-wellness-green mx-auto mb-8"
            ></motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-wellness-blue mb-4">
              OUR VISION
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              At Wellness Connect, we envision a world where healthcare is
              accessible, personalized, and preventative. Our mission is to
              bridge the gap between modern technology and holistic health
              practices.
            </p>
            <div className="mt-8">
              <p className="text-gray-600 max-w-3xl mx-auto">
                We believe that true wellness comes from understanding the
                interconnectedness of physical, mental, and emotional health.
                Through our innovative products and services, we aim to empower
                individuals to take control of their health journey.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-wellness-blue mb-8">
              MEET OUR TEAM
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                viewport={{ once: true }}
              >
                <TeamMember
                  image={member.image}
                  name={member.name}
                  role={member.role}
                  description={member.description}
                />
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
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-wellness-blue mb-4">
              JOIN US!
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Be a part of our journey to revolutionize wellness tracking and
              healthcare management.
            </p>
            <div className="max-w-md mx-auto">
              <form className="flex">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-l-md focus:outline-none focus:ring-2 focus:ring-wellness-blue"
                  required
                />
                <button
                  type="submit"
                  className="bg-wellness-green text-white px-6 py-3 rounded-r-md font-medium hover:bg-opacity-90 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
