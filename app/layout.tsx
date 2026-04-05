import type { Metadata } from "next";
import type { ReactNode } from "react";
import "../src/styles/index.css";

export const metadata: Metadata = {
  title: "Website Development Company in Bangalore | Lotus Software Solutions",
  description:
    "Looking for a website development company in Bangalore? Lotus Software Solutions offers web development, mobile app development, digital marketing, and AI solutions to grow your business online.",
  alternates: {
    canonical: "https://lotussoftwaresolutions.net/",
  },
  openGraph: {
    title:
      "Website Development Company in Bangalore | Lotus Software Solutions",
    description:
      "Looking for a website development company in Bangalore? Lotus Software Solutions offers web development, mobile app development, digital marketing, and AI solutions to grow your business online.",
    type: "website",
    url: "https://lotussoftwaresolutions.net/",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Website Development Company in Bangalore | Lotus Software Solutions",
    description:
      "Looking for a website development company in Bangalore? Lotus Software Solutions offers web development, mobile app development, digital marketing, and AI solutions to grow your business online.",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
