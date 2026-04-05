import type { Metadata } from "next";
import { ServicePageLayout } from "@/app/components/ServicePageLayout";
import {
  Apple,
  Smartphone,
  Layers,
  Palette,
  TestTube,
  Wrench,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Mobile App Development (Android & iOS) | Lotus Software Solutions",
  description:
    "Native and cross-platform mobile app development for Android and iOS. We build Flutter, React Native, Swift, and Kotlin apps that delight users in Bangalore.",
  alternates: {
    canonical: "https://lotussoftwaresolutions.net/mobile-app-development",
  },
};

const services = [
  {
    icon: Apple,
    title: "iOS App Development",
    description:
      "Premium native iPhone and iPad apps built with Swift and SwiftUI — delivering Apple-grade performance, security, and a polished user experience.",
    color: "from-purple-500 to-violet-600",
  },
  {
    icon: Smartphone,
    title: "Android App Development",
    description:
      "Robust, high-performance Android applications built with Kotlin and Jetpack Compose for the full spectrum of Android devices and screen sizes.",
    color: "from-violet-500 to-purple-600",
  },
  {
    icon: Layers,
    title: "Cross-Platform Apps",
    description:
      "Build once, deploy everywhere — cost-effective Flutter and React Native apps that deliver near-native experiences on both Android and iOS.",
    color: "from-fuchsia-500 to-purple-500",
  },
  {
    icon: Palette,
    title: "App UI/UX Design",
    description:
      "User-centred interface designs crafted around real user behaviour, platform guidelines (HIG & Material Design), and conversion best practices.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: TestTube,
    title: "QA & Testing",
    description:
      "Comprehensive functional, performance, and security testing across physical devices, simulators, and OS versions before every release.",
    color: "from-violet-600 to-fuchsia-500",
  },
  {
    icon: Wrench,
    title: "App Maintenance & Support",
    description:
      "Post-launch monitoring, OS compatibility updates, feature additions, crash fixes, and App Store / Play Store management for peace of mind.",
    color: "from-purple-600 to-violet-500",
  },
];

const process = [
  {
    step: "01",
    title: "Ideate",
    desc: "Define your app concept, core features, target users, and platform strategy.",
  },
  {
    step: "02",
    title: "Design",
    desc: "Create detailed wireframes and interactive prototypes for early feedback.",
  },
  {
    step: "03",
    title: "Develop",
    desc: "Agile development sprints with regular demos to keep you in the loop.",
  },
  {
    step: "04",
    title: "Test",
    desc: "Rigorous functional, performance, and usability testing on real devices.",
  },
  {
    step: "05",
    title: "Deploy",
    desc: "App Store and Google Play submission, launch support, and version management.",
  },
];

const stats = [
  { value: "100+", label: "Apps Launched" },
  { value: "2", label: "Platforms: iOS & Android" },
  { value: "4.8★", label: "Average App Store Rating" },
  { value: "99.9%", label: "Crash-Free Session Rate" },
];

const platforms = [
  "Swift / SwiftUI",
  "Kotlin / Jetpack Compose",
  "Flutter",
  "React Native",
  "Firebase",
  "REST APIs",
];

export default function MobileAppDevelopmentPage() {
  return (
    <ServicePageLayout>
      {/* Hero + Stats */}
      <section className="pt-56 pb-20 bg-gradient-to-br from-purple-50 via-violet-50 to-fuchsia-50 relative z-10">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-6">
            <Smartphone size={16} />
            Mobile App Development
          </div>
          <h1
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent leading-tight"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Apps That Users Love
            <br />
            Across Android & iOS
          </h1>
          <p
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-10"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Native and cross-platform mobile applications designed for speed,
            reliability, and outstanding user experience — bringing your product
            idea to both major platforms.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-16">
            <a
              href="/#contact"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-violet-600 text-white rounded-full font-semibold hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2 cursor-pointer"
            >
              Discuss Your App Idea <ArrowRight size={20} />
            </a>
            <a
              href="/#services"
              className="px-8 py-4 bg-white text-purple-600 border-2 border-purple-500 rounded-full font-semibold hover:bg-purple-50 transition-all cursor-pointer"
            >
              View All Services
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-white rounded-2xl px-8 py-10 shadow-md border border-purple-100">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-4xl font-bold text-purple-600">
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
              Our Mobile App Services
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Full-cycle mobile development from concept and design through to
              launch and long-term support.
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
              How We Build Your App
            </h2>
            <p className="text-gray-600 text-lg">
              An agile, collaborative process that turns your idea into a
              polished product
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {process.map((step, i) => (
              <div key={i} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-violet-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
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

      {/* Platforms */}
      <section className="py-16 bg-slate-50 relative z-10">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2
            className="text-3xl font-bold text-gray-800 mb-3"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Technologies & Platforms
          </h2>
          <p className="text-gray-600 mb-10">
            Industry-leading tools and frameworks for reliable, high-performance
            mobile apps
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {platforms.map((tech) => (
              <span
                key={tech}
                className="px-5 py-2.5 bg-white border border-purple-200 text-purple-700 rounded-full font-semibold text-sm hover:bg-purple-50 hover:border-purple-400 transition-all"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-purple-600 via-violet-600 to-fuchsia-600 relative z-10">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2
            className="text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Have an App Idea? Let's Build It.
          </h2>
          <p className="text-purple-100 text-xl mb-8 max-w-2xl mx-auto">
            From MVP to full-featured product — we'll help you ship a mobile app
            your users will love.
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white rounded-full font-bold hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 text-lg cursor-pointer border-2 border-white/30"
          >
            Get a Free Estimate <ArrowRight size={22} />
          </a>
        </div>
      </section>
    </ServicePageLayout>
  );
}
