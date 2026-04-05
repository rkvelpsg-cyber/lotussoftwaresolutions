"use client";

import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { EmployeeLogin } from "./components/EmployeeLogin";
import { EmployeeDashboard } from "./components/EmployeeDashboard";
import { BackgroundVideo } from "./components/BackgroundVideo";

export default function App() {
  const [showEmployeeLogin, setShowEmployeeLogin] = useState(false);
  const [isEmployeeLoggedIn, setIsEmployeeLoggedIn] = useState(false);

  // Check if employee is already logged in from localStorage
  useEffect(() => {
    const loggedIn = localStorage.getItem("isEmployeeLoggedIn") === "true";
    setIsEmployeeLoggedIn(loggedIn);
  }, []);

  const handleEmployeeLoginSuccess = () => {
    setShowEmployeeLogin(false);
    setIsEmployeeLoggedIn(true);
  };

  const handleEmployeeLogout = () => {
    setIsEmployeeLoggedIn(false);
  };

  // Show Employee Dashboard if logged in
  if (isEmployeeLoggedIn) {
    return <EmployeeDashboard onLogout={handleEmployeeLogout} />;
  }

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <BackgroundVideo />
      <div className="relative z-10">
        <Header onEmployeeLoginClick={() => setShowEmployeeLogin(true)} />
        <main>
          <Hero />
          <About />
          <Services />
          <Contact />
        </main>
        <Footer />
      </div>

      {/* Employee Login Modal */}
      {showEmployeeLogin && (
        <EmployeeLogin
          onLoginSuccess={handleEmployeeLoginSuccess}
          onClose={() => setShowEmployeeLogin(false)}
        />
      )}
    </div>
  );
}
