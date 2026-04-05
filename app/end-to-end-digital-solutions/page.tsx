import type { Metadata } from "next";
import { ServicePageLayout } from "@/app/components/ServicePageLayout";
import {
  RefreshCw,
  Cloud,
  Database,
  Lightbulb,
  Plug,
  Shield,
  Layers,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "End to End Digital Solutions | Lotus Software Solutions",
  description:
    "Comprehensive end-to-end digital solutions including digital transformation, cloud services, ERP/CRM, IT consulting, API integration, and managed support in Bangalore.",
  alternates: {
    canonical:
      "https://lotussoftwaresolutions.net/end-to-end-digital-solutions",
  },
};

const services = [
  {
    icon: RefreshCw,
    title: "Digital Transformation",
    description:
      "Guide your organisation from legacy systems to modern, agile digital operations — automating workflows, reducing costs, and unlocking new growth opportunities.",
    color: "from-teal-500 to-emerald-500",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description:
      "Seamless migration, deployment, and optimisation on AWS, Azure, and Google Cloud — designed for scalability, reliability, and cost efficiency.",
    color: "from-emerald-500 to-green-500",
  },
  {
    icon: Database,
    title: "ERP & CRM Systems",
    description:
      "Implement, customise, and integrate enterprise resource planning and customer management platforms to unify operations and improve decision-making.",
    color: "from-green-500 to-teal-500",
  },
  {
    icon: Lightbulb,
    title: "IT Consulting",
    description:
      "Strategic technology roadmaps, architecture guidance, and vendor-neutral advice to help you make the right digital investments at every stage.",
    color: "from-teal-600 to-cyan-600",
  },
  {
    icon: Plug,
    title: "API & System Integration",
    description:
      "Seamlessly connect third-party services, payment gateways, data platforms, and internal systems into a cohesive, automated digital ecosystem.",
    color: "from-cyan-500 to-teal-500",
  },
  {
    icon: Shield,
    title: "Managed Support & Security",
    description:
      "Proactive 24/7 monitoring, security patching, performance tuning, and dedicated technical support to keep your digital infrastructure running smoothly.",
    color: "from-emerald-600 to-green-600",
  },
];

const process = [
  {
    step: "01",
    title: "Assess",
    desc: "Evaluate your current systems, digital maturity, gaps, and transformation readiness.",
  },
  {
    step: "02",
    title: "Plan",
    desc: "Define a clear technology strategy, architecture blueprint, and implementation roadmap.",
  },
  {
    step: "03",
    title: "Implement",
    desc: "Deploy solutions methodically with minimal disruption to your business operations.",
  },
  {
    step: "04",
    title: "Monitor",
    desc: "Track system performance, security posture, and adoption metrics in real-time.",
  },
  {
    step: "05",
    title: "Scale",
    desc: "Continuously evolve your digital infrastructure to match your growing business needs.",
  },
];

const stats = [
  { value: "50+", label: "Digital Transformations" },
  { value: "10+", label: "Industries Served" },
  { value: "99.9%", label: "Uptime Guarantee" },
  { value: "24/7", label: "Managed Support" },
];

const technologies = [
  "AWS",
  "Microsoft Azure",
  "Google Cloud",
  "Docker",
  "Kubernetes",
  "Salesforce",
  "SAP",
  "MongoDB",
];

export default function EndToEndDigitalSolutionsPage() {
  return (
    <ServicePageLayout>
      {/* Hero + Stats */}
      <section className="pt-56 pb-20 bg-gradient-to-br from-teal-50 via-emerald-50 to-green-50 relative z-10">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-semibold mb-6">
            <Layers size={16} />
            End to End Digital Solutions
          </div>
          <h1
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-teal-600 via-emerald-600 to-green-600 bg-clip-text text-transparent leading-tight"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Your Complete Digital
            <br />
            Ecosystem, Handled
          </h1>
          <p
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-10"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            From digital strategy and cloud infrastructure to ERP systems and
            24/7 managed support — we handle every layer of your digital
            ecosystem so you can focus on growing your business.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-16">
            <a
              href="/#contact"
              className="px-8 py-4 bg-gradient-to-r from-teal-600 to-emerald-600 text-white rounded-full font-semibold hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2 cursor-pointer"
            >
              Talk to an Expert <ArrowRight size={20} />
            </a>
            <a
              href="/#services"
              className="px-8 py-4 bg-white text-teal-600 border-2 border-teal-500 rounded-full font-semibold hover:bg-teal-50 transition-all cursor-pointer"
            >
              View All Services
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-white rounded-2xl px-8 py-10 shadow-md border border-teal-100">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-4xl font-bold text-teal-600">{stat.value}</p>
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
              Our Digital Solutions
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              A complete suite of digital services to transform, connect, and
              future-proof your business.
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
              Our Engagement Model
            </h2>
            <p className="text-gray-600 text-lg">
              A systematic approach to digital transformation that minimises
              risk and maximises impact
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {process.map((step, i) => (
              <div key={i} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
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

      {/* Technologies */}
      <section className="py-16 bg-slate-50 relative z-10">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2
            className="text-3xl font-bold text-gray-800 mb-3"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Technologies & Platforms
          </h2>
          <p className="text-gray-600 mb-10">
            Enterprise-grade platforms and cloud providers we specialise in
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-5 py-2.5 bg-white border border-teal-200 text-teal-700 rounded-full font-semibold text-sm hover:bg-teal-50 hover:border-teal-400 transition-all"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-teal-600 via-emerald-600 to-green-600 relative z-10">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2
            className="text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Ready for a Full Digital Transformation?
          </h2>
          <p className="text-teal-100 text-xl mb-8 max-w-2xl mx-auto">
            Partner with us to build a resilient, scalable digital foundation
            that drives your business forward.
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full font-bold hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 text-lg cursor-pointer border-2 border-white/30"
          >
            Schedule a Consultation <ArrowRight size={22} />
          </a>
        </div>
      </section>
    </ServicePageLayout>
  );
}
