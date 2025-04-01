import { motion } from "framer-motion";
import OptimizedImage from "../components/OptimizedImage";

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    bio: "With over 15 years of experience in health tech, Sarah leads our mission to revolutionize personal wellness tracking.",
    image: "https://placehold.co/400x400/wellness-blue/white?text=Unknown",
  },
  {
    name: "Michael Chen",
    role: "Head of Technology",
    bio: "Michael brings expertise in AI and machine learning to develop cutting-edge wellness solutions.",
    image: "https://placehold.co/400x400/wellness-blue/white?text=Unknown",
  },
  {
    name: "Dr. Emily Rodriguez",
    role: "Medical Director",
    bio: "Dr. Rodriguez ensures our products meet the highest medical standards and provide accurate health insights.",
    image: "https://placehold.co/400x400/wellness-blue/white?text=Unknown",
  },
];

const AboutUs = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-wellness-blue dark:text-wellness-green mb-4">
              Meet Our Team
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our diverse team brings together expertise from various fields to
              create innovative wellness solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-wellness text-center card-hover dark:bg-gray-800 dark:border-gray-700"
              >
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <OptimizedImage
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-wellness-blue dark:text-wellness-green mb-2">
                  {member.name}
                </h3>
                <p className="text-wellness-green dark:text-wellness-blue mb-4">
                  {member.role}
                </p>
                <p className="text-gray-600 dark:text-gray-300">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
