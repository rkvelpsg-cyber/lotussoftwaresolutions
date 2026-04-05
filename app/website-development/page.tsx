import type { Metadata } from "next";
import { ServicePageLayout } from "@/app/components/ServicePageLayout";
import {
  Globe,
  ShoppingCart,
  Layout,
  Code2,
  Palette,
  Zap,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Website Development Services | Lotus Software Solutions",
  description:
    "Custom website development services in Bangalore — responsive web design, e-commerce, CMS, web applications, UI/UX, and performance optimization.",
  alternates: {
    canonical: "https://lotussoftwaresolutions.net/website-development",
  },
};

const services = [
  {
    icon: Palette,
    title: "Custom Website Design",
    description:
      "Bespoke, pixel-perfect designs that authentically reflect your brand identity and create lasting first impressions for your visitors.",
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Development",
    description:
      "Powerful online stores with seamless product management, secure checkout flows, and integrated payment gateways to boost your sales.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Layout,
    title: "CMS Development",
    description:
      "WordPress, headless CMS, and custom content management solutions, empowering your team to update content without developer assistance.",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: Code2,
    title: "Web Application Development",
    description:
      "Scalable, high-performance web apps built with React, Next.js, and Node.js — from dashboards and portals to complex SaaS platforms.",
    color: "from-blue-600 to-cyan-600",
  },
  {
    icon: Globe,
    title: "UI/UX Design",
    description:
      "Intuitive, user-centred interfaces crafted through thorough research, wireframing, and usability testing to maximize engagement and conversions.",
    color: "from-sky-500 to-blue-500",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description:
      "Lightning-fast load times through Core Web Vitals optimization, image compression, CDN configuration, and caching strategies.",
    color: "from-blue-500 to-teal-500",
  },
];

const process = [
  {
    step: "01",
    title: "Discovery",
    desc: "Understand your goals, target audience, competitors, and project requirements in depth.",
  },
  {
    step: "02",
    title: "Design",
    desc: "Create wireframes, interactive prototypes, and visual mockups for your approval.",
  },
  {
    step: "03",
    title: "Develop",
    desc: "Write clean, maintainable, and scalable code following industry best practices.",
  },
  {
    step: "04",
    title: "Test",
    desc: "Rigorous QA across devices, browsers, screen sizes, and edge cases.",
  },
  {
    step: "05",
    title: "Launch",
    desc: "Smooth deployment with SEO setup, analytics integration, and ongoing support.",
  },
];

const stats = [
  { value: "200+", label: "Websites Delivered" },
  { value: "100%", label: "Responsive & Mobile-Ready" },
  { value: "< 3s", label: "Average Page Load Time" },
  { value: "24/7", label: "Post-Launch Support" },
];

const techStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Tailwind CSS",
  "WordPress",
  "MongoDB",
  "PostgreSQL",
];

export default function WebsiteDevelopmentPage() {
  return (
    <ServicePageLayout>
      {/* Hero + Stats */}
      <section className="pt-56 pb-20 bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50 relative z-10">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
            <Globe size={16} />
            Website Development Services
          </div>
          <h1
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent leading-tight"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Beautiful, Fast Websites
            <br />
            Built to Perform
          </h1>
          <p
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-10"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Custom, responsive websites and web applications built with
            cutting-edge technologies — delivering exceptional user experiences
            that convert visitors into loyal customers.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-16">
            <a
              href="/#contact"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full font-semibold hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2 cursor-pointer"
            >
              Start Your Project <ArrowRight size={20} />
            </a>
            <a
              href="/#services"
              className="px-8 py-4 bg-white text-blue-600 border-2 border-blue-500 rounded-full font-semibold hover:bg-blue-50 transition-all cursor-pointer"
            >
              View All Services
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-white rounded-2xl px-8 py-10 shadow-md border border-blue-100">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-4xl font-bold text-blue-600">{stat.value}</p>
                <p className="text-gray-600 mt-1 text-sm font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-slate-50 relative z-10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <h2
              className="text-4xl font-bold text-gray-800 mb-4"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              What We Build
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From simple landing pages to complex web platforms — we deliver
              quality at every scale.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${svc.color} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                >
                  <svc.icon className="text-white" size={26} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {svc.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {svc.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white relative z-10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <h2
              className="text-4xl font-bold text-gray-800 mb-4"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Our Development Process
            </h2>
            <p className="text-gray-600 text-lg">
              A structured, transparent workflow that keeps you informed at
              every stage
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {process.map((step, i) => (
              <div key={i} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {step.step}
                </div>
                <h4 className="text-lg font-bold text-gray-800 mb-2">
                  {step.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 bg-slate-50 relative z-10">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2
            className="text-3xl font-bold text-gray-800 mb-3"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Technologies We Use
          </h2>
          <p className="text-gray-600 mb-10">
            Modern, battle-tested technologies for reliable, future-proof
            websites
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-5 py-2.5 bg-white border border-blue-200 text-blue-700 rounded-full font-semibold text-sm hover:bg-blue-50 hover:border-blue-400 transition-all"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-cyan-600 to-teal-600 relative z-10">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2
            className="text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Let's Build Something Great
          </h2>
          <p className="text-blue-100 text-xl mb-8 max-w-2xl mx-auto">
            Share your vision with us and we'll turn it into a high-performing
            digital product.
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-sky-500 to-cyan-400 text-white rounded-full font-bold hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 text-lg cursor-pointer border-2 border-white/30"
          >
            Request a Free Quote <ArrowRight size={22} />
          </a>
        </div>
      </section>
    </ServicePageLayout>
  );
}
