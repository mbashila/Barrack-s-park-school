import type { Metadata } from "next";
import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Barrack's Park School | Learn, Grow & Succeed",
  description:
    "A safe place to learn, grow and succeed. Quality education for every stage of childhood.",
  keywords: "school, education, daycare, baby class, primary school",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Barrack's Park School" />
        <meta
          property="og:description"
          content="A safe place to learn, grow and succeed"
        />
      </head>
      <body className="bg-white">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
