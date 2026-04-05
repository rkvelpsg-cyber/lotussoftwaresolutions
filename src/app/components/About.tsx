import { motion } from "motion/react";
import { Award, Users, Target, Zap } from "lucide-react";

export function About() {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering top-quality solutions",
    },
    {
      icon: Users,
      title: "Client-Focused",
      description: "Your success is our priority",
    },
    {
      icon: Target,
      title: "Innovation",
      description: "Leveraging cutting-edge technologies",
    },
    {
      icon: Zap,
      title: "Efficiency",
      description: "Fast delivery without compromising quality",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-purple-50/35 relative overflow-hidden"
    >
      <div className="absolute top-20 right-20 w-64 h-64 bg-cyan-200 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-teal-200 rounded-full blur-3xl opacity-20" />
      <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full blur-3xl opacity-15" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent mb-4">
            About Us
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Lotus Software Solutions is a premier software development company
            dedicated to transforming your digital vision into reality
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl mb-6 text-white">Our Mission</h3>
            <p className="text-white mb-4 text-lg leading-relaxed">
              We specialize in creating innovative web and mobile applications
              that empower businesses across diverse industries. From hotels to
              healthcare, educational institutions to enterprises, we deliver
              tailored solutions that drive growth and efficiency.
            </p>
            <p className="text-white text-lg leading-relaxed">
              Under the visionary leadership of{" "}
              <span className="font-semibold text-cyan-300">
                Dr. Sivaranjani Selladurai, Ph.D
              </span>
              , our team combines technical expertise with industry insights to
              deliver exceptional results.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 via-cyan-600 to-teal-600 rounded-lg flex items-center justify-center mb-3">
                  <value.icon className="text-white" size={24} />
                </div>
                <h4 className="mb-2 text-gray-800">{value.title}</h4>
                <p className="text-sm text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Leadership */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white p-8 md:p-12 rounded-2xl shadow-xl max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/founder_image.jpeg"
                  alt="Dr. Sivaranjani Selladurai"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -inset-2 bg-gradient-to-br from-blue-400 via-cyan-400 to-teal-400 rounded-2xl blur-xl opacity-20 -z-10" />
            </motion.div>

            <div className="flex-1 text-center md:text-left">
              <h3 className="text-3xl md:text-4xl mb-2 text-gray-800">
                Dr. Sivaranjani Selladurai, Ph.D
              </h3>
              <p className="text-xl md:text-2xl text-cyan-600 mb-4">
                Founder & CEO
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                With extensive expertise in software development and a passion
                for innovation, Dr. Selladurai leads Lotus Software Solutions in
                delivering world-class digital solutions that exceed client
                expectations. Her visionary leadership and commitment to
                excellence drive the company's mission to transform businesses
                through cutting-edge technology.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
