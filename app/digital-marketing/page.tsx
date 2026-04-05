import type { Metadata } from "next";
import { ServicePageLayout } from "@/app/components/ServicePageLayout";
import {
  Search,
  Share2,
  MousePointerClick,
  FileText,
  Mail,
  BarChart2,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Digital Marketing Services | Lotus Software Solutions",
  description:
    "Data-driven digital marketing services including SEO, social media marketing, PPC advertising, content marketing, email marketing, and analytics reporting in Bangalore.",
  alternates: {
    canonical: "https://lotussoftwaresolutions.net/digital-marketing",
  },
};

const services = [
  {
    icon: Search,
    hideIcon: true,
    title: "Search Engine Optimization (SEO)",
    description:
      "Rank higher on Google and drive sustained organic traffic with proven on-page, off-page, and technical SEO strategies tailored to your market.",
    image:
      "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&w=1200&q=80",
    color: "from-orange-500 to-yellow-500",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description:
      "Build a strong brand presence and engage your target audience across Facebook, Instagram, LinkedIn, and Twitter with targeted, data-backed campaigns.",
    image:
      "https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=1200&q=80",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: MousePointerClick,
    title: "Pay-Per-Click Advertising",
    description:
      "Maximize ROI with laser-focused Google Ads, Meta Ads, and programmatic advertising campaigns designed to convert clicks into customers.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    color: "from-red-500 to-orange-500",
  },
  {
    icon: FileText,
    title: "Content Marketing",
    description:
      "Attract, engage, and retain customers through compelling blogs, videos, infographics, case studies, and multimedia content that builds trust.",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80",
    color: "from-yellow-500 to-amber-500",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description:
      "Nurture leads and boost repeat sales with personalized email sequences, automated drip campaigns, and A/B-tested newsletters.",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: BarChart2,
    title: "Analytics & Reporting",
    description:
      "Track every metric that matters with comprehensive dashboards measuring traffic, conversions, cost-per-lead, and overall marketing ROI.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    color: "from-orange-600 to-red-500",
  },
];

const deliverables = [
  "30/60/90 day campaign roadmap",
  "Weekly performance updates",
  "Monthly KPI review call",
  "Lead quality and conversion tracking",
  "Competitor benchmarking report",
  "Continuous campaign optimization",
];

const process = [
  {
    step: "01",
    title: "Research",
    desc: "Deep dive into your brand, competitors, and target audience to uncover growth opportunities.",
  },
  {
    step: "02",
    title: "Strategy",
    desc: "Build a customized digital marketing roadmap fully aligned with your business goals.",
  },
  {
    step: "03",
    title: "Execute",
    desc: "Launch multi-channel campaigns with compelling creative assets and precise audience targeting.",
  },
  {
    step: "04",
    title: "Analyze",
    desc: "Monitor real-time performance data and identify exactly what's driving results.",
  },
  {
    step: "05",
    title: "Optimize",
    desc: "Continuously refine campaigns and strategies for consistently better outcomes.",
  },
];

const stats = [
  { value: "300%", label: "Average Traffic Growth" },
  { value: "5x", label: "Average Return on Ad Spend" },
  { value: "150+", label: "Campaigns Delivered" },
  { value: "98%", label: "Client Retention Rate" },
];

export default function DigitalMarketingPage() {
  return (
    <ServicePageLayout>
      {/* Hero + Stats */}
      <section className="pt-72 md:pt-80 pb-20 bg-orange-50 relative z-10">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-6">
            <TrendingUp size={16} />
            Digital Marketing Services
          </div>
          <h1
            className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 leading-tight"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Grow Your Brand Online
            <br />
            with Confidence
          </h1>
          <p
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-4"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Data-driven digital marketing strategies that attract the right
            audience, generate qualified leads, and deliver measurable,
            sustainable business results.
          </p>
          <p className="text-base text-gray-700 max-w-3xl mx-auto mb-10">
            We help service businesses, institutions, and local brands convert
            traffic into qualified leads with practical, ROI-focused digital
            marketing execution.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-16">
            <a
              href="/#contact"
              className="px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-600 text-white rounded-full font-semibold hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2 cursor-pointer"
            >
              Get Free Consultation <ArrowRight size={20} />
            </a>
            <a
              href="/#services"
              className="px-8 py-4 bg-white text-orange-600 border-2 border-orange-500 rounded-full font-semibold hover:bg-orange-50 transition-all cursor-pointer"
            >
              View All Services
            </a>
          </div>

          {/* Stats — inline within hero */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-white rounded-2xl px-8 py-10 shadow-md border border-orange-100">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-4xl font-bold text-orange-600">
                  {stat.value}
                </p>
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
              Our Digital Marketing Services
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Everything you need to dominate the digital landscape and
              outperform your competition.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="mb-5 rounded-xl overflow-hidden h-40 border border-gray-100">
                  <img
                    src={svc.image}
                    alt={svc.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {!svc.hideIcon && (
                  <div
                    className={`w-14 h-14 bg-gradient-to-br ${svc.color} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <svc.icon className="text-white" size={26} />
                  </div>
                )}
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {svc.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {svc.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-white border border-orange-100 rounded-2xl p-8 md:p-10">
            <h3 className="text-2xl font-bold text-gray-800 mb-5">
              What You Get With Every Engagement
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {deliverables.map((item) => (
                <div
                  key={item}
                  className="px-4 py-3 rounded-xl bg-orange-50 text-gray-700 border border-orange-100"
                >
                  {item}
                </div>
              ))}
            </div>
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
              Our Process
            </h2>
            <p className="text-gray-600 text-lg">
              A proven 5-step approach that delivers consistent, measurable
              results
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {process.map((step, i) => (
              <div key={i} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
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

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-orange-500 via-pink-600 to-rose-600 relative z-10">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2
            className="text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Ready to Grow Your Business?
          </h2>
          <p className="text-orange-100 text-xl mb-8 max-w-2xl mx-auto">
            Let's create a digital marketing strategy that drives real,
            measurable growth for your brand.
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-orange-400 to-pink-500 text-white rounded-full font-bold hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 text-lg cursor-pointer border-2 border-white/30"
          >
            Start Your Journey <ArrowRight size={22} />
          </a>
        </div>
      </section>
    </ServicePageLayout>
  );
}
