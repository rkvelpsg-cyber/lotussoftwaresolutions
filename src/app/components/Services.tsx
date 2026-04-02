import { motion } from 'motion/react';
import { 
  Globe, 
  Smartphone, 
  Building2, 
  GraduationCap, 
  ShoppingBag, 
  Hospital,
  Hotel,
  Briefcase 
} from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Hotel,
      title: 'Hotels',
      description: 'Custom booking systems, property management solutions, and guest experience platforms',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: GraduationCap,
      title: 'Educational Institutions',
      description: 'Learning management systems, student portals, and administrative solutions',
      color: 'from-cyan-500 to-teal-500',
    },
    {
      icon: Building2,
      title: 'Enterprises',
      description: 'Scalable business applications, CRM systems, and workflow automation',
      color: 'from-teal-500 to-green-500',
    },
    {
      icon: ShoppingBag,
      title: 'Retail & Shops',
      description: 'E-commerce platforms, inventory management, and POS systems',
      color: 'from-blue-600 to-cyan-600',
    },
    {
      icon: Hospital,
      title: 'Healthcare',
      description: 'Patient management systems, appointment scheduling, and telemedicine solutions',
      color: 'from-emerald-500 to-teal-500',
    },
    {
      icon: Briefcase,
      title: 'Custom Solutions',
      description: 'Tailored software solutions for your unique business needs',
      color: 'from-cyan-600 to-blue-600',
    },
  ];

  const capabilities = [
    { 
      icon: Globe, 
      title: 'Web Development', 
      description: 'Responsive, modern websites',
      image: 'https://images.unsplash.com/photo-1540397106260-e24a507a08ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZyUyMGxhcHRvcHxlbnwxfHx8fDE3NzI3MzU3ODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    { 
      icon: Smartphone, 
      title: 'Mobile Apps', 
      description: 'iOS & Android applications',
      image: 'https://images.unsplash.com/photo-1646737554389-49329965ef01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudCUyMHNtYXJ0cGhvbmV8ZW58MXx8fHwxNzcyNzQxMjAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
  ];

  return (
    <section id="services" className="py-20 bg-purple-50 relative overflow-hidden">
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
          <h2 className="text-4xl md:text-5xl bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your industry
          </p>
        </motion.div>

        {/* Main Capabilities */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-6xl mx-auto">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative rounded-2xl overflow-hidden border border-cyan-100 hover:shadow-2xl transition-all group h-80"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                  src={capability.image} 
                  alt={capability.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-cyan-900/85 to-teal-900/90 group-hover:from-blue-900/80 group-hover:via-cyan-900/75 group-hover:to-teal-900/80 transition-all" />
              </div>
              
              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-end p-8">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/30 transition-all">
                  <capability.icon className="text-white" size={32} />
                </div>
                <h3 className="text-3xl mb-2 text-white font-semibold">{capability.title}</h3>
                <p className="text-cyan-100 text-lg">{capability.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Industries We Serve */}
        <div className="mb-8">
          <h3 className="text-3xl text-center mb-12 text-gray-800">Industries We Serve</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all group"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <service.icon className="text-white" size={28} />
                </div>
                <h4 className="text-xl mb-2 text-gray-800">{service.title}</h4>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}