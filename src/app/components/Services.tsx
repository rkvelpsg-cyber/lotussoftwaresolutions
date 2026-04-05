import { motion } from "motion/react";
import {
  Globe,
  Smartphone,
  Building2,
  GraduationCap,
  ShoppingBag,
  Hospital,
  Hotel,
  Briefcase,
  TrendingUp,
  Layers,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

export function Services() {
  const mainServices = [
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description:
        "Grow your brand with data-driven strategies that attract the right audience and deliver measurable ROI across every digital channel.",
      features: [
        "SEO & Search Engine Marketing",
        "Social Media Marketing",
        "PPC & Google Ads",
        "Content & Email Marketing",
      ],
      color: "from-orange-500 to-pink-500",
      bg: "from-orange-50 to-pink-50",
      border: "border-orange-100",
      href: "/digital-marketing",
    },
    {
      icon: Globe,
      title: "Website Development",
      description:
        "Custom, responsive websites and web applications built with cutting-edge technologies for superior performance and user experience.",
      features: [
        "Custom Web Design & UI/UX",
        "E-commerce Solutions",
        "Web Application Development",
        "CMS & Performance Optimization",
      ],
      color: "from-blue-500 to-cyan-600",
      bg: "from-blue-50 to-cyan-50",
      border: "border-blue-100",
      href: "/website-development",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile apps for Android & iOS that deliver seamless, engaging user experiences on every device.",
      features: [
        "iOS App Development (Swift)",
        "Android App Development (Kotlin)",
        "Cross-Platform (Flutter / React Native)",
        "App UI/UX, QA & Maintenance",
      ],
      color: "from-purple-500 to-violet-600",
      bg: "from-purple-50 to-violet-50",
      border: "border-purple-100",
      href: "/mobile-app-development",
    },
    {
      icon: Layers,
      title: "End to End Digital Solutions",
      description:
        "Comprehensive digital transformation from strategy to deployment — we handle every layer of your digital ecosystem.",
      features: [
        "Digital Transformation",
        "Cloud & ERP/CRM Solutions",
        "API & System Integration",
        "Managed IT Support",
      ],
      color: "from-teal-500 to-emerald-600",
      bg: "from-teal-50 to-emerald-50",
      border: "border-teal-100",
      href: "/end-to-end-digital-solutions",
    },
  ];

  const industries = [
    {
      icon: Hotel,
      title: "Hotels & Hospitality",
      description:
        "Custom booking systems, property management solutions, and guest experience platforms",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: GraduationCap,
      title: "Educational Institutions",
      description:
        "Learning management systems, student portals, and administrative solutions",
      color: "from-cyan-500 to-teal-500",
    },
    {
      icon: Building2,
      title: "Enterprises",
      description:
        "Scalable business applications, CRM systems, and workflow automation",
      color: "from-teal-500 to-green-500",
    },
    {
      icon: ShoppingBag,
      title: "Retail & Shops",
      description:
        "E-commerce platforms, inventory management, and POS systems",
      color: "from-blue-600 to-cyan-600",
    },
    {
      icon: Hospital,
      title: "Healthcare",
      description:
        "Patient management systems, appointment scheduling, and telemedicine solutions",
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: Briefcase,
      title: "Custom Solutions",
      description: "Tailored software solutions for your unique business needs",
      color: "from-cyan-600 to-blue-600",
    },
  ];

  return (
    <section
      id="services"
      className="py-20 bg-purple-50/35 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-100 to-teal-100 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full blur-3xl opacity-30" />
      <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full blur-3xl opacity-25" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl bg-gradient-to-r from-purple-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Four core capabilities — everything your business needs to succeed
            online
          </p>
        </motion.div>

        {/* Main Service Categories */}
        <div className="grid md:grid-cols-2 gap-8 mb-20 max-w-6xl mx-auto">
          {mainServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`bg-gradient-to-br ${service.bg} rounded-2xl p-8 border ${service.border} hover:shadow-xl transition-all duration-300 group`}
            >
              <div
                className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon className="text-white" size={30} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-5 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2 mb-6">
                {service.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-gray-700">
                    <CheckCircle
                      size={16}
                      className="text-green-500 flex-shrink-0"
                    />
                    <span className="text-sm">{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href={service.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${service.color} text-white rounded-full font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 cursor-pointer`}
              >
                Learn More <ArrowRight size={18} />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Industries We Serve */}
        <div className="mb-8">
          <h3 className="text-3xl text-center mb-12 text-gray-800">
            Industries We Serve
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all group"
              >
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${industry.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <industry.icon className="text-white" size={28} />
                </div>
                <h4 className="text-xl mb-2 text-gray-800">{industry.title}</h4>
                <p className="text-gray-600 text-sm">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
