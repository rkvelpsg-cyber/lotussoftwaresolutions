"use client";

import { useState } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { EmployeeLogin } from "./EmployeeLogin";
import { EmployeeDashboard } from "./EmployeeDashboard";
import { BackgroundVideo } from "./BackgroundVideo";

export function ServicePageLayout({ children }: { children: React.ReactNode }) {
  const [showEmployeeLogin, setShowEmployeeLogin] = useState(false);
  const [isEmployeeLoggedIn, setIsEmployeeLoggedIn] = useState(false);

  if (isEmployeeLoggedIn) {
    return <EmployeeDashboard onLogout={() => setIsEmployeeLoggedIn(false)} />;
  }

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <BackgroundVideo />
      <div className="relative z-10">
        <Header onEmployeeLoginClick={() => setShowEmployeeLogin(true)} />
        <main>{children}</main>
        <Footer />
      </div>
      {showEmployeeLogin && (
        <EmployeeLogin
          onLoginSuccess={() => {
            setShowEmployeeLogin(false);
            setIsEmployeeLoggedIn(true);
          }}
          onClose={() => setShowEmployeeLogin(false)}
        />
      )}
    </div>
  );
}
