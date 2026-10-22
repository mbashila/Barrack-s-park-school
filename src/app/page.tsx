import HeroSection from "@/components/HeroSection";
import ProgramsSection from "@/components/ProgramsSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import AdmissionsCTA from "@/components/AdmissionsCTA";

export default function Home() {
  return (
    <main>
      <HeroSection
        title="A Safe Place to"
        titleRed="Learn, Grow & Succeed"
        subtitle="We provide a nurturing and supportive environment where every child is encouraged to reach their full potential — academically, socially and emotionally."
        backgroundImage="/images/hero-bg.jpg"
        ctaButtons={{
          primary: {
            text: "Explore Our Programs",
            href: "#programs",
          },
          secondary: {
            text: "Contact Us",
            href: "#contact",
          },
        }}
        handwrittenText="Small Steps
Big Dreams"
      />

      <ProgramsSection />

      <WhyChooseUsSection />

      <AdmissionsCTA />
    </main>
  );
}
